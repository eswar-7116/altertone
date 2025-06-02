import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY as string,
});

export default async function generateAiResponse(prompt: string): Promise<string> {
  const retryDelay = 800;

  try {
    const aiResponse = await ai.models.generateContent({
      model: "gemini-2.0-flash",
      contents: prompt,
    });

    return aiResponse.candidates?.[0]?.content?.parts?.[0]?.text ?? "";
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    if (error?.error?.code === 503) {
      console.warn("503 Service Unavailable. Retrying once after 1s...");
      await new Promise((resolve) => setTimeout(resolve, retryDelay));

      // Retry once
      const aiResponse = await ai.models.generateContent({
        model: "gemini-2.0-flash",
        contents: prompt,
      });

      return aiResponse.candidates?.[0]?.content?.parts?.[0]?.text ?? "";
    }
    throw error;
  }
}