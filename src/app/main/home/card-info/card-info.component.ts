import { Component, OnInit } from '@angular/core';
import { MainService } from '../../main.service';

@Component({
  selector: 'app-card-info',
  templateUrl: './card-info.component.html',
  styleUrls: ['./card-info.component.scss']
})
export class CardInfoComponent implements OnInit {

  constructor(public mainService: MainService) { }

  ngOnInit(): void {
  }
  closeSidebar() {
    this.mainService.sidebarClosed();
  }

}
