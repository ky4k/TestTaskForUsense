import { Component, NgModule } from '@angular/core';
import { PasswordStrengthService } from '../password-strength.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-password-strength',
  standalone: true,
  templateUrl: './password-strength.component.html',
  imports: [FormsModule],
  styleUrls: ['./password-strength.component.css']
})

export class PasswordStrengthComponent {
  password: string = '';
  strengthSections: string[] = ['', '', ''];

  constructor(private passwordStrengthService: PasswordStrengthService) {}

  updateStrength(): void {
    this.strengthSections = this.passwordStrengthService.getPasswordStrength(this.password);
  }
}
