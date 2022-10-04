import AgentInterface from './Agent.interface';
import ContactInterface from './Contact.interface';
import DescriptorInterface from './Descriptor.interface';
import FulfillmentAuthorizationInterface from './FulfillmentAuthorization.interface';
import LocationInterface from './Location.interface';
import PersonInterface from './Person.interface';
import RateableInterface from './Rateable.interface';
import StateInterface from './State.interface';
import TagsInterface from './Tags.interface';
import TimeInterface from './Time.interface';
import VehicleInterface from './Vehicle.interface';

export default interface FulfillmentInterface {
  id: string;
  type: string;
  provider_id: string;
  rating: string;
  state: StateInterface;
  tracking: boolean;
  customer: {
    person: PersonInterface;
    contact: ContactInterface;
  };
  agent: AgentInterface;
  person: PersonInterface;
  contact: ContactInterface;
  vehicle: VehicleInterface;
  start: {
    location: LocationInterface;
    time: TimeInterface;
    instructions: DescriptorInterface;
    contact: ContactInterface;
    person: PersonInterface;
    authorization: FulfillmentAuthorizationInterface;
  };
  end: {
    location: LocationInterface;
    time: TimeInterface;
    instructions: DescriptorInterface;
    contact: ContactInterface;
    person: PersonInterface;
    authorization: FulfillmentAuthorizationInterface;
  };
  rateable: RateableInterface;
  tags: [TagsInterface];
}
