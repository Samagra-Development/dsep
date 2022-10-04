import DurationInterface from './Duration.interface';
import ScheduleInterface from './Schedule.interface';

export default interface TimeInterface {
  label: string;
  timestamp: Date;
  duration: DurationInterface;
  range: {
    start: Date;
    end: Date;
  };
  days: string;
  schedule: ScheduleInterface;
}
