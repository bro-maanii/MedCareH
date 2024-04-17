import { Card, CardContent } from "@/components/ui/card";
import { CalendarIcon } from "lucide-react";
import React from "react";

export default function Team_Cards() {
  return (
    <div className="py-12 flex items-center justify-center w-full skew-y-12 transition ease-in-out delay-150 hover:skew-y-0  duration-300">
      <Card className="w-auto ">
        <div className="relative group overflow-hidden rounded-lg">
          <CardContent>
            <div className="flex flex-col items-center space-y-4">
              <img
                alt="Image"
                className="rounded-full"
                height="200"
                src="/placeholder.svg"
                style={{
                  aspectRatio: "80/80",
                  objectFit: "cover",
                }}
                width="200"
              />
              <div className="space-y-2 text-center">
                <h3 className="text-lg font-semibold group-hover:underline">
                  Jane Cooper
                </h3>
                <p className="text-sm text-gray-500">
                  Regional Paradigm Technician
                </p>
                <div className="flex items-center gap-2 text-sm font-medium">
                  <CalendarIcon className="w-4 h-4 flex-shrink-0 mr-1.5 fill-current text-gray-500" />
                  Joined 2016-08-23
                </div>
              </div>
            </div>
          </CardContent>
          <div className="absolute inset-0 flex items-center px-6 gap-4 text-sm bg-gray-900 bg-opacity-50 backdrop-blur-md translate-x-full opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-color">
            <p>
              👋 Hey! I'm Jane, your Regional Paradigm Technician. How can I
              assist you today?
            </p>
          </div>
        </div>
      </Card>
    </div>
  );
}
