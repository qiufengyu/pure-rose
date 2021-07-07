import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Product} from '../../product';

@Component({
    selector: 'app-product-list',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent {

  @Input() errorMessage: string;

  @Input() displayCode: boolean;

  @Input() products: Product[];

  @Input() selectedProduct: Product;

  @Output() checked = new EventEmitter<boolean>();

  @Output() initializeNewProduct = new EventEmitter<void>();

  @Output() selected = new EventEmitter<Product>();

  pageTitle = 'Products';

  checkChanged(): void {

      this.checked.emit(this.displayCode);

  }

  newProduct(): void {
      this.initializeNewProduct.emit();
  }

  selectProduct(p: Product): void {
      this.selected.emit(p);
  }

}
