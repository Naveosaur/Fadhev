"use client";
import Container from "@/app/Container";
import Link from "next/link";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { Sun, Moon, Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";

const routes = [
  {
    href: "/",
    label: "Home",
  },
  {
    href: "#works",
    label: "Works",
  },
  {
    href: "#contact_me",
    label: "Contact Me",
  },
];

const Header = () => {
  const { theme, setTheme } = useTheme();

  return (
    <header className="sm:flex sm:justify-between py-3 px-4 border-b">
      <Container>
        <div className="relative px-4 sm:px-6 lg:px-8 flex h-16 items-center justify-between w-full ">
          <div className="flex items-center">
            <Sheet>
              <SheetTrigger>
                <Menu className="h-6 md:hidden w-6 right-0" />
              </SheetTrigger>
              <SheetContent side="left" className="w-[300px] sm:w-[400px]">
                <nav className="flex flex-col gap-4">
                  {routes.map((route, i) => (
                    <Link key={i} href={route.href} className="block px-2 py-1 text-lg">
                      {route.label}
                    </Link>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>

            <Link href="/" className="ml-4 lg:ml-0">
              <h1 className="text-xl font-bold">FadhEv</h1>
            </Link>
          </div>

          <div className="flex justify-between">
            <nav className="mx-6 flex items-center space-x-4 lg:space-x-6 hidden md:block ">
              {routes.map((route, i) => (
                <Button asChild variant="ghost" key={i}>
                  <Link key={i} href={route.href} className="text-lg font-medium transition-colors">
                    {route.label}
                  </Link>
                </Button>
              ))}
            </nav>

            <div className="flex items-center  ">
              <Button variant="ghost" size="icon" aria-label="Toggle Theme" className="mr-6" onClick={() => setTheme(theme == "dark" ? "light" : "dark")}>
                <Sun className="h-6 w-6 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <Moon className="absolute h-6 w-6 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                <span className="sr-only">Toggle Theme</span>
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
