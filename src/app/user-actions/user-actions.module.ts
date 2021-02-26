import { NgModule } from '@angular/core';
import { UserActionsRoutingModule } from './user-actions.routing';
import { UserActionsComponent } from './user-actions.component';
import { SignupComponent, MyErrorStateMatcher } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '../material.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { NgxIntlTelInputModule } from 'ngx-intl-tel-input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatListModule } from '@angular/material/list';
import { ConfirmationLinkComponent } from './confirmation-link/confirmation-link.component';
import { PasswordConfirmationLinkComponent } from './password-confirmation-link/password-confirmation-link.component';
import { TermsOfServiceComponent } from './terms-of-service/terms-of-service.component';
import { IntroComponent } from './intro/intro.component';
import { AreasOfInterestComponent } from './areas-of-interest/areas-of-interest.component';

@NgModule({
  declarations: [
    UserActionsComponent,
    SignupComponent,
    LoginComponent,
    ForgotPasswordComponent,
    ResetPasswordComponent,
    ConfirmationLinkComponent,
    PasswordConfirmationLinkComponent,
    TermsOfServiceComponent,
    IntroComponent,
    AreasOfInterestComponent
  ],
  imports: [
    UserActionsRoutingModule,
    FlexLayoutModule,
    MaterialModule,
    NgxIntlTelInputModule,
    CommonModule,
    FormsModule, ReactiveFormsModule,
    MatInputModule, MatFormFieldModule, MatCheckboxModule, MatButtonModule, MatSlideToggleModule,
    MatListModule
  ],
  providers: [
    // {provide: MyErrorStateMatcher, useClass: ShowOnDirtyErrorStateMatcher}
  ]
})
export class UserActionsModule { }
