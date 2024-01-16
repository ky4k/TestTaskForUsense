import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from "@angular/forms";

@Component({
  selector: 'app-password-input',
  standalone: true,
  templateUrl: './password-input.component.html',
  imports: [FormsModule],
  styleUrl: './password-input.component.css'
})
export class PasswordInputComponent{
  @Output() passwordChange = new EventEmitter<string>();
  password: string = '';

  updatePassword(): void {
    this.passwordChange.emit(this.password);
  }
}
