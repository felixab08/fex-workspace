import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Aside } from 'fex-platform-core';

@Component({
  selector: 'fix-layout',
  imports: [RouterOutlet, Aside],
  templateUrl: './fix-library.layout.html',
})
export class FixLayoutComponent {
  menus = [
    { id: '1001', name: 'input', route: '/input', icons: 'ph-smiley' },
    { id: '1002', name: 'Table', route: '/table', icons: 'ph-cube-thin' },
    { id: '1003', name: 'Titulo', route: '/title', icons: 'ph-cube-thin' },
  ];
}
