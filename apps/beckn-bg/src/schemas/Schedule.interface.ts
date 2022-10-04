import DurationInterface from './Duration.interface';

export default interface ScheduleInterface {
  frequency: DurationInterface;
  holidays: ReadonlyArray<Date>;
  times: ReadonlyArray<Date>;
}
