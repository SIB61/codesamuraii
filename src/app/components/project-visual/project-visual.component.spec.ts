import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectVisualComponent } from './project-visual.component';

describe('ProjectVisualComponent', () => {
  let component: ProjectVisualComponent;
  let fixture: ComponentFixture<ProjectVisualComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectVisualComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectVisualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
