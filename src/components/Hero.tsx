import { Button } from "./ui/button";
import { MoveRight, Download } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <div className=" w-screen mt-5 flex flex-col items-center gap-5 ">
      <div className="">
        <Image src="/profile.JPG" alt="profile" width={400} height={400} className="rounded-xl" />
      </div>
      <div className="flex flex-col m-5">
        <h1 className="text-2xl font-bold">Evan Fadhilla W</h1>
        <h2 className="text-xl font-medium text-gray-600 dark:text-gray-400 -my-1 mb-2">Full-stack Web Developer</h2>
        <p className="text-gray-900 dark:text-gray-400">
          Full-Stack Web Developer with three years of experience in web development, UI design, and product management specializing in building exceptional digital experiences for your business needs.{" "}
        </p>
        <div className="mt-10 flex gap-5">
          <Button className="rounded-full">
            <Link href="#works" className=" text-lg font-bold flex items-center">
              Works <MoveRight className="ml-2" size={20} />
            </Link>
          </Button>
          <Button variant="outline" className="rounded-full text-lg font-bold ">
            Resume <Download className="ml-2" size={20} />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
