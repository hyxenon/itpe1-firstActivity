import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserManagementComponent } from './user-management/user-management.component';
import { ProductComponent } from './product/product.component';



const routes: Routes = [
  {
    path: "",
    component: LayoutComponent,
    children: [
      {
        path: 'dashboard', component: DashboardComponent
      },
      {
        path: 'user-management', component: UserManagementComponent
      },
      {
        path: 'product', component: ProductComponent
      }
    ]
  },
  
]

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
