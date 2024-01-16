import { Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class PasswordStrengthService {
  getStrengthSections(password: string): string[] {
    const len = password.length;

    if (len === 0) {
      return ['gray', 'gray', 'gray'];
    } else if (len < 8) {
      return ['red', 'red', 'red'];
    } else if (password.match(/[a-zA-Z]/) && password.match(/[0-9]/) && password.match(/[!@#$%^&*(),.?":{}|<>]/)) {
      return ['green', 'green', 'green'];
    } else if (
      (password.match(/[a-zA-Z]/) && password.match(/[0-9]/)) ||
      (password.match(/[a-zA-Z]/) && password.match(/[!@#$%^&*(),.?":{}|<>]/)) ||
      (password.match(/[0-9]/) && password.match(/[!@#$%^&*(),.?":{}|<>]/))
    ) {
      return ['yellow', 'yellow', 'gray'];
    } else {
      return ['red', 'gray', 'gray'];
    }
  }
  // getStrengthSections(password: string): string[] {
  //   const len = password.length;

  //   if (len === 0) {
  //     return ['gray', 'gray', 'gray'];
  //   } else if (len < 8) {
  //     return ['red', 'red', 'red'];
  //   } else if (
  //     /[a-z]/.test(password) &&
  //     /[A-Z]/.test(password) &&
  //     /[0-9]/.test(password) &&
  //     /[!@#$%^&*(),.?":{}|<>]/.test(password)
  //   ) {
  //     return ['green', 'green', 'green'];
  //   } else if (
  //     (/[a-z]/.test(password) && /[0-9]/.test(password)) ||
  //     (/[a-z]/.test(password) && /[!@#$%^&*(),.?":{}|<>]/.test(password)) ||
  //     (/[0-9]/.test(password) && /[!@#$%^&*(),.?":{}|<>]/.test(password))
  //   ) {
  //     return ['yellow', 'yellow', 'gray'];
  //   } else {
  //     return ['red', 'gray', 'gray'];
  //   }
  // }
}
