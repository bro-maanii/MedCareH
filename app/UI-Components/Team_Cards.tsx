import { Card, CardContent } from "@/components/ui/card";
import { CalendarIcon, ClockIcon, LucidePenSquare } from "lucide-react";
import Image from "next/image";
import React from "react";
import { Idoctors } from "../api/Doctors/route";

export default function Team_Cards({props}:{props:Idoctors}) {
  return (
    <div className="py-12 flex items-center justify-center w-full skew-y-12 transition ease-in-out delay-150 hover:skew-y-0  duration-300">
      <Card className="w-auto ">
        <div className="relative group overflow-hidden rounded-lg">
          <CardContent>
            <div className="flex flex-col items-center space-y-4">
              {/* image */}
              <Image
                alt={props.name}
                className="rounded-full bg-red-500"
                height="200"
                src="https://th.bing.com/th?id=OIF.gxsDz6ZeZKosd0ZRa5ao%2fw&rs=1&pid=ImgDetMain"
                style={{
                  aspectRatio: "80/80",
                  objectFit: "cover",
                }}
                width="200"
              />
              <div className="space-y-2 text-center">
                {/* name */}
                <h3 className="text-lg font-semibold group-hover:underline">
                  {props.name}
                </h3>
                <h3 className="text-base font-semibold group-hover:underline">
                  {props.specialization}
                </h3>
                {/* education */}
                <p className="text-sm text-gray-500 flex row">
                <LucidePenSquare className="w-4 h-4 flex-shrink-0 " />{props.education}
                </p>
                {/* joined date */}
                <div className="flex items-center gap-2 text-sm font-medium">
                  <ClockIcon className="w-4 h-4 flex-shrink-0 mr-1.5 " />
                  {props.timings}
                </div>
              </div>
            </div>
          </CardContent>
          <div className="absolute inset-0 flex items-center px-6 gap-4 text-sm bg-gray-900 bg-opacity-50 backdrop-blur-md translate-x-full opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-color">
            <p>
              👋 Hey I am {props.name} your {props.specialization} doctor. How can I
              assist you today?
            </p>
          </div>
        </div>
      </Card>
    </div>
  );
}
