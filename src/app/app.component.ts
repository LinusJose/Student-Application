import { Component } from '@angular/core';

import { ApiServiceService } from './api-service.service'; //imporrt service to component

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ApiServiceService]              //provide in application
})
export class AppComponent {
  title = 'studentApp';
  studdetails: any;
  constructor(private apiService: ApiServiceService) { }

  ngOnInit() {
    // this. studdetails = this.apiService.showStudDetails();
  }
}
