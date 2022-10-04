import { ACTIONS } from './types/actions.enum';
import CityInterface from './City.interface';
import CountryInterface from './Country.interface';
import DomainInterface from './Domain.interface';

export default interface ContextInterface {
  domain: DomainInterface;
  country: CountryInterface;
  city: CityInterface;
  action: ACTIONS;
  core_version: string;
  bap_id: string;
  bap_uri: string;
  bpp_id?: string;
  bpp_uri?: string;
  transaction_id: string;
  message_id: string;
  timestamp: Date;
  key?: string;
  ttl?: string;
}
