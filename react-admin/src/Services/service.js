//import axios from './node_modules/axios';
import axios from 'axios'

export default class Service {
  constructor() {
    this.url = 'https://market-api-rest.herokuapp.com/products';
  }

  async list() {
    try {
      let result = await axios.get(this.url);
      return result.data;
    } catch (ex) {
      throw ex.response.data;
    }
  }
}