import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ComicsSimpleComponent } from './comics-simple-component';

describe('ComicsSimpleComponent', () => {
  let component: ComicsSimpleComponent;
  let fixture: ComponentFixture<ComicsSimpleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ComicsSimpleComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ComicsSimpleComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
