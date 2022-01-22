import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesRoutingModule } from './pages-routing.module';
import { HomeComponent } from './home/home.component';
import { HowComponent } from './how/how.component';
import { TeamComponent } from './team/team.component';
import { ProductsComponent } from './products/products.component';
import { NgMaterialModule } from '../core/ng-material.module';


@NgModule({
  imports: [CommonModule, PagesRoutingModule, NgMaterialModule],
  declarations: [HomeComponent,HowComponent, TeamComponent, ProductsComponent],
  exports: [ProductsComponent, HomeComponent, HowComponent, TeamComponent, ProductsComponent]
})
export class PagesModule {}
