import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupCompanyComponent } from './popup-company.component';

describe('PopupCompanyComponent', () => {
  let component: PopupCompanyComponent;
  let fixture: ComponentFixture<PopupCompanyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopupCompanyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PopupCompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
