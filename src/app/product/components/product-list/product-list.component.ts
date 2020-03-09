import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Product} from '../../product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent {
  pageTitle = 'Products';
  @Input() errorMessage: string;
  @Input() displayCode: boolean;
  @Input() products: Product[];
  @Input() selectedProduct: Product;
  @Output() checked = new EventEmitter<boolean>();
  @Output() initializeNewProduct = new EventEmitter<void>();
  @Output() selected = new EventEmitter<Product>();

  checkChanged(): void {
    this.checked.emit(this.displayCode);
  }

  newProduct() {
    this.initializeNewProduct.emit();
  }

  selectProduct(p: Product) {
    this.selected.emit(p);
  }
}
