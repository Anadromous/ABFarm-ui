import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EmailService } from 'src/app/services/email.service';
import { Contact } from 'src/app/common/contact';
import { Router } from '@angular/router';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  contactForm: UntypedFormGroup;

  constructor(private http: HttpClient,
    private emailService: EmailService,
    private formBuilder: UntypedFormBuilder,
    private router: Router) {

    // this.contactForm = this.formBuilder.group({
    //    name: [''],
    //    email: [''],
    //    subject: [''],
    //    message: ['']
    //  });
      
       this.contactForm = this.formBuilder.group({
         name: ['', [Validators.required, Validators.maxLength(15), Validators.pattern("^[a-zA-Z]+$")]],
         email: ['', [Validators.required, Validators.email]],
         subject: ['', [Validators.required]],
         message: ['', [Validators.required]]
       });
      
    }    

  ngOnInit() {

  }

   get name() { return this.contactForm.get('name'); }
   get email() { return this.contactForm.get('email'); }
   get subject() { return this.contactForm.get('subject'); }
   get message() { return this.contactForm.get('message'); }

  sendNotification() {
    //console.log(this.contactForm.controls['name'].value);
    let contact = new Contact();
    contact.name= this.contactForm.controls['name'].value;
    contact.email = this.contactForm.controls['email'].value;
    contact.subject = this.contactForm.controls['subject'].value;
    contact.message = this.contactForm.controls['message'].value;

    this.emailService.sendContactEmail(contact).subscribe({
      next: response => {
        contact = response;
        console.log("===>sending Contact for: ")
        this.contactForm.reset();
        this.router.navigateByUrl("/app-main");
      },
      error: err => {
        console.log(`There was an error: ${err.message}`);
        this.contactForm.reset();
        this.router.navigateByUrl("/app-main");

      }
    }
    );
  }
}
