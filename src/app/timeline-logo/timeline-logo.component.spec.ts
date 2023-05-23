import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimelineLogoComponent } from './timeline-logo.component';

describe('TimelineLogoComponent', () => {
  let component: TimelineLogoComponent;
  let fixture: ComponentFixture<TimelineLogoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimelineLogoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TimelineLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
