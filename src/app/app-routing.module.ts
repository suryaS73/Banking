import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { LoginComponent } from './auth/components/login/login.component';
import { SignupComponent } from './auth/components/signup/signup.component';
import { HomeComponent } from './shared/components/home/home.component';

const routes: Routes =[
  { path: '', component:LoginComponent, pathMatch: 'full' },
  
  {
    path: 'auth', component: AuthComponent,
    loadChildren: () => import('./auth/auth.module').then(x=> x.AuthModule)
  },
  { path: 'home', component: HomeComponent },

  { path: '**', component: LoginComponent }



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
