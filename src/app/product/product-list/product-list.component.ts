import {Component, OnDestroy, OnInit} from '@angular/core';
import {Product} from '../product';
import {Subscription} from 'rxjs';
import {ProductService} from '../product.service';
import {select, Store} from '@ngrx/store';

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
              private store: Store<any>) { }

  ngOnInit(): void {
    this.sub = this.productService.selectedProductChanges$.subscribe(
      selectedProduct => this.selectedProduct = selectedProduct
    );

    this.productService.getProducts().subscribe({
      next: (products: Product[]) => this.products = products,
      error: (err: any) => this.errorMessage = err.error
    });

    this.store.pipe(select('product')).subscribe({
      next: product => {
        console.log('from store: ', product);
        if (product) {
          this.displayCode = product.showProductCode;
        }
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
    this.store.dispatch({
      type: 'TOGGLE_PRODUCT_CODE',
      payload: this.displayCode
    });
  }

  newProduct(): void {
    this.productService.changeSelectedProduct(this.productService.newProduct());
  }

  productSelected(product: Product): void {
    this.productService.changeSelectedProduct(product);
  }

}
