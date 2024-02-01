import React from "react";
import Image from "next/image";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "./ui/button";
import { PanelsTopLeft, Github } from "lucide-react";
import { ReloadIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import Container from "@/app/Container";

const projects = [
  {
    image: "/dummy.png",
    name: "Project Name",
    description: "Lorem ipsum dolor sit amet.",
    website: null,
    github: "lorem",
  },
  {
    image: "/dummy.png",
    name: "Lorem",
    description: "Lorem",
    website: "website",
    github: "",
  },
  {
    image: "/dummy.png",
    name: "Lorem",
    description: "Lorem",
    website: "website",
    github: "",
  },
  {
    image: "/dummy.png",
    name: "Lorem",
    description: "Lorem",
    website: "website",
    github: "",
  },
  {
    image: "/dummy.png",
    name: "Lorem",
    description: "Lorem",
    website: "website",
    github: "",
  },
];

const Works = () => {
  return (
    <Container>
      <div className=" py-10 mt-10 " id="works">
        <div className="">
          <div className="">
            <h1 className="text-xl font-bold mx-5  md: md:text-2xl">Works</h1>
            <p className="text-md font-medium text-gray-900 dark:text-gray-400 mx-5">Some of the works and projects that i have been involved with</p>
          </div>
        </div>

        <div className="flex flex-wrap flex-col items-center mt-5 space-y-10 md:flex-row md:gap-5 md:items-baseline">
          {projects.map((project, i) => (
            <Card className="w-[400px] flex flex-col items-center" key={i}>
              <CardContent className="bg-slate-100">
                <Image src={project.image} alt="dummy" width={400} height={250} />
              </CardContent>

              <CardHeader className=" w-[400px]">
                <CardTitle>{project.name}</CardTitle>
                <CardDescription className="">{project.description}</CardDescription>

                <div className="flex justify-center gap-5 pt-5">
                  {!project.website ? (
                    <Button variant={"outline"} disabled>
                      <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
                      Website
                    </Button>
                  ) : (
                    <Button variant={"outline"} asChild>
                      <Link href={project.website}>
                        <PanelsTopLeft size={20} className="mr-2" />
                        Website
                      </Link>
                    </Button>
                  )}

                  <Button variant={"outline"} asChild>
                    <Link rel="stylesheet" href={project.github}>
                      <Github size={20} className="mr-2" />
                      Github
                    </Link>
                  </Button>
                </div>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </Container>
  );
};

// border border-red-800

export default Works;
