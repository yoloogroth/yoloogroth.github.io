import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AyCComponent } from './ay-c.component';

describe('AyCComponent', () => {
  let component: AyCComponent;
  let fixture: ComponentFixture<AyCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AyCComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AyCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
