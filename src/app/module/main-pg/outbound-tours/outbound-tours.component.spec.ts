import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutboundToursComponent } from './outbound-tours.component';

describe('OutboundToursComponent', () => {
  let component: OutboundToursComponent;
  let fixture: ComponentFixture<OutboundToursComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OutboundToursComponent]
    });
    fixture = TestBed.createComponent(OutboundToursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
