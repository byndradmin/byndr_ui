import { ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SignupComponent implements OnInit {

  formGroup: any | undefined = FormGroup;
  titleAlert: string | undefined = "This field is required";
  showPassword = false;
  showConfirmPassword = false;
  post: any;

  // emailFormControl = new FormControl('', [
  //   Validators.required,
  //   Validators.email,
  // ]);

  //matcher = new MyErrorStateMatcher();

  constructor(
    private _fb: FormBuilder,
    private _router: Router
  ) { }

  ngOnInit(): void {
    this.createForm();
    // this.setChangeValidate();
    //this.checkConfirmPasswords(this.formGroup);
  }

  createForm() {
    let emailregex: RegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    let nameregex: RegExp = /^([A-Za-z0-9]{6,})*$/
    this.formGroup = this._fb.group({
      email: [null, [Validators.required, Validators.pattern(emailregex)], this.checkInUseEmail],
      name: [null, [Validators.required, Validators.pattern(nameregex)]],
      password: [null, [Validators.required, this.checkPassword]],
      confirmPassword: [null, [Validators.required]]
    }, {
      validators: this.checkConfirmPasswords.bind(this)
    });
  }


  checkPassword(control: { value: any; }) {
    let enteredPassword = control.value
    let passwordCheck = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/;
    return (!passwordCheck.test(enteredPassword) && enteredPassword) ? { 'requirements': true } : null;
  }

  checkConfirmPasswords(group: any) { // here we have the 'passwords' group
    const password = group.get('password').value;
    const confirmPassword = group.get('confirmPassword').value;
    if (password !== confirmPassword) {
      group.get('confirmPassword').setErrors({ notSame: true });
    }
  }


  checkInUseEmail(control: { value: string; }) {
    // mimic http database access
    let db = ['tony@gmail.com'];
    return new Observable(observer => {
      setTimeout(() => {
        let result = (db.indexOf(control.value) !== -1) ? { 'alreadyInUse': true } : null;
        observer.next(result);
        observer.complete();
      }, 4000)
    })
  }

  getErrorEmail() {
    return this.formGroup.get('email').hasError('required') ? 'Email Address is required' :
      this.formGroup.get('email').hasError('pattern') ? 'Seems like you’ve entered an invalid email. Please try again.' :
        this.formGroup.get('email').hasError('alreadyInUse') ? 'This emailaddress is already in use' : '';
  }
  getErrorName() {
    return this.formGroup.get('name').hasError('required') ? 'Incorrect username (e.g. jamesbond007)' :
      this.formGroup.get('name').hasError('pattern') ? 'Minimum 6 characters using letters and numbers. Avoid using spaces or special characters.' : '';
  }

  getErrorPassword() {
    return this.formGroup.get('password').hasError('required') ? 'Field is required (at least eight characters, one uppercase letter and one number)' :
      this.formGroup.get('password').hasError('requirements') ? 'Password must be a combination of lower case and upper case alphabets, must include at least one number and one special character, and must be at least eight characters long' : '';
  }
  getErrorConfirmPassword() {
    return this.formGroup.get('confirmPassword').hasError('required') ? 'Field is required (at least eight characters, one uppercase letter and one number)' :
      this.formGroup.get('confirmPassword').hasError('notSame') ? 'Looks like the passwords are not matching. Please try again.' : '';
  }

  onSubmit(post: any) {
    this.post = post;
    console.log(this.formGroup)
    if (this.formGroup.valid) {
      this._router.navigate(['./confirmation-link'])
    }
  }

}
