// app/api/chat/route.ts
import { OpenAI } from "openai";
import { Pinecone } from "@pinecone-database/pinecone";
import { NextResponse } from "next/server";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});


export async function POST(req: Request) {
  try {
    const { message } = await req.json();

    const context = `
        ABB is a global technology leader in power and automation, formed from a 1988 merger of Swedish and Swiss firms (ASEA & Brown, Boveri), providing solutions for sustainable industry and energy, organized into four key areas: Electrification, Process Automation, Motion, and Robotics & Discrete Automation, serving industries from transportation to utilities with software-connected tech for efficiency
    `
    // 4. Send to GPT-4 with the context from pinecone
    const systemPrompt = `You are Lucen, an expert engineering career coach. 
      You are in the process of generating other content for the users question, but I
      want you to provide a generative title that runs based on the users question and company's 
      context, so that it helps with attention span while main content is generating. 
      Make response have 5 short snip its that it runs through and seperate it by ,

      Context:
      ${context}`;

    const completion = await openai.chat.completions.create({
      model: "gpt-4-turbo",
      messages: [
        { role: "system", content: systemPrompt },
        { role: "user", content: message }
      ],
    });
    
    return NextResponse.json({ 
      response: completion.choices[0].message.content 
    });

  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json({ error: "Something went wrong." }, { status: 500 });
  }
}
