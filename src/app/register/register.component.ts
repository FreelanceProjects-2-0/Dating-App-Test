import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  currentDate: Date;
  date: string;
  month: string;
  year: string;
  yearMax: number;
  yearMin: number;

  constructor() {
    this.currentDate = new Date();
    this.date = String(this.currentDate.getDate()).padStart(2, '0');
    this.month = String(this.currentDate.getMonth() + 1).padStart(2, '0'); // January is 0!
    this.year = String(this.currentDate.getFullYear());
    this.yearMax = Number(this.year) - 18;
    this.yearMin = Number(this.year) - 123;
  }

  ngOnInit(): void {
  }

}
