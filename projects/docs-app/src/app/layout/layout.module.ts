import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavItemComponent } from './nav-item/nav-item.component';
import { MatIconModule } from '@angular/material/icon';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [NavItemComponent, FooterComponent],
  imports: [
    CommonModule,
    MatIconModule,
  ],
  exports: [
    NavItemComponent,
    FooterComponent,
  ]
})
export class LayoutModule { }
