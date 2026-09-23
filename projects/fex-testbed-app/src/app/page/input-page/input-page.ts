import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Input } from 'fex-platform-core';
@Component({
  selector: 'app-input-page',
  imports: [Input],
  templateUrl: './input-page.html',
  changeDetection: ChangeDetectionStrategy.Eager,
})
export class InputPage {}
