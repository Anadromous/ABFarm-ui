import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Country } from 'src/app/common/country';
import { State } from 'src/app/common/state';
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
    
  constructor(private formBuilder: FormBuilder, private checkoutFormService: CheckoutformService) { }

  ngOnInit(): void {
    
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
        street: new FormControl('', 
              [Validators.required, 
              Validators.minLength(2), 
              CheckoutValidators.notOnlyWhitespace]),
        city:  new FormControl('', 
        [Validators.required, 
              Validators.minLength(2), 
              CheckoutValidators.notOnlyWhitespace]),
        state:   new FormControl('', 
              [Validators.required]),
        country:  new FormControl('', 
              [Validators.required]),
        zipCode:  new FormControl('', 
              [Validators.required, 
              Validators.minLength(2), 
              CheckoutValidators.notOnlyWhitespace])
      }),
      billingAddress: this.formBuilder.group({
        street: [''],
        city: [''],
        state: [''],
        country: [''],
        zipCode: ['']
      }),
      creditCard: this.formBuilder.group({
        cardType: [''],
        nameOnCard: [''],
        cardNumber: [''],
        securityCode: [''],
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

  //getters for form validation
  get firstName(){ return this.checkoutFormGroup.get('customer.firstName');}
  get lastName(){ return this.checkoutFormGroup.get('customer.lastName');}
  get email(){ return this.checkoutFormGroup.get('customer.email');}

  get shippingAddressStreet(){ return this.checkoutFormGroup.get('shippingAddress.street');}
  get shippingAddressCity(){ return this.checkoutFormGroup.get('shippingAddress.city');}
  get shippingAddressCountry(){ return this.checkoutFormGroup.get('shippingAddress.country');}
  get shippingAddressState(){ return this.checkoutFormGroup.get('shippingAddress.state');}
  get shippingAddressZipCode(){ return this.checkoutFormGroup.get('shippingAddress.zipCode');}
  
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

    if(this.checkoutFormGroup.invalid){
      this.checkoutFormGroup.markAllAsTouched;
    }

    console.log(this.checkoutFormGroup.get('customer').value);
    console.log("The email address is " + this.checkoutFormGroup.get('customer').value.email);
  }
}