import { Component, OnInit } from '@angular/core';
import { MainService } from '../main.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(public mainService: MainService) { }

  ngOnInit(): void {
  }
  showNotificationSidebar() {
    if (this.mainService.isCardInfo === true || this.mainService.isMessageInfo === true || this.mainService.isInviteInfo === true) {
      setTimeout(() => {
        this.mainService.sidebarOpened();
        this.mainService.isCardInfo = false;
        this.mainService.isMessageInfo = false;
        this.mainService.isInviteInfo = false;
        this.mainService.isNotificationInfo = true;
      });
    } else if (this.mainService.menuState === 'out') {
      this.mainService.sidebarOpened();
      this.mainService.isNotificationInfo = true;
    } else {
      this.mainService.sidebarClosed();
      this.mainService.isNotificationInfo = false;
    }
  }
  showMsgSidebar() {
    if (this.mainService.isCardInfo === true || this.mainService.isNotificationInfo === true || this.mainService.isInviteInfo === true) {
      setTimeout(() => {
        this.mainService.sidebarOpened();
        this.mainService.isCardInfo = false;
        this.mainService.isNotificationInfo = false;
        this.mainService.isInviteInfo = false;
        this.mainService.isMessageInfo = true;
      });
    } else if (this.mainService.menuState === 'out') {
      this.mainService.sidebarOpened();
      this.mainService.isMessageInfo = true;
    } else {
      this.mainService.sidebarClosed();
      this.mainService.isMessageInfo = false;
    }
  }
  showInviteSidebar() {
    if (this.mainService.isCardInfo === true || this.mainService.isNotificationInfo === true || this.mainService.isMessageInfo === true) {
      setTimeout(() => {
        this.mainService.sidebarOpened();
        this.mainService.isCardInfo = false;
        this.mainService.isNotificationInfo = false;
        this.mainService.isMessageInfo = false;
        this.mainService.isInviteInfo = true;
      });
    } else if (this.mainService.menuState === 'out') {
      this.mainService.sidebarOpened();
      this.mainService.isInviteInfo = true;
    } else {
      this.mainService.sidebarClosed();
      this.mainService.isInviteInfo = false;
    }
  }

}
