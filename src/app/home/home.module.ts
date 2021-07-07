import {NgModule} from '@angular/core';
import {HeaderComponent} from './header/header.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {ShellComponent} from './shell/shell.component';
import {WelcomeComponent} from './welcome/welcome.component';
import {SharedModule} from '../shared/shared.module';
import {RouterModule} from '@angular/router';

@NgModule({
    declarations: [
        HeaderComponent,
        PageNotFoundComponent,
        ShellComponent,
        WelcomeComponent
    ],
    exports: [HeaderComponent],
    imports: [
        SharedModule,
        RouterModule,
    ]
})
export class HomeModule { }
