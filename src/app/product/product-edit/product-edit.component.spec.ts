import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductEditComponent } from './product-edit.component';
import {SharedModule} from '../../shared/shared.module';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {provideMockStore} from '@ngrx/store/testing';
import {State} from '../state/product.reducer';

describe('ProductEditComponent', () => {
  let component: ProductEditComponent;
  let fixture: ComponentFixture<ProductEditComponent>;
  const initialState: State = {
    product: {
      showProductCode: true,
      currentProduct: null,
      products: [],
      error: ''
    },
    app: { hideWelcomePage: false},
    user: { currentUser: null }
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductEditComponent ],
      imports: [
        SharedModule,
        HttpClientTestingModule,
        BrowserAnimationsModule
      ],
      providers: [
        provideMockStore({ initialState })
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
