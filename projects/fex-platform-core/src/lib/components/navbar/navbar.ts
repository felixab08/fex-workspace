import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'fix-navbar',
  imports: [],
  templateUrl: './navbar.html',
  changeDetection: ChangeDetectionStrategy.Eager,
})
export class Navbar {}
