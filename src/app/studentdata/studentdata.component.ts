import { Component, OnInit, Type } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { ApiServiceService } from '../api-service.service';



@Component({
  selector: 'app-studentdata',
  templateUrl: './studentdata.component.html',
  styleUrls: ['./studentdata.component.css'],
  providers: [ApiServiceService]
})
export class StudentdataComponent implements OnInit {

  id: any;
  isSpecial: boolean = false;
  // studdetails:any;
  studentarray: any[] = []

  // student: any[] = [
  //   { id: 1, name: "Linus", class: "10", mark: 14, rank: 4 },
  //   { id: 2, name: "Amal", class: "11", mark: 54, rank: 6 },
  //   { id: 3, name: "Arun", class: "9", mark: 34, rank: 2 },
  //   { id: 4, name: "Binil", class: "8", mark: 44, rank: 1 }
  // ]

  constructor(private router: Router, private _Activatedroute: ActivatedRoute, private apiService: ApiServiceService) {
    this.studentarray = this.apiService.student;
  }

  ngOnInit(): void {
    this.id = this._Activatedroute.snapshot.paramMap.get("id");

    this.studentarray.forEach(element => {
      if (element.id == this.id && element.mark < 20) {
        this.isSpecial = true
      }


    })
    // this. studdetails = this.apiService.showStudDetails();

    console.log(this.id);




  }


  backfn() {
    this.router.navigateByUrl("")
  }
  findperc() {
    this.router.navigateByUrl("percentage")
  }

}