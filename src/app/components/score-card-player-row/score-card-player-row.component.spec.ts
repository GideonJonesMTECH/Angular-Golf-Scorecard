import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScoreCardPlayerRowComponent } from './score-card-player-row.component';

describe('ScoreCardTableRowComponent', () => {
  let component: ScoreCardPlayerRowComponent;
  let fixture: ComponentFixture<ScoreCardPlayerRowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScoreCardPlayerRowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScoreCardPlayerRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
