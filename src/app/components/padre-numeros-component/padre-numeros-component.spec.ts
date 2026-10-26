import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PadreNumerosComponent } from './padre-numeros-component';

describe('PadreNumerosComponent', () => {
  let component: PadreNumerosComponent;
  let fixture: ComponentFixture<PadreNumerosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PadreNumerosComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PadreNumerosComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
