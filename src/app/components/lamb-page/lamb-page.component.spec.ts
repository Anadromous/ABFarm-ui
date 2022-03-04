import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LambPageComponent } from './lamb-page.component';

describe('LambPageComponent', () => {
  let component: LambPageComponent;
  let fixture: ComponentFixture<LambPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LambPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LambPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
