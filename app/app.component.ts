import { Component, VERSION } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  profileForm = new FormGroup({
    firstName: new FormControl('', [
      Validators.required,
      Validators.pattern(/^[A-Za-z]+$/),
    ]),
    lastName: new FormControl('', [
      Validators.required,
      Validators.pattern(/^[A-Za-z]+$/),
    ]),
    email: new FormControl('', [Validators.required, Validators.email]),
    qualification: new FormArray([]),
  });

  onFormSubmit() {
    const isFormValid = this.validateForm();
    if (isFormValid > 0) {
      return;
    }
    console.log('OnSubmit', this.profileForm.get('email'));
  }

  validateForm() {
    let formCount = 0;
    if (
      this.profileForm.get('firstName').status !== 'VALID' ||
      this.profileForm.get('lastName').status !== 'VALID' ||
      this.profileForm.get('email').status !== 'VALID'
    ) {
      formCount++;
    }
    return formCount;
  }

  onTextInputChange(event) {
    console.log(event.target.value);
    if (event.target.value) {
    }
  }

  onClick() {
    let array = this.profileForm.get('qualification') as FormArray

  }
}
