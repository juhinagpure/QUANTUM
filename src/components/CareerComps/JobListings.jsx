// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { useState } from "react";
import Container from "../Container";

const JobListings = () => {
  const allJobs = [
    {
      title: "Data Analyst",
      skills: "Skills: Data Modeling",
      experience: "Experience: 2-4 Yrs",
      location: "Location: Nagpur",
    },
    {
      title: "Frontend Developer",
      skills: "Skills: React, Tailwind",
      experience: "Experience: 1-3 Yrs",
      location: "Location: Pune",
    },
    {
      title: "Backend Developer",
      skills: "Skills: Node.js, MongoDB",
      experience: "Experience: 2-5 Yrs",
      location: "Location: Bangalore",
    },
    {
      title: "UI/UX Designer",
      skills: "Skills: Figma, Adobe XD",
      experience: "Experience: 1-2 Yrs",
      location: "Location: Delhi",
    },
    {
      title: "Machine Learning Engineer",
      skills: "Skills: Python, ML",
      experience: "Experience: 2-4 Yrs",
      location: "Location: Remote",
    },
    {
      title: "QA Tester",
      skills: "Skills: Selenium, JMeter",
      experience: "Experience: 1-3 Yrs",
      location: "Location: Mumbai",
    },
  ];

  const [searchTerm, setSearchTerm] = useState("");

  const filteredJobs = allJobs.filter((job) =>
    job.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Container>
      <div className="w-full flex flex-col items-center gap-8 md:gap-12">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ amount: 0.2 }}
          className="w-full flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <h2 className="text-white text-3xl md:text-5xl font-bold Container tracking-wide text-center md:text-left">
            Recent Jobs
          </h2>

          <div className="w-full sm:w-[400px] h-14 px-6 py-2 bg-transparent border border-cyan-400 rounded-[30px] flex justify-between items-center">
            <input
              type="text"
              placeholder="Search your expertise here"
              className="bg-transparent outline-none text-white placeholder-white/60 w-full text-base sm:text-xl"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-4.35-4.35M11 19a8 8 0 1 1 0-16 8 8 0 0 1 0 16z"
              />
            </svg>
          </div>
        </motion.div>

        {/* Grid of Filtered Job Cards */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredJobs.length > 0 ? (
            filteredJobs.map((job, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ amount: 0.2 }}
                className="w-full h-auto px-6 py-10 bg-neutral-900 rounded-[36px] outline outline-[3px] outline-offset-[-3px] outline-zinc-800 flex flex-col justify-between gap-8 transition-all duration-500 hover:scale-[1.02]"
              >
                <div className="text-center text-neutral-50 text-2xl font-semibold tracking-wider">
                  {job.title}
                </div>
                <div className="flex flex-col items-start gap-2.5">
                  <p className="text-neutral-50 text-base font-medium tracking-wide">
                    {job.skills}
                  </p>
                  <p className="text-neutral-50 text-base font-medium tracking-wide">
                    {job.experience}
                  </p>
                  <p className="text-neutral-50 text-base font-medium tracking-wide">
                    {job.location}
                  </p>
                </div>
                <div className="h-14 px-8 py-2 bg-neutral-50 rounded-full flex justify-center items-center">
                  <span className="text-stone-900 text-xl font-semibold tracking-tight">
                    Apply Now
                  </span>
                </div>
              </motion.div>
            ))
          ) : (
            <p className="text-white col-span-full text-lg font-medium">
              No jobs found.
            </p>
          )}
        </div>
      </div>
    </Container>
  );
};

export default JobListings;
