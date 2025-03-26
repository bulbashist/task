import { z } from "zod";

export const UserSchema = z.object({
  login: z.string().min(8),
  password: z.string().min(8),
});

export type User = z.infer<typeof UserSchema>;
