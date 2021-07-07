import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {ProductShellComponent} from './product-shell.component';
import {provideMockStore} from '@ngrx/store/testing';
import {State} from '../../state';

describe(
    'ProductShellComponent',
    () => {

        let component: ProductShellComponent;
        let fixture: ComponentFixture<ProductShellComponent>;
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
                declarations: [ProductShellComponent],
                imports: [HttpClientTestingModule],
                providers: [provideMockStore({initialState})]
            }).
                compileComponents();

        }));

        beforeEach(() => {

            fixture = TestBed.createComponent(ProductShellComponent);
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
