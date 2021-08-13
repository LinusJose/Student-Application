import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { StudentdataComponent } from './studentdata/studentdata.component';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {
  constructor(private http: HttpClient) { }
  getData() {
    const parameter =
    {
      "xIdentifier": "52324e6a6458424462476c6c626e5251636d394965574a796157513d",
      "requestParameter": {
        "Clientid": 1290119560,
        "DpClientid": "",
        "dpid": ""
      }
    }

    return this.http.post(environment.url, parameter)
  }


  student: any[] = [
    { id: 1, name: "Linus", class: "10", mark: 14, rank: 4 },
    { id: 2, name: "Amal", class: "11", mark: 54, rank: 6 },
    { id: 3, name: "Arun", class: "9", mark: 34, rank: 2 },
    { id: 4, name: "Binil", class: "8", mark: 44, rank: 1 }
  ]


  // showStudDetails() {
  //   let student=[
  //     {id:1,name:"Linus",class:"10",mark:14,rank:4},
  //     {id:2,name:"Amal",class:"11",mark:24,rank:3},
  //     {id:3,name:"Arun",class:"9",mark:34,rank:2},
  //     {id:4,name:"Binil",class:"8",mark:44,rank:1}
  //   ];
  //   return student;


  // }





}
