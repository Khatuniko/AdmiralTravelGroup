import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainPgComponent } from './main-pg.component';

describe('MainPgComponent', () => {
  let component: MainPgComponent;
  let fixture: ComponentFixture<MainPgComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MainPgComponent]
    });
    fixture = TestBed.createComponent(MainPgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
