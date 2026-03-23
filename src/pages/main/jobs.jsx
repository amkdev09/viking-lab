import React from "react";
import { FiArrowUpRight } from "react-icons/fi";

const jobs = [
  {
    type: "Part Time",
    company: "Adobe",
    location: "Milan, Italy",
    role: "Fashion Consultant",
    salary: "$1500 / Month",
    posted: "Posted : December 10, 2024",
  },
  {
    type: "Part Time",
    company: "Amazon",
    location: "Singapore",
    role: "Operations Manager",
    salary: "$2000 / Month",
    posted: "Posted : December 10, 2024",
  },
  {
    type: "Internship",
    company: "BrightSpark Inc.",
    location: "Mumbai, India",
    role: "Data Analyst Intern",
    salary: "$1500 / Month",
    posted: "Posted : December 10, 2024",
  },
  {
    type: "Full Time",
    company: "Vivid Studio",
    location: "Dhaka, Bangladesh",
    role: "Ui/Ux Designer",
    salary: "$1800 / Month",
    posted: "Posted : December 10, 2024",
  },
  {
    type: "Freelance",
    company: "Horizon Technologies",
    location: "Toronto, Canada",
    role: "Software Engineer",
    salary: "$2700 / Month",
    posted: "Posted : December 10, 2024",
  },
  {
    type: "Part Time",
    company: "GreenTech Ventures",
    location: "Melbourne, Australia",
    role: "Marketing Assistant",
    salary: "$500 / Month",
    posted: "Posted : December 10, 2024",
  },
];

const JobsPage = () => {
  return (
    <main className="bg-[#f3f3f3] font-['Inter'] text-[#111827]">
      <section
        className="px-6 py-[66px] text-center"
        style={{
          background:
            "linear-gradient(90deg, rgba(14,53,47,1) 0%, rgba(10,43,39,1) 55%, rgba(15,57,51,1) 100%)",
        }}
      >
        <h1 className="font-['Poppins'] text-[52px] leading-none font-semibold text-white">
          Job Posts
        </h1>

        <p className="mt-6 text-[14px] font-semibold tracking-[0.01em] text-white/90">
          Recrute Sites
          <span className="px-2 text-white/65" aria-hidden="true">
            &gt;
          </span>
          Staffing Agency
          <span className="px-2 text-white/65" aria-hidden="true">
            &gt;
          </span>
          Job Posts
        </p>
      </section>

      <section className="px-6 pt-[80px] pb-[78px]">
        <div className="mx-auto grid w-full max-w-[1240px] grid-cols-1 gap-[26px] md:grid-cols-2 xl:grid-cols-3">
          {jobs.map((job) => (
            <article
              key={`${job.company}-${job.role}`}
              className="rounded-[4px] border border-[#d8d8d8] bg-[#f5f5f5] px-[16px] pt-[16px] pb-[12px]"
            >
              <span className="inline-flex h-[32px] items-center rounded-[4px] bg-[#efebe5] px-[10px] text-[14px] font-medium text-[#3d3d3d]">
                {job.type}
              </span>

              <p className="mt-[16px] font-['Poppins'] text-[30px] leading-[1.1] font-semibold text-[#111827]">
                {job.company}
              </p>
              <p className="mt-[4px] text-[19px] leading-[1.2] text-[#6b7280]">
                {job.location}
              </p>

              <div className="mt-[16px] h-px w-full bg-[#d4d4d4]" />

              <p className="mt-[15px] font-['Poppins'] text-[35px] leading-[1.12] font-semibold text-[#111827]">
                {job.role}
              </p>
              <p className="mt-[6px] font-['Poppins'] text-[24px] leading-none font-medium text-[#f3a164]">
                {job.salary}
              </p>
              <p className="mt-[18px] text-[19px] text-[#6e7581]">{job.posted}</p>

              <button
                type="button"
                className="mt-[12px] inline-flex h-[42px] min-w-[126px] items-center justify-center gap-[6px] rounded-[4px] border border-[#d7b795] bg-[#f8f3ec] px-[15px] font-['Poppins'] text-[19px] font-medium text-[#0f172a]"
              >
                Job Details
                <FiArrowUpRight aria-hidden="true" className="text-[15px]" />
              </button>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
};

export default JobsPage;
