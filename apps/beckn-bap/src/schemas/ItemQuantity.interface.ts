import ScalarInterface from './Scalar.interface';

export default interface ItemQuantityInterface {
  allocated: {
    count: number;
    measure: ScalarInterface;
  };
  available: {
    count: number;
    measure: ScalarInterface;
  };
  maximum: {
    count: number;
    measure: ScalarInterface;
  };
  minimum: {
    count: number;
    measure: ScalarInterface;
  };
  selected: {
    count: number;
    measure: ScalarInterface;
  };
}
