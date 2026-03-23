import React from "react";
import { FiArrowRight, FiChevronLeft, FiChevronRight, FiSearch } from "react-icons/fi";

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
      <section
        className="px-6 py-[52px] text-center"
        style={{
          background:
            "linear-gradient(90deg, rgba(14,53,47,1) 0%, rgba(10,43,39,1) 55%, rgba(15,57,51,1) 100%)",
        }}
      >
        <h1 className="font-['Poppins'] text-[50px] leading-none font-semibold text-white">
          Blog
        </h1>
        <p className="mt-5 text-[13px] font-semibold tracking-[0.01em] text-white/90">
          Recrute Sites
          <span className="px-2 text-white/65" aria-hidden="true">
            &gt;
          </span>
          Staffing Agency
          <span className="px-2 text-white/65" aria-hidden="true">
            &gt;
          </span>
          Blog
        </p>
      </section>

      <section className="px-6 pb-[46px] pt-[40px]">
        <div className="mx-auto grid w-full max-w-[1220px] grid-cols-1 gap-[22px] lg:grid-cols-[minmax(0,1fr)_330px] lg:items-start">
          <div className="space-y-[18px]">
            {blogItems.map((post) => (
              <article
                key={post.id}
                className="overflow-hidden rounded-[2px] border border-[#dfdfdf] bg-[#f7f7f7] shadow-[0_2px_8px_rgba(16,24,40,0.04)]"
              >
                <div className="relative">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="h-[350px] w-full object-cover"
                  />

                  <button
                    type="button"
                    className="absolute top-1/2 left-[10px] inline-flex h-[30px] w-[30px] -translate-y-1/2 items-center justify-center rounded-full bg-[#f39f5a] text-white"
                    aria-label="Previous post image"
                  >
                    <FiChevronLeft />
                  </button>
                  <button
                    type="button"
                    className="absolute top-1/2 right-[10px] inline-flex h-[30px] w-[30px] -translate-y-1/2 items-center justify-center rounded-full bg-[#f39f5a] text-white"
                    aria-label="Next post image"
                  >
                    <FiChevronRight />
                  </button>
                </div>

                <div className="px-[14px] pb-[14px] pt-[12px]">
                  <div className="flex flex-wrap items-center gap-x-[16px] gap-y-[6px] text-[11px] text-[#7d8591]">
                    <span>👤 Nasim</span>
                    <span>📅 December 30, 2024</span>
                    <span>💬 No Comments</span>
                  </div>

                  <h2 className="mt-[8px] max-w-[650px] font-['Poppins'] text-[37px] leading-[1.18] font-semibold text-[#111827]">
                    {post.title}
                  </h2>

                  <p className="mt-[8px] max-w-[690px] text-[11px] leading-[1.55] text-[#6b7280]">
                    Welcome to our blog, where we share valuable insights, tips,
                    and industry news to empower both clients and candidates in
                    the world of staffing and recruitment. We believe that
                    knowledge is power, and our blog serves as a platform to
                    provide Whether you&apos;re a hiring manager seeking strategies
                    to streamline your recruitment process or a
                  </p>

                  <button
                    type="button"
                    className="mt-[10px] inline-flex h-[30px] items-center gap-[6px] bg-[#f39f5a] px-[10px] text-[10px] font-semibold text-white"
                  >
                    Read More
                    <FiArrowRight aria-hidden="true" />
                  </button>
                </div>
              </article>
            ))}
          </div>

          <aside className="space-y-[12px]">
            <section className="rounded-[2px] border border-[#dfdfdf] bg-[#f7f7f7] p-[12px]">
              <h3 className="font-['Poppins'] text-[16px] font-semibold text-[#111827]">
                Search
              </h3>
              <div className="mt-[10px] flex h-[40px] items-center rounded-[2px] border border-[#e2e2e2] bg-[#f3f3f3] px-[10px]">
                <input
                  type="text"
                  placeholder="Search"
                  className="h-full w-full bg-transparent text-[12px] text-[#49505b] placeholder:text-[#9ca3af] focus:outline-none"
                />
                <FiSearch className="text-[12px] text-[#f39f5a]" />
              </div>
            </section>

            <section className="rounded-[2px] border border-[#dfdfdf] bg-[#f7f7f7] p-[12px]">
              <h3 className="font-['Poppins'] text-[16px] font-semibold text-[#111827]">
                Recent Posts
              </h3>
              <div className="mt-[8px] space-y-[10px]">
                {recentPosts.map((item) => (
                  <article
                    key={item.title}
                    className="flex gap-[10px] border-b border-[#e6e6e6] pb-[10px] last:border-b-0 last:pb-0"
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-[44px] w-[60px] shrink-0 object-cover"
                    />
                    <div>
                      <h4 className="text-[11px] leading-[1.35] font-medium text-[#111827]">
                        {item.title}
                      </h4>
                      <p className="mt-[4px] text-[10px] text-[#8a92a0]">{item.date}</p>
                    </div>
                  </article>
                ))}
              </div>
            </section>

            <section className="rounded-[2px] border border-[#dfdfdf] bg-[#f7f7f7] p-[12px]">
              <h3 className="font-['Poppins'] text-[16px] font-semibold text-[#111827]">
                Category
              </h3>
              <ul className="mt-[8px] space-y-[8px]">
                <li className="border-b border-[#e6e6e6] pb-[8px] text-[12px] text-[#2e3440]">
                  Startup
                </li>
                <li className="text-[12px] text-[#2e3440]">Technology</li>
              </ul>
            </section>

            <section className="rounded-[2px] border border-[#dfdfdf] bg-[#f7f7f7] p-[12px]">
              <h3 className="font-['Poppins'] text-[16px] font-semibold text-[#111827]">
                Tags
              </h3>
              <div className="mt-[10px] flex flex-wrap gap-[8px]">
                <span className="inline-flex h-[24px] items-center border border-[#e2e2e2] bg-[#f2f2f2] px-[12px] text-[10px] text-[#3d4653]">
                  IT
                </span>
                <span className="inline-flex h-[24px] items-center border border-[#e2e2e2] bg-[#f2f2f2] px-[12px] text-[10px] text-[#3d4653]">
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
