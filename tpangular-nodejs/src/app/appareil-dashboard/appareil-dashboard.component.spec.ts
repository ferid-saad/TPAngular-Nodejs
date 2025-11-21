import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppareilDashboardComponent } from './appareil-dashboard.component';

describe('AppareilDashboardComponent', () => {
  let component: AppareilDashboardComponent;
  let fixture: ComponentFixture<AppareilDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppareilDashboardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppareilDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
