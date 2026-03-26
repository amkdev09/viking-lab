import React from "react";
import {
  FiArrowRight,
  FiChevronLeft,
  FiChevronRight,
  FiSearch,
} from "react-icons/fi";
import PageHero from "../../../components/sections/pageHero";
import { CiUser } from "react-icons/ci";
import { SlCalender } from "react-icons/sl";
import { PiChatsCircle } from "react-icons/pi";
import Sidebar from "../../../components/sections/sidebar";

const recentPosts = [
  {
    title: "The Staffing Strategist Your Guide to Talent",
    date: "December 30, 2024",
    image:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=320&q=80",
  },
  {
    title: "Talent Chronicles Stories from the Hiring Frontline",
    date: "November 24, 2024",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=320&q=80",
  },
  {
    title: "Recruitology Where Recruitment Meets Technology",
    date: "November 24, 2024",
    image:
      "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=320&q=80",
  },
];

const blogItems = [
  {
    id: 1,
    title: "The Staffing Strategist Your Guide to Talent Acquisition",
    image:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 2,
    title: "The Staffing Strategist Your Guide to Talent Acquisition",
    image:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80",
  },
];

const categories = ["Startup", "Technology"];
const tags = ["IT", "Solutions"];

const BlogPage = () => {
  return (
    <main className="text-[#111827]">
      <PageHero
        title="Blog"
        breadcrumbs={["Recrute Sites", "Staffing Agency", "Blog"]}
      />

      <section className="pt-[100px]">
        <div className="container grid w-full grid-cols-1 gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(210px,410px)] lg:gap-x-10">
          <div className="space-y-[18px]">
            {blogItems.map((post) => (
              <article
                key={post.id}
                className="overflow-hidden rounded-[4px] bg-[#f7f7f7] shadow-lg"
              >
                <div className="relative">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="h-[350px] w-full object-cover"
                  />

                  <button
                    type="button"
                    className="absolute top-1/2 left-[10px] inline-flex h-[60px] w-[60px] -translate-y-1/2 items-center justify-center rounded-full bg-[var(--primary-main)] text-white"
                    aria-label="Previous post image"
                  >
                    <FiChevronLeft className="h-[24px] w-[24px]" />
                  </button>
                  <button
                    type="button"
                    className="absolute top-1/2 right-[10px] inline-flex h-[60px] w-[60px] -translate-y-1/2 items-center justify-center rounded-full bg-[var(--primary-main)] text-white"
                    aria-label="Next post image"
                  >
                    <FiChevronRight className="h-[24px] w-[24px]" />
                  </button>
                </div>

                <div className="px-[14px] pb-[14px] pt-[12px]">
                  <div className="flex flex-wrap items-center gap-x-[16px] gap-y-[6px] text-xs text-[#7d8591]">
                    <span className="inline-flex items-center gap-0.5 text-base">
                      <CiUser className="h-[16px] w-[16px]" /> Nasim
                    </span>
                    <span className="inline-flex items-center gap-0.5 text-base">
                      <SlCalender className="h-[16px] w-[16px]" /> December 30,
                      2024
                    </span>
                    <span className="inline-flex items-center gap-0.5 text-base">
                      <PiChatsCircle className="h-[16px] w-[16px]" /> No
                      Comments
                    </span>
                  </div>

                  <h2 className="mt-[8px] max-w-[650px] text-3xl font-['Figtree-Bold'] leading-[1.18] text-[#111827]">
                    {post.title}
                  </h2>

                  <p className="mt-[8px] mb-12  max-w-[690px] text-base leading-[1.55] text-[#6b7280]">
                    Welcome to our blog, where we share valuable insights, tips,
                    and industry news to empower both clients and candidates in
                    the world of staffing and recruitment. We believe that
                    knowledge is power, and our blog serves as a platform to
                    provide Whether you&apos;re a hiring manager seeking
                    strategies to streamline your recruitment process or a
                  </p>

                  <button type="button" className="theme-btn6">
                    Read More
                    <FiArrowRight aria-hidden="true" />
                  </button>
                </div>
              </article>
            ))}
          </div>

          <Sidebar
            searchTitle="Search"
            recentPosts={{
              title: "Recent Posts",
              items: recentPosts,
            }}
            categories={{
              title: "Categories",
              items: categories,
            }}
            tags={{
              title: "Tags",
              items: tags,
            }}
          />
        </div>
      </section>
    </main>
  );
};

export default BlogPage;
