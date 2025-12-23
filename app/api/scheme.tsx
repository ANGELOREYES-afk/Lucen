const jsonSchema = {
  type: "object",
  properties: {
    sections: {
      type: "array",
      items: {
        type: "object",
        properties: {
          title: { type: "string", description: "The main title of the section, e.g., 'Project Focus'" },
          subtitle: { type: "string", description: "A short, one-sentence summary" },
          content: { type: "string", description: "The detailed paragraph of content" }
        },
        required: ["title", "subtitle", "content"]
      }
    }
  },
  required: ["sections"]
};