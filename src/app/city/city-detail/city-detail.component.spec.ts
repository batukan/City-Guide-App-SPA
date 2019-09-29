import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CityDetailComponent } from './city-detail.component';

describe('CityDetailComponent', () => {
  let component: CityDetailComponent;
  let fixture: ComponentFixture<CityDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CityDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CityDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
