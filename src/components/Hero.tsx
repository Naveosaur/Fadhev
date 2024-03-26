import Container from "@/app/Container";
import { Button } from "./ui/button";
import { MoveRight, Download } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <Container>
      <div className="border mt-5 p-5 flex flex-col items-center gap-10 md:flex-row-reverse md:justify-center">
        <div className="">
          <Image src="/profile.JPG" alt="profile" width={500} height={500} className="rounded-xl" />
        </div>
        <div className="flex flex-col mx-5 my-3  md:w-[70vh]  ">
          <h1 className="text-2xl font-bold md:text-4xl">Evan Fadhilla W</h1>
          <h2 className="text-xl font-medium text-gray-600 dark:text-gray-400 -my-1 mb-2">Full-stack Web Developer</h2>
          <p className="text-gray-900 dark:text-gray-400 md:text-lg">Full-Stack Web Developer, UI design, and product management specializing in building exceptional digital experiences for your business needs. </p>
          <div className="mt-10 flex gap-5">
            <Button className="rounded-full">
              <Link href="#works" className=" text-xl font-bold flex items-center">
                Works <MoveRight className="ml-2" size={20} />
              </Link>
            </Button>
            <Button variant="outline" className="rounded-full" asChild>
              <Link href="./resume.pdf" className=" text-xl font-bold flex items-center" target="_blank" download>
                Resume <Download className="ml-2" size={20} />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Hero;
