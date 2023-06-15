import { type AxiosInstance } from 'axios';
import { type Product } from './types';
import { BasicRest } from '../basic-rest';

export default class ProductRest extends BasicRest {
  private urlName = 'character';

  public constructor(endpoint: AxiosInstance) {
    super(endpoint);
  }

  public list() {
    return this.getRequest<Product>(this.urlName);
  }

  public searchName(value?: string, params?: { status: string }) {
    return this.getRequest<Product>(`${this.urlName}/?name=${value}`, params);
  }

  public getOneCharacter(id: number) {
    return this.getRequest<Product>(`${this.urlName}/${id}`);
  }
}
