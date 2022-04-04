import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-lamb-page',
  templateUrl: './lamb-page.component.html',
  styleUrls: ['./lamb-page.component.scss']
})
export class LambPageComponent implements OnInit {

  produceFormGroup: FormGroup;
  constructor() { }

  ngOnInit(): void {
  }

}
