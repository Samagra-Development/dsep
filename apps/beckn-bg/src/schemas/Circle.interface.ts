import GPSInterface from './GSP.interface';
import ScalarInterface from './Scalar.interface';

export default interface CircleInterface {
  gps: GPSInterface;
  radius: ScalarInterface;
  //both the above properties are required
}
