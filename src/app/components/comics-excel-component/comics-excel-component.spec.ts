import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ComicsExcelComponent } from './comics-excel-component';

describe('ComicsExcelComponent', () => {
  let component: ComicsExcelComponent;
  let fixture: ComponentFixture<ComicsExcelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ComicsExcelComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ComicsExcelComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
