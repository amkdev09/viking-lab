import React from "react";
import { HiOutlineLightBulb, HiOutlineDocumentText } from "react-icons/hi";
import { FiArrowUpRight } from "react-icons/fi";
import { RiUserSearchLine, RiTeamLine, RiGroupLine } from "react-icons/ri";
import PageHero from "../../components/sections/pageHero";
import SectionHeader from "../../components/sections/header";

const AboutUs = () => {
  return (
    <main className="bg-white font-['Inter'] text-[#0f1720]">
      <PageHero
        title="About Us"
        breadcrumbs={["Recrute Sites", "Staffing Agency", "About Us"]}
      />

      <section className="px-6 py-[6.2rem]">
        <div className="container flex gap-4">
          <div className="flex w-1/2 gap-4">
            <div className="flex w-1/2 flex-col gap-4">
              <img
                src="https://images.unsplash.com/photo-1573164574572-cb89e39749b4?auto=format&fit=crop&w=760&q=80"
                alt="Business people discussing work"
                className="w-full object-cover"
              />
              <div className="bg-[#173a33] px-6 pt-5 text-white py-5">
                <p className="font-['Poppins'] text-[40px] leading-none font-semibold">
                  16+
                </p>
                <p className="mt-2 text-[18px] font-medium">
                  Years of Experienced
                </p>
              </div>
            </div>

            <div className="flex w-1/2 flex-col gap-4">
              <div className="bg-[#f29459] px-6 pt-5 text-white md:mt-0 py-5">
                <p className="font-['Poppins'] text-[length:var(--f-fs-font-fs40)] leading-none font-semibold">
                  1590+
                </p>
                <p className="mt-2 text-[length:var(--f-fs-font-fs16)] font-medium">
                  Happy Clients
                </p>
              </div>
              <img
                src="https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=760&q=80"
                alt="Recruiter portrait"
                className="w-full object-cover"
              />
            </div>
          </div>

          <div className="w-1/2 p-1">
            <span className="inline-flex h-[24px] items-center bg-[#dcddde] px-3 text-[12px] font-medium text-[#2d3542]">
              About Us
            </span>

            <h2 className="mt-4 font-['Poppins'] text-[length:var(--f-fs-font-fs44)] leading-[1.08] font-semibold tracking-[-0.02em] text-[#131c2a]">
              Our Story Connecting Talent, Powering Success
            </h2>

            <p className="mt-4 text-[length:var(--f-fs-font-fs18)] leading-[1.55] text-[#5e646e]">
              Our team of industry experts is dedicated to understanding your
              unique needs and delivering tailored solutions that propel your
              business forward.
            </p>

            <div className="mt-6 space-y-5">
              <div className="flex gap-4">
                <span className="mt-1 inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#ece7df] text-[#d1844d]">
                  <HiOutlineLightBulb className="text-[22px]" />
                </span>
                <div>
                  <h3 className="font-['Poppins'] text-[length:var(--f-fs-font-fs18)] leading-[1.2] font-semibold text-[#141c2a]">
                    Empowering Careers, Driving Growth
                  </h3>
                  <p className="mt-1 text-[length:var(--f-fs-font-fs18)] leading-[1.55] text-[#5f656f]">
                    we are your strategic partner in talent acquisition. With a
                    steadfast commitment to excellence
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <span className="mt-1 inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#ece7df] text-[#d1844d]">
                  <HiOutlineDocumentText className="text-[length:var(--f-fs-font-fs22)]" />
                </span>
                <div>
                  <h3 className="font-['Poppins'] text-[length:var(--f-fs-font-fs18)] leading-[1.2] font-semibold text-[#141c2a]">
                    Leaders in Staffing Excellence
                  </h3>
                  <p className="mt-1 text-[length:var(--f-fs-font-fs18)] leading-[1.55] text-[#5f656f]">
                    Discover the difference with Your Agency Name and unlock new
                    possibilities for growth
                  </p>
                </div>
              </div>
            </div>

            <button type="button" className="theme-btn6 mt-8">
              <span>About Us</span>
              <FiArrowUpRight aria-hidden="true" />
            </button>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#081120] px-6 pb-[56px] pt-[34px]">
        <div className="container">
          <SectionHeader
            type="Our Service"
            title="Tailored Solutions for Your Hiring Needs"
            description="With our proven track record and commitment to excellence, we're here to support your organization's growth and help you achieve your hiring goals."
            darkMode={true}
          />
          <div className="mx-auto mt-[34px] grid w-full max-w-[980px] grid-cols-1 gap-[16px] md:grid-cols-3">
            <article className="h-[260px] overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=900&q=80"
                alt="Team brainstorming around a desk"
                className="h-full w-full object-cover"
              />
            </article>
            <article className="h-[260px] overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=900&q=80"
                alt="Recruitment consultation meeting"
                className="h-full w-full object-cover"
              />
            </article>
            <article className="h-[260px] overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=900&q=80"
                alt="Professionals discussing documents"
                className="h-full w-full object-cover"
              />
            </article>
          </div>

          <div className="mt-[30px] flex justify-center">
            <button
              type="button"
              className="inline-flex h-[44px] items-center gap-[8px] bg-[#ed9d5f] px-[18px] font-['Poppins'] text-[length:var(--f-fs-font-fs16)] font-medium text-white transition-colors duration-200 hover:bg-[#e58f49]"
            >
              Explore More Services
              <FiArrowUpRight aria-hidden="true" />
            </button>
          </div>
        </div>
      </section>

      <section className="px-6 pb-[44px] pt-[28px]">
        <div className="container">
          <SectionHeader
            type="Our Project"
            title="Successes A Look at Our Projects"
            description="Explore our portfolio of successful projects that showcase the impact we ve made"
          />

          <div className="mt-[26px] grid grid-cols-1 gap-[16px] md:grid-cols-3">
            {[
              "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=900&q=80",
              "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=900&q=80",
              "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=900&q=80",
            ].map((image, index) => (
              <article
                key={`${image}-${index}`}
                className="relative h-[464px] overflow-hidden rounded-[4px]"
              >
                <img
                  src={image}
                  alt="Project showcase"
                  className="h-full w-full object-cover"
                />
                <div className="absolute right-[16px] bottom-[16px] left-[16px] bg-[var(--primary-main)] px-[14px] py-[16px] text-white rounded-[4px]">
                  <p className="text-[length:var(--f-fs-font-fs16)] font-medium text-white/95">
                    Staffing Service
                  </p>
                  <div className="mt-[4px] flex items-center justify-between gap-3">
                    <h3 className="max-w-[180px] font-['Poppins'] text-[length:var(--f-fs-font-fs24)] leading-[1.1] font-semibold">
                      Demonstrating Our Expertise
                    </h3>
                    <span className="inline-flex h-[26px] w-[26px] shrink-0 items-center justify-center rounded-full bg-white text-[var(--primary-main)]">
                      <FiArrowUpRight aria-hidden="true" />
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#F5F3F4] px-6 py-[100px]">
        <div className="container">
          <div className="flex w-full gap-[24px] lg:items-start">
            <article className="h-[580px] overflow-hidden rounded-[4px] w-1/2">
              <img
                src="https://images.unsplash.com/photo-1573497491765-dccce02b29df?auto=format&fit=crop&w=1100&q=80"
                alt="Recruitment team using technology"
                className="h-full w-full object-cover"
              />
            </article>

            <div className="pt-[6px] w-1/2">
              <SectionHeader
                type="Recruitment Technologies"
                title="Solving Recruitment Using Technology"
                description="Whether you are seeking temporary assignments, placements, or executive-level positions, our curated"
                textAlign="start"
              />

              <div className="mt-[14px] space-y-[10px]">
                {[
                  {
                    title: "Sourcing the Best",
                    text: "Stay tuned for regular updates and valuable insights from our team of staffing experts.",
                    icon: <RiUserSearchLine className="text-[20px]" />,
                  },
                  {
                    title: "Volume Hiring",
                    text: "Remember to keep your blog content informative, engaging, and relevant to your target audience",
                    icon: <RiTeamLine className="text-[20px]" />,
                  },
                  {
                    title: "Partners in Team Building",
                    text: "This will help drive traffic to your website & establish your agency as a trusted authority",
                    icon: <RiGroupLine className="text-[20px]" />,
                  },
                ].map((item) => (
                  <article
                    key={item.title}
                    className="flex items-start gap-[12px] bg-[#fff] px-[14px] py-[14px]"
                  >
                    <span className="mt-[2px] inline-flex h-[64px] w-[64px] shrink-0 items-center justify-center rounded-full bg-[var(--primary-main)] text-white">
                      {item.icon}
                    </span>
                    <div>
                      <h3 className="font-['Poppins'] text-[length:var(--f-fs-font-fs20)] leading-[1.2] font-semibold text-[#111827]">
                        {item.title}
                      </h3>
                      <p className="mt-[4px] text-[length:var(--f-fs-font-fs16)] leading-[1.6] text-[#6a717b]">
                        {item.text}
                      </p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-[100px]">
        <div className="container">
          <SectionHeader
            type="Our Project"
            title="Successes A Look at Our Projects"
            description="Explore our portfolio of successful projects that showcase the impact we ve made"
          />

          <div className="mt-[26px] grid grid-cols-1 gap-[24px] md:grid-cols-3">
            {[
              { name: "Sameer Rizvi", role: "Senior Consultant" },
              { name: "Arshin Kulkarni", role: "VP, Finance" },
              { name: "Rachin Ravindra", role: "Senior Consultant" },
            ].map((member) => (
              <article
                key={member.name}
                className="flex h-[300px] items-end justify-center bg-[#ececec] px-6 pb-[14px] text-center"
              >
                <div>
                  <h3 className="font-['Poppins'] text-[31px] leading-[1.2] font-semibold text-[#111827]">
                    {member.name}
                  </h3>
                  <p className="mt-[5px] text-[16px] text-[#6c727c]">
                    {member.role}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-[100px] bg-[#F5F3F4]">
        <div className="container">
          <div className="flex w-full items-end justify-between gap-6">
            <SectionHeader
              type="Testimonial"
              title="Real Stories, Real Results"
              description="Discover why businesses trust us to find the right talent and candidates trust us to find the perfect fit."
              textAlign="start"
            />

            <div className="mb-[4px] flex items-center gap-[8px]">
              <button
                type="button"
                className="inline-flex h-[34px] w-[34px] items-center justify-center bg-[#efe4d7] text-[16px] text-[#232a35]"
                aria-label="Previous testimonials"
              >
                ←
              </button>
              <button
                type="button"
                className="inline-flex h-[34px] w-[34px] items-center justify-center bg-[#efe4d7] text-[16px] text-[#232a35]"
                aria-label="Next testimonials"
              >
                →
              </button>
            </div>
          </div>

          <div className="mt-[20px] grid grid-cols-1 gap-[12px] md:grid-cols-2">
            {[
              {
                name: "Amir Jamil",
                role: "Software Engineer",
                image:
                  "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=520&q=80",
              },
              {
                name: "Usman Khan",
                role: "CO Founder",
                image:
                  "https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&w=520&q=80",
              },
            ].map((item) => (
              <article
                key={item.name}
                className="flex items-stretch justify-between gap-[10px] bg-[#fff] px-[16px] py-[16px]"
              >
                <div className="max-w-[290px]">
                  <p className="text-[length:var(--f-fs-font-fs16)] tracking-[0.08em] text-[#f39f5a]">
                    ★★★★★
                  </p>
                  <p className="mt-[7px] text-[length:var(--f-fs-font-fs16)] leading-[1.6] text-[#4d5562]">
                    &quot;But don&apos;t just take our word for it-hear what our
                    satisfied clients have to say. From Fortune 500 companies to
                    small&quot;
                  </p>
                  <h3 className="mt-[8px] font-['Poppins'] text-[length:var(--f-fs-font-fs24)] leading-[1.2] font-semibold text-[#111827]">
                    {item.name}
                  </h3>
                  <p className="mt-[3px] text-[length:var(--f-fs-font-fs16)] text-[#6b7280]">
                    {item.role}
                  </p>
                </div>

                <div className="h-[264px] w-[138px] shrink-0 overflow-hidden bg-[#ececec]">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-full w-full object-cover"
                  />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default AboutUs;
