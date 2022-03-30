import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Country } from 'src/app/common/country';
import { Order } from 'src/app/common/order';
import { OrderItem } from 'src/app/common/order-item';
import { Purchase } from 'src/app/common/purchase';
import { State } from 'src/app/common/state';
import { CartService } from 'src/app/services/cart.service';
import { CheckoutService } from 'src/app/services/checkout.service';
import { CheckoutformService } from 'src/app/services/checkoutform.service';
import { CheckoutValidators } from 'src/app/validators/checkout-validators';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})

export class CheckoutComponent implements OnInit {
  checkoutFormGroup: FormGroup;
  totalPrice: number = 0;
  totalQuantity: number = 0;
  creditcardYears: number[]=[];
  creditcardMonths: number[]=[];
  countries: Country[] = [];
  states: State[] = [];
  shippingAddressStates: State[] = [];
  billingAddressStates: State[] = [];
  defaultCountry: string = "US";
    
  constructor(private formBuilder: FormBuilder, 
              private checkoutFormService: CheckoutformService,
              private cartService: CartService,
              private checkoutService: CheckoutService,
              private router: Router) { }

  ngOnInit(): void {

    this.reviewCartDetails();
    
    this.checkoutFormGroup = this.formBuilder.group({
      customer: this.formBuilder.group({
        firstName: new FormControl('', 
                              [Validators.required, 
                               Validators.minLength(2), 
                               CheckoutValidators.notOnlyWhitespace]),

        lastName:  new FormControl('', 
                              [Validators.required, 
                               Validators.minLength(2), 
                               CheckoutValidators.notOnlyWhitespace]),
                               
        email: new FormControl('',
                              [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')])
      }),
      shippingAddress: this.formBuilder.group({
        street: new FormControl('', [Validators.required, Validators.minLength(2), 
                                     CheckoutValidators.notOnlyWhitespace]),
        city: new FormControl('', [Validators.required, Validators.minLength(2), 
                                   CheckoutValidators.notOnlyWhitespace]),
        state: new FormControl('', [Validators.required]),
        country: new FormControl('', [Validators.required]),
        zipCode: new FormControl('', [Validators.required, Validators.minLength(2), 
                                      CheckoutValidators.notOnlyWhitespace])
      }),
      billingAddress: this.formBuilder.group({
        street: new FormControl('', [Validators.required, Validators.minLength(2), 
                                     CheckoutValidators.notOnlyWhitespace]),
        city: new FormControl('', [Validators.required, Validators.minLength(2), 
                                   CheckoutValidators.notOnlyWhitespace]),
        state: new FormControl('', [Validators.required]),
        country: new FormControl('', [Validators.required]),
        zipCode: new FormControl('', [Validators.required, Validators.minLength(2), 
                                      CheckoutValidators.notOnlyWhitespace])
      }),
      creditCard: this.formBuilder.group({
        cardType: new FormControl('', [Validators.required]),
        nameOnCard:  new FormControl('', [Validators.required, Validators.minLength(2), 
                                          CheckoutValidators.notOnlyWhitespace]),
        cardNumber: new FormControl('', [Validators.required, Validators.pattern('[0-9]{16}')]),
        securityCode: new FormControl('', [Validators.required, Validators.pattern('[0-9]{3}')]),
        expirationMonth: [''],
        expirationYear: ['']
      })
    });

    //populate credit card months and years
    const startMonth: number = new Date().getMonth()+1;

    this.checkoutFormService.getCreditCardMonths(startMonth).subscribe(
      data => {
        console.log("Retrieved credit card months " +JSON.stringify(data));
        this.creditcardMonths=data;
      }
    ); 

    this.checkoutFormService.getCreditCardYears().subscribe(
      data => {
        console.log("Retrieved credit card years: " +JSON.stringify(data));
        this.creditcardYears=data;
      }
    );
    //populate Countries
    this.checkoutFormService.getCountries().subscribe(
      data => {
        //console.log("Retrieved countries "+JSON.stringify(data));
        this.countries = data;
      }
    );
    this.checkoutFormService.getStates(this.defaultCountry).subscribe(
      data => {
          this.shippingAddressStates = data; 
          this.billingAddressStates = data;
    }
    );
  }
  //end ngInit

  reviewCartDetails() {
    //subscribe to cartService.totalQuantity
    this.cartService.totalQuantity.subscribe(
      totalQuantity => this.totalQuantity = totalQuantity
    );
    //subscribe to cartService.totalPrice
    this.cartService.totalPrice.subscribe(
      totalPrice => this.totalPrice = totalPrice
    );
  }  

  //getters for form validation
  get firstName() { return this.checkoutFormGroup.get('customer.firstName'); }
  get lastName() { return this.checkoutFormGroup.get('customer.lastName'); }
  get email() { return this.checkoutFormGroup.get('customer.email'); }

  get shippingAddressStreet() { return this.checkoutFormGroup.get('shippingAddress.street'); }
  get shippingAddressCity() { return this.checkoutFormGroup.get('shippingAddress.city'); }
  get shippingAddressState() { return this.checkoutFormGroup.get('shippingAddress.state'); }
  get shippingAddressZipCode() { return this.checkoutFormGroup.get('shippingAddress.zipCode'); }
  get shippingAddressCountry() { return this.checkoutFormGroup.get('shippingAddress.country'); }

  get billingAddressStreet() { return this.checkoutFormGroup.get('billingAddress.street'); }
  get billingAddressCity() { return this.checkoutFormGroup.get('billingAddress.city'); }
  get billingAddressState() { return this.checkoutFormGroup.get('billingAddress.state'); }
  get billingAddressZipCode() { return this.checkoutFormGroup.get('billingAddress.zipCode'); }
  get billingAddressCountry() { return this.checkoutFormGroup.get('billingAddress.country'); }

  get creditCardType() { return this.checkoutFormGroup.get('creditCard.cardType'); }
  get creditCardNameOnCard() { return this.checkoutFormGroup.get('creditCard.nameOnCard'); }
  get creditCardNumber() { return this.checkoutFormGroup.get('creditCard.cardNumber'); }
  get creditCardSecurityCode() { return this.checkoutFormGroup.get('creditCard.securityCode'); }
  
  copyShippingAddressToBillingAddress(event) {

    if (event.target.checked) {
      this.checkoutFormGroup.controls['billingAddress']
            .setValue(this.checkoutFormGroup.controls['shippingAddress'].value);
            this.billingAddressStates = this.shippingAddressStates;
    }
    else {
      this.checkoutFormGroup.controls['billingAddress'].reset();
      this.billingAddressStates = [];
    }    
  }

  handleMonthsAndYears(){
    const creditcardFormGroup = this.checkoutFormGroup.get('creditCard');
    const currentYear:number = new Date().getFullYear();
    const selectedYear: number = Number(creditcardFormGroup.value.expirationYear);
    //if current year = selected year, start with current month
    let startMonth: number;
    if(currentYear === selectedYear){
      startMonth = new Date().getMonth()+1;
    }
    else{
      startMonth = 1;
    }
    this.checkoutFormService.getCreditCardMonths(startMonth).subscribe(
      data => {
        console.log("Retrieved credit card months: "+ JSON.stringify(data));
        this.creditcardMonths = data;
      }
    )
  }

  getStates(formGroupName: string) {

    const formGroup = this.checkoutFormGroup.get(formGroupName);

    const countryCode = formGroup.value.country.code;
    const countryName = formGroup.value.country.name;

    console.log("FormGroupName: "+formGroup);
    console.log(`${formGroupName} country code: ${countryCode}`);
    console.log(`${formGroupName} country name: ${countryName}`);

    this.checkoutFormService.getStates(countryCode).subscribe(
      data => {

        if (formGroupName === 'shippingAddress') {
          this.shippingAddressStates = data; 
        }
        else {
          this.billingAddressStates = data;
        }

        // select first item by default
        formGroup.get('state').setValue(data[0]);
      }
    );
  }

  onSubmit() {
    console.log("Handling the submit button");

    if (this.checkoutFormGroup.invalid) {
      this.checkoutFormGroup.markAllAsTouched();
      return;
    }

    console.log(this.checkoutFormGroup.get('customer').value);
    console.log("The email address is " + this.checkoutFormGroup.get('customer').value.email);  
    console.log("The shipping address country is " + this.checkoutFormGroup.get('shippingAddress').value.country.name);
    console.log("The shipping address state is " + this.checkoutFormGroup.get('shippingAddress').value.state.name);
  
    //setup Order
    let order = new Order();
    order.totalPrice = this.totalPrice;
    order.totalQuantity = this.totalQuantity;

    //get cartItems
    const cartItems = this.cartService.cartItems;

    //create orderItems from cartItems
    //long way (as an example...)
    /*let orderItems: OrderItem[];
    for(let i=0; i<cartItems.length; i++){
      orderItems[i] = new OrderItem(cartItems[i]);
    }*/
    //short way using map
    let orderItems: OrderItem[] = cartItems.map(tempCartItem => new OrderItem(tempCartItem));

    //set up purchase
    let purchase = new Purchase();

    //populate purchase - customer
    purchase.customer = this.checkoutFormGroup.controls['customer'].value;

    //populate purchase with shippingAddress
    purchase.shippingAddress = this.checkoutFormGroup.controls['shippingAddress'].value;
    const shippingState: State = JSON.parse(JSON.stringify(purchase.shippingAddress.state));
    const shippingCountry: State = JSON.parse(JSON.stringify(purchase.shippingAddress.country));
    purchase.shippingAddress.country = shippingCountry.name;
    

    //populate purchase with billingAddress
    purchase.billingAddress = this.checkoutFormGroup.controls['billingAddress'].value;
    const billingState: State = JSON.parse(JSON.stringify(purchase.billingAddress.state));
    const billingCountry: State = JSON.parse(JSON.stringify(purchase.billingAddress.country));
    purchase.billingAddress.country = billingCountry.name;
    
    //populate purchase with order and orderItems
    purchase.order = order;
    purchase.orderItems = orderItems;

    //call Rest API via the checkoutService
    this.checkoutService.placeOrder(purchase).subscribe({      
        next: response => {
          alert('Thank you for your order.\nOrder Tracking Number: ${response.orderTrackingNumber}');
          //reset cart
          this.resetCart();
        },
        error: err => {
          alert('There was an error: ${error.message}');
        }
      }
    );
  }
  
  resetCart() {
    //reset cart data
    this.cartService.cartItems = [];
    this.cartService.totalPrice.next(0);
    this.cartService.totalQuantity.next(0);

    //reset form data
    this.checkoutFormGroup.reset();

    //navigate back to products page
    this.router.navigateByUrl("/products");
  }
}
