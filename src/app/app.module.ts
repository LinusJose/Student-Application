import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { StudenttableComponent } from './studenttable/studenttable.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StudentdataComponent } from './studentdata/studentdata.component';
import { PercentageComponent } from './percentage/percentage.component';
import { ApiServiceService } from './api-service.service';
import { DataApiComponent } from './data-api/data-api.component';
import { HttpClientModule } from '@angular/common/http';
import { FormComponent } from './form/form.component';
import { BookdetailsComponent } from './bookdetails/bookdetails.component';


@NgModule({
  declarations: [
    AppComponent,

    StudenttableComponent,
    LoginComponent,
    StudentdataComponent,
    PercentageComponent,
    DataApiComponent,
    FormComponent,
    BookdetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,

  ],
  providers: [ApiServiceService], //Service pro
  bootstrap: [AppComponent]
})
export class AppModule { }
