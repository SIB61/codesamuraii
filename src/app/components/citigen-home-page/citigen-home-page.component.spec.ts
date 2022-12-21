import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CitigenHomePageComponent } from './citigen-home-page.component';

describe('CitigenHomePageComponent', () => {
  let component: CitigenHomePageComponent;
  let fixture: ComponentFixture<CitigenHomePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CitigenHomePageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CitigenHomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
