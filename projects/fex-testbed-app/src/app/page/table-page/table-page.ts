import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';
import { LinkParamService } from '../../../../../../dist/fex-pagination/types/fex-pagination';
import { IProducto } from '../../interface';
import { ProductosDataService } from '../../mock/productos.service';
import { ProductosService } from '../../service';

@Component({
  selector: 'app-table-page',
  imports: [],
  templateUrl: './table-page.html',
  changeDetection: ChangeDetectionStrategy.Eager,
})
export class TablePage {
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
