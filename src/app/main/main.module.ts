import { NgModule } from '@angular/core';
import { MainRoutingModule } from './main.routing';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MainComponent } from './main.component';
import { MatButtonModule } from '@angular/material/button';
import { HomeComponent } from './home/home.component';
import { LeftSidebarComponent } from './left-sidebar/left-sidebar.component';
import { HeaderComponent } from './header/header.component';
import { MatSelectModule } from '@angular/material/select';
import { CommonModule } from '@angular/common';


@NgModule({
    declarations: [
        MainComponent,
        HomeComponent,
        LeftSidebarComponent,
        HeaderComponent
    ],
    imports: [
        MainRoutingModule,
        FlexLayoutModule,
        MatButtonModule,
        MatSelectModule,
        CommonModule
    ],
    providers: [
    ]
})
export class MainModule { }
