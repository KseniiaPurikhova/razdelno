import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForthcomingEventComponent } from './forthcoming-event.component';

describe('ForthcomingEventComponent', () => {
  let component: ForthcomingEventComponent;
  let fixture: ComponentFixture<ForthcomingEventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForthcomingEventComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ForthcomingEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
