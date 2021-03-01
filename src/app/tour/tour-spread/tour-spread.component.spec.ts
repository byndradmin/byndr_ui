import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TourSpreadComponent } from './tour-spread.component';

describe('TourSpreadComponent', () => {
  let component: TourSpreadComponent;
  let fixture: ComponentFixture<TourSpreadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TourSpreadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TourSpreadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
