import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PadreDeportesComponent } from './padre-deportes-component';

describe('PadreDeportesComponent', () => {
  let component: PadreDeportesComponent;
  let fixture: ComponentFixture<PadreDeportesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PadreDeportesComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PadreDeportesComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
