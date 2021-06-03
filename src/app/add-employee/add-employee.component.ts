import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {
  public employees : Employee[] | any; 
  public add: FormGroup;
  products:any
  id:any
 
  constructor(public formBuilder: FormBuilder,
              
              private route: Router,
              public http: HttpClient
             , public employee:EmployeeService) {
                this.add = formBuilder.group({
               /*   name:["", Validators.required],
                  details: ["",Validators.required],
                  image:[""],
                  price:[, Validators.required],*/
                  nom:["", Validators.required],
                  prenom: ["",Validators.required],
                  jobTitle: ["",Validators.required],
                  diplome: ["",Validators.required],
                  phone: ["",Validators.required],
                
                  email:[, Validators.required],
                  password:[, Validators.required],
                
                               })
              }

  ngOnInit(): void {
  }
  onadd(){
    const data = this.add.value
    this.employee.addEmployee(data).subscribe(
      response=>{
        console.log('yes', response)
        this.route.navigateByUrl('/home')
      }
    )
  }

}
