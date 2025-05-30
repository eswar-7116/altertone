import {z} from "zod";

export const ApiTransformSchema = z.object({
  sentence: z.string().nonempty(),
  tone: z.string().nonempty(),
  role: z.string(),
  temperature: z.number().min(0.0).max(1.0),
})
