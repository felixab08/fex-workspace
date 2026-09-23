import { NgClass, NgSwitch } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  Injector,
  input,
  linkedSignal,
  output,
} from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormControlName,
  FormGroupDirective,
  FormsModule,
  NG_VALUE_ACCESSOR,
  NgControl,
  ReactiveFormsModule,
} from '@angular/forms';
import { PATTENS } from '../../constants/validators.constants';
import { Button } from '../button/button';

@Component({
  selector: 'fix-input',
  imports: [ReactiveFormsModule, NgClass, FormsModule, Button, NgSwitch],
  templateUrl: './input.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  providers: [
    // Se mantiene NG_VALUE_ACCESSOR para el registro básico
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: Input,
      multi: true,
    },
  ],
})
export class Input {
  label = input<string>('');
  labelValue = linkedSignal<string>(() => this.label() ?? '');

  type = input<string>('text');
  autocomplete = input<string>('nope');
  placeholder = input<string>(' ');
  required = input<boolean>(false);
  requiredValue = linkedSignal<boolean>(() => this.required() ?? '');

  invalid = input<boolean>(false);
  tooltip = input<string | null>(null);
  step = input<string>('');
  accept = input<string>('');
  isFile = input<boolean>(false);

  onFieldBlur = output<any>();
  onFieldFocus = output<any>();

  onChange: any = () => {};
  onTouch: any = () => {};

  id: string = 'id';
  name: string = '';
  value: any = '';
  disabled = false;
  errors: any;
  public ngControl: NgControl | null = null;

  foundPattens!: { key: string; value: RegExp }[];

  constructor(private inj: Injector) {}

  ngOnInit(): void {
    this.ngControl = this.inj.get(NgControl);
    if (this.ngControl) this.requiredValue.set(this.hasRequiredValidator());
    this.idGenerator();
    if (this.autocomplete() != 'nope') {
      this.name = this.autocomplete();
    }
    if (this.label() == '') {
      this.labelValue.set(this.placeholder());
    }
    this.value = typeof this.value === 'object' ? this.value[0] : this.value;

    this.foundPattens = Object.entries(PATTENS).map(([key, value]) => ({ key, value }));
  }

  idGenerator(): void {
    this.id += Math.random().toString().slice(2);
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }
  writeValue(value: any): void {
    if (this.type() === 'number' && this.step() === '0.01') {
      value = parseFloat(value).toFixed(2);
    }
    this.value = value !== null && typeof value === 'object' ? value[0] : value;
  }
  onModelChange(e: any): void {
    this.value = e;
    this.onChange(e);
  }
  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  onBlur(event: any) {
    this.onFieldBlur.emit(event);
  }

  onFocus(event: any) {
    if (this.ngControl) {
      this.ngControl.control?.markAsDirty();
      this.onFieldFocus.emit(event);
    }
  }

  showError() {
    if (this.ngControl) {
      if ((!this.ngControl.touched || !this.ngControl.pristine) && this.ngControl.errors) {
        let firstKey = Object.keys(this.ngControl.errors)[0];
        let firstValue = this.ngControl.errors[Object.keys(this.ngControl.errors)[0]];
        this.errors = { [firstKey]: firstValue };
      }
      return this.ngControl.invalid && this.ngControl.dirty;
    }
    return false;
  }

  hasRequiredValidator(): boolean {
    if (this.ngControl instanceof FormControlName) {
      const formControl: FormControl = this.inj.get(FormGroupDirective).getControl(this.ngControl);
      if (formControl.validator) {
        const validator = formControl.validator({} as AbstractControl);
        return this.required() || (validator && validator['required']);
      }
    }
    return this.required();
  }
}
