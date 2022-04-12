import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LambFormComponent } from './lamb-form.component';

describe('LambFormComponent', () => {
  let component: LambFormComponent;
  let fixture: ComponentFixture<LambFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LambFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LambFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
