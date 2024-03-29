import {NgModule} from '@angular/core';
import {ProductEditComponent} from './components/product-edit/product-edit.component';
import {ProductListComponent} from './components/product-list/product-list.component';
import {ProductShellComponent} from './containers/product-shell/product-shell.component';
import {RouterModule, Routes} from '@angular/router';
import {SharedModule} from '../shared/shared.module';
import {HomeModule} from '../home/home.module';
import {FlexLayoutModule} from '@angular/flex-layout';
import {StoreModule} from '@ngrx/store';
import {reducer} from './state/product.reducer';
import {EffectsModule} from '@ngrx/effects';
import {ProductEffect} from './state/product.effect';

const productRoutes: Routes = [
    {path: '',
        component: ProductShellComponent}
];

@NgModule({
    declarations: [
        ProductEditComponent,
        ProductListComponent,
        ProductShellComponent
    ],
    exports: [
        ProductListComponent,
        ProductEditComponent
    ],
    imports: [
        SharedModule,
        RouterModule.forChild(productRoutes),
        HomeModule,
        FlexLayoutModule,
        StoreModule.forFeature(
            'product',
            reducer
        ),
        EffectsModule.forFeature([ProductEffect])
    ]
})
export class ProductModule { }
