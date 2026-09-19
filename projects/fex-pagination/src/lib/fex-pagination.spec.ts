import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FexPagination } from './fex-pagination';

describe('FexPagination', () => {
  let component: FexPagination;
  let fixture: ComponentFixture<FexPagination>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FexPagination],
    }).compileComponents();

    fixture = TestBed.createComponent(FexPagination);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
