import { ScalarType } from './types/scalar.enum';

export default interface ScalarInterface {
  type: ScalarType;
  value: number;
  estimated_value: number;
  computed_value: number;
  range: {
    min: number;
    max: number;
  };
  unit: string;
}
