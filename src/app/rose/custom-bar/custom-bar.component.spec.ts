import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';

import {CustomBarComponent} from './custom-bar.component';
import {SharedModule} from '../../shared/shared.module';
import {MAT_SNACK_BAR_DATA, MatSnackBarRef} from '@angular/material/snack-bar';

describe(
    'CustomBarComponent',
    () => {

        let component: CustomBarComponent;
        let fixture: ComponentFixture<CustomBarComponent>;

        beforeEach(waitForAsync(() => {

            TestBed.configureTestingModule({
                declarations: [CustomBarComponent],
                imports: [SharedModule],
                providers: [
                    {provide: MAT_SNACK_BAR_DATA,
                        useValue: 'hello'},
                    {provide: MatSnackBarRef,
                        useValue: null}
                ]
            }).
                compileComponents();

        }));

        beforeEach(() => {

            fixture = TestBed.createComponent(CustomBarComponent);
            component = fixture.componentInstance;
            fixture.detectChanges();

        });

        it(
            'data should have',
            () => {

                expect(component.data).toBe('hello');

            }
        );

        it(
            'should create',
            () => {

                expect(component).toBeTruthy();

            }
        );

    }
);
