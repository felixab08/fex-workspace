import { Component, inject, signal } from '@angular/core';
import { LinkParamService } from 'fex-pagination';
import { ProductosService } from './service';
import { ProductosDataService } from './mock/productos.service';
import { IProducto } from './interface';
import { rxResource } from '@angular/core/rxjs-interop';

import { TitleComponent } from 'fex-platform-core';
import { RouterOutlet } from '../../../../node_modules/@angular/router/types/_router_module-chunk';
@Component({
  imports: [TitleComponent, RouterOutlet],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('fex-testbed-app');
}
