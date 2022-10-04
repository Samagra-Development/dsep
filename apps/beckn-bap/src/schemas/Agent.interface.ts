import ContactInterface from './Contact.interface';
import PersonInterface from './Person.interface';
import RateableInterface from './Rateable.interface';

export default interface AgentInterface {
  person: PersonInterface;
  Contact: ContactInterface;
  rateable: RateableInterface;
}
