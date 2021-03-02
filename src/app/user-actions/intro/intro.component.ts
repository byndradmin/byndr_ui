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
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss']
})
export class IntroComponent implements OnInit {

  formGroup: any | undefined = FormGroup;
  post: any;

  constructor(
    private _fb: FormBuilder,
    private _router: Router
  ) { }

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.formGroup = this._fb.group({
      name: [null, [Validators.required]],
    });
  }

  getErrorName() {
    return this.formGroup.get('name').hasError('required') ? 'First name is a mandatory field': '' ;
  }

  onSubmit(post: any) {
    this.post = post;
    console.log(this.formGroup)
    // if (this.formGroup.valid) {
    //   this._router.navigate(['./confirmation-link'])
    // }
  }

}
