import { z } from "zod";

export const CoinSchema = z.object({
  id: z.string(),
  rank: z.coerce.number(),
  symbol: z.string(),
  name: z.string(),
  supply: z.coerce.number(),
  maxSupply: z.coerce.number(),
  marketCapUsd: z.coerce.number(),
  volumeUsd24Hr: z.coerce.number(),
  priceUsd: z.coerce.number(),
  changePercent24Hr: z.coerce.number(),
  vwap24Hr: z.coerce.number(),
});

export type Coin = z.infer<typeof CoinSchema>;
