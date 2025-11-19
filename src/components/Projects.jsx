import React from "react";
import { FiArrowUpRight } from "react-icons/fi";

const Project = () => {
  return (
    <section className="max-w-7xl mx-auto p-6 py-20" id="project">
      <h2 className="text-4xl font-bold text-center mb-12 ">
        My Projects
      </h2>

      {/* 3 Card Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">

        {/* Project Card */}
        {[1,2,3].map((item) => (
          <div
            key={item}
            className="rounded-2xl shadow-lg bg-white/10 dark:bg-black/20 backdrop-blur-lg border border-white/20 overflow-hidden hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
          >
            {/* Image */}
            <div className="w-full h-56 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1522199755839-a2bacb67c546?auto=format&fit=crop&w=1200&q=80"
                alt="project"
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
              />
            </div>

            {/* Content */}
            <div className="p-6 space-y-4">
              <h3 className="text-2xl font-bold">
                Project Title {item}
              </h3>

              <p className=" text-md leading-relaxed">
                A modern UI project built with React, Tailwind CSS and animations.
              </p>

              <ul className="  space-y-1 text-sm">
                <li>⚡ Fast & Responsive UI</li>
                <li>🎨 Clean Modern Design</li>
                <li>🚀 Smooth Animations</li>
              </ul>

              <div className="flex justify-between mt-4">
                <a href="#" className="px-4 py-2 rounded-lg bg-purple-600 font-semibold flex items-center gap-2 hover:bg-purple-700 transition-all">
                  Code <FiArrowUpRight />
                </a>
                <a href="#" className="px-4 py-2 rounded-lg bg-white/20 border border-white/30 backdrop-blur-md  font-semibold flex items-center gap-2 hover:bg-white/30 transition-all">
                  Demo <FiArrowUpRight />
                </a>
              </div>
            </div>
          </div>
        ))}

      </div>
    </section>
  );
};

export default Project;
