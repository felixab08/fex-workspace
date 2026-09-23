import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'app-title-page',
  imports: [],
  templateUrl: './title-page.html',
  changeDetection: ChangeDetectionStrategy.Eager,
})
export class TitlePage {
  readonly title = input<string>('');
  readonly subTitle = input<string>('');
}
