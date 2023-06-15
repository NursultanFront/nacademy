import { type AxiosInstance } from 'axios';
import type { ProductInfo, Product } from './types';
import { BasicRest } from '../basic-rest';

export default class ProductRest extends BasicRest {
  private urlName = 'product';

  public constructor(endpoint: AxiosInstance) {
    super(endpoint);
  }

  public list() {
    return this.getRequest<ProductInfo>(this.urlName);
  }

  public getOneProduct(id: number) {
    return this.getRequest<Product>(`${this.urlName}/${id}`);
  }
}
