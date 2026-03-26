import React from "react";
import { FaStar } from "react-icons/fa";
import PageHero from "../../../components/sections/pageHero";

const quoteText =
  "From startups seeking their first hires to established corporations aiming to expand their teams, our tailored staffing solutions have consistently exceeded expectations";

const avatarSrc =
  "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=96&q=80";

const Testimonial = () => {
  return (
    <main className="bg-white">
      <PageHero
        title="Testimonial"
        breadcrumbs={["Recrute Sites", "Staffing Agency", "Testimonial"]}
      />

      <section className="pt-[100px]">
        <div className="container mx-auto w-full max-w-[1280px]">
          <ul className="grid list-none grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-7 lg:grid-cols-3 lg:gap-8">
            {Array.from({ length: 9 }).map((_, index) => (
              <li key={index}>
                <article className="flex h-full flex-col rounded-lg bg-[#f9f8f8] p-8">
                  <div className="flex gap-1" aria-hidden>
                    {Array.from({ length: 5 }).map((__, i) => (
                      <FaStar
                        key={i}
                        className="h-4 w-4 shrink-0 text-[#ffb084]"
                      />
                    ))}
                  </div>
                  <blockquote className="mt-5 flex-1 text-left text-base leading-[1.65] text-[var(--primary-text-3)]">
                    &ldquo;{quoteText}&rdquo;
                  </blockquote>
                  <div className="mt-10 flex items-center gap-3">
                    <figure className="h-12 w-12 rounded-full object-cover">
                      <img
                        src={avatarSrc}
                        alt=""
                        className="shrink-0 rounded-full object-cover"
                      />
                    </figure>
                    <div className="min-w-0 text-left">
                      <p className="font-['Figtree-Bold'] text-[#111827]">
                        Rinku Iyer
                      </p>
                      <p className="mt-0.5 text-sm text-[var(--primary-text-3)]">
                        Software Engineer
                      </p>
                    </div>
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

export default Testimonial;
