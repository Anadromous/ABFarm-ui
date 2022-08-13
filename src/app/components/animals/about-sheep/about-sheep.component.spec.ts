import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutSheepComponent } from './about-sheep.component';

describe('AboutSheepComponent', () => {
  let component: AboutSheepComponent;
  let fixture: ComponentFixture<AboutSheepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutSheepComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutSheepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
