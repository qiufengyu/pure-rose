import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { AppRoutingModule } from './app-routing.module';
import { HomeModule} from './home/home.module';
import { SharedModule } from './shared/shared.module';
import { ProductData } from './product/product-data';
import { UserModule } from './user/user.module';
import { ProductModule } from './product/product.module';
import { RoseModule } from './rose/rose.module';
import {StoreModule} from '@ngrx/store';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(ProductData),
    HomeModule,
    ProductModule,
    SharedModule,
    RoseModule,
    UserModule,
    AppRoutingModule,
    StoreModule.forRoot({})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
