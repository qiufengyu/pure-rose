import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {ProductService} from '../product.service';
import * as productAction from './product.action';
import {catchError, map, mergeMap} from 'rxjs/operators';
import {Product} from '../product';
import {of} from 'rxjs';

@Injectable()
export class ProductEffect {

  loadProducts$ = createEffect(() => this.actions$.pipe(
      ofType(productAction.ProductActionType.Load),
      mergeMap(() => this.productService.getProducts().pipe(
          map((products: Product[]) => new productAction.LoadSuccessAction(products)),
          catchError(err => of(new productAction.LoadFailAction(err)))
      ))
  ));

  updateProduct$ = createEffect(() => this.actions$.pipe(
      ofType(productAction.ProductActionType.UpdateProduct),
      map((action: productAction.UpdateProductAction) => action.payload),
      mergeMap((product: Product) => this.productService.updateProduct(product).pipe(
          map((updatedProduct: Product) => new productAction.UpdateProductSuccessAction(updatedProduct)),
          catchError(err => of(new productAction.UpdateProductFailAction(err)))
      ))
  ));

  createProduct$ = createEffect(() => this.actions$.pipe(
      ofType(productAction.ProductActionType.CreateProduct),
      map((action: productAction.CreateProductAction) => action.payload),
      mergeMap((product: Product) => this.productService.createProduct(product).pipe(
          map((createProduct: Product) => new productAction.CreateProductSuccessAction(createProduct)),
          catchError(err => of(new productAction.CreateProductFailAction(err)))
      ))
  ));

  deleteProduct$ = createEffect(() => this.actions$.pipe(
      ofType(productAction.ProductActionType.DeleteProduct),
      map((action: productAction.DeleteProductAction) => action.payload),
      mergeMap((productId: number) => this.productService.deleteProduct(productId).pipe(
          map(() => new productAction.DeleteProductSuccessAction(productId)),
          catchError(err => of(new productAction.DeleteProductFailAction(err)))
      ))
  ));

  constructor(
private actions$: Actions,
private productService: ProductService
  ) {
  }

}
