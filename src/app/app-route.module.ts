import {NgModule} from '@angular/core'
import {RouterModule, Routes} from '@angular/router'

import { DashboardComponent } from './dashboard/dashboard.component';
import { CreateStudentComponent } from './createStudent/create-student.component';


const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard',  component: DashboardComponent },
  { path: 'createStudent', component: CreateStudentComponent}
];

@NgModule(
    {
        imports: [RouterModule.forRoot(routes)],
        exports: [RouterModule]
    }
)
export class AppRoutingModule{}