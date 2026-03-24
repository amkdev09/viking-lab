import React from "react";
import {
  FiArrowRight,
  FiChevronLeft,
  FiChevronRight,
  FiSearch,
} from "react-icons/fi";
import PageHero from "../../components/sections/pageHero";
import { CiUser } from "react-icons/ci";
import { SlCalender } from "react-icons/sl";
import { PiChatsCircle } from "react-icons/pi";

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

const BlogPage = () => {
  return (
    <main className="bg-[#f3f3f3] font-['Inter'] text-[#111827]">
      <PageHero
        title="Blog"
        breadcrumbs={["Recrute Sites", "Staffing Agency", "Blog"]}
      />

      <section className="px-6 pb-[46px] pt-[40px]">
        <div className="container grid w-full grid-cols-1 gap-[24px] lg:grid-cols-[minmax(0,1fr)_330px] lg:items-start">
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
                    className="absolute top-1/2 left-[10px] inline-flex h-[60px] w-[60px] -translate-y-1/2 items-center justify-center rounded-full bg-[var(--vtc-bg-main-bg-1)] text-white"
                    aria-label="Previous post image"
                  >
                    <FiChevronLeft className="h-[24px] w-[24px]" />
                  </button>
                  <button
                    type="button"
                    className="absolute top-1/2 right-[10px] inline-flex h-[60px] w-[60px] -translate-y-1/2 items-center justify-center rounded-full bg-[var(--vtc-bg-main-bg-1)] text-white"
                    aria-label="Next post image"
                  >
                    <FiChevronRight className="h-[24px] w-[24px]" />
                  </button>
                </div>

                <div className="px-[14px] pb-[14px] pt-[12px]">
                  <div className="flex flex-wrap items-center gap-x-[16px] gap-y-[6px] text-[11px] text-[#7d8591]">
                    <span className="inline-flex items-center gap-1 text-[length:var(--f-fs-font-fs16)]">
                      <CiUser className="h-[16px] w-[16px]" /> Nasim
                    </span>
                    <span className="inline-flex items-center gap-1 text-[length:var(--f-fs-font-fs16)]">
                      <SlCalender className="h-[16px] w-[16px]" /> December 30,
                      2024
                    </span>
                    <span className="inline-flex items-center gap-1 text-[length:var(--f-fs-font-fs16)]">
                      <PiChatsCircle className="h-[16px] w-[16px]" /> No
                      Comments
                    </span>
                  </div>

                  <h2 className="mt-[8px] max-w-[650px] font-['Poppins'] text-[length:var(--f-fs-font-fs32)] leading-[1.18] font-semibold text-[#111827]">
                    {post.title}
                  </h2>

                  <p className="mt-[8px] max-w-[690px] text-[length:var(--f-fs-font-fs16)] leading-[1.55] text-[#6b7280]">
                    Welcome to our blog, where we share valuable insights, tips,
                    and industry news to empower both clients and candidates in
                    the world of staffing and recruitment. We believe that
                    knowledge is power, and our blog serves as a platform to
                    provide Whether you&apos;re a hiring manager seeking
                    strategies to streamline your recruitment process or a
                  </p>

                  <button
                    type="button"
                    className="mt-[10px] p-[28px] inline-flex h-[30px] items-center gap-[6px] bg-[var(--vtc-bg-main-bg-1)] px-[10px] text-[length:var(--f-fs-font-fs16)] font-semibold text-white"
                  >
                    Read More
                    <FiArrowRight aria-hidden="true" />
                  </button>
                </div>
              </article>
            ))}
          </div>

          <aside className="space-y-[12px]">
            <section className="rounded-[4px] bg-[#f7f7f7] p-[28px] shadow-lg">
              <h3 className="font-['Poppins'] text-[length:var(--f-fs-font-fs16)] font-semibold text-[#111827]">
                Search
              </h3>
              <div className="mt-[10px] flex h-[40px] items-center rounded-[4px] border border-[#e2e2e2] bg-[#f3f3f3] px-[10px]">
                <input
                  type="text"
                  placeholder="Search"
                  className="h-full w-full bg-transparent text-[length:var(--f-fs-font-fs16)] text-[#49505b] placeholder:text-[#9ca3af] focus:outline-none"
                />
                <FiSearch className="text-[length:var(--f-fs-font-fs16)] text-[#f39f5a]" />
              </div>
            </section>

            <section className="rounded-[4px] bg-[#f7f7f7] p-[28px] shadow-lg">
              <h3 className="font-['Poppins'] text-[length:var(--f-fs-font-fs16)] font-semibold text-[#111827]">
                Recent Posts
              </h3>
              <div className="mt-[8px] space-y-[10px]">
                {recentPosts.map((item) => (
                  <article
                    key={item.title}
                    className="flex gap-[16px] border-b border-[#e6e6e6] pb-[16px] last:border-b-0 last:pb-0"
                  >
                    <figure className="h-[72px] w-[72px] shrink-0 object-cover rounded-[4px]">
                      <img src={item.image} alt={item.title} className="h-full w-full object-cover rounded-[4px]" />
                    </figure>
                    <div>
                      <h4 className="text-[length:var(--f-fs-font-fs16)] leading-[1.35] font-medium text-[#111827]">
                        {item.title}
                      </h4>
                      <p className="mt-[4px] text-[length:var(--f-fs-font-fs16)] text-[#8a92a0]">
                        {item.date}
                      </p>
                    </div>
                  </article>
                ))}
              </div>
            </section>

            <section className="rounded-[4px] bg-[#f7f7f7] p-[28px] shadow-lg">
              <h3 className="font-['Poppins'] text-[length:var(--f-fs-font-fs16)] font-semibold text-[#111827]">
                Category
              </h3>
              <ul className="mt-[8px] space-y-[8px]">
                <li className="border-b border-[#e6e6e6] pb-[8px] text-[length:var(--f-fs-font-fs16)] text-[#2e3440]">
                  Startup
                </li>
                <li className="text-[length:var(--f-fs-font-fs16)] text-[#2e3440]">Technology</li>
              </ul>
            </section>

            <section className="rounded-[4px] bg-[#f7f7f7] p-[28px] shadow-lg">
              <h3 className="font-['Poppins'] text-[length:var(--f-fs-font-fs16)] font-semibold text-[#111827]">
                Tags
              </h3>
              <div className="mt-[10px] flex flex-wrap gap-[8px]">
                <span className="inline-flex h-[24px] items-center p-[12px] rounded-[4px] bg-[var(--vtc-bg-common-bg2)] text-[length:var(--f-fs-font-fs16)] text-[#3d4653]">
                  IT
                </span>
                <span className="inline-flex h-[24px] items-center p-[12px] rounded-[4px] bg-[var(--vtc-bg-common-bg2)] text-[length:var(--f-fs-font-fs16)] text-[#3d4653]">
                  Solutions
                </span>
              </div>
            </section>
          </aside>
        </div>
      </section>
    </main>
  );
};

export default BlogPage;
