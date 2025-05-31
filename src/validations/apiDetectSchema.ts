import {z} from "zod";

export const ApiDetectSchema = z.object({
  sentence: z.string().nonempty(),
})
