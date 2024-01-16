import { Component, OnInit, CUSTOM_ELEMENTS_SCHEMA,ChangeDetectorRef } from '@angular/core';
import { PasswordStrengthService } from '../password-strength.service';
import { PasswordInputComponent } from '../password-input/password-input.component';
import { FormControl } from '@angular/forms';


@Component({
  selector: 'app-password-strength-indicator',
  standalone: true,
  imports: [PasswordInputComponent],
  providers: [PasswordStrengthService],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './password-strength-indicator.component.html',
  styleUrl: './password-strength-indicator.component.css'
})
export class PasswordStrengthIndicatorComponent implements OnInit{
  // password: string=''; // Receive the password from the parent component
  password_indicator:FormControl = new FormControl('');
  strengthSections: string[] = ['','', ''];
  // constructor(private passwordStrengthService: PasswordStrengthService) {}

  // ngOnInit() {
  //   // this.strengthSections = this.passwordStrengthService.getStrengthSections(this.password);
  //   this.password_indicator.valueChanges.subscribe(() => {
  //     this.strengthSections = this.passwordStrengthService.getStrengthSections(this.password_indicator.value);
  //   });
  // }
  constructor(
    private passwordStrengthService: PasswordStrengthService,
    private cdr: ChangeDetectorRef
  ) {}
  ngOnInit() {
    console.log('ngOnInit called');
    this.updateStrength();
  }
  updateStrength(): void {
    this.strengthSections = this.passwordStrengthService.getStrengthSections(this.password_indicator.value);
    // Trigger change detection to update the view
    this.cdr.detectChanges();
  }
}
