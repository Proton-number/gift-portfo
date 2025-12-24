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
    <section className="min-h-screen flex items-center">
      <div className=" mt-14 lg:mt-8 w-full mx-auto px-4 sm:px-6 lg:px-0">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between py-16 gap-5 lg:gap-0">
          {/* Text */}
          <div className="w-full lg:w-1/2 text-center lg:text-left space-y-6">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
              Hi, I’m Gift.
              <br />
              AI Researcher
              <br />
              Machine Learning Engineer.
            </h1>

            <p className="max-w-xl mx-auto lg:mx-0 text-base sm:text-lg text-gray-700">
              I develop physics-informed, data-driven AI models that combine
              machine learning with simulations and experimental data to push
              engineering systems and materials research forward.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
              <Button
                className="bg-[#76604C] hover:bg-[#6A5645] rounded-full h-12 px-8 text-sm sm:text-base group transition-colors"
                onClick={() => scrollTo(projectsRef)}
                aria-label="View my projects"
              >
                See My Work
                <span className="ml-2 inline-block group-hover:translate-y-1 transition-transform">
                  <ArrowDown aria-hidden="true" />
                </span>
              </Button>

              <Button
                className="bg-white text-[#76604C] border border-[#76604C] hover:bg-[#76604C] hover:text-[#F6FBF7] rounded-full h-12 px-8 text-sm sm:text-base transition-all duration-200"
                onClick={() => scrollTo(contactRef)}
                aria-label="Navigate to contact section"
              >
                Let’s Chat
              </Button>
            </div>
          </div>

          {/* Image */}
          <motion.img
            src="/Gift.webp"
            alt="Portrait of Gift, Machine Learning Engineer"
            className="w-full max-w-xs sm:max-w-sm lg:max-w-md rounded-3xl rounded-tr-[20%] rounded-bl-[20%]"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            whileHover={{ scale: 1.03 }}
          />
        </div>
      </div>
    </section>
  );
}
