import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Employee } from '../models/employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeServiceService {

  constructor( private httpClient: HttpClient ) { }
 
  private URL = 'http.//localhost:3000/api';

  public getEmployeeList() {
    return this.httpClient.get<Employee []>(this.URL+'employees');
  }

  public getEmployeeById(id) {
    return this.httpClient.get<Employee []>(this.URL+'employees/'+id);
  }

  public createEmployee(employee) {
    return this.httpClient.get<Employee []>(this.URL+'create',employee);
  }

}
