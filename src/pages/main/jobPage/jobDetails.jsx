import React from "react";
import { FiArrowRight } from "react-icons/fi";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import PageHero from "../../../components/sections/pageHero";

const accent = "var(--primary-main)";

const recruitologyList = [
  "Staffing solution is right for you",
  "Skills for short-term projects",
  "Need to fill a position quickly",
];

const responsibilities = [
  "Design and execute social media strategies aligned with brand goals and campaign objectives.",
  "Manage and grow social media accounts across major platforms with consistent voice and engagement.",
  "Create and schedule content, including copy, visuals, and short-form video where applicable.",
  "Monitor performance metrics and report insights to stakeholders on a regular cadence.",
  "Collaborate with marketing, design, and product teams to support launches and promotions.",
  "Stay current on platform updates, trends, and best practices in digital marketing.",
];

const requirements = [
  "Proven experience in social media management or digital marketing roles.",
  "Strong communication, copywriting, and storytelling skills.",
  "Comfortable using analytics tools and translating data into actionable recommendations.",
  "Experience with content calendars, scheduling tools, and basic creative workflows.",
  "Ability to work independently and prioritize in a fast-paced environment.",
];

const perks = [
  "Flexible work schedule and hybrid options where available.",
  "Room for career advancement and professional development stipends.",
  "Comprehensive health benefits and wellness programs.",
  "Collaborative culture with a focus on creativity and impact.",
];

