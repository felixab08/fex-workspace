import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { IParams, IProducto } from '../interface';
import { MockApiService } from './mockapi.service';

@Injectable({
  providedIn: 'root',
})
export class ProductosService {
  private _mockApiService = inject(MockApiService);

  getProductos(params: IParams): Observable<IProducto[]> {
    return this._mockApiService
      .handleRequest('GET', 'api/apps/ecommerce/productos', params)
      .pipe(map((res: any) => res.products ?? res));
  }
}

