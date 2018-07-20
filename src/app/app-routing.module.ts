import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { UserListComponent } from './user/user-list/user-list.component'

const routes: Routes = [
	{ path: '', redirectTo: '/home', pathMatch:'full' },
	{ path: 'home', component: HomeComponent },
	{ path: 'user-list', component: UserListComponent},
	{path: 'about', component: AboutComponent },
	{ path: '**', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
