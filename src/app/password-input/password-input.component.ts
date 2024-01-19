import { Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-password-input',
  standalone: true,
  templateUrl: './password-input.component.html',
  styleUrls: ['./password-input.component.css'],
  imports: [FormsModule],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => PasswordInputComponent),
      multi: true,
    },
  ],
})
export class PasswordInputComponent implements ControlValueAccessor {
  @Input() password: string = '';

  // Implementing ControlValueAccessor methods
  private onChange: any = () => {};
  private onTouch: any = () => {};

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }

  writeValue(value: string): void {
    this.password = value;
  }

  updatePassword(event: Event): void {
    this.password = (event.target as HTMLInputElement).value;
    this.onChange(this.password);
    this.onTouch();
  }
}