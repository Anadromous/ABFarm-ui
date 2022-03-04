import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GlampingComponent } from './glamping.component';

describe('GlampingComponent', () => {
  let component: GlampingComponent;
  let fixture: ComponentFixture<GlampingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GlampingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GlampingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
