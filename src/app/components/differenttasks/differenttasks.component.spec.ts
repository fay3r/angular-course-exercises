import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DifferenttasksComponent } from './differenttasks.component';

describe('DifferenttasksComponent', () => {
  let component: DifferenttasksComponent;
  let fixture: ComponentFixture<DifferenttasksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DifferenttasksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DifferenttasksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
