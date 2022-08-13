import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutLlamasComponent } from './about-llamas.component';

describe('AboutLlamasComponent', () => {
  let component: AboutLlamasComponent;
  let fixture: ComponentFixture<AboutLlamasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutLlamasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutLlamasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
