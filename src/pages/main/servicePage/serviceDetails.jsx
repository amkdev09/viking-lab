import React, { useState } from "react";
import { FiArrowUpRight, FiMinus, FiPlus, FiSearch } from "react-icons/fi";
import { SlCalender } from "react-icons/sl";
import PageHero from "../../../components/sections/pageHero";

const accent = "var(--primary-main)";

const recentPosted = [
  {
    title: "Executive Search Services",
    date: "December 9, 2024",
    image:
      "https://images.unsplash.com/photo-1560250097-192b70627d17?auto=format&fit=crop&w=160&q=80",
  },
  {
    title: "Direct Hire Placement Programs",
    date: "November 22, 2024",
    image:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=160&q=80",
  },
  {
    title: "Workforce Planning & Strategy",
    date: "October 14, 2024",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=160&q=80",
  },
];

const serviceCategories = [
  "Hiring Needs",
  "industries",
  "industries2",
  "marketing",
  "Solutions",
  "Staffing",
  "Talent",
  "Temporary",
];

const recruitologyList = [
  "Staffing solution is right for you",
  "Skills for short-term projects",
  "Need to fill a position quickly",
];

const faqItems = [
  {
    id: "permanent",
    question: "Looking for top talent for permanent roles?",
    answer: (
      <>
        <p className="mb-4 leading-[1.65]">
          Our direct hire and retained search teams focus on long-term fit—
          evaluating experience, leadership style, and culture so your next hire
          strengthens the organization for years to come.
        </p>
        <p className="leading-[1.65]">
          We manage sourcing, screening, and interview coordination while you
          stay focused on running the business, with clear milestones and
          transparent communication at every step.
        </p>
      </>
    ),
  },
  {
    id: "shortterm",
    question: "Require specialized skills for short-term projects?",
    answer: (
      <p className="leading-[1.65]">
        We deploy contract and project-based talent with the exact technical
        or operational skills you need, scaled to your timeline and budget.
      </p>
    ),
  },
  {
    id: "culture",
    question: "Concerned about cultural fit when hiring?",
    answer: (
      <p className="leading-[1.65]">
        Our process maps your values and team dynamics to candidate profiles,
        using structured interviews and reference insights to reduce mismatch
        risk.
      </p>
    ),
  },
  {
    id: "solution",
    question: "Unsure which staffing solution is right for you?",
    answer: (
      <p className="leading-[1.65]">
        We walk through your goals, urgency, and budget to recommend the right
        mix of temporary, temp-to-hire, or direct hire options.
      </p>
    ),
  },
];

