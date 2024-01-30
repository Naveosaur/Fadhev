import React from "react";
import Image from "next/image";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "./ui/button";
import { PanelsTopLeft, Github } from "lucide-react";

const Works = () => {
  return (
    <div className="  w-screen mt-10 ">
      <h2 className="text-xl font-bold mx-5">Works.</h2>
      <p className="text-gray-900 dark:text-gray-400 mx-5">some of the works I've been involved with</p>

      <div className="mt-5 flex justify-center">
        <Card className="w-[400px] flex flex-col items-center">
          <CardContent className="bg-slate-100">
            <Image src="/dummy.png" alt="dummy" width={400} height={250} />
          </CardContent>

          <CardHeader className=" w-[400px]">
            <CardTitle>Project Title</CardTitle>
            <CardDescription className="">Project Description</CardDescription>

            <div className="flex justify-center gap-5 pt-5">
              <Button variant={"outline"}>
                <PanelsTopLeft size={20} className="mr-2" />
                Website
              </Button>
              <Button variant={"outline"}>
                <Github size={20} className="mr-2" /> Github
              </Button>
            </div>
          </CardHeader>
        </Card>
      </div>
    </div>
  );
};

// border border-red-800

export default Works;
