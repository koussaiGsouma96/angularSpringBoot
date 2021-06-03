import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-controlle-employee',
  templateUrl: './controlle-employee.component.html',
  styleUrls: ['./controlle-employee.component.css']
})
export class ControlleEmployeeComponent implements OnInit {
  public employees : Employee[];

  constructor(private employeeService : EmployeeService,public route:Router ){
    this.employees=[]
  }
  ngOnInit()
   {
   this.getEmployees();
  }

  public getEmployees(): void {
    this.employeeService.getEmployees().subscribe(
      (response: Employee[]) => {
        this.employees = response;
        console.log(this.employees);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
  public onDeleteEmloyee(employeeId: number): void {
    this.employeeService.deleteEmployee(employeeId).subscribe(
      (response: void) => {
        console.log(response);
        this.getEmployees();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
  public onUpdateEmloyee(employeeId: Employee): void {
    this.employeeService.updateEmployee(employeeId).subscribe(
      (response) => {
        console.log(response);
        this.getEmployees();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
}
