import { Component, signal } from '@angular/core';
import { FexPagination } from 'fex-pagination';
@Component({
  imports: [FexPagination],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('fex-testbed-app');
  collection: Array<string> = [];
  constructor() {
    for (let i = 1; i <= 20; i++) {
      this.collection.push(`item ${i}`);
    }
  }
  nextPage(event: string | number) {
    console.log('next==', event);
  }
  previewPage(event: string | number) {
    console.log('preview', event);
  }
}
