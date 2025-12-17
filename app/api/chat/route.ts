// app/api/chat/route.ts
import { OpenAI } from "openai";
import { Pinecone } from "@pinecone-database/pinecone";
import { NextResponse } from "next/server";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const pc = new Pinecone({
  apiKey: process.env.PINECONE_API_KEY!,
});

export async function POST(req: Request) {
  try {
    const { message } = await req.json();

    // 1. Embed the user's question
    const embeddingResponse = await openai.embeddings.create({
      model: "text-embedding-3-small",
      input: message,
    });
    const embedding = embeddingResponse.data[0].embedding;

    // 2. Search Pinecone for relevant ABB info
    const index = pc.Index("lucen-company-data");
    const queryResponse = await index.namespace("abb-data").query({
      vector: embedding,
      topK: 3, // Get the top 3 most relevant facts
      includeMetadata: true,
    });

    // 3. Extract the text from the search results
    const contextText = queryResponse.matches
      .map((match) => match.metadata?.text)
      .join("\n\n");

    // 4. Send to GPT-4 with the context
    const completion = await openai.chat.completions.create({
      model: "gpt-4-turbo",
      messages: [
        {
          role: "system",
          content: `You are Lucen, an expert engineering career coach. 
          Use the following context about ABB to answer the student's question. 
          If the answer isn't in the context, say you don't have that specific data yet but offer general advice. 
          Can you split response between subtitle: blah blah "," content: blah blah 
          if you have multiple points to send out please have ";;" inbetween each set of subtitle/content for splitting purposes and keep ","
          
          Context Data:
          ${contextText}`
        },
        {
          role: "user",
          content: message
        }
      ],
    });

    return NextResponse.json({ 
      response: completion.choices[0].message.content 
    });

  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json(
      { error: "Something went wrong." }, 
      { status: 500 }
    );
  }
}
