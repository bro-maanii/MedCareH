import { experimental_AssistantResponse } from "ai";
import OpenAI from "openai";
// import * as dotenv from "dotenv";
// import crypto from 'crypto';
// dotenv.config();
// Create an OpenAI API client (that's edge friendly!)
const  openai = new OpenAI({ apiKey:"sk-proj-XuUt97L0cm2UNDH6XVNwT3BlbkFJpkT2FLn11QaCvP1TShMn"});

export const runtime = "edge";

export async function POST(req: Request) {
  // Parse the request body
  const input: {
    threadId: string | null;
    message: string;
  } = await req.json();

  // Create a thread if needed
  const threadId = input.threadId ?? (await openai.beta.threads.create({})).id;

  // Add a message to the thread
  const createdMessage = await openai.beta.threads.messages.create(threadId, {
    role: "user",
    content: input.message,
  });

  return experimental_AssistantResponse(
    { threadId, messageId: createdMessage.id },
    async ({ threadId, sendMessage }) => {
      // Run the assistant on the thread
      const run = await openai.beta.threads.runs.create(threadId, {
        assistant_id:
        "asst_9aCVCpvlRjmzfLGpNF5BGhhd"??
          (() => {
            throw new Error("ASSISTANT_ID is not set");
          })(),
      });

      async function waitForRun(run:any) {
        // Poll for status change
        while (run.status === "queued" || run.status === "in_progress") {
          // delay for 500ms:
          await new Promise((resolve) => setTimeout(resolve, 500));

          run = await openai.beta.threads.runs.retrieve(threadId!, run.id);
        }

        // Check the run status
        if (
          run.status === "cancelled" ||
          run.status === "cancelling" ||
          run.status === "failed" ||
          run.status === "expired"
        ) {
          throw new Error(run.status);
        }
      }

      await waitForRun(run);

      // Get new thread messages (after our message)
      const responseMessages = (
        await openai.beta.threads.messages.list(threadId, {
          after: createdMessage.id,
          order: "asc",
        })
      ).data;

      // Send the messages
      for (const message of responseMessages) {
        sendMessage({
          id: message.id,
          role: "assistant",
          content: message.content.filter(
            (content) => content.type === "text"
          ) as Array<any>,
        });
      }
    }
  );
}