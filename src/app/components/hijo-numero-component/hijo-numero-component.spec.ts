import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HijoNumeroComponent } from './hijo-numero-component';

describe('HijoNumeroComponent', () => {
  let component: HijoNumeroComponent;
  let fixture: ComponentFixture<HijoNumeroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HijoNumeroComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HijoNumeroComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
