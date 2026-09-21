import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FexPlatformCore } from './fex-platform-core';

describe('FexPlatformCore', () => {
  let component: FexPlatformCore;
  let fixture: ComponentFixture<FexPlatformCore>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FexPlatformCore],
    }).compileComponents();

    fixture = TestBed.createComponent(FexPlatformCore);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
