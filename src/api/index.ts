import axios from 'axios';
import ProductRest from './product';
class Api {
  private readonly endpoint;
  public product;

  public constructor() {
    this.endpoint = Api.createEndpoint();
    this.product = new ProductRest(this.endpoint);
  }

  private static createEndpoint() {
    return axios.create({
      baseURL: 'https://dummyjson.com',
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
}

export const api = new Api();
