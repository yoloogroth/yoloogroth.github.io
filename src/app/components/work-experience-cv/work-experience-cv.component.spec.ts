import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkExperienceCvComponent } from './work-experience-cv.component';

describe('WorkExperienceCvComponent', () => {
  let component: WorkExperienceCvComponent;
  let fixture: ComponentFixture<WorkExperienceCvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkExperienceCvComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorkExperienceCvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
