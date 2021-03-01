import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
 sortList: sortBy[] = [
    {value: 'Newest First', viewValue: 'Newest First'},
    {value: 'Oldest First', viewValue: 'Oldest First'}
  ];
  constructor() { }

  ngOnInit(): void {
  }

}

interface sortBy {
  value: string;
  viewValue: string;
}