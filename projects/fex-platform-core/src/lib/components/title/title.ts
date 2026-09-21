import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'fex-title',
  imports: [],
  templateUrl: './title.html',
  changeDetection: ChangeDetectionStrategy.Eager,
})
export class TitleComponent {
  title = input.required<string>();
  subTitle = input<string>('');
}
