import OpenAI from "openai";
import { NextResponse } from "next/server";
import { resumeData } from "../../../../data/resumeData";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req) {
  const { message } = await req.json();

  const systemPrompt = `
  You are a personal assistant chatbot for ${resumeData.name}.
  You know everything about their resume.
  If users ask about experience, skills, education, or projects, answer based on the following data:
  ${JSON.stringify(resumeData)}
  Respond in a friendly and concise manner.
  `;

  const completion = await openai.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [
      { role: "system", content: systemPrompt },
      { role: "user", content: message },
    ],
  });

  const reply = completion.choices[0].message.content;
  return NextResponse.json({ reply });
}
