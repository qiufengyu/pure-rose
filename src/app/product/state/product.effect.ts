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
        map((products: Product[]) => (new productAction.LoadSuccess(products))),
        catchError(err => of(new productAction.LoadFail(err)))
    ))
    )
  );
}
