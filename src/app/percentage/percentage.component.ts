import { Component, OnInit } from '@angular/core';
// import { Router } from '@angular/router';

@Component({
  selector: 'app-percentage',
  templateUrl: './percentage.component.html',
  styleUrls: ['./percentage.component.css']
})
export class PercentageComponent implements OnInit {
  marks: any;
  total: any;
  perc: any;
  // perc:any;
  constructor() { }

  ngOnInit(): void {
  }

  percfn() {
    this.perc = (this.marks / this.total) * 100
  }
}
