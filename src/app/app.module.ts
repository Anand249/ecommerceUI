import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { HistoryComponent } from './history/history.component';
import { routing } from './app.routing';


@NgModule({
  declarations: [
    AppComponent,
    UserLoginComponent,
    CreateUserComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    HistoryComponent
  ],
  imports: [
    routing,
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
