import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HijoCocheComponent } from './hijo-coche-component';

describe('HijoCocheComponent', () => {
  let component: HijoCocheComponent;
  let fixture: ComponentFixture<HijoCocheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HijoCocheComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HijoCocheComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
