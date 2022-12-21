import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExecutiveHomePageComponent } from './executive-home-page.component';

describe('ExecutiveHomePageComponent', () => {
  let component: ExecutiveHomePageComponent;
  let fixture: ComponentFixture<ExecutiveHomePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExecutiveHomePageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExecutiveHomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
