import openai from "./chatgpt";

const query = async (prompt: string, chatId: string, model: string) => {
  const res = await openai
    .createCompletion({
      model,
      prompt,
      temperature: 0.1, // temperature and top_p defines if the answer should be more logical or more creative
      top_p: 1,
      max_tokens: 4000,
      frequency_penalty: 0,
      presence_penalty: 0,
    })
    .then((res) => res.data.choices[0].text)
    .catch(
      (err) =>
        `ChatGPT was not able to find an answer for that! Error: ${err.message}`
    );
  return res;
};

export default query;
