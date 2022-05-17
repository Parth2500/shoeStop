import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OrderListComponent, ProductListComponent, UserListComponent, ProductEditComponent, AddressEditComponent, AddressCreateComponent, OrderEditComponent, ProductCreateComponent, AddressListComponent, OrderCreateComponent, UserCreateComponent, UserEditComponent } from './components';
import { AddressContainerComponent, OrdersContainerComponent, ProductsContainerComponent, UsersContainerComponent } from './containers';

@NgModule({
  declarations: [
    AppComponent,
    ProductsContainerComponent,
    UsersContainerComponent,
    OrdersContainerComponent,
    ProductListComponent,
    OrderListComponent,
    UserListComponent,
    ProductEditComponent,
    AddressListComponent,
    AddressContainerComponent,
    ProductCreateComponent,
    OrderEditComponent,
    AddressCreateComponent,
    AddressEditComponent,
    OrderCreateComponent,
    UserCreateComponent,
    UserEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
