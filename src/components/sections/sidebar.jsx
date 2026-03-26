import React from "react";
import { FiArrowUpRight, FiSearch } from "react-icons/fi";
import { SlCalender } from "react-icons/sl";

const Sidebar = ({
  searchTitle = "Search",
  recentWorks = {
    title: "Recent Works",
    items: [],
  },
  categories = {
    title: "Service Categories",
    items: [],
  },
  tags = {
    title: "Tags",
    items: [],
  },
  contactUs = false,
}) => {
  return (
    <aside className="space-y-6">
      {searchTitle && (
        <section className="rounded-lg bg-white p-7 shadow-xl">
          <h3 className="text-2xl text-black">{searchTitle}</h3>
          <div className="mt-3 flex h-11 items-center rounded bg-[#f3f4f6] px-3">
            <input
              type="search"
              name="sidebar-search"
              placeholder="Search"
              className="h-full w-full bg-transparent text-sm text-[#374151] placeholder:text-[#9ca3af] focus:outline-none"
            />
            <FiSearch
              className="h-[18px] w-[18px] shrink-0"
              style={{ color: "var(--primary-main)" }}
              aria-hidden
            />
          </div>
        </section>
      )}

      {recentWorks.items.length > 0 && (
        <section className="rounded-lg bg-white p-7 shadow-lg">
          <h3 className="text-2xl text-black">{recentWorks.title}</h3>
          <div className="mt-4 space-y-5">
            {recentWorks.items.map((post) => (
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
                <div className="min-w-0 flex flex-col justify-center">
                  <h4 className="text-lg font-['Figtree-Regular'] text-black">
                    {post.title}
                  </h4>
                  <p className="mt-1.5 flex items-center gap-1.5 text-base font-['Figtree-Regular'] text-black">
                    <SlCalender className="h-3.5 w-3.5 shrink-0" />
                    {post.date}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>
      )}

      {categories.items.length > 0 && (
        <section className="rounded-lg bg-white p-7 shadow-lg">
          <h3 className="text-2xl text-black">{categories.title}</h3>
          <ul className="mt-4">
            {categories.items.map((cat, i) => (
              <li
                key={cat}
                className={`text-sm text-[#4b5563] ${
                  i > 0 ? "border-t border-[#ececec] pt-3.5" : ""
                } ${i < categories.items.length - 1 ? "pb-3.5" : ""}`}
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
      )}

      {tags.items.length > 0 && (
        <section className="bg-white p-7 shadow-[0_10px_30px_rgba(16,24,40,0.08)]">
          <h3 className="text-2xl text-black">{tags.title}</h3>
          <div className="mt-4 flex flex-wrap gap-3">
            {tags.items.map((tag) => (
              <span
                key={tag}
                className="inline-flex h-8 items-center rounded bg-[#f3f4f6] px-4 text-[14px] text-[#111827]"
              >
                {tag}
              </span>
            ))}
          </div>
        </section>
      )}

      {contactUs && (
        <section className="rounded-lg bg-white p-7 shadow-lg">
          <h3 className="text-2xl text-black">Contact Us</h3>
          <form
            className="mt-4 space-y-3.5"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="text"
              name="fullName"
              placeholder="Full Name"
              className="h-11 w-full rounded border border-[#e5e7eb] bg-[#fafafa] px-3 text-sm text-[#374151] placeholder:text-[#9ca3af] focus:border-[#d1d5db] focus:outline-none"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="h-11 w-full rounded border border-[#e5e7eb] bg-[#fafafa] px-3 text-sm text-[#374151] placeholder:text-[#9ca3af] focus:border-[#d1d5db] focus:outline-none"
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              className="h-11 w-full rounded border border-[#e5e7eb] bg-[#fafafa] px-3 text-sm text-[#374151] placeholder:text-[#9ca3af] focus:border-[#d1d5db] focus:outline-none"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows={5}
              className="w-full resize-y rounded border border-[#e5e7eb] bg-[#fafafa] px-3 py-3 text-sm text-[#374151] placeholder:text-[#9ca3af] focus:border-[#d1d5db] focus:outline-none"
            />
            <button
              type="submit"
              className="mt-1 flex h-12 w-full items-center justify-center gap-2 rounded font-semibold text-white transition-opacity hover:opacity-95"
              style={{ backgroundColor: "var(--primary-main)" }}
            >
              Submit Now
              <FiArrowUpRight className="h-4 w-4" strokeWidth={2.5} />
            </button>
          </form>
        </section>
      )}
    </aside>
  );
};

export default Sidebar;
