import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { AdminComponent } from './admin/admin.component';
import { RouterModule } from '@angular/router';
import { dashboardRoutes } from './dashboard.routes';
import { AuthGuard } from '../guards/auth-guard.service';

@NgModule({
  declarations: [LayoutComponent, AdminComponent],
  imports: [
    RouterModule.forChild(dashboardRoutes)
  ],
  providers:[AuthGuard]
})
export class DashboardModule {
constructor(){
  alert("hi-Dashboard");
}

 }
