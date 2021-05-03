import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatTableModule} from '@angular/material/table';
import { HttpCancelService } from './httpcancel.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ManageHttpInterceptor } from './managehttp.interceptor';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';
import { FormsModule } from '@angular/forms';
import { EmployeeService } from './employee.service';

@NgModule({
  declarations: [
    AppComponent,
    Page1Component,
    Page2Component
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatTableModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [EmployeeService, HttpCancelService,
    { provide: HTTP_INTERCEPTORS, useClass: ManageHttpInterceptor, multi: true }],
    
  bootstrap: [AppComponent]
})
export class AppModule { }