import { Instagram, Github, Linkedin } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";
import Container from "@/app/Container";

const ContactMe = () => {
  return (
    <Container>
      <div className="py-10 mt-10" id="contact_me">
        <div>
          <div className="flex flex-col mx-5 md:w-1/2">
            <h1 className="text-2xl font-bold ">Let's connect and collaborate</h1>
            <p className="text-md font-medium text-gray-900 dark:text-gray-400 mt-2">
              I would be hugely interested contributing myself in any exciting opportunities, joining interesting discussions, and building valuable connections. Let's connect!
            </p>
          </div>
          {/* <div className="mt-10">
          <p>Contact me via email</p>
        </div> */}
          <div className="mt-10 mx-5  ">
            <p className="font-semibold text-lg">Follow me on social media</p>
            <div className="py-2 flex gap-5 flex">
              <Button variant={"outline"} className="rounded-full" asChild>
                <Link href="https://www.instagram.com/evfadh/" target="_blank">
                  <Instagram size={20} />
                </Link>
              </Button>
              <Button variant={"outline"} className="rounded-full" asChild>
                <Link href="https://www.linkedin.com/in/fadhe" target="_blank">
                  <Linkedin size={20} />
                </Link>
              </Button>
              <Button variant={"outline"} className="rounded-full" asChild>
                <Link href="https://github.com/Naveosaur" target="_blank">
                  <Github size={20} />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ContactMe;
