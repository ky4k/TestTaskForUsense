import { Component, OnInit } from '@angular/core';
import { PasswordStrengthService } from '../password-strength.service';
import { FormBuilder, FormControl, FormGroup,FormsModule,ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-password-strength',
  standalone: true,
  imports:[FormsModule,ReactiveFormsModule],
  templateUrl: './password-strength.component.html',
  styleUrls: ['./password-strength.component.css']
})

export class PasswordStrengthComponent{
  form: FormGroup;
  strengthSections: string[] = ['', '', ''];

  constructor(private passwordStrengthService: PasswordStrengthService) {
    this.form=new FormGroup({
      "password": new FormControl("")
    });
  }

  updateStrength(): void {
    var password = this.form.get('password')?.value;
    this.strengthSections = this.passwordStrengthService.getPasswordStrength(password);
  }
}