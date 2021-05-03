import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';
import { Subscriber } from 'rxjs';

export interface PeriodElement {
  id: number;
  employee_name: string;
  employee_salary: number;
  employee_age: number;
}

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.css']
})
export class Page1Component {

  displayedColumns: string[] = ['id', 'employee_name', 'employee_salary', 'employee_age'];
   
  dataSource: PeriodElement[] = [];
  
  constructor(private githubService : EmployeeService , private router:Router) {

   }

  public getRepos(){
    this.githubService.getEmployees()
    .subscribe(
      (response) => {
        console.log(response['message'])
        this.dataSource = response['data']; 
      },
      (error) => {
        console.error('Request failed woth error')
        //this.errorMessage = error;
        //this.loading = false;
      });
    }

    public changeRoute(){
      this.router.navigate(['/', 'two'])
    } 
  }