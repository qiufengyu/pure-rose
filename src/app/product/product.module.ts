import { NgModule } from '@angular/core';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductShellComponent } from './product-shell/product-shell.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import {HomeModule} from '../home/home.module';

const productRoutes: Routes = [
  { path: '', component: ProductShellComponent }
];

@NgModule({
  declarations: [ProductEditComponent, ProductListComponent, ProductShellComponent],
  imports: [
    SharedModule,
    RouterModule.forChild(productRoutes),
    HomeModule
  ]
})
export class ProductModule { }
