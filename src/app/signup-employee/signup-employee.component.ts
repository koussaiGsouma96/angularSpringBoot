import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-signup-employee',
  templateUrl: './signup-employee.component.html',
  styleUrls: ['./signup-employee.component.css']
})
export class SignupEmployeeComponent implements OnInit {

  public employees : Employee[] | undefined;  
  isLinear = true;

  firstFormGroup!: FormGroup;

  secondFormGroup!: FormGroup;
  troisiemeFormGroup!: FormGroup;

  Roles: any = ['Admin', 'Author', 'Reader'];


  constructor(private employeeService : EmployeeService,public route:Router ,private _formBuilder: FormBuilder) {}



  ngOnInit() {

    this.firstFormGroup = this._formBuilder.group({

      name: ['', Validators.required],
      email: ['', Validators.required],
      jobTitle: ['', Validators.required],
      phone: ['', Validators.required],
      //imageUrl: ['', Validators.required],
/*
      name: ['', Validators.required],



      prenom: ['', Validators.required],


      age: ['', Validators.required],


      email: ['', Validators.required],
      password: ['', Validators.required],
      image: ['', Validators.required]
*/

    });

    this.troisiemeFormGroup = this._formBuilder.group({

    profession: ['', Validators.required],

    adresse: ['', Validators.required],

    telephone: ['', Validators.required],
    description: [''],


    });


    this.secondFormGroup = this._formBuilder.group({

      email: ['', Validators.required],

      password: ['', Validators.required],
      //image: ['', Validators.required]


    });

  }

 /* previous(){
    this.firstFormGroup
    if(this.firstFormGroup!=null)&&(this.secondFormGroup!=null)&&(this.troisiemeFormGroup!=null) {
      
    }
    
  }*/

  submit(){

      console.log(this.firstFormGroup.value);
      console.log(this.troisiemeFormGroup.value);
     console.log(this.secondFormGroup.value);
      
      const data = this.firstFormGroup.value
      this.employeeService.addEmployee(data).subscribe(
        response=>{
          console.log('yes', response)
          this.route.navigateByUrl('/')
        }
      )
  }
/*
  onAddEmloyee(){
    const data = this.firstFormGroup.value
    this.employeeService.addEmployee(data).subscribe(
      response=>{
        console.log('yes', response)
        this.route.navigateByUrl('/')
      }
    )
  }
*/
}
