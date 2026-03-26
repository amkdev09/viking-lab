import React from "react";
import { Link } from "react-router-dom";
import { FiArrowUpRight } from "react-icons/fi";
import { CiUser } from "react-icons/ci";
import { SlCalender } from "react-icons/sl";
import PageHero from "../../../components/sections/pageHero";

const excerpt =
  "Welcome to our blog, where we share valuable insights, tips, and industry news to...";

const gridPosts = [
  {
    id: 1,
    title: "The Staffing Strategist Your Guide to Talent Acquisition",
    date: "December 30, 2024",
    author: "nasujon",
    image:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    title: "The Staffing Strategist Your Guide to Talent Acquisition",
    date: "December 30, 2024",
    author: "nasujon",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    title: "The Staffing Strategist Your Guide to Talent Acquisition",
    date: "December 30, 2024",
    author: "nasujon",
    image:
      "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 4,
    title: "The Staffing Strategist Your Guide to Talent Acquisition",
    date: "December 30, 2024",
    author: "nasujon",
    image:
      "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 5,
    title: "The Staffing Strategist Your Guide to Talent Acquisition",
    date: "December 30, 2024",
    author: "nasujon",
    image:
      "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 6,
    title: "The Staffing Strategist Your Guide to Talent Acquisition",
    date: "December 30, 2024",
    author: "nasujon",
    image:
      "https://images.unsplash.com/photo-1560250097-192b70627d17?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 7,
    title: "The Staffing Strategist Your Guide to Talent Acquisition",
    date: "December 30, 2024",
    author: "nasujon",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 8,
    title: "The Staffing Strategist Your Guide to Talent Acquisition",
    date: "December 30, 2024",
    author: "nasujon",
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 9,
    title: "The Staffing Strategist Your Guide to Talent Acquisition",
    date: "December 30, 2024",
    author: "nasujon",
    image:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80",
  },
];

const BlogGrid = () => {
  return (
    <main className="bg-white text-[#111827]">
      <PageHero
        title="Blog Grid"
        breadcrumbs={["Recrute Sites", "Staffing Agency", "Blog Grid"]}
      />

      <section className="px-6 pb-20 pt-16 md:pb-24 md:pt-20">
        <div className="container mx-auto w-full max-w-[1280px]">
          <ul className="grid list-none grid-cols-1 gap-7 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3 lg:gap-8">
            {gridPosts.map((post) => (
              <li key={post.id}>
                <article className="group flex h-full flex-col overflow-hidden bg-[#f8f8f8] transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                  <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#e8e8e8]">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                      loading="lazy"
                    />
                  </div>
                  <div className="flex flex-1 flex-col px-5 pb-6 pt-5 md:px-6 md:pb-7 md:pt-6">
                    <div className="flex flex-wrap items-center gap-x-5 gap-y-1.5 text-sm text-[#4b5563]">
                      <span className="inline-flex items-center gap-1.5">
                        <SlCalender
                          className="h-4 w-4 shrink-0 text-[#6b7280]"
                          aria-hidden
                        />
                        {post.date}
                      </span>
                      <span className="inline-flex items-center gap-1.5">
                        <CiUser
                          className="h-4 w-4 shrink-0 text-[#6b7280]"
                          aria-hidden
                        />
                        {post.author}
                      </span>
                    </div>
                    <h2 className="mt-3 text-lg font-['Figtree-Bold'] leading-snug text-[#0f172a] md:text-xl">
                      {post.title}
                    </h2>
                    <p className="mt-2 line-clamp-2 flex-1 text-base leading-[1.55] text-[#6b7280]">
                      {excerpt}
                    </p>
                    <Link
                      to="/blog"
                      className="mt-4 inline-flex w-fit items-center gap-1.5 text-sm font-semibold text-[#0f172a] transition-colors hover:text-[var(--primary-main)]"
                    >
                      Read More
                      <FiArrowUpRight
                        className="h-4 w-4 shrink-0"
                        strokeWidth={2.25}
                        aria-hidden
                      />
                    </Link>
                  </div>
                </article>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
};

export default BlogGrid;
