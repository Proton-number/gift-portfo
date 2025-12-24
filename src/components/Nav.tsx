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
        className="bg-white/80 backdrop-blur-lg
             flex items-center justify-evenly
             w-11/12 sm:w-10/12 md:max-w-xl mx-auto h-16
             rounded-full
             shadow-[0_10px_30px_rgba(0,0,0,0.12)]
             text-sm font-medium
             text-[#2D2C2F]
             fixed top-3 left-0 right-0 z-50
             border border-[#76604C]/20"
        aria-label="Main navigation"
      >
        {/** HOME */}
        <Button
          variant="ghost"
          onClick={() => scrollTo(heroRef)}
          className="flex items-center gap-3 font-semibold group
           px-4 py-2 rounded-full
           transition-colors
           hover:bg-[#76604C]/20
           focus-visible:outline-none
           focus-visible:ring-2 focus-visible:ring-[#76604C]/50"
        >
          <House className="w-5 h-5 md:w-4 md:h-4 text-[#2D2C2F]/80 group-hover:text-[#76604C]" />
          <span className="hidden sm:block group-hover:text-[#76604C]">
            Home
          </span>
        </Button>

        {/** ABOUT */}
        <Button
          variant="ghost"
          onClick={() => scrollTo(aboutRef)}
          className="flex items-center gap-3 font-semibold group
           px-4 py-2 rounded-full
           transition-colors
           hover:bg-[#76604C]/20
           focus-visible:outline-none
           focus-visible:ring-2 focus-visible:ring-[#76604C]/50"
        >
          <User className="w-5 h-5 md:w-4 md:h-4 text-[#2D2C2F]/80 group-hover:text-[#76604C]" />
          <span className="hidden sm:block group-hover:text-[#76604C]">
            About
          </span>
        </Button>

        {/** PROJECTS */}
        <Button
          variant="ghost"
          onClick={() => scrollTo(projectsRef)}
          className="flex items-center gap-3 font-semibold group
           px-4 py-2 rounded-full
           transition-colors
           hover:bg-[#76604C]/20
           focus-visible:outline-none
           focus-visible:ring-2 focus-visible:ring-[#76604C]/50"
        >
          <div className="flex text-[#2D2C2F] group-hover:text-[#76604C]">
            <ChevronLeft className="w-5 h-5 md:w-4 md:h-4 text-[#2D2C2F]/80 group-hover:text-[#76604C]" />
            <ChevronRight className="w-5 h-5 md:w-4 md:h-4 text-[#2D2C2F]/80 group-hover:text-[#76604C]" />
          </div>
          <span className="hidden sm:block group-hover:text-[#76604C]">
            Projects
          </span>
        </Button>

        {/** CONTACT */}
        <Button
          variant="ghost"
          onClick={() => scrollTo(contactRef)}
          className="flex items-center gap-3 font-semibold group
           px-4 py-2 rounded-full
           transition-colors
           hover:bg-[#76604C]/20
           focus-visible:outline-none
           focus-visible:ring-2 focus-visible:ring-[#76604C]/50"
        >
          <Mail className="w-5 h-5 md:w-4 md:h-4 text-[#2D2C2F]/80 group-hover:text-[#76604C]" />
          <span className="hidden sm:block group-hover:text-[#76604C]">
            Contact
          </span>
        </Button>

        <div className="h-7 w-px bg-[#76604C]/30" aria-hidden="true" />

        {/** DOWNLOAD */}
        <Button
          variant="ghost"
          className="bg-[#2D2C2F]
             hover:bg-[#76604C]
             p-3 rounded-full
             text-white
             shadow-md
             transition-colors
             focus-visible:outline-none
             focus-visible:ring-2
             focus-visible:ring-[#76604C]/60 hover:text-white"
          aria-label="Download resume"
        >
          <Download className="w-5 h-5 md:w-4 md:h-4" />
        </Button>
      </nav>
    </>
  );
}

export default Nav;
