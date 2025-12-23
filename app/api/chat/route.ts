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

    // 4. Send to GPT-4 with the context from pinecone
    const systemPrompt = `You are Lucen, an expert engineering career coach. 
      Analyze the provided context about ABB and the user's question.
      Your response must be a JSON object that follows this structure: 
      - A root object with a single key "sections".
      - "sections" is an array of 2-3 objects.
      - Each object must have a "title", "subtitle", and "content" key.
      If the answer isn't in the context, create a section explaining that and offering general advice.
    
      Context:
      ${contextText}`;

    const completion = await openai.chat.completions.create({
      model: "gpt-4-turbo", // Or another model that supports JSON mode
      response_format: { type: "json_object" }, // This is the magic part!
      messages: [
        { role: "system", content: systemPrompt },
        { role: "user", content: message }
      ],
    });
    
    // The response is already a JSON string, so we parse it before sending
    const jsonResponse = JSON.parse(completion.choices[0].message.content || '{}');

    // Return the structured JSON directly to the frontend
    return NextResponse.json(jsonResponse);

    // return NextResponse.json({ 
    //   response: completion.choices[0].message.content 
    // });

  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json({ error: "Something went wrong." }, { status: 500 });
  }
}
