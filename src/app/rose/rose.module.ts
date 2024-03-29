import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SnackComponent} from './snack/snack.component';
import {CustomBarComponent} from './custom-bar/custom-bar.component';
import {SharedModule} from '../shared/shared.module';
import {FormsModule} from '@angular/forms';


@NgModule({
    declarations: [
        SnackComponent,
        CustomBarComponent
    ],
    imports: [
        CommonModule,
        SharedModule,
        FormsModule
    ]
})
export class RoseModule { }
