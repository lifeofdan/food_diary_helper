import { Configuration, OpenAIApi } from "openai";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const config = useRuntimeConfig();

  const configuration = new Configuration({
    apiKey: config.chat_gpt_key,
  });

  const openai = new OpenAIApi(configuration);

  try {
    const response = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: `Give me a numeric value of how many calories in are in a ${body}`,
      max_tokens: 100,
      temperature: 0.7,
    });

    const botResponse = response.data.choices[0].text?.trim();
    return { payload: { data: botResponse, error: "" } };
  } catch (err) {
    return { payload: { data: "", error: err } };
  }
});
