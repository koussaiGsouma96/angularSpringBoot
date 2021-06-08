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
import { EnrgEmployeeComponent } from './enrg-employee/enrg-employee.component';
import { SignupClientComponent } from './signup-client/signup-client.component';
import { ProfilClientComponent } from './profil-client/profil-client.component';
import { ControlleClientComponent } from './controlle-client/controlle-client.component';

const routes: Routes = [
  {path: 'signupEmp', component: SignupEmployeeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'home', component: HomeComponent},
  {path: 'controleEmp', component: ControlleEmployeeComponent },
  {path: 'listeOffre', component: ListeOffreComponent },
  {path: 'addOffre', component: AddOffreComponent },
  {path: 'addEmployee', component: AddEmployeeComponent },
  {path: 'editEmp/:id', component: EditEmployeeComponent },
  {path: 'enrgEmp', component: EnrgEmployeeComponent },
  {path: 'signupCli', component: SignupClientComponent },
  {path: 'profileCli/:id', component: ProfilClientComponent },
  {path: 'controleCli', component: ControlleClientComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
