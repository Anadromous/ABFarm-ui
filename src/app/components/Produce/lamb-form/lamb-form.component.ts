import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Produce } from 'src/app/common/produce';
import { CartService } from 'src/app/services/cart.service';
import { CheckoutService } from 'src/app/services/checkout.service';
import { CheckoutformService } from 'src/app/services/checkoutform.service';
import { ProduceService } from 'src/app/services/produce.service';

@Component({
  selector: 'app-lamb-form',
  templateUrl: './lamb-form.component.html',
  styleUrls: ['./lamb-form.component.scss']
})
export class LambFormComponent implements OnInit {
  produces: Produce[];
  checkoutFormGroup: FormGroup;
  totalPrice: number = 0;
  totalQuantity: number = 0;

  constructor(private produceService: ProduceService,
    private formBuilder: FormBuilder,
    private checkoutFormService: CheckoutformService,
    private cartService: CartService,
    private checkoutService: CheckoutService,
    private router: Router) { }

  ngOnInit() {
    this.listProduces();
    this.reviewCartDetails();

    this.checkoutFormGroup = this.formBuilder.group({
      customer: this.formBuilder.group({
        firstName: new FormControl('',
          [Validators.min(0)])
      }),
    });
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

}