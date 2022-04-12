import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnimalsComponent } from './components/animals/animals.component';
import { GlampingComponent } from './components/glamping/glamping.component';
import { LambFormComponent } from './components/Produce/lamb-form/lamb-form.component';
import { MainComponent } from './components/main/main.component';
import { ProductListComponent } from './components/merchandise/product-list/product-list.component';
import { OurFarmPageComponent } from './components/our-farm-page/our-farm-page.component';
import { CategoryMenuComponent } from './components/category-menu/category-menu.component';
import { ProjectsPageComponent } from './components/projects-page/projects-page.component';
import { ProductDetailsComponent } from './components/merchandise/product-details/product-details.component';
import { CartDetailsComponent } from './components/merchandise/cart-details/cart-details.component';
import { CheckoutComponent } from './components/merchandise/checkout/checkout.component';

const routes: Routes = [
  {path: 'app-main', component: MainComponent},
  {path: 'our-farm', component: OurFarmPageComponent},
  {path: 'animals', component: AnimalsComponent},
  {path: 'projects', component: ProjectsPageComponent},
  {path: 'category/:id', component: ProductListComponent},
  {path: 'category', component: ProductListComponent},
  {path: 'products', component: ProductListComponent},
  {path: 'cart-details', component: CartDetailsComponent},
  {path: 'checkout', component: CheckoutComponent},
  {path: 'products/:id', component: ProductDetailsComponent},
  {path: 'order-lamb', component: LambFormComponent},
  {path: 'glamping', component: GlampingComponent},
  {path: '', redirectTo: '/app-main', pathMatch: 'full'},
  {path: '**', redirectTo: '/app-main', pathMatch: 'full'}
  //{path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [
  MainComponent,
  OurFarmPageComponent,
  AnimalsComponent,
  ProjectsPageComponent,
  LambFormComponent,
  GlampingComponent,
  ProductListComponent,
  CategoryMenuComponent
]
