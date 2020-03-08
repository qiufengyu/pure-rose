import {Component, OnDestroy, OnInit} from '@angular/core';
import {Product} from '../product';
import {Observable, Subscription} from 'rxjs';
import {ProductService} from '../product.service';
import {select, Store} from '@ngrx/store';
import * as fromProduct from '../state/product.reducer';
import * as productAction from '../state/product.action';
import {ProductActionType} from '../state/product.action';
import {takeWhile} from 'rxjs/operators';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit, OnDestroy {
  pageTitle = 'Products';
  errorMessage: string;

  displayCode: boolean;

  products: Product[];

  // Used to highlight the selected product in the list
  selectedProduct: Product | null;
  componentActive = true;
  products$: Observable<Product[]>;
  errorMessage$: Observable<string>;

  constructor(private productService: ProductService,
              private store: Store<fromProduct.State>) { }

  ngOnInit(): void {
    this.store.pipe(select(fromProduct.getCurrentProduct),
      takeWhile(() => this.componentActive)).subscribe(
      currentProduct => this.selectedProduct = currentProduct
    );

    this.store.dispatch(new productAction.Load());
    this.products$ = this.store.pipe(select(fromProduct.getProducts));
    // .subscribe(
    // (products: Product[]) => this.products = products
    // );
    // this.productService.getProducts().subscribe({
    //   next: (products: Product[]) => this.products = products,
    //   error: (err: any) => this.errorMessage = err.error
    // });
    this.errorMessage$ = this.store.pipe(select(fromProduct.getError));

    this.store.pipe(select(fromProduct.getShowProductCode),
      takeWhile(() => this.componentActive)).subscribe({
      next: (showProductCode) => {
        this.displayCode = showProductCode;
      },
      error: (error) => {
        console.log(error);
      },
      complete: () => {}
    });
  }

  ngOnDestroy(): void {
    this.componentActive = false;
  }

  checkChanged(): void {
    this.store.dispatch(new productAction.ToggleProductCode(this.displayCode));
  }

  newProduct(): void {
    this.store.dispatch(new productAction.InitializeCurrentProduct());
  }

  productSelected(product: Product): void {
    this.store.dispatch(new productAction.SetCurrentProduct(product));
  }

}
