import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { NgMaterialModule } from './ng-material.module';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { CarouselComponent } from './carousel/carousel.component';

@NgModule({
  imports: [CommonModule, NgMaterialModule, RouterModule],
  declarations: [NavbarComponent, CarouselComponent, SideMenuComponent, FooterComponent],
  exports: [
    NavbarComponent,
    CarouselComponent,
    NgMaterialModule,
    SideMenuComponent,
    FooterComponent,
  ],
})
export class CoreModule {}