const JobDetails = () => {
  return (
    <main className="bg-white text-[var(--primary-text-3)]">
      <PageHero
        title="Amazon"
        breadcrumbs={[
          "Recruit Sites",
          "Staffing Agency",
          "Jobs",
          "Amazon",
        ]}
      />

      <section className="px-6 pb-20 pt-34">
        <div className="container w-full">
          <article className="min-w-0 space-y-10 w-[70%] mx-auto">
            <section>
              <h2 className="text-4xl font-['Figtree-Bold'] leading-tight text-black">
                Job Description
              </h2>
              <p className="mt-4 text-base leading-[1.68]">
                Creative Hive is looking for a passionate Social Media Manager to
                join our growing marketing team. In this role, you will own the
                end-to-end social presence for our clients—planning campaigns,
                crafting engaging content, and building communities that convert.
                You will work closely with strategists and designers to bring
                brand stories to life across channels and measure what resonates.
              </p>
            </section>

            <section>
              <h3 className="text-3xl font-['Figtree-Bold'] text-black">
                Responsibilities
              </h3>
              <p className="mt-4 text-base leading-[1.68]">
                You will be responsible for day-to-day social operations as well as
                quarterly planning. Expect a mix of creative execution, community
                management, and performance reporting.
              </p>
              <ul className="mt-4 list-disc space-y-2 pl-6 text-base leading-[1.68] marker:text-[var(--primary-main)]">
                {responsibilities.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>

            <section>
              <h3 className="text-3xl font-['Figtree-Bold'] text-black">
                Requirements
              </h3>
              <p className="mt-4 text-base leading-[1.68]">
                We value curiosity, clarity, and consistency. The ideal candidate
                combines creative instincts with analytical rigor and thrives in a
                collaborative environment.
              </p>
              <ul className="mt-4 list-disc space-y-2 pl-6 text-base leading-[1.68] marker:text-[var(--primary-main)]">
                {requirements.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>

            <section>
              <h3 className="text-3xl font-['Figtree-Bold'] text-black">
                Perks &amp; Benefits
              </h3>
              <p className="mt-4 text-base leading-[1.68]">
                We invest in our people with competitive compensation and benefits
                designed to support balance and growth. Posted 2 years ago—roles
                may evolve; confirm details with the hiring team during your
                conversation.
              </p>
              <ul className="mt-4 list-disc space-y-2 pl-6 text-base leading-[1.68] marker:text-[var(--primary-main)]">
                {perks.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>

            <blockquote className="border-l-[5px] border-l-[var(--primary-main)] bg-[#f5f5f5] px-5 py-4 text-base italic leading-[1.72] text-[#5d6470]">
              Our blog is your go-to resource for the latest trends, best
              practices, and expert advice in the staffing industry. From
              articles on optimizing your hiring process and navigating employment
              law changes to career development.
            </blockquote>

            <section className="flex flex-col gap-7 border border-[#ececec] p-4 sm:flex-row sm:items-start sm:gap-8 sm:p-5">
              <div
                className="aspect-[4/3] w-full shrink-0 border border-[#e0e0e0] bg-[#fafafa] sm:aspect-auto sm:h-[220px] sm:w-[min(100%,280px)] sm:min-h-[200px]"
                aria-hidden
              />
              <div className="min-w-0 flex-1">
                <h4 className="text-xl font-['Figtree-Bold'] leading-snug text-black sm:text-2xl">
                  Recruit ology Tips &amp; Trends for Hiring Success
                </h4>
                <p className="mt-3 text-sm leading-[1.65] text-[#4b5563] sm:text-base">
                  Stay ahead with practical guidance on sourcing, employer
                  branding, and retention—curated for hiring managers and HR
                  leaders who want measurable results.
                </p>
                <ul className="mt-5 space-y-3 text-sm text-[#4b5563] sm:text-base">
                  {recruitologyList.map((item) => (
                    <li key={item} className="flex gap-3 leading-snug">
                      <span
                        className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full"
                        style={{ backgroundColor: accent }}
                        aria-hidden
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            <div className="flex flex-col gap-4 border-t border-[#ececec] pt-8 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-lg font-['Figtree-Bold'] text-black">
                We Are On
              </p>
              <div className="flex flex-wrap items-center gap-3">
                <a
                  href="#"
                  className="flex h-10 w-10 items-center justify-center rounded transition-opacity hover:opacity-90"
                  style={{ backgroundColor: accent }}
                  aria-label="Facebook"
                >
                  <FaFacebookF className="h-4 w-4 text-white" />
                </a>
                <a
                  href="#"
                  className="flex h-10 w-10 items-center justify-center rounded transition-opacity hover:opacity-90"
                  style={{ backgroundColor: accent }}
                  aria-label="Twitter"
                >
                  <FaTwitter className="h-4 w-4 text-white" />
                </a>
                <a
                  href="#"
                  className="flex h-10 w-10 items-center justify-center rounded transition-opacity hover:opacity-90"
                  style={{ backgroundColor: accent }}
                  aria-label="YouTube"
                >
                  <FaYoutube className="h-4 w-4 text-white" />
                </a>
                <a
                  href="#"
                  className="flex h-10 w-10 items-center justify-center rounded transition-opacity hover:opacity-90"
                  style={{ backgroundColor: accent }}
                  aria-label="LinkedIn"
                >
                  <FaLinkedinIn className="h-4 w-4 text-white" />
                </a>
              </div>
            </div>

            <section className="rounded-lg bg-[#f9fafb] p-6 sm:p-8">
              <h3 className="text-3xl font-['Figtree-Bold'] text-black">
                Apply Now
              </h3>
              <p className="mt-3 text-base leading-[1.68]">
                Real difference in navigating the complexities of hiring starts
                with a clear application. Share your details and we&apos;ll follow
                up with next steps.
              </p>
              <form
                className="mt-6 space-y-4"
                onSubmit={(e) => e.preventDefault()}
              >
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <input
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    className="h-11 w-full rounded border border-[#e5e7eb] bg-white px-3 text-sm text-[#374151] placeholder:text-[#9ca3af] focus:border-[#d1d5db] focus:outline-none"
                  />
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    className="h-11 w-full rounded border border-[#e5e7eb] bg-white px-3 text-sm text-[#374151] placeholder:text-[#9ca3af] focus:border-[#d1d5db] focus:outline-none"
                  />
                </div>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    className="h-11 w-full rounded border border-[#e5e7eb] bg-white px-3 text-sm text-[#374151] placeholder:text-[#9ca3af] focus:border-[#d1d5db] focus:outline-none"
                  />
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    className="h-11 w-full rounded border border-[#e5e7eb] bg-white px-3 text-sm text-[#374151] placeholder:text-[#9ca3af] focus:border-[#d1d5db] focus:outline-none"
                  />
                </div>
                <div>
                  <label className="sr-only" htmlFor="job-resume">
                    Resume
                  </label>
                  <input
                    id="job-resume"
                    type="file"
                    name="resume"
                    className="block w-full cursor-pointer rounded border border-[#e5e7eb] bg-white px-3 py-2 text-sm text-[#374151] file:mr-3 file:rounded file:border-0 file:bg-[#f3f4f6] file:px-3 file:py-1.5 file:text-sm file:font-medium file:text-[#374151]"
                  />
                </div>
                <textarea
                  name="message"
                  placeholder="Your Message"
                  rows={6}
                  className="w-full resize-y rounded border border-[#e5e7eb] bg-white px-3 py-3 text-sm text-[#374151] placeholder:text-[#9ca3af] focus:border-[#d1d5db] focus:outline-none"
                />
                <button
                  type="submit"
                  className="theme-btn6"
                >
                  Apply Now
                  <FiArrowRight className="h-4 w-4" strokeWidth={2.5} />
                </button>
              </form>
            </section>
          </article>
        </div>
      </section>
    </main>
  );
};

export default JobDetails;
