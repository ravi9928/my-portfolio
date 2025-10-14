"use client";

interface Education {
  id: number;
  degree: string;
  institute: string;
  city: string;
  head_institute: string;
  year: string;
  icon: string;
  description: string;
  highlights: string[];
  grade: string;
}

const educationData: Education[] = [
  {
    id: 1,
    degree: "Bachelor of Technology (B.Tech)",
    institute: "College of Engineering & Technology",
    city: "Bikaner (Raj.)",
    head_institute: "Bikaner Technical University",
    year: "2019 – 2023",
    icon: "/clg.png",
    description:
      "Studied Computer Science with focus on software design, coding, and data structures.",
    highlights: [
      "Full Stack Development",
      "Data Structures",
      "Database Design",
    ],
    grade: "CGPA: 6.8",
  },
  {
    id: 2,
    degree: "Senior Secondary (12th)",
    institute: "Jawahar Navodaya Vidyalaya (JNV)",
    city: "Chittorgarh (Raj.)",
    head_institute: "CBSE Board",
    year: "2017 – 2018",
    icon: "/jnv.png",
    description:
      "Completed 12th in Science stream with emphasis on Physics, Chemistry, and Maths.",
    highlights: ["PCM Stream", "Mathematics Excellence", "Science Projects"],
    grade: "Result: 81%",
  },
  {
    id: 3,
    degree: "Secondary (10th)",
    institute: "Excellent Public School",
    city: "Nimbahera (Raj.)",
    head_institute: "RBSE Board",
    year: "2015 – 2016",
    icon: "/school.png",
    description:
      "Completed 10th with distinction, building strong logic and analytical foundation.",
    highlights: ["Distinction", "Olympiad Participation", "Academic Merit"],
    grade: "Result: 89%",
  },
];

const EducationSection = () => {
  return (
    <section className="py-6 md:py-8 relative">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-12 text-center">
          Foundations of My Career
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
          {educationData.map((edu) => (
            <div
              key={edu.id}
              className="group bg-gradient-to-b from-gray-800/50 to-gray-900/50 rounded-xl sm:rounded-2xl p-[1px]"
            >
              <div className="bg-gradient-to-b from-gray-900 to-gray-800 rounded-xl sm:rounded-2xl overflow-hidden p-5 sm:p-6 relative">
                <div className="flex flex-col items-center text-center gap-4">
                  {/* Icon */}
                  {/* <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-yellow-500 to-green-500 p-[3px] flex-shrink-0">
                    <div className="w-full h-full rounded-xl bg-gray-900 flex items-center justify-center overflow-hidden relative">
                      <img
                        src={edu.icon}
                        alt={edu.institute}
                        className="relative rounded-xl shadow-lg object-contain w-12 h-12"
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-blue-500/10 to-green-500/0 animate-shimmer"></div>
                    </div>
                    <div className="absolute -top-1 -right-1 w-3 h-3 bg-blue-400 rounded-full blur-[2px]"></div>
                    <div className="absolute -bottom-1 -left-1 w-3 h-3 bg-green-400 rounded-full blur-[2px]"></div>
                  </div> */}
                  <div className="w-16 sm:w-20 h-16 sm:h-20 rounded-full bg-gradient-to-br from-yellow-500 to-green-500 p-[3px] flex-shrink-0">
                    <div className="w-full h-full rounded-full bg-gray-900 flex items-center justify-center overflow-hidden relative">
                      <img
                        src={edu.icon}
                        alt="App Preview"
                        className="relative rounded-xl shadow-lg"
                      />
                      {/* Animated Glow Effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/0 via-yellow-500/10 to-green-500/0 animate-shimmer"></div>
                    </div>
                    {/* Corner Decorations */}
                    <div className="absolute -top-1 -right-1 w-3 h-3 bg-yellow-400 rounded-full blur-[2px]"></div>
                    <div className="absolute -bottom-1 -left-1 w-3 h-3 bg-green-400 rounded-full blur-[2px]"></div>
                  </div>

                  {/* Info */}
                  <h3 className="text-lg sm:text-xl font-semibold text-white">
                    {edu.degree}
                  </h3>
                  <p className="text-blue-400 text-sm font-medium">
                    {edu.institute}
                  </p>
                  <p className="text-gray-400 text-xs">
                    {edu.city} | {edu.head_institute}
                  </p>
                  <p className="text-gray-500 text-xs mb-1">{edu.year}</p>

                  {/* Grade */}
                  <span className="px-2 py-0.5 text-xs rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20">
                    {edu.grade}
                  </span>

                  {/* Description */}
                  <p className="text-gray-400 text-sm mb-3 leading-relaxed">
                    {edu.description}
                  </p>

                  {/* Highlights */}
                  {/* <div className="flex flex-wrap justify-center gap-2">
                    {edu.highlights.map((h) => (
                      <span
                        key={h}
                        className="px-3 py-1 text-xs rounded-full bg-gray-800 text-gray-400 border border-gray-700/50 group-hover:border-gray-600/50 group-hover:text-gray-300 transition-colors whitespace-nowrap"
                      >
                        {h}
                      </span>
                    ))}
                  </div> */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
