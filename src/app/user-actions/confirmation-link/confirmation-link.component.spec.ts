import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmationLinkComponent } from './confirmation-link.component';

describe('ConfirmationLinkComponent', () => {
  let component: ConfirmationLinkComponent;
  let fixture: ComponentFixture<ConfirmationLinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfirmationLinkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmationLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
