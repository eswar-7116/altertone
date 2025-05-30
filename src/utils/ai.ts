import {GoogleGenAI} from "@google/genai";

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
})

export default async function generateAiResponse(prompt: string): Promise<string> {
  const aiResponse = await ai.models.generateContent({
    model: "gemini-2.0-flash",
    contents: prompt,
  })

  return aiResponse.candidates?.[0]?.content?.parts?.[0]?.text || "";
}