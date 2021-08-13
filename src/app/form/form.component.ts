import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  // name1="";
  // name2="";
  // male="";
  // female=""
  name="";
  age="";
  email="";
 gender="";
 feature="the course "
//  bca="";
 
 
  constructor(private router:Router) { 
    
  }
 
  ngOnInit(): void {
  }

  // name1Change(event:any){
  //   this.name1=event.target.value;
  //   console.log(this.name1);
    
  // }
  // name2Change(event:any){
  //   this.name2=event.target.value;
  //   console.log(this.name2);
    
  // }
  // genderChange(event:any){
  //   this.male=event.target.value;
  //   console.log(this.male)
  // }
  register(){
   
 
    alert("successfully registered")
     this.router.navigateByUrl("studenttable")
  }
 
}

// }
