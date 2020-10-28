import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GettingStartedComponent } from './getting-started/getting-started.component';

const routes: Routes = [
  {
    path: '',
    component: GettingStartedComponent,
    pathMatch: 'full',
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
