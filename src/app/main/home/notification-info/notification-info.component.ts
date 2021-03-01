import { Component, OnInit } from '@angular/core';
import { MainService } from '../../main.service';

@Component({
  selector: 'app-notification-info',
  templateUrl: './notification-info.component.html',
  styleUrls: ['./notification-info.component.scss']
})
export class NotificationInfoComponent implements OnInit {

  constructor(public mainService: MainService) { }

  ngOnInit(): void {
  }
  closeSidebar() {
    this.mainService.sidebarClosed();
  } 
  

}
