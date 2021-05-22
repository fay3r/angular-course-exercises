import {AbstractControl, ValidationErrors} from "@angular/forms";

export class PasswordValidator {
  static samePassword(control: AbstractControl): Promise<ValidationErrors | null> {
    return new Promise((resolve, reject) => {
      if (control.value !== 'password') {
        resolve({notTheSame: true});
      } else {
        resolve(null);
      }
    });
  }

  static passwordsMatch(control: AbstractControl) {
    let newPassword = control.get('newPassword');
    let confirmPassword = control.get('confirmPassword');

    if (newPassword?.value !== confirmPassword?.value) {
      return {shouldMatch: true};
    }
    return null;

  }


}
