import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { ComponentsModule } from 'src/app/components/components.module';
import { NgChartsModule } from 'ng2-charts';
import { LatestCostumerCardComponent } from './latest-costumer-card/latest-costumer-card.component';




@NgModule({
  declarations: [
    DashboardComponent,
    LatestCostumerCardComponent,
    
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    ComponentsModule,
    NgChartsModule
    
  ]
})
export class DashboardModule { }
