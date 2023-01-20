import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcceptanceGuideComponent } from './acceptance-guide.component';

describe('FractionInfoComponent', () => {
  let component: AcceptanceGuideComponent;
  let fixture: ComponentFixture<AcceptanceGuideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcceptanceGuideComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AcceptanceGuideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
