import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutGoatsComponent } from './about-goats.component';

describe('AboutGoatsComponent', () => {
  let component: AboutGoatsComponent;
  let fixture: ComponentFixture<AboutGoatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutGoatsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutGoatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
