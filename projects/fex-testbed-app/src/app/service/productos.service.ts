import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { of, tap, map } from 'rxjs';
import { IParams, IProductRespo } from '../interface';
import { MockApiService } from './mockapi.service';

@Injectable({
  providedIn: 'root',
})
export class ProductosService {
  private _mockApiService = inject(MockApiService);

  getProductos(params: IParams): Observable<IProductRespo> {
    return this._mockApiService
      .handleRequest('GET', 'api/apps/ecommerce/productos', params)
      .pipe(tap(console.log));
  }
}

