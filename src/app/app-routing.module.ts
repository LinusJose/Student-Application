import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataApiComponent } from './data-api/data-api.component';
import { FormComponent } from './form/form.component';
// import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { PercentageComponent } from './percentage/percentage.component';
import { StudentdataComponent } from './studentdata/studentdata.component';

import { StudenttableComponent } from './studenttable/studenttable.component';

const routes: Routes = [
  {path:'',component:LoginComponent},
  // { path: 'login', component: LoginComponent },
  { path: 'studenttable', component: StudenttableComponent },
  { path: 'studentdata/:id', component: StudentdataComponent },
  { path: 'percentage', component: PercentageComponent },
  { path: 'data-api', component: DataApiComponent },
  {path:'form',component:FormComponent}




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
