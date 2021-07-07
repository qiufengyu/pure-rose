import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';

import {ProductListComponent} from './product-list.component';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {provideMockStore} from '@ngrx/store/testing';
import {State} from '../../state';

describe(
    'ProductListComponent',
    () => {

        let component: ProductListComponent;
        let fixture: ComponentFixture<ProductListComponent>;
        const initialState: State = {
            product: {
                showProductCode: true,
                currentProductId: null,
                products: [],
                error: ''
            },
            app: {hideWelcomePage: false},
            user: {currentUser: null}
        };

        beforeEach(waitForAsync(() => {

            TestBed.configureTestingModule({
                declarations: [ProductListComponent],
                imports: [HttpClientTestingModule],
                providers: [provideMockStore({initialState})]
            }).
                compileComponents();

        }));

        beforeEach(() => {

            fixture = TestBed.createComponent(ProductListComponent);
            component = fixture.componentInstance;
            fixture.detectChanges();

        });

        it(
            'should create',
            () => {

                expect(component).toBeTruthy();

            }
        );

    }
);
