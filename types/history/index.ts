import { z } from "zod";

export const BarSchema = z.object({
  priceUsd: z.coerce.number(),
  time: z.coerce.number(),
});

export type Bar = z.infer<typeof BarSchema>;
