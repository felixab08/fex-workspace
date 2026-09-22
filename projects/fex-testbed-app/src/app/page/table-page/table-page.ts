import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';
import { IProducto } from '../../interface';
import { ProductosDataService } from '../../mock/productos.service';
import { ProductosService } from '../../service';
import { TitleComponent } from 'fex-platform-core';

@Component({
  selector: 'app-table-page',
  imports: [TitleComponent],
  templateUrl: './table-page.html',
  changeDetection: ChangeDetectionStrategy.Eager,
})
export class TablePage {
  _productosService = inject(ProductosService);
  private _productosDataService = inject(ProductosDataService); // Inicializa los handlers mock
  productos = signal<IProducto[] | null>(null);
}
