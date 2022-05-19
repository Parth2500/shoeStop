import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OrderListComponent, ProductListComponent, UserListComponent, ProductEditComponent, AddressEditComponent, AddressCreateComponent, OrderEditComponent, ProductCreateComponent, AddressListComponent, OrderCreateComponent, UserCreateComponent, UserEditComponent, ProductsPageComponent, ProductPageComponent, LoginComponent, OrderPageComponent, AddressPageComponent, OrderHistoryComponent, NotFoundComponent } from './components';
import { AdminComponent, ClientComponent } from './containers';
import { AddresPipe } from './pipes/addres.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    OrderListComponent,
    UserListComponent,
    ProductEditComponent,
    AddressListComponent,
    ProductCreateComponent,
    OrderEditComponent,
    AddressCreateComponent,
    AddressEditComponent,
    OrderCreateComponent,
    UserCreateComponent,
    UserEditComponent,
    AdminComponent,
    ClientComponent,
    ProductsPageComponent,
    ProductPageComponent,
    LoginComponent,
    OrderPageComponent,
    AddressPageComponent,
    OrderHistoryComponent,
    NotFoundComponent,
    AddresPipe
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
