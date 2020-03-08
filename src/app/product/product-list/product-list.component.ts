import {Component, OnDestroy, OnInit} from '@angular/core';
import {Product} from '../product';
import {Subscription} from 'rxjs';
import {ProductService} from '../product.service';
import {select, Store} from '@ngrx/store';
import * as fromProduct from '../state/product.reducer';
import * as productAction from '../state/product.action';

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
  sub: Subscription;

  constructor(private productService: ProductService,
              private store: Store<fromProduct.State>) { }

  ngOnInit(): void {
    this.store.pipe(select(fromProduct.getCurrentProduct)).subscribe(
      currentProduct => this.selectedProduct = currentProduct
    );

    this.productService.getProducts().subscribe({
      next: (products: Product[]) => this.products = products,
      error: (err: any) => this.errorMessage = err.error
    });

    this.store.pipe(select(fromProduct.getShowProductCode)).subscribe({
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
    this.sub.unsubscribe();
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
