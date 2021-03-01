import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main.component';
import { HomeComponent } from './home/home.component';

const mainRoutes: Routes = [
    {
        path: '',
        component: MainComponent,
        children: [
            {
                path: 'home',
                component: HomeComponent,
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild ( mainRoutes)],
    exports: [RouterModule]
})
export class MainRoutingModule { }
