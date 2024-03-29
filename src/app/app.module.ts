import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { MainComponent } from './components/main/main.component';
import { FooterComponent } from './components/footer/footer.component';
import { ContactComponent } from './components/contact/contact.component';
import { AnimalsComponent } from './components/animals/animals.component';
import { GlampingComponent } from './components/glamping/glamping.component';
import { ProductCategoryMenuComponent } from './components/merchandise/product-category-menu/product-category-menu.component';
import { ProductListComponent } from './components/merchandise/product-list/product-list.component';
import { ProductService } from './services/product.service';
import { CategoryMenuComponent } from './components/category-menu/category-menu.component';
import { ProductDetailsComponent } from './components/merchandise/product-details/product-details.component';
import { CartStatusComponent } from './components/merchandise/cart-status/cart-status.component';
import { CartDetailsComponent } from './components/merchandise/cart-details/cart-details.component';
import { CheckoutComponent } from './components/merchandise/checkout/checkout.component';
import { LoginStatusComponent } from './components/security/login-status/login-status.component';
import { ProduceService } from './services/produce.service';
import { LambFormComponent } from './components/Produce/lamb-form/lamb-form.component';
import { ProduceFormComponent } from './components/Produce/produce-form/produce-form.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { OrderConfirmationComponent } from './components/merchandise/order-confirmation/order-confirmation.component';
import { AboutSheepComponent } from './components/animals/about-sheep/about-sheep.component';
import { AboutGoatsComponent } from './components/animals/about-goats/about-goats.component';
import { AboutLlamasComponent } from './components/animals/about-llamas/about-llamas.component';
import { FarmProjectsComponent } from './components/projects-page/farm-projects/farm-projects.component';
import { HouseProjectsComponent } from './components/projects-page/house-projects/house-projects.component';
import { FieldProjectsComponent } from './components/projects-page/field-projects/field-projects.component';
import { SeasonsComponent } from './components/seasons/seasons.component';
import { LoginComponent } from './components/login/login.component';
import { OktaAuthModule, OKTA_CONFIG } from '@okta/okta-angular';
import appConfig from './config/app-config';
import { OktaAuth } from '@okta/okta-auth-js';

const oktaConfig = appConfig.oidc;
const oktaAuth = new OktaAuth(oktaConfig);

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    FooterComponent,
    routingComponents,
    ContactComponent,
    AnimalsComponent,
    GlampingComponent,
    ProductCategoryMenuComponent,
    ProductListComponent,
    CategoryMenuComponent,
    ProductDetailsComponent,
    CartStatusComponent,
    CartDetailsComponent,
    CheckoutComponent,
    LoginStatusComponent,
    LambFormComponent,
    ProduceFormComponent,
    OrderConfirmationComponent,
    AboutSheepComponent,
    AboutGoatsComponent,
    AboutLlamasComponent,
    FarmProjectsComponent,
    HouseProjectsComponent,
    FieldProjectsComponent,
    SeasonsComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    NgbModule,
    OktaAuthModule
  ],
  providers: [ProductService,
    ProduceService,
  {provide: OKTA_CONFIG, useValue: {  oktaAuth }}],
  bootstrap: [AppComponent]
})
export class AppModule {
  
 }
