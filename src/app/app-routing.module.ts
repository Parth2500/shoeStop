import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AddressListComponent, OrderListComponent, ProductCreateComponent, ProductListComponent, ProductEditComponent, UserListComponent, OrderEditComponent, AddressEditComponent, AddressCreateComponent, OrderCreateComponent, UserCreateComponent, UserEditComponent } from './components';
import { AddressContainerComponent, OrdersContainerComponent, ProductsContainerComponent, UsersContainerComponent } from './containers';

const routes: Routes = [
  { path: '', redirectTo: 'products', pathMatch: 'full' },
  { path: 'products', component: ProductsContainerComponent, children: [
    { path: '', component: ProductListComponent },
    { path: 'product/create', component: ProductCreateComponent},
    { path: 'product/edit/:id', component : ProductEditComponent}
  ] },
  { path: 'orders', component: OrdersContainerComponent, children: [
    { path: '', component: OrderListComponent },
    { path: 'order/create', component: OrderCreateComponent},
    { path: 'order/edit/:id', component : OrderEditComponent},
  ] },
  { path: 'users', component: UsersContainerComponent, children: [
    { path: '', component: UserListComponent },
    { path: 'user/create', component: UserCreateComponent},
    { path: 'user/edit/:id', component : UserEditComponent},
  ] },
  { path: 'addresses', component: AddressContainerComponent, children: [
    { path: '', component: AddressListComponent },
    { path: 'address/create', component: AddressCreateComponent},
    { path: 'address/edit/:id', component : AddressEditComponent},
  ] },
  { path: '**', redirectTo: 'products' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
