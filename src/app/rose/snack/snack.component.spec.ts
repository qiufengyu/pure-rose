import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SnackComponent } from './snack.component';
import { SharedModule } from '../../shared/shared.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

describe('SnackComponent', () => {
  let component: SnackComponent;
  let fixture: ComponentFixture<SnackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SnackComponent ],
      imports: [ BrowserAnimationsModule, SharedModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SnackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
