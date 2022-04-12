import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Produce } from 'src/app/common/produce';
import { ProduceService } from 'src/app/services/produce.service';

@Component({
  selector: 'app-lamb-page',
  templateUrl: './lamb-page.component.html',
  styleUrls: ['./lamb-page.component.scss']
})
export class LambPageComponent implements OnInit {

  produces: Produce[];
  
  constructor(private produceService: ProduceService) { }

  ngOnInit() {
    this.listProduces();
  }

  listProduces() {
    this.produceService.getProduceList(1).subscribe(
      data => {
        this.produces = data;
      }
    )
  }

}
