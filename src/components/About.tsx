import { Wrench } from "lucide-react";

function About() {
  return (
    <section className=" mx-auto px-4 sm:px-6 lg:px-0 py-8 sm:py-16">
      <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">
        {/* Text */}
        <div className="w-full lg:w-1/2">
          <div className="inline-block text-[#59d0c7] px-4 py-2 font-bold rounded-full bg-[#e9f6f0] text-sm mb-6">
            About Me
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold leading-tight">
            Research in <span className="text-[#ff8552]">AI & Engineering</span>
          </h2>

          <p className="mt-6 max-w-2xl text-gray-700 text-base sm:text-lg leading-relaxed">
            I am an AI researcher and machine learning engineer with a
            background in Mechanical Engineering. My work sits at the
            intersection of artificial intelligence, engineering systems, and
            sustainability. I focus on combining machine learning, statistical
            modeling, and simulation-driven data to solve complex engineering
            and materials science problems.
          </p>

          <p className="mt-6 max-w-2xl text-gray-700 text-base sm:text-lg leading-relaxed">
            My experience includes predictive modeling of material behavior,
            hybrid FEM–ML frameworks, data-driven process optimization, and
            computer vision for industrial monitoring. I am particularly drawn
            to research that blends physical modeling with AI to improve
            performance, reliability, and sustainability.
          </p>
        </div>

        {/* Toolkit */}
        <div className="w-full lg:w-1/2 max-w-2xl bg-white p-6 sm:p-8 shadow-xl rounded-2xl">
          <div className="flex items-center gap-4 mb-8">
            <div className="p-3 bg-orange-100 rounded-full">
              <Wrench className="h-6 w-6 text-orange-400" />
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold">
              Technical Toolkit
            </h3>
          </div>

          <div className="flex flex-col sm:flex-row gap-10">
            {/* Core */}
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-2 h-2 bg-green-400 rounded-full" />
                <p className="text-gray-400 text-sm font-bold">CORE & TOOLS</p>
              </div>

              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4" role="list">
                {["Python", "SQL", "PostgreSQL", "Excel", "Beautiful Soup"].map(
                  (tool) => (
                    <li
                      key={tool}
                      className="bg-gray-100 text-gray-800 px-4 py-2 rounded-full text-sm text-center font-bold hover:bg-orange-50 hover:text-orange-600 transition-colors"
                    >
                      {tool}
                    </li>
                  )
                )}
              </ul>
            </div>

            {/* ML */}
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-2 h-2 bg-orange-400 rounded-full" />
                <p className="text-gray-400 text-sm font-bold">
                  MACHINE LEARNING
                </p>
              </div>

              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4" role="list">
                {[
                  "TensorFlow",
                  "PyTorch",
                  "Scikit-learn",
                  "Pandas",
                  "Tableau",
                ].map((tool) => (
                  <li
                    key={tool}
                    className="bg-gray-100 text-gray-800 px-4 py-2 rounded-full text-sm text-center font-bold hover:bg-orange-50 hover:text-orange-600 transition-colors"
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
