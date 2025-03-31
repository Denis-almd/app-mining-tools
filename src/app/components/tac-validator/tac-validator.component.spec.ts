import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TacValidatorComponent } from './tac-validator.component';

describe('TacValidatorComponent', () => {
  let component: TacValidatorComponent;
  let fixture: ComponentFixture<TacValidatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TacValidatorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TacValidatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
