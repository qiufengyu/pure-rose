import {Component, Inject} from '@angular/core';
import {MAT_SNACK_BAR_DATA, MatSnackBarRef} from '@angular/material/snack-bar';

@Component({
    selector: 'app-custom-bar',
    templateUrl: './custom-bar.component.html',
    styleUrls: ['./custom-bar.component.scss']
})
export class CustomBarComponent {

    constructor(@Inject(MAT_SNACK_BAR_DATA) public data: any,
                public snackBarRef: MatSnackBarRef<CustomBarComponent>
    ) { }

}
