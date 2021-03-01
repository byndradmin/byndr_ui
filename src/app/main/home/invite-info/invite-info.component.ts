import { Component, OnInit } from '@angular/core';
import { MainService } from '../../main.service';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MatChipInputEvent } from '@angular/material/chips';

@Component({
  selector: 'app-invite-info',
  templateUrl: './invite-info.component.html',
  styleUrls: ['./invite-info.component.scss']
})
export class InviteInfoComponent implements OnInit {
  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];
  peopleList: Person[] = [
    { email: 'uic_1@byndr.com' },
    { email: 'mvenkatesh@byndr.com' },
  ];

  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    // Add our fruit
    if ((value || '').trim()) {
      this.peopleList.push({ email: value.trim() });
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }
  }

  remove(person: Person): void {
    const index = this.peopleList.indexOf(person);

    if (index >= 0) {
      this.peopleList.splice(index, 1);
    }
  }
  constructor(public mainService: MainService) { }

  ngOnInit(): void {
  }
  closeSidebar() {
    this.mainService.sidebarClosed();
  }

}

export interface Person {
  email: string;
}