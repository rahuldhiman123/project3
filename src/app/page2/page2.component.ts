import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as Highcharts from 'highcharts';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.css']
})
export class Page2Component {

  
  constructor(private githubService : EmployeeService , private router:Router) { 
  }

  
  public changeRoute(){
    this.router.navigate(['/'])
   }

  public getRepos(){
    this.githubService.getEmployees()
    .subscribe(
    (response) => {
      console.log(response['data'])
      response['data'].forEach((element: { employee_name: string; id: number; }) => {
        this.options.series[0].data.push({name : element.employee_name , y : element.id})
      });
    },
    (error) => {
      console.log('Request failed with error');
    })
  
  }

public options: any = {
  chart: {
      plotBackgroundColor: null,
      plotBorderWidth: null,
      plotShadow: true,
      type: 'pie'
  },
  title: {
      text: 'Browser market shares'
  },
  tooltip: {
      pointFormat: '{series.name}: {point.percentage:.1f}%'
  },
  accessibility: {
      point: {
          valueSuffix: '%'
      }
  },
  plotOptions: {
      pie: {
          allowPointSelect: true,
          cursor: 'pointer',
          dataLabels: {
              enabled: true,
              format: '{point.name}: {point.percentage:.1f} %'
          }
      }
  },
  series: [{
      name: 'Brands',
      colorByPoint: true,
      data: [],
  }]
}
ngOnInit(){
  this.getRepos();
  Highcharts.chart('container', this.options);
}
}