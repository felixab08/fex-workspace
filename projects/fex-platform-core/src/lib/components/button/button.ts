import { NgClass } from '@angular/common';
import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';

@Component({
  selector: 'fix-button',
  imports: [NgClass],
  templateUrl: './button.html',
  changeDetection: ChangeDetectionStrategy.Eager,
})
export class Button {
  icon = input<string | null>(null);
  label = input<string | null | undefined>(null);
  ariaLabel = input<string | null | undefined>(null);
  tooltip = input<string | null>(null);
  reverse = input<boolean>(false);
  type = input<string>('');
  disabled = input<boolean>(false);
  alignRight = input<boolean>(false);
  adaptable = input<boolean>(false);

  onClick = output<any>();
  onFocus = output<any>();
  onBlur = output<any>();
}
