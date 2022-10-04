import PersonInterface from './Person.interface';

export default interface OperatorInterface {
  person: PersonInterface;
  experience: {
    label: string;
    value: string;
    unit: string;
  };
}
