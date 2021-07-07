import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {AuthService} from '../../../user/auth.service';
import {Product} from '../../product';
import {Observable} from 'rxjs';
import {ProductService} from '../../product.service';
import {Store, select} from '@ngrx/store';
import * as fromProduct from '../../state';
import * as productAction from '../../state/product.action';

@Component({
    selector: 'app-product-shell',
    templateUrl: './product-shell.component.html',
    styleUrls: ['./product-shell.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductShellComponent implements OnInit {

  validUser = false;

  errorMessage$: Observable<string>;

  displayCode$: Observable<boolean>;

  products$: Observable<Product[]>;

  selectedProduct$: Observable<Product>;

  constructor(
private authService: AuthService,
private productService: ProductService,
private store: Store<fromProduct.State>
  ) { }

  ngOnInit(): void {

      this.validUser = this.authService.isLoggedIn();
      this.store.dispatch(new productAction.LoadAction());

      this.products$ = this.store.pipe(select(fromProduct.getProducts));
      this.errorMessage$ = this.store.pipe(select(fromProduct.getError));
      this.selectedProduct$ = this.store.pipe(select(fromProduct.getCurrentProduct));
      this.displayCode$ = this.store.pipe(select(fromProduct.getShowProductCode));

  }

  checkChanged(value: boolean): void {

      this.store.dispatch(new productAction.ToggleProductCodeAction(value));

  }

  newProduct(): void {

      this.store.dispatch(new productAction.InitializeCurrentProductAction());

  }

  productSelected(product: Product): void {

      this.store.dispatch(new productAction.SetCurrentProductAction(product));

  }

}
