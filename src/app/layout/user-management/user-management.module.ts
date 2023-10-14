import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserManagementComponent } from './user-management.component';
import { UserManagementRoutingModule } from './user-management-routing.module';
import { MyAccountComponent } from './my-account/my-account.component';
import { DatePickerComponent } from './date-picker/date-picker.component';
import { FormsModule } from '@angular/forms';
import { ProfileComponent } from './my-account/profile/profile.component';
import { BankCardsComponent } from './my-account/bank-cards/bank-cards.component';
import { AddressesComponent } from './my-account/addresses/addresses.component';
import { ChangePasswordComponent } from './my-account/change-password/change-password.component';
import { PurchaseSellComponent } from './purchase-sell/purchase-sell.component';
import { NotificationComponent } from './notification/notification.component';



@NgModule({
  declarations: [
    UserManagementComponent,
    MyAccountComponent,
    DatePickerComponent,
    ProfileComponent,
    BankCardsComponent,
    AddressesComponent,
    ChangePasswordComponent,
    PurchaseSellComponent,
    NotificationComponent
  ],
  imports: [
    CommonModule,
    UserManagementRoutingModule,
    FormsModule
    
  ]
})
export class UserManagementModule { }
