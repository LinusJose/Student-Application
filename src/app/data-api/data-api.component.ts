import { Component, OnInit } from '@angular/core'
import { ApiServiceService } from '../api-service.service';
// import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-data-api',
  templateUrl: './data-api.component.html',
  styleUrls: ['./data-api.component.css']
})
export class DataApiComponent implements OnInit {

  dataSet: any[] = [];
  value: any;
  userDetail: any[] = [];

  constructor(private dataService: ApiServiceService) { }

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.dataService.getData()
      .subscribe((result: any) => {
        if (result) {
          this.dataSet = result.response['#result-set-2'];
          if (this.dataSet) {
            for (var key in this.dataSet) {
              this.userDetail.push(this.dataSet[key]);
              console.log(this.userDetail);
            }
            // console.log(this.dataSet);
            // console.log(result.response);
          }
        }
      },
        (result: any) => {
          alert(result.error.message)
        })
  }
}

