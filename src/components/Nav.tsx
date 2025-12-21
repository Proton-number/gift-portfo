import {
  House,
  User,
  ChevronLeft,
  ChevronRight,
  Mail,
  Download,
} from "lucide-react";
import { Button } from "./ui/button";

interface NavProps {
  heroRef: React.RefObject<HTMLElement | null>;
  aboutRef: React.RefObject<HTMLElement | null>;
  projectsRef: React.RefObject<HTMLElement | null>;
  contactRef: React.RefObject<HTMLElement | null>;
}

function Nav({ heroRef, aboutRef, projectsRef, contactRef }: NavProps) {
  const scrollTo = (ref: React.RefObject<HTMLElement | null>) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <>
      <nav
        className="bg-white/30 backdrop-blur-md flex items-center justify-evenly w-11/12 sm:w-10/12 md:max-w-xl mx-auto h-16 rounded-full shadow-md text-sm font-medium text-gray-700 fixed top-3 left-0 right-0 z-50 border border-white/20"
        aria-label="Main navigation"
      >
        <Button
          variant="ghost"
          onClick={() => scrollTo(heroRef)}
          className="flex items-center gap-3 font-semibold group hover:bg-orange-100 px-4 py-2 rounded-full transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-400 focus-visible:ring-offset-2 cursor-pointer"
          aria-label="Navigate to home section"
        >
          <House
            className="w-5 h-5 md:w-4 md:h-4 group-hover:text-orange-500"
            aria-hidden="true"
          />
          <span className="hidden sm:block group-hover:text-orange-500">
            Home
          </span>
        </Button>
        <Button
          variant="ghost"
          onClick={() => scrollTo(aboutRef)}
          className="flex items-center gap-3 group cursor-pointer hover:bg-orange-100 px-4 py-2 rounded-full transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-400 focus-visible:ring-offset-2"
          aria-label="Navigate to about section"
        >
          <User
            className="w-5 h-5 md:w-4 md:h-4 group-hover:text-orange-500"
            aria-hidden="true"
          />
          <span className="hidden sm:block group-hover:text-orange-500">
            About
          </span>
        </Button>
        <Button
          variant="ghost"
          onClick={() => scrollTo(projectsRef)}
          className="flex items-center gap-3 group cursor-pointer hover:bg-orange-100 px-4 py-2 rounded-full transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-400 focus-visible:ring-offset-2"
          aria-label="Navigate to projects section"
        >
          <div className="flex ">
            <ChevronLeft
              className="w-5 h-5 md:w-4 md:h-4  group-hover:text-orange-500"
              aria-hidden="true"
            />
            <ChevronRight
              className="w-5 h-5 md:w-4 md:h-4  group-hover:text-orange-500"
              aria-hidden="true"
            />
          </div>
          <span className="hidden sm:block  group-hover:text-orange-500">
            Projects
          </span>
        </Button>
        <Button
          variant="ghost"
          onClick={() => scrollTo(contactRef)}
          className="flex items-center gap-3 group cursor-pointer hover:bg-orange-100 px-4 py-2 rounded-full transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-400 focus-visible:ring-offset-2"
          aria-label="Navigate to contact section"
        >
          <Mail
            className="w-5 h-5 md:w-4 md:h-4  group-hover:text-orange-500"
            aria-hidden="true"
          />
          <span className="hidden sm:block  group-hover:text-orange-500">
            Contact
          </span>
        </Button>
        <div className="h-7 w-px bg-gray-300 " aria-hidden="true" />
        <Button
          variant="ghost"
          className="bg-orange-400 hover:bg-orange-500 p-3 rounded-full text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 hover:text-white"
          aria-label="Download resume"
        >
          <Download className="w-5 h-5 md:w-4 md:h-4" aria-hidden="true" />
        </Button>
      </nav>
    </>
  );
}

export default Nav;
