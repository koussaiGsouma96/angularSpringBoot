import { HttpClient } from '@angular/common/http';
import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent implements OnInit {
  public employees : Employee[] | any; 
  public add: FormGroup;
  products:any
  id:any
 
  constructor(public formBuilder: FormBuilder,
              
              private route: ActivatedRoute,
              private router: Router,
            
              public http: HttpClient
             , public employee:EmployeeService) {
                this.add = formBuilder.group({
               /*   name:["", Validators.required],
                  details: ["",Validators.required],
                  image:[""],
                  price:[, Validators.required],*/
                  nom:["", Validators.required],
                  id:["", ],
                  prenom: ["",Validators.required],
                  jobTitle: ["",Validators.required],
                  diplome: ["",Validators.required],
                  phone: ["",Validators.required],
                
                  email:[, Validators.required],
                  pasword:["", Validators.required],
                
                               })
              }

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id']

    this.employee.getSingleEmployee(this.id).subscribe((response)=>{ 
      this.add.patchValue(response)
    })
  }
  update(){
    this.add.valid && 
    this.employee.updateEmployee(this.add.value).subscribe((response)=>{
      console.log(this.add.value)
      this.router.navigateByUrl("/home")
    })
  }
}
