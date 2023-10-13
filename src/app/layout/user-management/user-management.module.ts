import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserManagementComponent } from './user-management.component';
import { UserManagementRoutingModule } from './user-management-routing.module';
import { MyAccountComponent } from './my-account/my-account.component';
import { DatePickerComponent } from './date-picker/date-picker.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    UserManagementComponent,
    MyAccountComponent,
    DatePickerComponent
  ],
  imports: [
    CommonModule,
    UserManagementRoutingModule,
    FormsModule
    
  ]
})
export class UserManagementModule { }
