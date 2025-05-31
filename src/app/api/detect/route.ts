import generateAiResponse from "@/utils/ai";
import {ApiDetectSchema} from "@/validations/apiDetectSchema";

export async function POST(req: Request): Promise<Response> {
  try {
    const body = await req.json();
    const result = ApiDetectSchema.safeParse(body);

    if (!result.success) {
      return Response.json({
        success: false,
        message: result.error.errors[0].message,
      }, {status: 400})
    }

    const {sentence} = result.data;

    const prompt = `You are a tone detection assistant. Analyze the tone or emotion of the following sentence.

Sentence:
\`\`\`
${sentence}
\`\`\`

Return only the most appropriate tone ID from the following list based on the tone expressed in the sentence:
\`\`\`
professional, casual, happy, serious, friendly, confident, sad, angry, pity, courage, disgust, scary, romantic, humour, assertive, request, mad, sarcastic, inspirational, optimistic, pessimistic
\`\`\`

- Output format: a **single string**, e.g., \`"happy"\`
- Do not include explanations, scores, or formatting—**only the tone ID**
- Choose the most **dominant** tone in the sentence
- Be strict: only one ID must be returned`

    const tone = await generateAiResponse(prompt)

    return Response.json({
      success: true,
      message: "Successfully generated the transformed sentence",
      data: tone,
    })
  } catch (error) {
    console.error(error)
    return Response.json({
      success: false,
      message: "Internal server error",
    }, {status: 500})
  }
}