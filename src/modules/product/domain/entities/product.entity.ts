import { Name } from '../value-objects/name.value-object';
import { PriceProps } from '../value-objects/price.value-object';

export interface ProductProps {
  name: Name;
  price: PriceProps;
}

export class ProductEntity {
  constructor(private props: ProductProps) {}

  get name(): Name {
    return this.props.name;
  }

  get price(): PriceProps {
    return this.props.price;
  }
}
