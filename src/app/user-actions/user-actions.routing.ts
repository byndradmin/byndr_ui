import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserActionsComponent } from './user-actions.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { ConfirmationLinkComponent } from './confirmation-link/confirmation-link.component';
import { PasswordConfirmationLinkComponent } from './password-confirmation-link/password-confirmation-link.component';
import { TermsOfServiceComponent } from './terms-of-service/terms-of-service.component';
import { IntroComponent } from './intro/intro.component';
import { AreasOfInterestComponent } from './areas-of-interest/areas-of-interest.component';

const useractionsRoutes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'signup' },
    {
        path: '',
        component: UserActionsComponent,
        children: [
            {
                path: 'signup',
                component: SignupComponent,
            },
            {
                path: 'login',
                component: LoginComponent
            },
            {
                path: 'forgot-password',
                component: ForgotPasswordComponent
            },
            {
                path: 'reset/:resetlink',
                component: ResetPasswordComponent
            },
            {
                path: 'confirmation-link',
                component: ConfirmationLinkComponent
            },
            {
                path: 'password-confirmation-link',
                component: PasswordConfirmationLinkComponent
            },
            {
                path: 'terms-of-service',
                component: TermsOfServiceComponent
            },
            {
                path: 'intro',
                component: IntroComponent
            },
            {
                path: 'areas-of-interest',
                component: AreasOfInterestComponent
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild ( useractionsRoutes)],
    exports: [RouterModule]
})
export class UserActionsRoutingModule { }
