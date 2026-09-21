import { Component, inject, signal } from '@angular/core';
import { LinkParamService } from 'fex-pagination';
import { ProductosService } from './service';
import { ProductosDataService } from './mock/productos.service';
import { IProducto } from './interface';
import { rxResource } from '@angular/core/rxjs-interop';

import { TitleComponent } from 'fex-platform-core';
@Component({
  imports: [TitleComponent],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('fex-testbed-app');
  _productosService = inject(ProductosService);
  private _productosDataService = inject(ProductosDataService); // Inicializa los handlers mock
  productos = signal<IProducto[] | null>(null);
  public _paginationService = inject(LinkParamService);
  constructor() {}

  productoResorce = rxResource({
    params: () => ({
      page: this._paginationService.currentPage() - 1,
      size: this._paginationService.currentSize(),
    }),
    stream: ({ params }) => {
      return (
        this._productosService.getProductos({
          page: params.page,
          size: params.size,
        }) || {}
      );
    },
  });
}
