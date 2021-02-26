import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PasswordConfirmationLinkComponent } from './password-confirmation-link.component';

describe('PasswordConfirmationLinkComponent', () => {
  let component: PasswordConfirmationLinkComponent;
  let fixture: ComponentFixture<PasswordConfirmationLinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PasswordConfirmationLinkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PasswordConfirmationLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
