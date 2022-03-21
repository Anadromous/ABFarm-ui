import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartItem } from 'src/app/common/cart-item';
import { Product } from 'src/app/common/product';
import { CartService } from 'src/app/services/cart.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-list',
  //templateUrl: './product-list.component.html',
  //templateUrl: './product-list-table.component.html',
  templateUrl: './product-list-grid.component.html',
  styleUrls: ['./product-list.component.scss']
})

export class ProductListComponent implements OnInit {

  products: Product[] = [];
  currentCategoryId: number = 1;
  currentCategoryName: string = "";
  
  constructor(private productService: ProductService, 
        private route: ActivatedRoute,
        private cartService: CartService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(() => {this.listProducts();});    
  }

  listProducts(){
      // get the "id" param string. convert string to a number using the "+" symbol
      this.currentCategoryId = +this.route.snapshot.paramMap.get('id')!;
      // get the "name" param string
      this.currentCategoryName = this.route.snapshot.paramMap.get('name')!;

    this.productService.getProductList(this.currentCategoryId).subscribe(
      (data: Product[]) => {
        this.products=data;
      }
    )
  }

  addToCart(theProduct: Product){
    console.log("Adding item to cart "+theProduct.name);
    const cartItem = new CartItem(theProduct);
    this.cartService.addToCart(cartItem);
  }
}
