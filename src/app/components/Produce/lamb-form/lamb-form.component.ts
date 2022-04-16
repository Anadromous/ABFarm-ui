import { Component, OnInit } from '@angular/core';
import { CartItem } from 'src/app/common/cart-item';
import { ItemCount } from 'src/app/common/item-count';
import { Produce } from 'src/app/common/produce';
import { Product } from 'src/app/common/product';
import { CartService } from 'src/app/services/cart.service';
import { ProduceService } from 'src/app/services/produce.service';

@Component({
  selector: 'app-lamb-form',
  templateUrl: './lamb-form.component.html',
  styleUrls: ['./lamb-form.component.scss']
})
export class LambFormComponent implements OnInit {
  produces: Produce[];
  totalPrice: number = 0;
  totalQuantity: number = 0;
  itemCounts: ItemCount[] = [];

  constructor(private produceService: ProduceService,
    private cartService: CartService) { }

  ngOnInit() {
    this.listProduces();
    this.reviewCartDetails();

  }
  //end ngonit

  reviewCartDetails() {
    //subscribe to cartService.totalQuantity
    this.cartService.totalQuantity.subscribe(
      totalQuantity => this.totalQuantity = totalQuantity
    ),
      //subscribe to cartService.totalPrice
      this.cartService.totalPrice.subscribe(
        totalPrice => this.totalPrice = totalPrice
      );
  }

  listProduces() {
    this.produceService.getProduceList(1).subscribe(
      data => {
        this.produces = data;
      }
    )
  }

  incrementQuantity(cartItem: CartItem) {
    this.cartService.addToCart(cartItem);
  }

  decrementQuantity(cartItem: CartItem) {
    this.cartService.decrementQuantity(cartItem);
  }

  addToItemsCount(){
    for (let i = 0; i < this.produces.length; i++) {
      //console.log("Here are the produces: "+produce.description);
      console.log("produces count: " + this.produces.length);
      this.itemCounts.push(new ItemCount(this.produces[i].id, 0));
    }
  }

  addToCart(produce: Produce) {
    produce.unitsInStock--;
    let product: Product = this.convertProduceToProduct(produce);
    console.log("Adding item to cart " + product.name);
    console.log("ItemCount: ==> " + this.itemCounts.length);
    const cartItem = new CartItem(product);
    this.cartService.addToCart(cartItem);
    //maintain local count
    this.addToItemCount(produce);
  }

  convertProduceToProduct(produce: Produce) {
    let product = new Product();
    product.id = produce.id;
    product.sku = produce.sku;
    product.unit = produce.unit;
    product.name = produce.name;
    product.description = produce.description;
    product.unitPrice = produce.unitPrice;
    product.imageUrl = produce.imageUrl;
    product.active = produce.active;
    product.unitsInStock = produce.unitsInStock;
    product.dateCreated = produce.dateCreated;
    product.lastUpdate = produce.lastUpdate;
    product.category = produce.category;
    return product;
  }

  remove(produce: Produce) {
    let product: Product = this.convertProduceToProduct(produce);
    const cartItem = new CartItem(product);
    this.cartService.remove
  }

  addToItemCount(produce: Produce) {
    let existsInItemCount: boolean = false;
    let existingItemCount: ItemCount = undefined;
  
    //test
    //let ic = new ItemCount("0", 10);
    //this.itemCounts.push(ic);
  
    if (this.itemCounts.length > 0) {
      // find the item in the array based on item id
      for(let i=0;i < this.itemCounts.length;i++){
        console.log("Value of i= "+i); 
        console.log("Items count: "+this.itemCounts[i].itemCount);
        if(this.itemCounts[i].itemId == produce.id){
          this.itemCounts[i].itemCount++;
        } 
      }
    }else{
      this.itemCounts.push(new ItemCount(produce.id, 1));
    }
  }
}

