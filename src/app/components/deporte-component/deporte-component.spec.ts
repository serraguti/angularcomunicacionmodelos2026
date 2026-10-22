import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DeporteComponent } from './deporte-component';

describe('DeporteComponent', () => {
  let component: DeporteComponent;
  let fixture: ComponentFixture<DeporteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DeporteComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DeporteComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
