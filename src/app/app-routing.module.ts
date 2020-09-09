import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MessageboardComponent } from './messageboard/messageboard.component';
import { MatchingComponent } from './matching/matching.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UserdataComponent } from './userdata/userdata.component';

const routes: Routes = [
  {path: 'messageboard', component: MessageboardComponent},
  {path: 'matching', component: MatchingComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'userdata', component: UserdataComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
