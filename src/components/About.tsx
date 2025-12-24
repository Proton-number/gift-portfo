import { Wrench } from "lucide-react";

function About() {
  return (
    <section className="w-full mx-auto px-4 sm:px-6 md:px-8 lg:px-0 py-8 sm:py-12 md:py-16 lg:py-20">
      <div className="flex flex-col lg:flex-row gap-8 sm:gap-12 md:gap-16 items-end mx-auto">
        {/* Text */}
        <div className="w-full lg:w-1/2">
          <div
            className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 font-bold rounded-full text-xs sm:text-sm mb-4 sm:mb-6
              bg-[#76604C]/10 text-[#76604C]"
          >
            About Me
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight text-[#2D2C2F]">
            Research in <span className="text-[#76604C]">AI & Engineering</span>
          </h2>

          <p className="mt-4 sm:mt-5 md:mt-6 max-w-2xl text-sm sm:text-base md:text-lg text-[#2D2C2F]/80 leading-relaxed">
            I am an AI researcher and machine learning engineer with a
            background in Mechanical Engineering. My work sits at the
            intersection of artificial intelligence, engineering systems, and
            sustainability. I focus on combining machine learning, statistical
            modeling, and simulation-driven data to solve complex engineering
            and materials science problems.
          </p>

          <p className="mt-4 sm:mt-5 md:mt-6 max-w-2xl text-sm sm:text-base md:text-lg text-[#2D2C2F]/80 leading-relaxed">
            My experience includes predictive modeling of material behavior,
            hybrid FEM–ML frameworks, data-driven process optimization, and
            computer vision for industrial monitoring. I am particularly drawn
            to research that blends physical modeling with AI to improve
            performance, reliability, and sustainability.
          </p>
        </div>

        {/* Toolkit */}
        <div
          className="w-full lg:w-3/5 max-w-2xl
         bg-white
         p-4 sm:p-6 md:p-8
         rounded-xl sm:rounded-2xl
         border border-[#76604C]/15
         shadow-[0_10px_25px_rgba(0,0,0,0.05)] sm:shadow-[0_20px_40px_rgba(0,0,0,0.08)]"
        >
          <div className="flex items-center gap-3 sm:gap-4 mb-6 sm:mb-8">
            <div className="p-2 sm:p-3 rounded-full bg-[#76604C]/20">
              <Wrench className="h-5 w-5 sm:h-6 sm:w-6 text-[#76604C]" />
            </div>
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#2D2C2F]">
              Technical Toolkit
            </h3>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 md:gap-10">
            {/* Core */}
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-4 sm:mb-6">
                <div className="w-2 h-2 bg-[#76604C] rounded-full" />
                <p className="text-[#2D2C2F]/60 text-xs sm:text-sm font-bold tracking-wide">
                  CORE & TOOLS
                </p>
              </div>

              <ul
                className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-4"
                role="list"
              >
                {["Python", "SQL", "PostgreSQL", "Excel", "Beautiful Soup"].map(
                  (tool) => (
                    <li
                      key={tool}
                      className="bg-[#2D2C2F]/5 text-[#2D2C2F]
         px-3 sm:px-4 lg:px-1 py-1.5 sm:py-2 lg:py-3 rounded-full text-xs sm:text-sm lg:text-md text-center font-semibold
         hover:bg-[#76604C]/25 hover:text-[#2D2C2F]
         transition-colors"
                    >
                      {tool}
                    </li>
                  )
                )}
              </ul>
            </div>

            {/* ML */}
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-4 sm:mb-6">
                <div className="w-2 h-2 bg-[#76604C] rounded-full" />
                <p className="text-[#2D2C2F]/60 text-xs sm:text-sm font-bold tracking-wide">
                  MACHINE LEARNING
                </p>
              </div>

              <ul
                className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-4"
                role="list"
              >
                {[
                  "TensorFlow",
                  "PyTorch",
                  "Scikit-learn",
                  "Pandas",
                  "Tableau",
                ].map((tool) => (
                  <li
                    key={tool}
                    className="bg-[#2D2C2F]/5 text-[#2D2C2F]
         px-3 sm:px-4 lg:px-1 py-1.5 sm:py-2 lg:py-3 rounded-full text-xs sm:text-sm lg:text-md text-center font-semibold
         hover:bg-[#76604C]/25 hover:text-[#2D2C2F]
         transition-colors"
                  >
                    {tool}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
