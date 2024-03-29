import {Component, OnInit} from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';
import {CustomBarComponent} from '../custom-bar/custom-bar.component';
import {Observable} from 'rxjs';
import {Product} from '../../product/product';
import {ProductService} from '../../product/product.service';

@Component({
    selector: 'app-snack',
    templateUrl: './snack.component.html',
    styleUrls: ['./snack.component.scss']
})
export class SnackComponent implements OnInit {

  value: number;

  snackDate: Date;

  query: string;

  products$: Observable<Product[]>;

  constructor(
private snackbar: MatSnackBar,
private productService: ProductService
  ) { }

  ngOnInit(): void {

      this.products$ = this.productService.getProducts();

  }

  onCustomClick(): void {

      this.snackbar.openFromComponent(
          CustomBarComponent,
          {
              data: 'This is from custom snackbar because value is not greater than 5'
          }
      );

  }

  onDefaultClick(): void {

      const a = Date();
      if (a.big().length > 0) {

          console.log('a.big');

      } else {

          console.log('a.not.big');

      }
      this.snackbar.open(
          'This is from default snackbar because value is greater than 5',
          'OK'
      );

  }

  onOpenDatePicker(): void {

      this.snackDate = null;

  }

  onCloseDatePicker(): void {

      alert(`Select date ${this.snackDate.toDateString()}`);

  }

}
