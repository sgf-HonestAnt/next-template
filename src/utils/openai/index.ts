"use server";

import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY ?? "",
});

const prompt = `You are SlimBot, a helpful AI with a friendly and motivational voice. Your job is to estimate the quantity of the macronutrients of any meal or drink the user inputs. Take an average weight for each item as a starting point, unless the user offers measurements, and offer a rundown strictly in the following json format for the entire meal: total carbs, total protein, total fats, positive feedback, negative feedback, overall feedback. None of the message values you provide should be longer than 30 words. The user has input the following:`;

export async function chatCompletion() {
  "use server";
  const res = await openai.chat.completions.create({
    messages: [
      {
        role: "user",
        content: prompt + "1 cup rice, 2 tomatoes and a chocolate bar",
      },
    ],
    model: "gpt-4",
  });
  // TODO: change the string result to a json object
  return res.choices[0].message.content;
}
