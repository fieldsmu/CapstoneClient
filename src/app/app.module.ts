import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule }   from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserListComponent } from './user/user-list/user-list.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { MenuComponent } from './menu/menu.component';
import { MenuItemComponent } from './menu-item/menu-item.component';
import { UserDetailComponent } from './user/user-detail/user-detail.component';
import { UserEditComponent } from './user/user-edit/user-edit.component';
import { UserLoginComponent } from './user/user-login/user-login.component';
import { BoolPipe } from './utility/bool.pipe';

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    HomeComponent,
    AboutComponent,
    MenuComponent,
    MenuItemComponent,
    UserDetailComponent,
    UserEditComponent,
    UserLoginComponent,
    BoolPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }