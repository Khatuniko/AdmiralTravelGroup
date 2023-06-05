import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocalToursComponent } from './local-tours.component';

describe('LocalToursComponent', () => {
  let component: LocalToursComponent;
  let fixture: ComponentFixture<LocalToursComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LocalToursComponent]
    });
    fixture = TestBed.createComponent(LocalToursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
