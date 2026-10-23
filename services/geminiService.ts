import { ChatMessage } from "../types";

export const sendMessageToGemini = async (message: string, history: ChatMessage[]): Promise<string> => {
  try {
    const response = await fetch('/api/chat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        message,
        history,
      }),
    });

    if (!response.ok) {
      throw new Error(`Server returned ${response.status}`);
    }

    const data = await response.json();
    return data.reply ?? "I'm having trouble retrieving that data right now. Please try again.";
  } catch (error) {
    console.warn("Gemini Assistant Service:", error);
    return "I encountered a temporary connection issue. You can explore the verified project dossiers and interactive terminal directly!";
  }
};