import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';
import { FormsModule } from "@angular/forms";
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
    ProductDetailsComponent
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    SwiperModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
