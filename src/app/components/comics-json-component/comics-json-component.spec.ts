import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ComicsJsonComponent } from './comics-json-component';

describe('ComicsJsonComponent', () => {
  let component: ComicsJsonComponent;
  let fixture: ComponentFixture<ComicsJsonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ComicsJsonComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ComicsJsonComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
