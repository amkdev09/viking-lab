import React, { useState } from "react";
import { FiMinus, FiPlus } from "react-icons/fi";
import PageHero from "../../../components/sections/pageHero";
import Sidebar from "../../../components/sections/sidebar";

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
        We deploy contract and project-based talent with the exact technical or
        operational skills you need, scaled to your timeline and budget.
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
    <main className="bg-white text-[#111827]">
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

      <section className="pt-[100px]">
        <div className="container grid w-full grid-cols-1 gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(210px,410px)] lg:gap-x-10">
          {/* Main column */}
          <article className="min-w-0 space-y-10 text-[var(--primary-text-3)]">
            <header>
              <h2 className="text-4xl font-['Figtree-Bold'] leading-tight text-black">
                HR Consulting &amp; Staffing
              </h2>
              <p className="mt-4 text-base">
                Partner with experienced HR consultants who understand workforce
                strategy, compliance, and talent acquisition. We align people
                programs with business goals so you can scale confidently while
                reducing administrative burden on your internal team.
              </p>
            </header>

            <section>
              <h3 className="text-3xl font-['Figtree-Bold'] text-black sm:text-2xl">
                HR compliance and talent management
              </h3>
              <p className="mt-4 text-base">
                From policy development to day-to-day HR operations, we help you
                navigate regulations and build fair, consistent practices. Our
                advisors support performance management, employee relations, and
                documentation so your organization stays audit-ready.
              </p>
            </section>

            <section>
              <h3 className="text-3xl font-['Figtree-Bold'] text-black sm:text-2xl">
                Talent to drive your organization&apos;s success
              </h3>
              <p className="mt-4 text-base">
                Great outcomes start with the right people in the right roles.
                We combine market intelligence with rigorous assessment to
                present candidates who match both the job description and your
                culture.
              </p>
              <p className="mt-4 text-base">
                Whether you are building a new team or replacing a key leader,
                our staffing and search services shorten time-to-fill without
                sacrificing quality.
              </p>
            </section>

            <section>
              <h3 className="text-3xl font-['Figtree-Bold'] text-black sm:text-2xl">
                Need to fill a position quickly
              </h3>
              <p className="mt-4 text-base">
                When deadlines are tight, we activate curated talent pools and
                proactive sourcing channels to surface qualified professionals
                fast—without skipping vetting steps that protect your brand.
              </p>
              <p className="mt-4 text-base">
                Share your must-haves and nice-to-haves; we prioritize speed on
                the criteria that matter most while keeping stakeholders aligned
                through weekly updates.
              </p>
            </section>

            <section>
              <h3 className="text-3xl font-['Figtree-Bold'] text-black sm:text-2xl">
                Need to fill a position quickly
              </h3>
              <p className="mt-4 text-base">
                Rapid staffing does not mean rushed decisions. We use structured
                scorecards and consistent interview guides so every hiring
                manager evaluates candidates on the same bar.
              </p>
              <p className="mt-4 text-base">
                For surge hiring or seasonal demand, we can blend temporary
                support with a path to permanent placement when the role proves
                long-term.
              </p>
            </section>

            <blockquote className="border-l-[5px] bg-[#f5f5f5] py-5 pl-6 pr-5 text-sm italic leading-[1.75] text-[#5f6368] sm:pl-7 sm:text-base">
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
                <h3 className="text-lg font-bold leading-snug text-black sm:text-xl">
                  Recruit ology Tips &amp; Trends for Hiring Success
                </h3>
                <p className="mt-3 text-sm leading-[1.65] text-[#4b5563] sm:text-base">
                  Stay ahead with practical guidance on sourcing, employer
                  branding, and retention—curated for hiring managers and HR
                  leaders who want measurable results.
                </p>
                <ul className="mt-5 space-y-3 text-sm text-[#4b5563] sm:text-base">
                  {recruitologyList.map((item) => (
                    <li key={item} className="flex gap-3 leading-snug">
                      <span
                        className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full"
                        style={{ backgroundColor: "var(--primary-main)" }}
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
                      onClick={() => setOpenFaq(isOpen ? "" : item.id)}
                      className={`flex w-full items-center justify-between gap-4 px-5 py-4 text-left transition-colors sm:px-6 sm:py-[18px] ${
                        isOpen ? "bg-white" : "bg-[#f3f4f6]"
                      }`}
                      aria-expanded={isOpen}
                    >
                      <span
                        className={`text-sm font-semibold leading-snug sm:text-base ${
                          isOpen ? "" : "text-[var(--primary-text-1)]"
                        }`}
                        style={
                          isOpen ? { color: "var(--primary-main)" } : undefined
                        }
                      >
                        {item.question}
                      </span>
                      <span
                        className="shrink-0"
                        style={{
                          color: isOpen ? "var(--primary-main)" : "#111827",
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
                        style={{ borderColor: "var(--primary-main)" }}
                      >
                        <div
                          className="border-l-[3px] pl-4 text-base sm:border-l-4 sm:pl-5"
                          style={{ borderLeftColor: "var(--primary-main)" }}
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

          <Sidebar
            searchTitle="Search"
            recentWorks={{
              title: "Recent Works",
              items: recentPosted,
            }}
            categories={{
              title: "Categories",
              items: serviceCategories,
            }}
            contactUs={true}
          />
        </div>
      </section>
    </main>
  );
};

export default ServiceDetails;
