import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurFarmPageComponent } from './our-farm-page.component';

describe('OurFarmPageComponent', () => {
  let component: OurFarmPageComponent;
  let fixture: ComponentFixture<OurFarmPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OurFarmPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OurFarmPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
