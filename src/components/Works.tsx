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
    image: "/Fadhev.png",
    name: "Fadhev's Website",
    description: "Explore my portfolio crafted with Next.js, React.js, and Tailwind CSS. Discover my projects and dive into my web development journey.",
    website: "https://fadhev.vercel.app",
    github: "https://github.com/Naveosaur/Fadhev",
  },
  {
    image: "/OurWedding.png",
    name: "Our Wedding",
    description:
      "Step into OurWedding – your one-stop wedding invitation shop! I'm the frontend developer behind the homepage, using React.js and Tailwin CSS. Browse our curated collection of wedding invitation templates and effortlessly find the perfect design for your special day.",
    website: "",
    github: "https://github.com/Naveosaur/HSFS-Project-Wedding",
  },
  // {
  //   image: "/Wahanime.png",
  //   name: "Wahanime",
  //   description: "An anime streaming website. Built using React.js, TailwindCSS  and integrating an external API from consumet API.",
  //   website: "",
  //   github: "https://github.com/Naveosaur/Wahanime",
  // },
  {
    image: "/ExperimentalBooks.png",
    name: "Experimental - API Books And Author",
    description: "In Progress - Golang, Mux, Viper, Gorm",
    website: "",
    github: "https://github.com/Naveosaur/go_rest_mysql",
  },
];

const Works = () => {
  return (
    <Container>
      <div className=" py-10 mt-10 " id="works">
        <div className="">
          <div className="">
            <h1 className="text-xl font-bold mx-5  md: md:text-2xl">Projects</h1>
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
