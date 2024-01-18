  import { Component, Input } from '@angular/core';


  @Component({
    selector: 'app-password-strength-indicator',
    standalone: true,
    templateUrl: './password-strength-indicator.component.html',
    styleUrl: './password-strength-indicator.component.css'
  })
  export class PasswordStrengthIndicatorComponent{
    @Input() strengthSections: string[] = [];
  }
