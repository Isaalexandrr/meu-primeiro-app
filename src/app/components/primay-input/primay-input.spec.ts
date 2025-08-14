import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimayInput } from './primay-input';

describe('PrimayInput', () => {
  let component: PrimayInput;
  let fixture: ComponentFixture<PrimayInput>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrimayInput]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrimayInput);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
