import React, { useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { CiUser } from "react-icons/ci";
import { SlCalender } from "react-icons/sl";
import { PiChatsCircle } from "react-icons/pi";
import PageHero from "../../../components/sections/pageHero";
import Sidebar from "../../../components/sections/sidebar";

const postTitle = "The Staffing Strategist Your Guide to Talent Acquisition";

const sliderImages = [
  "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1200&q=80",
];

const listItems = [
  "Staffing solution is right for you when scale and speed matter most.",
  "Skills for short-term projects without long-term headcount commitment.",
  "Need to fill a position quickly with vetted, interview-ready candidates.",
  "Partnership models that align with your hiring calendar and budget.",
];

const recentPosts = [
  {
    title: "The Staffing Strategist Your Guide to Talent",
    date: "December 30, 2024",
    image:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=160&q=80",
  },
  {
    title: "Talent Chronicles Stories from the Hiring Frontline",
    date: "November 24, 2024",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=160&q=80",
  },
  {
    title: "Recruitology Where Recruitment Meets Technology",
    date: "November 24, 2024",
    image:
      "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=160&q=80",
  },
];

const categoryItems = ["Startup", "Technology"];
const tagItems = ["IT", "Solutions"];

const accent = "var(--primary-main)";

const BlogDetails = () => {
  const [slide, setSlide] = useState(0);
  const next = () => setSlide((i) => (i + 1) % sliderImages.length);
  const prev = () =>
    setSlide((i) => (i - 1 + sliderImages.length) % sliderImages.length);

  return (
    <main className="bg-white text-[#111827]">
      <PageHero
        title={postTitle}
        breadcrumbs={[
          "Recrute Sites",
          "Staffing Agency",
          "Blog",
          "Startup",
          postTitle,
        ]}
      />

      <section className="pt-[100px]">
        <div className="container grid w-full max-w-[1312px] grid-cols-1 gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(210px,410px)] lg:gap-x-10">
          <div className="min-w-0 space-y-8">
            <article className="text-[var(--primary-text-3)]">
              <div className="relative overflow-hidden bg-[#e8e8e8]">
                <img
                  src={sliderImages[slide]}
                  alt=""
                  className="h-[min(420px,50vw)] w-full object-cover sm:h-[460px] md:h-[500px]"
                />
                <button
                  type="button"
                  onClick={prev}
                  className="absolute top-1/2 left-3 inline-flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-[var(--primary-main)] text-white shadow-md transition-opacity hover:opacity-95 md:left-4 md:h-14 md:w-14"
                  aria-label="Previous image"
                >
                  <FiChevronLeft className="h-6 w-6 md:h-7 md:w-7" />
                </button>
                <button
                  type="button"
                  onClick={next}
                  className="absolute top-1/2 right-3 inline-flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-[var(--primary-main)] text-white shadow-md transition-opacity hover:opacity-95 md:right-4 md:h-14 md:w-14"
                  aria-label="Next image"
                >
                  <FiChevronRight className="h-6 w-6 md:h-7 md:w-7" />
                </button>
              </div>

              <div className="mt-4 flex flex-wrap items-center gap-x-6 gap-y-2 text-base text-[#6b7280]">
                <span className="inline-flex items-center gap-1.5">
                  <CiUser className="h-[18px] w-[18px] shrink-0" aria-hidden />
                  Nisace
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <SlCalender className="h-[18px] w-[18px] shrink-0" aria-hidden />
                  November 21, 2024
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <PiChatsCircle className="h-[18px] w-[18px] shrink-0" aria-hidden />
                  No Comments
                </span>
              </div>

              <h2 className="mt-6 text-3xl font-['Figtree-Bold'] leading-tight text-black md:text-4xl">
                {postTitle}
              </h2>

              <p className="mt-5 text-base leading-[1.68]">
                Welcome to our blog, where we share valuable insights, tips, and
                industry news to empower both clients and candidates in the world
                of staffing and recruitment. We believe that knowledge is power,
                and our blog serves as a platform to provide practical guidance
                whether you&apos;re a hiring manager seeking strategies to
                streamline your recruitment process or a candidate exploring your
                next opportunity.
              </p>
              <p className="mt-4 text-base leading-[1.68]">
                From market trends and interview best practices to compliance
                updates and employer branding ideas, we curate content that helps
                you make confident decisions. Bookmark this page and check back
                regularly for fresh perspectives from our staffing experts.
              </p>

              <h3 className="mt-10 text-2xl font-['Figtree-Bold'] text-black md:text-3xl">
                Recruit ology Tips &amp; Trends for Hiring Success
              </h3>
              <ul className="mt-4 list-disc space-y-2 pl-6 text-base leading-[1.68] marker:text-[var(--primary-main)]">
                {listItems.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>

              <blockquote className="mt-8 border-l-[5px] border-l-[var(--primary-main)] bg-[#f5f5f5] px-5 py-4 text-base italic leading-[1.75] text-[#5d6470] md:px-6">
                Visit our blog for hiring trends, interview tips, and workforce
                insights—resources designed to help employers and candidates make
                smarter decisions in a changing labor market.
              </blockquote>

              <section className="mt-8 flex flex-col gap-6 border border-[#ececec] bg-white p-5 sm:flex-row sm:items-start sm:gap-8 sm:p-6">
                <div className="aspect-square w-full shrink-0 overflow-hidden border border-[#e7e7e7] bg-[#fafafa] sm:w-[min(100%,240px)] sm:min-h-[200px]">
                  <img
                    src="https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=480&q=80"
                    alt=""
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="text-xl font-['Figtree-Bold'] leading-snug text-black sm:text-2xl">
                    Recruit ology Tips &amp; Trends for Hiring Success
                  </h3>
                  <p className="mt-3 text-base leading-[1.65] text-[#4b5563]">
                    Stay ahead with practical guidance on sourcing, employer
                    branding, and retention—curated for hiring managers and HR
                    leaders who want measurable results.
                  </p>
                  <ul className="mt-5 space-y-3 text-base text-[#4b5563]">
                    {listItems.slice(0, 3).map((item) => (
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

              <div className="mt-10 flex flex-wrap gap-3">
                {tagItems.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex h-9 items-center rounded bg-[#f3f4f6] px-4 text-sm font-medium text-[#111827]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </article>

            <section className="border-t border-[#ececec] pt-10">
              <h3 className="text-2xl font-['Figtree-Bold'] text-black md:text-3xl">
                Write a comment
              </h3>
              <p className="mt-2 text-sm text-[#6b7280] md:text-base">
                Your email address will not be published. Required fields are
                marked *
              </p>
              <form
                className="mt-6 space-y-4"
                onSubmit={(e) => e.preventDefault()}
              >
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <input
                    type="text"
                    name="commentName"
                    placeholder="Enter Name"
                    className="h-11 w-full rounded border border-[#e5e7eb] bg-[#f3f4f6] px-3 text-sm text-[#374151] placeholder:text-[#9ca3af] focus:border-[#d1d5db] focus:outline-none"
                  />
                  <input
                    type="email"
                    name="commentEmail"
                    placeholder="Enter Email"
                    className="h-11 w-full rounded border border-[#e5e7eb] bg-[#f3f4f6] px-3 text-sm text-[#374151] placeholder:text-[#9ca3af] focus:border-[#d1d5db] focus:outline-none"
                  />
                </div>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <input
                    type="tel"
                    name="commentPhone"
                    placeholder="Phone Number"
                    className="h-11 w-full rounded border border-[#e5e7eb] bg-[#f3f4f6] px-3 text-sm text-[#374151] placeholder:text-[#9ca3af] focus:border-[#d1d5db] focus:outline-none"
                  />
                  <input
                    type="text"
                    name="commentSubject"
                    placeholder="Subject"
                    className="h-11 w-full rounded border border-[#e5e7eb] bg-[#f3f4f6] px-3 text-sm text-[#374151] placeholder:text-[#9ca3af] focus:border-[#d1d5db] focus:outline-none"
                  />
                </div>
                <textarea
                  name="commentBody"
                  placeholder="Enter Your Comment"
                  rows={6}
                  className="w-full resize-y rounded border border-[#e5e7eb] bg-[#f3f4f6] px-3 py-3 text-sm text-[#374151] placeholder:text-[#9ca3af] focus:border-[#d1d5db] focus:outline-none"
                />
                <div className="flex justify-start pt-1">
                  <button
                    type="submit"
                    className="inline-flex h-11 items-center justify-center rounded bg-[var(--primary-main)] px-8 text-sm font-semibold text-white transition-opacity hover:opacity-95"
                  >
                    Post Comment
                  </button>
                </div>
              </form>
            </section>
          </div>

          <Sidebar
            searchTitle="Search"
            recentWorks={{
              title: "Recent Posts",
              items: recentPosts,
            }}
            categories={{
              title: "Category",
              items: categoryItems,
            }}
            tags={{
              title: "Tags",
              items: tagItems,
            }}
          />
        </div>
      </section>
    </main>
  );
};

export default BlogDetails;
