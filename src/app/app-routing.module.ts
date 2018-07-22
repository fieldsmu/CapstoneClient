import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { UserListComponent } from './user/user-list/user-list.component';
import { UserDetailComponent } from './user/user-detail/user-detail.component';
import { UserEditComponent } from './user/user-edit/user-edit.component';

const routes: Routes = [
	{ path: '', redirectTo: '/home', pathMatch:'full' },
	{ path: 'home', component: HomeComponent },
	{ path: 'users/list', component: UserListComponent},
	{ path: 'users/detail/:id', component: UserDetailComponent},
	{ path: 'users/edit/:id', component: UserEditComponent},
	{path: 'about', component: AboutComponent },
	{ path: '**', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
