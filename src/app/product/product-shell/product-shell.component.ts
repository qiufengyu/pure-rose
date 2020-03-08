import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../user/auth.service';

@Component({
  selector: 'app-product-shell',
  templateUrl: './product-shell.component.html',
  styleUrls: ['./product-shell.component.scss']
})
export class ProductShellComponent implements OnInit {

  validUser = false;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.validUser = true; this.authService.isLoggedIn();
  }

}
