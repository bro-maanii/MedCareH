"use client";

import { Message, experimental_useAssistant as useAssistant } from "ai/react";
import { useEffect, useRef } from "react";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const roleToColorMap: Record<Message["role"], string> = {
  system: "red",
  user: "black",
  assistant: "green",
  function: "",
  data: "",
  tool: "",
};

export default function ChatUI() {
  const { status, messages, input, submitMessage, handleInputChange, error } =
    useAssistant({
      api: "/api/assistant",
    });

  // When status changes to accepting messages, focus the input:
  const inputRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    if (status === "awaiting_message") {
      inputRef.current?.focus();
    }
  }, [status]);

  return (
    <div className=" md:w-[80vw] md:h-[80vh] w-full h-full bg-gradient-to-r from-gray-300 via-gray-200 to-gray-100  overflow-scroll">
      <div className="mb-4">
        <h2 className="text-4xl font-semibold flex justify-center align-middle">
          Med Care Bot
        </h2>
        <p className="text-md  flex justify-center align-middle opacity-55 text-gray-600">
          Get info about our hospital plus get your answer within a minute
          through this chat bot.
        </p>
      </div>

      <div className="flex-none  w-full  py-4  ">
        {error != null && (
          <div className="relative bg-red-500 text-white px-6 py-4 rounded-md">
            <span className="block sm:inline">
              Error: {(error as any).toString()}
            </span>
          </div>
        )}

        {messages.map((m: Message) => (
          <div
            key={m.id}
            className="whitespace-pre-wrap  sm:px-8"
            style={{ color: roleToColorMap[m.role] }}
          >
            <span className="text-2xl size-8 w-10 h-10">{`${
              m.role === "user" ? "🧚‍♂️:" : "👩‍⚕️:"
            } `}</span>

            {m.role !== "data" && m.content}
            {m.role === "data" && (
              <>
                {(m.data as any).description}
                <br />
                <pre className={" bg-gray-200"}>
                  {JSON.stringify(m.data, null, 2)}
                </pre>
              </>
            )}
            <br />
            <br />
          </div>
        ))}

        {status === "in_progress" && (
          <div className="h-8 w-full  p-2 mb-8 bg-gray-300 dark:bg-gray-600 rounded-lg animate-pulse" />
        )}

        <form onSubmit={submitMessage} className="w-full px-8 md:px-24">
          <div className="flex items-center justify-center space-x-4">
            <Input
              ref={inputRef}
              disabled={status !== "awaiting_message"}
              className="rounded w-full"
              value={input}
              placeholder="how many departments are there?"
              onChange={handleInputChange}
            />
            <Button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold"
            >
              Press Enter
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
