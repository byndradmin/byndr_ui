import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TourPopupComponent } from './tour-popup.component';

describe('TourPopupComponent', () => {
  let component: TourPopupComponent;
  let fixture: ComponentFixture<TourPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TourPopupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TourPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
