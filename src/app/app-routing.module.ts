import { NgModule } from '@angular/core';
<<<<<<< HEAD
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';


const routes: Routes = [{
  path: "login", component:LoginComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
=======
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
>>>>>>> master
})
export class AppRoutingModule { }
