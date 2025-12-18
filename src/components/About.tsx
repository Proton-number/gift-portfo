import { Wrench } from "lucide-react";

function About() {
  return (
    <div className=" flex flex-col md:flex-row items-end justify-between ">
      <div>
        <div className="text-[#59d0c7] p-3 font-bold rounded-full bg-[#e9f6f0] w-fit mb-6 text-sm">
          <span>About Me</span>
        </div>
        <h2 className=" text-3xl sm:text-5xl md:text-7xl font-bold">
          Passion for Data & <span className="text-[#ff8552]">Education</span>{" "}
        </h2>
        <p className="mt-6 max-w-3xl text-gray-700 text-lg leading-relaxed">
          I am a passionate technologist with a unique blend of technical
          expertise and educational leadership. My journey involves not just
          building robust ML systems but also empowering the next generation of
          coders.
        </p>
        <p className="mt-6 max-w-3xl text-gray-700 text-lg leading-relaxed">
          I have extensive experience teaching coding fundamentals using Scratch
          and Python, notably tutoring with Coding Kids Africa. Additionally, I
          am an experienced technical writer on Medium, where my articles on
          Data Science and AI rank prominently on Google search results.
        </p>
      </div>
      <div className="bg-white p-5 shadow-2xl rounded-2xl lg:w-1/2 mt-10 md:mt-0 md:ml-20 w-full md:max-w-2xl">
        <div className="flex  items-center gap-4">
          <div className="p-3 bg-orange-100 rounded-full">
            <Wrench className="h-6 w-6 text-orange-400" />
          </div>
          <p className="text-3xl font-bold">Technical Toolkit</p>
        </div>
        <div className="flex flex-col sm:flex-row sm:items-center justify-between mt-5 md:mt-10">
          <div>
            <div className="flex gap-2 items-center">
              <div className="w-2 h-2 bg-green-400 rounded-full" />
              <p className="text-gray-400 text-sm font-bold">CORE & TOOLS</p>
            </div>
            <ul className="mt-6 grid grid-cols-2 gap-x-6 gap-y-4" role="list">
              {["Python", "SQL", "PostgreSQL", "Excel", "Beautiful Soup"].map(
                (tool) => (
                  <li
                    key={tool}
                    className="bg-gray-100 text-gray-800 px-4 py-2 rounded-full text-sm text-center hover:text-orange-600 transition-all duration-200  font-bold hover:bg-orange-50 "
                  >
                    {tool}
                  </li>
                )
              )}
            </ul>
          </div>
          {/* Machine Learning */}
          <div className="mt-4 sm:mt-0">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-orange-400 rounded-full" />
              <p className="text-gray-400 text-sm font-bold">
                MACHINE LEARNING
              </p>
            </div>
            <ul className="mt-6 grid grid-cols-2 gap-x-6 gap-y-4" role="list">
              {[
                "TensorFlow",
                "PyTorch",
                "Scikit-learn",
                "Pandas",
                "Tableau",
              ].map((tool) => (
                <li
                  key={tool}
                  className="bg-gray-100 text-gray-800 px-4 py-2 rounded-full text-sm text-center hover:text-orange-600 transition-all duration-200 font-bold hover:bg-orange-50 "
                >
                  {tool}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
