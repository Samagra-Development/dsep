import DurationInterface from './Duration.interface';
import PriceInterface from './Price.interface';

export default interface QuotationInterface {
  price: PriceInterface;
  breakup: ReadonlyArray<{
    title: string;
    price: PriceInterface;
  }>;
  ttl: DurationInterface;
}
