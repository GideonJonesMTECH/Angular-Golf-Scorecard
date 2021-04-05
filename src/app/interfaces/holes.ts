import { TeeBoxes } from './tee-boxes';

export interface Holes {
  hole: Number;
  courseHoleId: Number;
  courseId: Number;
  teeBoxes: Array<TeeBoxes>;
}
