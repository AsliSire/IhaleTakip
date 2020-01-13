import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { DepofiyatlamaComponent } from './depofiyatlama/depofiyatlama.component';
import { AuthGuardGuard } from './_services/auth-guard.guard';
import { LogoutComponent } from './logout/logout.component';
import { ListelemeComponent } from './listeleme/listeleme.component';

const routes: Routes = [
  {path:'', component:HomeComponent,  canActivate: [ AuthGuardGuard ]},
  {path:'home', component:HomeComponent,  canActivate: [ AuthGuardGuard ]},
  {path:'giris', component:LoginComponent},
  {path:'logout', component:LogoutComponent},
  {path:'fiyatlama', component:DepofiyatlamaComponent,  canActivate: [ AuthGuardGuard ]},
  {path:'listeleme', component:ListelemeComponent,  canActivate: [ AuthGuardGuard ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{onSameUrlNavigation:'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
