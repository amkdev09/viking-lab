import React from "react";
import { FiArrowUpRight } from "react-icons/fi";
import PageHero from "../../components/sections/pageHero";

const projectCards = [
  "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1556740758-90de374c12ad?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=900&q=80",
];

const ProjectsPage = () => {
  return (
    <main className="bg-[#f3f3f3]">
      <PageHero
        title="Our Projects"
        breadcrumbs={["Recrute Sites", "Staffing Agency", "Our Projects"]}
      />
      <section className="px-6 pb-[60px] pt-[46px]">
        <div className="container grid w-full grid-cols-1 gap-[14px] sm:grid-cols-2 lg:grid-cols-3">
          {projectCards.map((image, index) => (
            <article
              key={`${image}-${index}`}
              className="relative h-[464px] overflow-hidden bg-white rounded-[4px]"
            >
              <img
                src={image}
                alt={`Project item ${index + 1}`}
                className="h-full w-full object-cover"
                loading="lazy"
              />

              <div className="absolute right-[20px] bottom-[24px] left-[20px] bg-[var(--primary-main)] px-[28px] py-[16px] text-white">
                <p className="text-base font-medium text-white/90">
                  Staffing Service
                </p>
                <div className="mt-[4px] flex items-center justify-between gap-3">
                  <h3 className="max-w-[155px] text-2xl leading-[1.25] font-semibold">
                    Demonstrating Our Expertise
                  </h3>
                  <span className="inline-flex h-[34px] w-[34px] shrink-0 items-center justify-center rounded-full bg-white text-base text-[#f39f5a]">
                    <FiArrowUpRight aria-hidden="true" />
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
};

export default ProjectsPage;
