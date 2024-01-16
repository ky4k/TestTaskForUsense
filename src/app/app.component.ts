import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
// import { PasswordInputComponent } from './password-input/password-input.component';
// import { PasswordStrengthIndicatorComponent } from './password-strength-indicator/password-strength-indicator.component';
import { FormsModule } from '@angular/forms';
import { PasswordStrengthComponent } from './password-strength/password-strength.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,PasswordStrengthComponent,FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'TestTaskForUsense';
}
