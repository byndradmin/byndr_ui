import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { MainService } from '../main.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    trigger('slideInOut', [
      state('in', style({
        transform: 'translate3d(0,0,0)'
      })),
      state('out', style({
        transform: 'translate3d(100%, 0, 0)'
      })),
      transition('in => out', animate('400ms ease-in-out')),
      transition('out => in', animate('400ms ease-in-out'))
    ]),
  ]
})
export class HomeComponent implements OnInit {
  sortList: sortBy[] = [
    { value: 'Newest First', viewValue: 'Newest First' },
    { value: 'Oldest First', viewValue: 'Oldest First' }
  ];

  constructor(public mainService: MainService) {
    // for new user cardBox_lg should be 33.3333, for old user 25
    this.mainService.cardBox_lg = 33.3333;
    this.mainService.cardBox_md = 50;
    this.mainService.cardBox_sm = 100;
    this.mainService.cardBox_xs = 100;
    this.mainService.completeSection_lg = 30;
    this.mainService.completeSection_md = 40;
    this.mainService.completeSection_sm = 50;
    this.mainService.completeSection_xs = 100;
    this.mainService.homeLatest_lg = 70;
    this.mainService.homeLatest_md = 60;
    this.mainService.isOpened = false;
  }

  ngOnInit(): void {
  }
  showSidebar() {
    if (this.mainService.isNotificationInfo === true ) {
      setTimeout(() => {
        this.mainService.sidebarOpened();
        this.mainService.isNotificationInfo = false;
        this.mainService.isMessageInfo = false;
        this.mainService.isInviteInfo = false;
        this.mainService.isCardInfo = true;
      }, 100);
    } else {
      this.mainService.sidebarOpened();
        this.mainService.isNotificationInfo = false;
        this.mainService.isMessageInfo = false;
        this.mainService.isInviteInfo = false;
        this.mainService.isCardInfo = true;
    }
  }

}

interface sortBy {
  value: string;
  viewValue: string;
}