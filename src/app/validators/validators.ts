import { AbstractControl } from '@angular/forms';

export const matchPassword = (control: AbstractControl) => {
  if (control.parent?.get('password')?.value != control.value)
    return { matchPassword: true };
  return null;
};

export const strongPassword = (control: AbstractControl) => {
  const pass = control.value;
  const hasUpperCase = /[A-Z]+/.test(pass);
  const hasLowerCase = /[a-z]+/.test(pass);
  const hasNumber = /[0-9]+/.test(pass);
  return !(hasUpperCase && hasLowerCase && hasNumber) && control.touched
    ? { strongPassword: true }
    : null;
};

