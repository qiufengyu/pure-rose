import {Injectable} from '@angular/core';
import {Actions, createEffect, Effect, ofType} from '@ngrx/effects';
import {ProductService} from '../product.service';
import * as productAction from './product.action';
import {catchError, map, mergeMap} from 'rxjs/operators';
import {Product} from '../product';
import {of} from 'rxjs';

@Injectable()
export class ProductEffect {

  constructor(private actions$: Actions,
              private productService: ProductService) {
  }

  loadProducts$ = createEffect( () => this.actions$.pipe(
    ofType(productAction.ProductActionType.Load),
    mergeMap(() => this.productService.getProducts().pipe(
        map((products: Product[]) => new productAction.LoadSuccess(products)),
        catchError(err => of(new productAction.LoadFail(err)))
    ))
    )
  );

  updateProduct$ = createEffect(() => this.actions$.pipe(
    ofType(productAction.ProductActionType.UpdateProduct),
    map((action: productAction.UpdateProduct) => action.payload),
    mergeMap( (product: Product) => this.productService.updateProduct(product).pipe(
      map((updatedProduct: Product) => new productAction.UpdateProductSuccess(updatedProduct)),
      catchError(err => of(new productAction.UpdateProductFail(err)))
    ))
  ));

  createProduct$ = createEffect(() => this.actions$.pipe(
    ofType(productAction.ProductActionType.CreateProduct),
    map((action: productAction.CreateProduct) => action.payload),
    mergeMap((product: Product) => this.productService.createProduct(product).pipe(
      map((createProduct: Product) => new productAction.CreateProductSuccess(createProduct)),
      catchError(err => of(new productAction.CreateProductFail(err)))
      ))
  ));

  deleteProduct$ = createEffect(() => this.actions$.pipe(
    ofType(productAction.ProductActionType.DeleteProduct),
    map((action: productAction.DeleteProduct) => action.payload),
    mergeMap((productId: number) => this.productService.deleteProduct(productId).pipe(
      map(() => new productAction.DeleteProductSuccess(productId)),
      catchError(err => of(new productAction.DeleteProductFail(err)))
    ))
  ));
}
