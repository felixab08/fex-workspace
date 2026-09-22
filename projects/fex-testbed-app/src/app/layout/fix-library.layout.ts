import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Aside } from 'fex-platform-core';

@Component({
  selector: 'fix-layout',
  imports: [RouterOutlet, Aside],
  templateUrl: './fix-library.layout.html',
})
export class FixLayoutComponent {}