const ServiceDetails = () => {
  const [openFaq, setOpenFaq] = useState("permanent");

  return (
    <main className="bg-white font-['Figtree',sans-serif] text-[#111827]">
      <PageHero
        title="Direct Hire Solutions"
        breadcrumbs={[
          "Recrute Sites",
          "Staffing Agency",
          "Services",
          "Solutions",
          "Direct Hire Solutions",
        ]}
      />

      <section className="px-6 pb-16 pt-10 sm:pt-12">
        <div className="container grid w-full max-w-[1312px] grid-cols-1 gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(280px,360px)] lg:items-start lg:gap-x-12">
          {/* Main column */}
          <article className="min-w-0 space-y-10 text-[#4b5563]">
            <header>
              <h2 className="font-['Poppins'] text-[clamp(1.75rem,3vw,2.25rem)] font-bold leading-tight text-black">
                HR Consulting &amp; Staffing
              </h2>
              <p className="mt-5 text-[15px] leading-[1.7] sm:text-base">
                Partner with experienced HR consultants who understand workforce
                strategy, compliance, and talent acquisition. We align people
                programs with business goals so you can scale confidently while
                reducing administrative burden on your internal team.
              </p>
            </header>

            <section>
              <h3 className="font-['Poppins'] text-xl font-bold text-black sm:text-[22px]">
                HR compliance and talent management
              </h3>
              <p className="mt-4 text-[15px] leading-[1.7] sm:text-base">
                From policy development to day-to-day HR operations, we help
                you navigate regulations and build fair, consistent practices.
                Our advisors support performance management, employee relations,
                and documentation so your organization stays audit-ready.
              </p>
            </section>

            <section>
              <h3 className="font-['Poppins'] text-xl font-bold text-black sm:text-[22px]">
                Talent to drive your organization&apos;s success
              </h3>
              <p className="mt-4 text-[15px] leading-[1.7] sm:text-base">
                Great outcomes start with the right people in the right roles.
                We combine market intelligence with rigorous assessment to
                present candidates who match both the job description and your
                culture.
              </p>
              <p className="mt-4 text-[15px] leading-[1.7] sm:text-base">
                Whether you are building a new team or replacing a key leader,
                our staffing and search services shorten time-to-fill without
                sacrificing quality.
              </p>
            </section>

            <section>
              <h3 className="font-['Poppins'] text-xl font-bold text-black sm:text-[22px]">
                Need to fill a position quickly
              </h3>
              <p className="mt-4 text-[15px] leading-[1.7] sm:text-base">
                When deadlines are tight, we activate curated talent pools and
                proactive sourcing channels to surface qualified professionals
                fast—without skipping vetting steps that protect your brand.
              </p>
              <p className="mt-4 text-[15px] leading-[1.7] sm:text-base">
                Share your must-haves and nice-to-haves; we prioritize speed on
                the criteria that matter most while keeping stakeholders aligned
                through weekly updates.
              </p>
            </section>

            <section>
              <h3 className="font-['Poppins'] text-xl font-bold text-black sm:text-[22px]">
                Need to fill a position quickly
              </h3>
              <p className="mt-4 text-[15px] leading-[1.7] sm:text-base">
                Rapid staffing does not mean rushed decisions. We use
                structured scorecards and consistent interview guides so every
                hiring manager evaluates candidates on the same bar.
              </p>
              <p className="mt-4 text-[15px] leading-[1.7] sm:text-base">
                For surge hiring or seasonal demand, we can blend temporary
                support with a path to permanent placement when the role proves
                long-term.
              </p>
            </section>

            <blockquote className="border-l-[5px] bg-[#f5f5f5] py-5 pl-6 pr-5 text-[15px] italic leading-[1.75] text-[#5f6368] sm:pl-7 sm:text-base">
              Visit our blog for hiring trends, interview tips, and workforce
              insights—resources designed to help employers and candidates make
              smarter decisions in a changing labor market.
            </blockquote>

            <section className="flex flex-col gap-8 border border-[#e8e8e8] bg-white p-5 sm:flex-row sm:items-stretch sm:gap-10 sm:p-6">
              <div className="aspect-[4/3] w-full shrink-0 overflow-hidden rounded-sm border border-[#e0e0e0] bg-[#fafafa] sm:aspect-auto sm:h-auto sm:w-[min(100%,280px)] sm:min-h-[220px]">
                <img
                  src="https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=560&q=80"
                  alt="Recruitment and hiring collaboration"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="min-w-0 flex-1">
                <h3 className="font-['Poppins'] text-lg font-bold leading-snug text-black sm:text-xl">
                  Recruit ology Tips &amp; Trends for Hiring Success
                </h3>
                <p className="mt-3 text-[15px] leading-[1.65] text-[#4b5563] sm:text-base">
                  Stay ahead with practical guidance on sourcing, employer
                  branding, and retention—curated for hiring managers and HR
                  leaders who want measurable results.
                </p>
                <ul className="mt-5 space-y-3 text-[15px] text-[#4b5563] sm:text-base">
                  {recruitologyList.map((item) => (
                    <li key={item} className="flex gap-3 leading-snug">
                      <span
                        className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full"
                        style={{ backgroundColor: accent }}
                        aria-hidden
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            <section className="space-y-4">
              {faqItems.map((item) => {
                const isOpen = openFaq === item.id;
                return (
                  <div key={item.id} className="overflow-hidden rounded-lg">
                    <button
                      type="button"
                      onClick={() =>
                        setOpenFaq(isOpen ? "" : item.id)
                      }
                      className={`flex w-full items-center justify-between gap-4 px-5 py-4 text-left transition-colors sm:px-6 sm:py-[18px] ${
                        isOpen
                          ? "bg-white"
                          : "bg-[#f3f4f6]"
                      }`}
                      aria-expanded={isOpen}
                    >
                      <span
                        className={`text-[15px] font-semibold leading-snug sm:text-base ${
                          isOpen ? "" : "text-black"
                        }`}
                        style={
                          isOpen
                            ? { color: "var(--primary-main)" }
                            : undefined
                        }
                      >
                        {item.question}
                      </span>
                      <span
                        className="shrink-0"
                        style={{
                          color: isOpen
                            ? "var(--primary-main)"
                            : "#111827",
                        }}
                        aria-hidden
                      >
                        {isOpen ? (
                          <FiMinus className="h-5 w-5" strokeWidth={2.5} />
                        ) : (
                          <FiPlus className="h-5 w-5" strokeWidth={2.5} />
                        )}
                      </span>
                    </button>
                    {isOpen && (
                      <div
                        className="border border-[#fdba8c] bg-white px-5 py-5 sm:px-6 sm:py-6"
                        style={{ borderColor: "rgba(253, 150, 91, 0.55)" }}
                      >
                        <div
                          className="border-l-[3px] pl-4 text-[15px] sm:border-l-4 sm:pl-5 sm:text-base"
                          style={{
                            borderLeftColor: "var(--primary-main)",
                            color: "var(--primary-main)",
                          }}
                        >
                          {item.answer}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </section>
          </article>

          {/* Sidebar */}
          <aside className="space-y-6 lg:sticky lg:top-6">
            <section className="rounded-lg bg-white p-7 shadow-[0_8px_24px_rgba(0,0,0,0.06)] ring-1 ring-black/[0.04]">
              <h3 className="font-['Poppins'] text-base font-semibold text-black">
                Search
              </h3>
              <div className="mt-3 flex h-11 items-center rounded border border-[#e5e7eb] bg-[#f3f4f6] px-3">
                <input
                  type="search"
                  name="sidebar-search"
                  placeholder="Search"
                  className="h-full w-full bg-transparent text-[15px] text-[#374151] placeholder:text-[#9ca3af] focus:outline-none"
                />
                <FiSearch
                  className="h-[18px] w-[18px] shrink-0"
                  style={{ color: accent }}
                  aria-hidden
                />
              </div>
            </section>

            <section className="rounded-lg bg-white p-7 shadow-[0_8px_24px_rgba(0,0,0,0.06)] ring-1 ring-black/[0.04]">
              <h3 className="font-['Poppins'] text-base font-semibold text-black">
                Recent Posted
              </h3>
              <div className="mt-4 space-y-5">
                {recentPosted.map((post) => (
                  <article
                    key={post.title}
                    className="flex gap-4 border-b border-[#ececec] pb-5 last:border-b-0 last:pb-0"
                  >
                    <figure className="h-[72px] w-[72px] shrink-0 overflow-hidden rounded bg-[#f3f4f6]">
                      <img
                        src={post.image}
                        alt=""
                        className="h-full w-full object-cover"
                      />
                    </figure>
                    <div className="min-w-0">
                      <h4 className="text-[15px] font-bold leading-snug text-black">
                        {post.title}
                      </h4>
                      <p className="mt-1.5 flex items-center gap-1.5 text-sm text-[#8a92a0]">
                        <SlCalender className="h-3.5 w-3.5 shrink-0" />
                        {post.date}
                      </p>
                    </div>
                  </article>
                ))}
              </div>
            </section>

            <section className="rounded-lg bg-white p-7 shadow-[0_8px_24px_rgba(0,0,0,0.06)] ring-1 ring-black/[0.04]">
              <h3 className="font-['Poppins'] text-base font-semibold text-black">
                Service Categories
              </h3>
              <ul className="mt-4">
                {serviceCategories.map((cat, i) => (
                  <li
                    key={cat}
                    className={`text-[15px] text-[#4b5563] ${
                      i > 0 ? "border-t border-[#ececec] pt-3.5" : ""
                    } ${i < serviceCategories.length - 1 ? "pb-3.5" : ""}`}
                  >
                    <a
                      href="#"
                      className="block transition-colors hover:text-black"
                    >
                      {cat}
                    </a>
                  </li>
                ))}
              </ul>
            </section>

            <section className="rounded-lg bg-white p-7 shadow-[0_8px_24px_rgba(0,0,0,0.06)] ring-1 ring-black/[0.04]">
              <h3 className="font-['Poppins'] text-base font-semibold text-black">
                Contact Us
              </h3>
              <form
                className="mt-4 space-y-3.5"
                onSubmit={(e) => e.preventDefault()}
              >
                <input
                  type="text"
                  name="fullName"
                  placeholder="Full Name"
                  className="h-11 w-full rounded border border-[#e5e7eb] bg-[#fafafa] px-3 text-[15px] text-[#374151] placeholder:text-[#9ca3af] focus:border-[#d1d5db] focus:outline-none"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="h-11 w-full rounded border border-[#e5e7eb] bg-[#fafafa] px-3 text-[15px] text-[#374151] placeholder:text-[#9ca3af] focus:border-[#d1d5db] focus:outline-none"
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  className="h-11 w-full rounded border border-[#e5e7eb] bg-[#fafafa] px-3 text-[15px] text-[#374151] placeholder:text-[#9ca3af] focus:border-[#d1d5db] focus:outline-none"
                />
                <textarea
                  name="message"
                  placeholder="Your Message"
                  rows={5}
                  className="w-full resize-y rounded border border-[#e5e7eb] bg-[#fafafa] px-3 py-3 text-[15px] text-[#374151] placeholder:text-[#9ca3af] focus:border-[#d1d5db] focus:outline-none"
                />
                <button
                  type="submit"
                  className="mt-1 flex h-12 w-full items-center justify-center gap-2 rounded font-semibold text-white transition-opacity hover:opacity-95"
                  style={{ backgroundColor: accent }}
                >
                  Submit Now
                  <FiArrowUpRight className="h-4 w-4" strokeWidth={2.5} />
                </button>
              </form>
            </section>
          </aside>
        </div>
      </section>
    </main>
  );
};

export default ServiceDetails;
