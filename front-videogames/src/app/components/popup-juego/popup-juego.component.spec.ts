import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupJuegoComponent } from './popup-juego.component';

describe('PopupJuegoComponent', () => {
  let component: PopupJuegoComponent;
  let fixture: ComponentFixture<PopupJuegoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopupJuegoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PopupJuegoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
