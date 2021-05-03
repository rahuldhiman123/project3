import{ Injectable } from '@angular/core';
import{ HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import{ Observable, throwError } from 'rxjs';

@Injectable()
export class EmployeeService {

    baseURL : string = "http://dummy.restapiexample.com/api/v1";
    
    constructor(private http: HttpClient) {
    }
        getEmployees(): Observable<any> {
         return this.http.get(this.baseURL + '/employees')
        }
    
}