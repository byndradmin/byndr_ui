import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessagesInfoComponent } from './messages-info.component';

describe('MessagesInfoComponent', () => {
  let component: MessagesInfoComponent;
  let fixture: ComponentFixture<MessagesInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MessagesInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MessagesInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
