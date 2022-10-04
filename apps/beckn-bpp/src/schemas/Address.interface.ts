import FullAddressInterface from './FullAddress.interface';
import StructuredAddressInterface from './StructuredAddress.interface';

export default interface AddressInterface {
  address: FullAddressInterface | StructuredAddressInterface;
}
