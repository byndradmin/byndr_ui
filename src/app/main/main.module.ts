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
import { MatSidenavModule } from '@angular/material/sidenav';
import { CardInfoComponent } from './home/card-info/card-info.component';
import { MainService } from './main.service';
import { NotificationInfoComponent } from './home/notification-info/notification-info.component';
import { MessagesInfoComponent } from './home/messages-info/messages-info.component';
import { InviteInfoComponent } from './home/invite-info/invite-info.component';
import { MatChipsModule } from '@angular/material/chips';

@NgModule({
    declarations: [
        MainComponent,
        HomeComponent,
        LeftSidebarComponent,
        HeaderComponent,
        CardInfoComponent,
        NotificationInfoComponent,
        MessagesInfoComponent,
        InviteInfoComponent
    ],
    imports: [
        MainRoutingModule,
        FlexLayoutModule,
        MatButtonModule,
        MatSelectModule,
        CommonModule, MatSidenavModule, MatChipsModule
    ],
    providers: [
        MainService
    ]
})
export class MainModule { }
