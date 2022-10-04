import AddressInterface from './Address.interface';
import CircleInterface from './Circle.interface';
import CityInterface from './City.interface';
import CountryInterface from './Country.interface';
import DescriptorInterface from './Descriptor.interface';
import GPSInterface from './GSP.interface';
import TimeInterface from './Time.interface';

export default interface LocationInterface {
  id: string;
  descriptor: DescriptorInterface;
  gps: GPSInterface;
  address: AddressInterface;
  station_code: string;
  city: CityInterface;
  country: CountryInterface;
  circle: CircleInterface;
  polygon: string;
  _3dspace: string;
  time: TimeInterface;
}
