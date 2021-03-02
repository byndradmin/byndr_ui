import { Component, OnInit } from '@angular/core';
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
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  formGroup: any | undefined = FormGroup;
  titleAlert: string | undefined = "This field is required";
  showPassword = false;
  post: any;


  constructor(
    private _fb: FormBuilder,
    private _router: Router
  ) {
    
    
   }

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    let emailregex: RegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    let nameregex: RegExp = /^([A-Za-z0-9]{6,})*$/
    this.formGroup = this._fb.group({
      email: [null, [Validators.required, Validators.pattern(emailregex)] , this.checkInUseEmail],
      password: [null, [Validators.required, this.checkPassword],],
    });
  }

   checkPassword(control: { value: any; }) {
    let enteredPassword = control.value
    let passwordCheck = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/;
    return (!passwordCheck.test(enteredPassword) && enteredPassword) ? { 'requirements': true } : null;
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
        this.formGroup.get('email').hasError('pattern') ? 'Seems you haven’t signed up yet. Please sign up first.' : '';
  }
  getErrorPassword() {
    return this.formGroup.get('password').hasError('required') ? 'Field is required (at least eight characters, one uppercase letter and one number)' :
      this.formGroup.get('password').hasError('requirements') ? 'The password you’ve entered is incorrect. Please try again' : '';
  }
  
  onSubmit(post: any) {
    this.post = post;
    console.log(this.formGroup)
    // if (this.formGroup.valid) {
    //   this._router.navigate(['./confirmation-link'])
    // }
  }

}
