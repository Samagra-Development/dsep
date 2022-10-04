import AddressInterface from './Address.interface';
import OrganizationInterface from './Organization.interface';
import TimeInterface from './Time.interface';

export default interface BillingInterface {
  name: string;
  organization: OrganizationInterface;
  address: AddressInterface;
  email: string;
  phone: string;
  time: TimeInterface;
  tax_number: string;
  created_at: Date;
}
