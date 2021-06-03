import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupEmployeeComponent } from './signup-employee/signup-employee.component';
import {  ControlleEmployeeComponent} from './controlle-employee/controlle-employee.component';
import { ListeOffreComponent } from './liste-offre/liste-offre.component';
import { AddOffreComponent } from './add-offre/add-offre.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { EditEmployeeComponent } from './edit-employee/edit-employee.component';

const routes: Routes = [
  {path: 'signupEmp', component: SignupEmployeeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'home', component: HomeComponent},
  {path: 'controleEmp', component: ControlleEmployeeComponent },
  {path: 'listeOffre', component: ListeOffreComponent },
  {path: 'addOffre', component: AddOffreComponent },
  {path: 'addEmployee', component: AddEmployeeComponent },
  {path: 'editEmp/:id', component: EditEmployeeComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
