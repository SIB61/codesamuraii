import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApprovalHomePageComponent } from './approval-home-page.component';

describe('ApprovalHomePageComponent', () => {
  let component: ApprovalHomePageComponent;
  let fixture: ComponentFixture<ApprovalHomePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApprovalHomePageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApprovalHomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
