import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { SwiperModule } from 'swiper/angular';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { MainComponent } from './components/main/main.component';
import { FooterComponent } from './components/footer/footer.component';
import { ContentComponent } from './components/content/content.component';
import { AnimalsComponent } from './components/animals/animals.component';
import { GlampingComponent } from './components/glamping/glamping.component';
import { ProductCategoryMenuComponent } from './components/merchandise/product-category-menu/product-category-menu.component';
import { ProductListComponent } from './components/merchandise/product-list/product-list.component';
import { ProductService } from './services/product.service';
import { CategoryMenuComponent } from './components/category-menu/category-menu.component';
import { ProductDetailsComponent } from './components/merchandise/product-details/product-details.component';
import { CartStatusComponent } from './components/merchandise/cart-status/cart-status.component';
import { CartDetailsComponent } from './components/merchandise/cart-details/cart-details.component';
import { ContactUsComponent } from './components/our-farm-page/contact-us/contact-us.component';
import { CheckoutComponent } from './components/merchandise/checkout/checkout.component';
import { LoginStatusComponent } from './components/security/login-status/login-status.component';
import { ProduceService } from './services/produce.service';
import { LambFormComponent } from './components/Produce/lamb-form/lamb-form.component';
import { ProduceFormComponent } from './components/Produce/produce-form/produce-form.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    FooterComponent,
    routingComponents,
    ContentComponent,
    AnimalsComponent,
    GlampingComponent,
    ProductCategoryMenuComponent,
    ProductListComponent,
    CategoryMenuComponent,
    ProductDetailsComponent,
    CartStatusComponent,
    CartDetailsComponent,
    ContactUsComponent,
    CheckoutComponent,
    LoginStatusComponent,
    LambFormComponent,
    ProduceFormComponent
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    SwiperModule,
    ReactiveFormsModule
  ],
  providers: [ProductService,ProduceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
