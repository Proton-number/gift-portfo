import { motion } from "motion/react";
import { Button } from "./ui/button";
import { ArrowDown } from "lucide-react";

interface HeroProps {
  projectsRef: React.RefObject<HTMLElement | null>;
  contactRef: React.RefObject<HTMLElement | null>;
}

export default function Hero({ projectsRef, contactRef }: HeroProps) {
  const scrollTo = (ref: React.RefObject<HTMLElement | null>) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen flex items-center mt-20 sm:mt-30 md:mt-8">
      <div className="w-full px-4 sm:px-0 md:px-0 ">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-10 md:gap-20 lg:gap-32 py-10 md:py-20">
          {/* Text Section */}
          <div className="w-full md:w-1/2 flex flex-col items-start text-left  md:text-left space-y-6">
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold leading-tight">
              Hi, I’m Gift. <br />
              Machine Learning <br />
              Engineer & Researcher.
            </h1>

            <p className="max-w-lg text-base sm:text-xl md:text-xl text-gray-700">
              I design and deploy machine learning systems that solve real
              problems. My work centers on predictive modeling, data mining, and
              Python-based solutions that are built to scale.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 w-full sm:w-auto">
              <Button
                className="bg-[#ff8552] hover:bg-[#e66a35] rounded-full h-14 px-10 text-base w-full sm:w-auto group transition-colors cursor-pointer"
                onClick={() => scrollTo(projectsRef)}
                aria-label="View my projects"
              >
                See My Work
                <span
                  className="inline-block ml-2 group-hover:translate-y-1 transition-transform"
                  aria-label="Navigate to contact section"
                >
                  <ArrowDown aria-hidden="true" />
                </span>
              </Button>

              <Button
                className="bg-white text-[#ff8552] border border-[#ff8552] hover:bg-orange-50 rounded-full h-14 px-10 text-base w-full sm:w-auto transition-colors cursor-pointer"
                onClick={() => scrollTo(contactRef)}
                aria-label="Navigate to contact section"
              >
                Let’s Chat
              </Button>
            </div>
          </div>

          {/* Image Section */}
          <motion.img
            src="/placeholder.webp"
            alt="Portrait of Gift, Machine Learning Engineer"
            className="w-3/4 sm:w-1/2 md:w-1/3 h-auto rounded-3xl rounded-tr-[20%] rounded-bl-[20%]"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            whileHover={{ scale: 1.03 }}
          />
        </div>
      </div>
    </div>
  );
}
