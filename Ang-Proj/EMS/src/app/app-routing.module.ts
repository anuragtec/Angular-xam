import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeListComponent } from './components/employee-list/employee-list.component' 
import { EmployeeCreateComponent } from './components/employee-create/employee-create.component';
import { EmployeeInfoComponent } from './components/employee-info/employee-info.component'
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component'



const routes: Routes = [

  {
    path: '', redirectTo: 'employees' , pathMatch: 'full' 
  },
  {
    path: 'employees',component: EmployeeListComponent
  },
  {
    path: 'create',component: EmployeeCreateComponent
  },
  {
    path: 'employees/:id',component: EmployeeInfoComponent
  },
  {
    path: 'login',component: LoginComponent
  },
  {
    path: 'register',component: RegisterComponent
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
