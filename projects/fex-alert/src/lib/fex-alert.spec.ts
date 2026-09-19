import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FexAlert } from './fex-alert';

describe('FexAlert', () => {
  let component: FexAlert;
  let fixture: ComponentFixture<FexAlert>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FexAlert],
    }).compileComponents();

    fixture = TestBed.createComponent(FexAlert);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
