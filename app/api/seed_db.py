import json
import os
from openai import OpenAI
from pinecone import Pinecone, ServerlessSpec
from dotenv import load_dotenv

# 1. Load Environment Variables
load_dotenv()  # Ensure you have a .env file with your keys
OPENAI_API_KEY = os.getenv("OPENAI_API_KEY")
PINECONE_API_KEY = os.getenv("PINECONE_API_KEY")

# Initialize Clients
client = OpenAI(api_key=OPENAI_API_KEY)
pc = Pinecone(api_key=PINECONE_API_KEY)

# Configuration
INDEX_NAME = "lucen-company-data"
EMBEDDING_MODEL = "text-embedding-3-small"
NAMESPACE = "abb-data" # Good for separating different companies


file_path = os.path.join('..', './jSON', 'ABB.json')
company_data = {}
try:
    # Open the file with the correct path
    with open(file_path, 'r') as file:
        # Parse the JSON data from the file
        company_data = json.load(file)
    
except FileNotFoundError:
    print(f"Error: The file '{file_path}' was not found.")
except json.JSONDecodeError:
    print(f"Error: Could not decode JSON from the file '{file_path}'.")

def create_chunks(data):
    """
    Turns structured JSON into meaningful text sentences (chunks)
    that the LLM can easily understand when retrieved.
    """
    chunks = []
    company = data.get("company", "The company")

    # Chunk 1: General Overview
    desc_text = f"{company} is located in {data.get('location')}. {data.get('description')}"
    chunks.append({
        "id": f"{company}_overview",
        "text": desc_text,
        "metadata": {"type": "overview", "company": company}
    })

    # Chunk 2: Projects (One chunk per project for better retrieval precision)
    for idx, project in enumerate(data.get("recent_projects", [])):
        proj_text = f"{company} project: {project['title']}. Details: {project['details']}"
        chunks.append({
            "id": f"{company}_project_{idx}",
            "text": proj_text,
            "metadata": {"type": "project", "company": company, "title": project['title']}
        })

    # Chunk 3: Tech Stack (Grouped together)
    tech_str = ", ".join(data.get("tech_stack", []))
    tech_text = f"{company} uses the following engineering tech stack: {tech_str}."
    chunks.append({
        "id": f"{company}_tech",
        "text": tech_text,
        "metadata": {"type": "tech_stack", "company": company}
    })

    # Chunk 4: Recruiter Tips (One chunk per tip or grouped)
    for idx, tip in enumerate(data.get("recruiter_tips", [])):
        tip_text = f"When talking to a recruiter at {company}, you should: {tip}"
        chunks.append({
            "id": f"{company}_tip_{idx}",
            "text": tip_text,
            "metadata": {"type": "advice", "company": company}
        })

    return chunks

# ---------------------------------------------------------
# 4. Embedding & Uploading to Pinecone
# ---------------------------------------------------------
def main():
    # A. Check or Create Index
    if INDEX_NAME not in pc.list_indexes().names():
        print(f"Creating index: {INDEX_NAME}...")
        pc.create_index(
            name=INDEX_NAME,
            dimension=1536, # Standard for text-embedding-3-small
            metric="cosine",
            spec=ServerlessSpec(cloud="aws", region="us-east-1")
        )
    
    index = pc.Index(INDEX_NAME)

    # B. Process Data
    print("Chunking data...")
    chunks = create_chunks(company_data)
    
    vectors_to_upsert = []

    print(f"Generating embeddings for {len(chunks)} chunks...")
    
    for chunk in chunks:
        # Generate Embedding
        response = client.embeddings.create(
            input=chunk['text'],
            model=EMBEDDING_MODEL
        )
        embedding = response.data[0].embedding

        # Prepare Vector Object for Pinecone
        # Format: (id, vector_values, metadata)
        vector_record = (
            chunk['id'],
            embedding,
            {
                "text": chunk['text'], # Storing the text IN Pinecone makes retrieval easier later
                **chunk['metadata']
            }
        )
        vectors_to_upsert.append(vector_record)

    # C. Upload (Upsert)
    print("Uploading to Pinecone...")
    index.upsert(vectors=vectors_to_upsert, namespace=NAMESPACE)
    
    print("✅ Success! Data uploaded.")
    print("Example Chunk stored:")
    print(vectors_to_upsert[0][2]['text'])

if __name__ == "__main__":
    main()
