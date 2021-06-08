import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
@Component({
  selector: 'app-enrg-employee',
  templateUrl: './enrg-employee.component.html',
  styleUrls: ['./enrg-employee.component.css']
})
export class EnrgEmployeeComponent implements OnInit {
  isLinear = true;
  firstFormGroup: FormGroup | any;
  secondFormGroup: FormGroup | any;
  troisiemeFormGroup: FormGroup | any;
  public employees : Employee[] | any; 
  constructor(private _formBuilder: FormBuilder,  private route: Router, public http: HttpClient, public employee:EmployeeService) {}

  ngOnInit() {

    this.firstFormGroup = this._formBuilder.group({
      nom: ['', Validators.required],
      prenom: ['', Validators.required],
      age: ['', Validators.required],
     
      phone: ['', Validators.required],
      
     
    });
    this.troisiemeFormGroup = this._formBuilder.group({
    
      diplome: ['', Validators.required],
      jobTitle: ['', Validators.required],
      imageUrl: ['', Validators.required],
       description: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      email: ['', Validators.required],
      pasword: ['', Validators.required],
    });
  }
    
  onadd(){
    console.log(this.firstFormGroup.value);
    console.log(this.secondFormGroup.value);

    const data = this.firstFormGroup.value 
    const data1 =   this.secondFormGroup.value
    
    this.employee.addEmployee(data).subscribe(
      response=>{
        console.log('yes', response)
          this.route.navigateByUrl('/')

       
      }
    )
  
  }
}

