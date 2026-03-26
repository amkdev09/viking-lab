import React from "react";
import { FiArrowUpRight } from "react-icons/fi";
import PageHero from "../../../components/sections/pageHero";

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
    <main className="text-[#111827]">
      <PageHero
        title="Job Posts"
        breadcrumbs={["Recrute Sites", "Staffing Agency", "Job Posts"]}
      />

       <section className="pt-[100px]">
        <div className="container grid w-full grid-cols-1 gap-[24px] md:grid-cols-2 xl:grid-cols-3">
          {jobs.map((job) => (
            <article
              key={`${job.company}-${job.role}`}
              className="rounded-[8px] border border-[#d8d8d8] px-[16px] pt-[16px] pb-[12px]"
            >
              <span className="inline-flex h-[32px] items-center rounded-[4px] bg-[var(--primary-text-bg-1)] px-[10px] text-base text-[#3d3d3d] font-['Figtree-Regular']">
                {job.type}
              </span>

              <p className="mt-[16px] text-base text-[#111827]">
                {job.company}
              </p>
              <p className="mt-[4px] text-base leading-[1.2] text-[#6b7280]">
                {job.location}
              </p>

              <div className="mt-[16px] h-px w-full bg-[#d4d4d4]" />

              <p className="mt-[15px] text-base text-[#111827]">
                {job.role}
              </p>
              <p className="mt-[6px] text-base text-[#f3a164]">
                {job.salary}
              </p>
              <p className="mt-[18px] text-base text-[#6e7581]">{job.posted}</p>

              <button
                type="button"
                className="mt-[12px] inline-flex h-[42px] min-w-[126px] items-center justify-center gap-[6px] rounded-[4px] border border-[#d7b795] bg-[#f8f3ec] px-[15px] text-base text-[#0f172a]"
              >
                Job Details
                <FiArrowUpRight aria-hidden="true" className="text-base" />
              </button>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
};

export default JobsPage;
