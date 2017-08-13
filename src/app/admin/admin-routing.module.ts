import { NgModule }     from '@angular/core';
import { RouterModule } from '@angular/router';

import { AdminComponent } from './admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'admin',
        component: AdminComponent,
        children: [
            {
                path:'',
                component: DashboardComponent
            },
            {
                path:'dashboard',
                component: DashboardComponent
          }
        ]
     }
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class AdminRoutingModule { }
