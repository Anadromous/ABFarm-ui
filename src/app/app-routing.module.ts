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
import { ProduceFormComponent } from './components/Produce/produce-form/produce-form.component';
import { CartDetailsComponent } from './components/merchandise/cart-details/cart-details.component';
import { CheckoutComponent } from './components/merchandise/checkout/checkout.component';
import { OrderConfirmationComponent } from './components/merchandise/order-confirmation/order-confirmation.component';
import { ContactComponent } from './components/contact/contact.component';
import { AboutSheepComponent } from './components/animals/about-sheep/about-sheep.component';
import { AboutGoatsComponent } from './components/animals/about-goats/about-goats.component';
import { AboutLlamasComponent } from './components/animals/about-llamas/about-llamas.component';

const routes: Routes = [
  {path: 'app-main', component: MainComponent},
  {path: 'our-farm', component: OurFarmPageComponent},
  {path: 'animals', component: AnimalsComponent},
  {path: 'projects', component: ProjectsPageComponent},
  {path: 'category/:id', component: ProductListComponent},
  {path: 'category', component: ProductListComponent},
  {path: 'products', component: ProductListComponent},
  {path: 'contact', component:ContactComponent},
  {path: 'produce', component: ProduceFormComponent},
  {path: 'cart-details', component: CartDetailsComponent},
  {path: 'checkout', component: CheckoutComponent},
  {path: 'products/:id', component: ProductDetailsComponent},
  {path: 'order-lamb', component: LambFormComponent},
  {path: 'glamping', component: GlampingComponent},
  {path: 'order-confirmation', component: OrderConfirmationComponent},
  { path: 'about-sheep', component: AboutSheepComponent},
  { path: 'about-goats', component: AboutGoatsComponent},
  { path: 'about-llamas', component: AboutLlamasComponent},
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
  ContactComponent,
  LambFormComponent,
  ProduceFormComponent,
  GlampingComponent,
  ProductListComponent,
  CategoryMenuComponent,
  OrderConfirmationComponent,
  AboutSheepComponent,
  AboutGoatsComponent,
  AboutLlamasComponent
]
