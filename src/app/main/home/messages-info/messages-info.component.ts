import { Component, OnInit } from '@angular/core';
import { MainService } from '../../main.service';

@Component({
  selector: 'app-messages-info',
  templateUrl: './messages-info.component.html',
  styleUrls: ['./messages-info.component.scss']
})
export class MessagesInfoComponent implements OnInit {

  constructor(public mainService: MainService) { }

  ngOnInit(): void {
  }
  closeSidebar() {
    this.mainService.sidebarClosed();
  } 

}
