import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScoreCardTableComponent } from './score-card-table.component';

describe('ScoreCardTableComponent', () => {
  let component: ScoreCardTableComponent;
  let fixture: ComponentFixture<ScoreCardTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScoreCardTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScoreCardTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
