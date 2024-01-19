import { Component, OnInit } from '@angular/core';
import { PasswordStrengthService } from '../password-strength.service';
import { FormBuilder, FormControl, FormGroup,FormsModule,ReactiveFormsModule } from '@angular/forms';
import { PasswordInputComponent } from '../password-input/password-input.component';


@Component({
  selector: 'app-password-strength',
  standalone: true,
  imports:[ReactiveFormsModule,PasswordInputComponent],
  templateUrl: './password-strength.component.html',
  styleUrls: ['./password-strength.component.css']
})

export class PasswordStrengthComponent{
  form: FormGroup;
  strengthSections: string[] = ['', '', ''];

  constructor(private passwordStrengthService: PasswordStrengthService, private fb: FormBuilder) {
    this.form = this.fb.group({
      password: ['']
    });
  }

  updateStrength(): void {
    var password = this.form.get('password')?.value;
    this.strengthSections = this.passwordStrengthService.getPasswordStrength(password);
  }
}