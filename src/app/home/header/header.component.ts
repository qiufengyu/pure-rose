import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../../user/auth.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

    constructor(
private router: Router,
private authService: AuthService
    ) {
    }

    get isLoggedIn(): boolean {

        return this.authService.isLoggedIn();

    }

    get userName(): string {

        if (this.authService.currentUser) {

            return this.authService.currentUser.userName;

        }
        return '';

    }

    login(): void {

        this.router.navigate(['/login']);

    }

    logout(): void {

        this.authService.logout();
        this.router.navigate(['/welcome']);

    }

}
