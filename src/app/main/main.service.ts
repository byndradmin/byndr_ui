import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class MainService {
    menuState: string = 'out';
    cardBox_lg: number = 33.3333;
    cardBox_md: number = 50;
    cardBox_sm: number = 100;
    cardBox_xs: number = 100;
    completeSection_lg: number = 30;
    completeSection_md: number = 40;
    completeSection_sm: number = 50;
    completeSection_xs: number = 100;
    homeLatest_lg: number = 70;
    homeLatest_md: number = 60;
    isOpened: boolean = false;
    isCardInfo: boolean = false;
    isNotificationInfo: boolean = false;
    isMessageInfo: boolean = false;
    isInviteInfo: boolean = false;

    constructor() { }
    sidebarClosed() {
        this.menuState = 'out';
        this.isOpened = false;
        this.cardBox_lg = 33.3333;
        this.cardBox_md = 50;
        this.cardBox_sm = 100;
        this.cardBox_xs = 100;
        this.completeSection_lg = 30;
        this.completeSection_md = 40;
        this.completeSection_sm = 50.1;
        this.completeSection_xs = 100;
        this.homeLatest_lg = 70;
        this.homeLatest_md = 60;
    }
    sidebarOpened() {
        this.menuState = 'in';
        this.isOpened = true;
        this.cardBox_lg = 33.3333;
        this.cardBox_md = 50;
        this.cardBox_sm = 100;
        this.cardBox_xs = 100;
        this.completeSection_lg = 100;
        this.completeSection_md = 100;
        this.completeSection_sm = 100;
        this.completeSection_xs = 100;
        this.homeLatest_lg = 70;
        this.homeLatest_md = 60;
    }

}