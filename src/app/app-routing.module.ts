import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';

import { UserListComponent } from './user/user-list/user-list.component';
import { UserDetailComponent } from './user/user-detail/user-detail.component';
import { UserEditComponent } from './user/user-edit/user-edit.component';
import { UserCreateComponent } from './user/user-create/user-create.component';

import { VendorListComponent } from './vendor/vendor-list/vendor-list.component';
import { VendorDetailComponent } from './vendor/vendor-detail/vendor-detail.component';
import { VendorEditComponent } from './vendor/vendor-edit/vendor-edit.component';
import { VendorCreateComponent } from './vendor/vendor-create/vendor-create.component';

import { ProductListComponent } from './product/product-list/product-list.component';
import { ProductDetailComponent } from './product/product-detail/product-detail.component';
import { ProductEditComponent } from './product/product-edit/product-edit.component';
import { ProductCreateComponent } from './product/product-create/product-create.component';

import { PurchaseRequestListComponent } from './purchase-request/purchase-request-list/purchase-request-list.component';
import { PurchaseRequestDetailComponent } from './purchase-request/purchase-request-detail/purchase-request-detail.component';
import { PurchaseRequestEditComponent } from './purchase-request/purchase-request-edit/purchase-request-edit.component';
import { PurchaseRequestCreateComponent } from './purchase-request/purchase-request-create/purchase-request-create.component';

const routes: Routes = [
	{ path: '', redirectTo: '/home', pathMatch:'full' },
	{ path: 'home', component: HomeComponent },
	{ path: 'about', component: AboutComponent },

	{ path: 'users/list', component: UserListComponent},
	{ path: 'users/detail/:id', component: UserDetailComponent},
	{ path: 'users/edit/:id', component: UserEditComponent},
	{ path: 'users/create', component: UserCreateComponent},

	{ path: 'vendors/list', component: VendorListComponent},
	{ path: 'vendors/detail/:id', component: VendorDetailComponent},
	{ path: 'vendors/edit/:id', component: VendorEditComponent},
	{ path: 'vendors/create', component: VendorCreateComponent},

	{ path: 'products/list', component: ProductListComponent},
	{ path: 'products/detail/:id', component: ProductDetailComponent},
	{ path: 'products/edit/:id', component: ProductEditComponent},
	{ path: 'products/create', component: ProductCreateComponent},

	{ path: 'purchaserequests/list', component: PurchaseRequestListComponent},
	{ path: 'purchaserequests/detail/:id', component: PurchaseRequestDetailComponent},
	{ path: 'purchaserequests/edit/:id', component: PurchaseRequestEditComponent},
	{ path: 'purchaserequests/create', component: PurchaseRequestCreateComponent},

	{ path: '**', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
