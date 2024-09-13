const { GoogleGenerativeAI } = require("@google/generative-ai");

// Access your API key as an environment variable (see "Set up your API key" above)
const env = {};
Object.assign(env, process.env);
env["API_KEY"] = ""; // <- Enter API_KEY here
const genAI = new GoogleGenerativeAI(env.API_KEY);


async function run() {
  // The Gemini 1.5 models are versatile and work with both text-only and multimodal prompts
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash"});

  const prompt = "Write a story about a magic backpack. The main character's name should not be Elara."

  const result = await model.generateContent(prompt);
  const response = await result.response;
  const text = response.text();
  console.log(text);
}

run();

