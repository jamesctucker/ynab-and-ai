import openai from "../../../lib/open_ai/open_ai.js";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const prompt = body.prompt;

  const completion = await openai.createChatCompletion({
    model: "gpt-4",
    messages: [{ role: "user", content: prompt }],
  });

  return {
    completion: completion.data.choices[0].message.content,
  };
});
