import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StarthangmanComponent } from './starthangman.component';

describe('StarthangmanComponent', () => {
  let component: StarthangmanComponent;
  let fixture: ComponentFixture<StarthangmanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StarthangmanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StarthangmanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
