import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackgroundBigTextComponent } from './background-big-text.component';

describe('BackgroundBigTextComponent', () => {
  let component: BackgroundBigTextComponent;
  let fixture: ComponentFixture<BackgroundBigTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BackgroundBigTextComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BackgroundBigTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
