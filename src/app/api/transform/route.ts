import {ApiTransformSchema} from "@/validations/apiTransformSchema";
import generateAiResponse from "@/utils/ai";

export async function POST(req: Request): Promise<Response> {
  try {
    const body = await req.json();
    const result = ApiTransformSchema.safeParse(body);

    if (!result.success) {
      return Response.json({
        success: false,
        message: result.error.errors[0].message,
      }, {status: 400})
    }

    const data = result.data;

    const prompt = `You are a tone transformation assistant.

Task: Rewrite the following sentence to reflect the selected tone, optionally taking on the perspective or style of a specific role.

Sentence: "${data.sentence}"

Tone/Emotion: "${data.tone}"  
Role (optional): "${data.role}"  
Temperature: ${data.temperature} (0-1) (adjust your creativity based on this)

Requirements:
- Preserve the original meaning.
- Reflect the selected tone as naturally as possible.
- If a role is provided, write as if the person in that role would have said it.
- Keep it concise, no extra explanations or formatting.
- Return only the transformed sentence.

Now give the modified sentence without any qoutes.`

    const transformedText = await generateAiResponse(prompt)

    return Response.json({
      success: true,
      message: "Successfully generated the transformed sentence",
      data: transformedText,
    })
  } catch (error) {
    console.error(error)
    return Response.json({
      success: false,
      message: "Internal server error",
    }, {status: 500})
  }
}