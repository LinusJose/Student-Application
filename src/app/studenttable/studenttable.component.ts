import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiServiceService } from '../api-service.service';
// import { StudentdataComponent } from '../studentdata/studentdata.component';

@Component({
  selector: 'app-studenttable',
  templateUrl: './studenttable.component.html',
  styleUrls: ['./studenttable.component.css']
})
export class StudenttableComponent implements OnInit {
  studentdetails: any[] = [];
  // student:any=[]

  constructor(private router: Router, private apiservice: ApiServiceService) {
    this.studentdetails = this.apiservice.student;

  }


  ngOnInit(): void {
    // this.studentdetails=[
    //   {id:1,name:"Linus",class:"10",mark:14,rank:4},
    //   {id:2,name:"Amal",class:"11",mark:24,rank:3},
    //   {id:3,name:"Arun",class:"9",mark:34,rank:2},
    //   {id:4,name:"Binil",class:"8",mark:44,rank:1}
    // ]

    // this. studentdetails = this.apiservice.showStudDetails();

  }
  studData() {
    this.router.navigateByUrl("studentdata")
  }

  createform(){
    this.router.navigateByUrl("form")
  }

}
