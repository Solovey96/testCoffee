import axios from "axios";

export default class CoffeAPI {
  static async getAll() {
    const response = await axios.get('https://random-data-api.com/api/coffee/random_coffee?size=20')
    return response.data
  }
}
