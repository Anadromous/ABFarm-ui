import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FieldProjectsComponent } from './field-projects.component';

describe('FieldProjectsComponent', () => {
  let component: FieldProjectsComponent;
  let fixture: ComponentFixture<FieldProjectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FieldProjectsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FieldProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
