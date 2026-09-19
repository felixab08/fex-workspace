import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { delay } from 'rxjs/operators';
import { IParams } from '../interface';

export interface MockRequestConfig {
  request: {
    url: string;
    method: string;
    params: {
      get: (key: string) => string | null;
    };
  };
}

export type MockHandler = (config: MockRequestConfig) => [number, any];

@Injectable({
  providedIn: 'root',
})
export class MockApiService {
  private _handlers: {
    [url: string]: { [method: string]: MockHandler };
  } = {};

  constructor() {}

  // Registra una ruta GET simulada
  onGet(url: string): { reply: (callback: MockHandler) => void } {
    return this._onMethod('GET', url);
  }

  // Registra una ruta POST simulada
  onPost(url: string): { reply: (callback: MockHandler) => void } {
    return this._onMethod('POST', url);
  }

  // Registra una ruta PUT simulada
  onPut(url: string): { reply: (callback: MockHandler) => void } {
    return this._onMethod('PUT', url);
  }

  // Registra una ruta DELETE simulada
  onDelete(url: string): { reply: (callback: MockHandler) => void } {
    return this._onMethod('DELETE', url);
  }

  private _onMethod(method: string, url: string): { reply: (callback: MockHandler) => void } {
    if (!this._handlers[url]) {
      this._handlers[url] = {};
    }

    return {
      reply: (callback: MockHandler) => {
        this._handlers[url][method] = callback;
      },
    };
  }

  // Simula la ejecución de la petición GET desde otro servicio
  handleRequest(method: string, url: string, params?: IParams | Record<string, any>): Observable<any> {
    const handler = this._handlers[url]?.[method];
    if (handler) {
      const requestParams = {
        get: (key: string): string | null => {
          if (!params) {
            return null;
          }
          if (typeof (params as any).get === 'function') {
            const val = (params as any).get(key);
            return val !== undefined && val !== null ? String(val) : null;
          }
          const val = (params as Record<string, any>)[key];
          return val !== undefined && val !== null ? String(val) : null;
        },
      };

      const config: MockRequestConfig = {
        request: {
          url,
          method,
          params: requestParams,
        },
      };

      const [status, body] = handler(config);
      if (status >= 200 && status < 300) {
        // Simulamos un retraso de red de 300ms opcional y devolvemos la respuesta
        return of(body).pipe(delay(300));
      } else {
        return throwError(() => ({ status, error: body }));
      }
    }

    return throwError(() => ({ status: 404, error: 'Not Found' }));
  }
}

