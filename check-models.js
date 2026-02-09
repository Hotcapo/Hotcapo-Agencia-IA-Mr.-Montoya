
import { GoogleGenerativeAI } from "@google/generative-ai";
import dotenv from "dotenv";
import fs from "fs";
import path from "path";

// Manually load .env.local because dotenv doesn't do it by default for main file
const envPath = path.resolve(process.cwd(), '.env.local');
const envConfig = dotenv.parse(fs.readFileSync(envPath));
for (const k in envConfig) {
    process.env[k] = envConfig[k];
}

async function listModels() {
    const apiKey = process.env.VITE_GEMINI_API_KEY;
    if (!apiKey) {
        console.error("No API key found in .env.local");
        return;
    }

    console.log("Using API Key:", apiKey.substring(0, 5) + "...");

    try {
        // Use fetch to list models directly via REST API
        const url = `https://generativelanguage.googleapis.com/v1beta/models?key=${apiKey}`;
        console.log(`fetching models from: ${url}...`);

        const response = await fetch(url);
        const data = await response.json();

        if (data.error) {
            console.error("API Error:", data.error);
        } else if (data.models) {
            console.log("\n--- AVAILABLE MODELS ---");
            data.models.forEach(m => {
                if (m.supportedGenerationMethods && m.supportedGenerationMethods.includes("generateContent")) {
                    console.log(`- ${m.name.replace('models/', '')} (${m.displayName})`);
                }
            });
            console.log("------------------------\n");
        } else {
            console.log("No models found?", data);
        }

    } catch (error) {
        console.error("Fatal error:", error);
    }
}

listModels();
