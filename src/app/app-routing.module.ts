import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AddressListComponent, OrderListComponent, ProductCreateComponent, ProductListComponent, ProductEditComponent, UserListComponent, OrderEditComponent, AddressEditComponent, AddressCreateComponent, OrderCreateComponent, UserCreateComponent, UserEditComponent, ProductsPageComponent, ProductPageComponent, NotFoundComponent, LoginComponent, OrderPageComponent } from './components';
import { AdminComponent, ClientComponent } from './containers';

const routes: Routes = [
  { path: '', redirectTo: 'Home', pathMatch: 'full' },
  { path: 'Admin', component: AdminComponent, children: [
    { path: '', redirectTo: 'product', pathMatch: 'full' },
    { path: 'product', children: [
      { path: '', component: ProductListComponent },
      { path: 'create', component: ProductCreateComponent},
      { path: 'edit/:id', component : ProductEditComponent},
    ]},
    { path: 'order', children: [
      { path: '', component: OrderListComponent },
      { path: 'create', component: OrderCreateComponent},
      { path: 'edit/:id', component : OrderEditComponent},
    ]},
    { path: 'user', children: [
      { path: '', component: UserListComponent },
      { path: 'create', component: UserCreateComponent},
      { path: 'edit/:id', component : UserEditComponent},
    ]},
    { path: 'address', children: [
      { path: '', component: AddressListComponent },
      { path: 'create', component: AddressCreateComponent},
      { path: 'edit/:id', component : AddressEditComponent},
    ]}
  ] },
  { path: 'Home', component: ClientComponent, children: [
    { path: '', redirectTo: 'products', pathMatch: 'full' },
    { path: 'products', component: ProductsPageComponent },
    { path: 'products/:id', component: ProductPageComponent },
    { path: 'placeOrder/:id', component: OrderPageComponent },
    { path: 'loginUser', component: LoginComponent },
  ] },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
