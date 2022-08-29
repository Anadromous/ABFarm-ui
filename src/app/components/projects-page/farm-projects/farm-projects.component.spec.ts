import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmProjectsComponent } from './farm-projects.component';

describe('FarmProjectsComponent', () => {
  let component: FarmProjectsComponent;
  let fixture: ComponentFixture<FarmProjectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FarmProjectsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FarmProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
