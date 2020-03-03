import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShellComponent } from './home/shell/shell.component';
import { WelcomeComponent } from './home/welcome/welcome.component';
import { PageNotFoundComponent } from './home/page-not-found/page-not-found.component';
import {SnackComponent} from './rose/snack/snack.component';

const routes: Routes = [
  { path: '', component: ShellComponent, children: [
      { path: 'welcome', component: WelcomeComponent },
      { path: 'product', loadChildren: () => import('./product/product.module').then(m => m.ProductModule) },
      { path: 'rose', component: SnackComponent },
      { path: '', redirectTo: 'welcome', pathMatch: 'full' },
    ]
  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
