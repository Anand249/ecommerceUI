import {RouterModule, Routes} from '@angular/router';
import {UserLoginComponent} from './user-login/user-login.component';
import {CreateUserComponent} from './create-user/create-user.component';
import {HomeComponent} from './home/home.component';

const appRoutes: Routes = [
  {path: 'home', component:  HomeComponent},
  {path: 'login', component: UserLoginComponent},
  {path: 'register', component: CreateUserComponent},
  {path: '', component: HomeComponent}
  ];

export const routing = RouterModule.forRoot(appRoutes);
