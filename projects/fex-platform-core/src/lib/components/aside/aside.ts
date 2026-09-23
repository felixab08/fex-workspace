import { CommonModule } from '@angular/common';
import { Component, input, output } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'fix-aside',
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './aside.html',
})
export class Aside {
  isAuthenticated = input(false);
  menus = input([{ id: '11312', name: 'Table', route: '/table', icons: 'ph-smiley' }]);

  onSignOut = output();
  onSignIn = output();
}
