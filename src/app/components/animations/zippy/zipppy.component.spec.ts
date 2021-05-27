import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZipppyComponent } from './zipppy.component';

describe('ZippyComponent', () => {
  let component: ZipppyComponent;
  let fixture: ComponentFixture<ZipppyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZipppyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZipppyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
