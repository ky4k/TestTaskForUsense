import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-password-strength',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './password-strength.component.html',
  styleUrls: ['./password-strength.component.css']
})

export class PasswordStrengthComponent {
  password: string = '';
  strengthSections: string[] = ['', '', ''];

  updateStrength(): void {
    const len = this.password.length;

    if (len === 0) {
      this.strengthSections = ['gray', 'gray', 'gray'];
    } else if (len < 8) {
      this.strengthSections = ['red', 'red', 'red'];
    } else if (this.password.match(/[a-zA-Z]/) && this.password.match(/[0-9]/) && this.password.match(/[!@#$%^&*(),.?":{}|<>]/)) {
      this.strengthSections = ['green', 'green', 'green'];
    } else if (
      (this.password.match(/[a-zA-Z]/) && this.password.match(/[0-9]/)) ||
      (this.password.match(/[a-zA-Z]/) && this.password.match(/[!@#$%^&*(),.?":{}|<>]/)) ||
      (this.password.match(/[0-9]/) && this.password.match(/[!@#$%^&*(),.?":{}|<>]/))
    ) {
      this.strengthSections = ['yellow', 'yellow', 'gray'];
    } else {
      this.strengthSections = ['red', 'gray', 'gray'];
    }
  }
}
