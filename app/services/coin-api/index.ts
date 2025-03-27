import { Coin, CoinSchema } from "@/types/coin";
import { BarSchema } from "@/types/history";
import { Bar } from "recharts";
import axios from "axios";

class CoinApi {
  private limit = 35;

  async getMany(page: number, search: string) {
    const url = `https://api.coincap.io/v2/assets?search=${search}&limit=${
      this.limit
    }&offset=${page * this.limit}`;

    return axios
      .get(url)
      .then((res) => CoinSchema.array().parse(res.data.data));
  }

  async getOne(id: string) {
    return axios
      .get<{ data: Array<Coin> }>(`https://api.coincap.io/v2/assets/${id}`)
      .then((res) => CoinSchema.parse(res.data.data));
  }

  async getHistory(id: string) {
    return axios
      .get<{ data: Array<Bar> }>(
        `https://api.coincap.io/v2/assets/${id}/history?interval=d1`
      )
      .then((res) => BarSchema.array().parse(res.data.data));
  }
}

const coinApi = new CoinApi();

export { coinApi };
