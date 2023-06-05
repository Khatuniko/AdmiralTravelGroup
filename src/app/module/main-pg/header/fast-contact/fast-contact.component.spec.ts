import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FastContactComponent } from './fast-contact.component';

describe('FastContactComponent', () => {
  let component: FastContactComponent;
  let fixture: ComponentFixture<FastContactComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FastContactComponent]
    });
    fixture = TestBed.createComponent(FastContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
