import { Component, OnInit, Input} from '@angular/core';
import { FormControl, FormBuilder, ControlValueAccessor} from '@angular/forms';

@Component({
  selector: 'app-password-input',
  standalone: true,
  templateUrl: './password-input.component.html',
  styleUrl: './password-input.component.css'
  // imports: [FormsModule, ReactiveFormsModule],
})
export class PasswordInputComponent implements OnInit,ControlValueAccessor {

  @Input() password:FormControl = new FormControl('');
  onChange = () => {};
  onTouched = () => {};

  constructor(private fb: FormBuilder){}

  ngOnInit(){
    this.password=this.fb.control('');
  }

  writeValue(value: any): void {
    this.password.setValue(value);
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  get value(): string {
    return this.password.value;
  }

  set value(value: string) {
    this.password.setValue(value);
  }
}
