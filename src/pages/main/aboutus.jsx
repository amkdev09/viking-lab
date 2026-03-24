import React from "react";
import { HiOutlineLightBulb, HiOutlineDocumentText } from "react-icons/hi";
import { FiArrowUpRight } from "react-icons/fi";
import { RiUserSearchLine, RiTeamLine, RiGroupLine } from "react-icons/ri";

const AboutUs = () => {
  const highlights = [
    "Empowering Careers, Driving Growth",
    "Connecting Top Talent with Opportunity",
  ];

  return (
    <main className="bg-white font-['Inter'] text-[#0f1720]">
      <section className="relative overflow-hidden bg-[#173e38]">
        <div className="mx-auto flex h-[332px] w-full max-w-[1400px] items-center justify-center px-6">
          <div className="text-center">
            <h1 className="font-['Poppins'] text-[50px] leading-none font-semibold tracking-[-0.01em] text-white">
              About Us
            </h1>
            <p className="mt-7 text-[14px] font-semibold tracking-[0.01em] text-white/90">
              Recrute Sites{" "}
              <span className="px-2 text-white/60" aria-hidden="true">
                &gt;
              </span>{" "}
              Staffing Agency{" "}
              <span className="px-2 text-white/60" aria-hidden="true">
                &gt;
              </span>{" "}
              About Us
            </p>
          </div>
        </div>
      </section>

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
                <p className="mt-2 text-[18px] font-medium">Years of Experienced</p>
              </div>
            </div>

            <div className="flex w-1/2 flex-col gap-4">
              <div className="bg-[#f29459] px-6 pt-5 text-white md:mt-0 py-5">
                <p className="font-['Poppins'] text-[length:var(--f-fs-font-fs40)] leading-none font-semibold">
                  1590+
                </p>
                <p className="mt-2 text-[length:var(--f-fs-font-fs16)] font-medium">Happy Clients</p>
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

            <button
              type="button"
              className="theme-btn6 mt-8"
            >
              <span>About Us</span>
              <FiArrowUpRight aria-hidden="true" />
            </button>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#021430] px-6 pb-[56px] pt-[34px]">
        <div className="mx-auto w-full max-w-[1312px]">
          <div className="mx-auto max-w-[760px] text-center">
            <span className="inline-flex h-[22px] items-center bg-white/10 px-[10px] text-[11px] font-medium text-white/90">
              Our Service
            </span>
            <h2 className="mx-auto mt-[14px] max-w-[560px] font-['Poppins'] text-[56px] leading-[1.15] font-semibold tracking-[-0.01em] text-white">
              Tailored Solutions for Your Hiring Needs
            </h2>
            <p className="mx-auto mt-[10px] max-w-[640px] text-[16px] leading-[1.65] text-white/80">
              With our proven track record and commitment to excellence, we&apos;re
              here to support your organization&apos;s growth and help you achieve
              your hiring goals.
            </p>
          </div>

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
              className="inline-flex h-[44px] items-center gap-[8px] bg-[#f39f5a] px-[18px] font-['Poppins'] text-[13px] font-medium text-white transition-colors duration-200 hover:bg-[#e58f49]"
            >
              Explore More Services
              <FiArrowUpRight aria-hidden="true" />
            </button>
          </div>
        </div>
      </section>

      <section className="bg-[#f3f3f3] px-6 pb-[44px] pt-[28px]">
        <div className="mx-auto w-full max-w-[1312px]">
          <div className="mx-auto max-w-[760px] text-center">
            <span className="inline-flex h-[22px] items-center bg-[#efe8df] px-[10px] text-[11px] font-medium text-[#4b3e30]">
              Our Project
            </span>
            <h2 className="mx-auto mt-[14px] max-w-[620px] font-['Poppins'] text-[52px] leading-[1.14] font-semibold tracking-[-0.01em] text-[#111827]">
              Successes A Look at Our Projects
            </h2>
            <p className="mx-auto mt-[9px] max-w-[620px] text-[16px] leading-[1.6] text-[#6a7079]">
              Explore our portfolio of successful projects that showcase the
              impact we ve made
            </p>
          </div>

          <div className="mx-auto mt-[26px] grid w-full max-w-[980px] grid-cols-1 gap-[16px] md:grid-cols-3">
            {[
              "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=900&q=80",
              "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=900&q=80",
              "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=900&q=80",
            ].map((image, index) => (
              <article key={`${image}-${index}`} className="relative h-[360px] overflow-hidden rounded-[4px]">
                <img
                  src={image}
                  alt="Project showcase"
                  className="h-full w-full object-cover"
                />
                <div className="absolute right-[12px] bottom-[12px] left-[12px] bg-[#f39f5a] px-[14px] py-[8px] text-white">
                  <p className="text-[11px] font-medium text-white/95">Staffing Service</p>
                  <div className="mt-[4px] flex items-center justify-between gap-3">
                    <h3 className="max-w-[180px] font-['Poppins'] text-[34px] leading-[1.1] font-semibold">
                      Demonstrating Our Expertise
                    </h3>
                    <span className="inline-flex h-[26px] w-[26px] shrink-0 items-center justify-center rounded-full bg-white text-[#f39f5a]">
                      <FiArrowUpRight aria-hidden="true" />
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f1f1f1] px-6 pb-[58px] pt-[30px]">
        <div className="mx-auto grid w-full max-w-[1312px] grid-cols-1 gap-[24px] lg:grid-cols-[520px_minmax(0,1fr)] lg:items-start">
          <article className="h-[520px] overflow-hidden rounded-[2px]">
            <img
              src="https://images.unsplash.com/photo-1573497491765-dccce02b29df?auto=format&fit=crop&w=1100&q=80"
              alt="Recruitment team using technology"
              className="h-full w-full object-cover"
            />
          </article>

          <div className="pt-[6px]">
            <span className="inline-flex h-[22px] items-center bg-[#efe4d7] px-[10px] text-[11px] font-medium text-[#5a4938]">
              Recruitment Technologies
            </span>

            <h2 className="mt-[10px] max-w-[560px] font-['Poppins'] text-[53px] leading-[1.12] font-semibold tracking-[-0.01em] text-[#111827]">
              Solving Recruitment Using Technology
            </h2>

            <p className="mt-[10px] max-w-[560px] text-[16px] leading-[1.6] text-[#666d77]">
              Whether you are seeking temporary assignments, placements, or
              executive-level positions, our curated
            </p>

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
                  className="flex items-start gap-[12px] bg-[#f6f6f6] px-[14px] py-[14px]"
                >
                  <span className="mt-[2px] inline-flex h-[40px] w-[40px] shrink-0 items-center justify-center rounded-full bg-[#f39f5a] text-white">
                    {item.icon}
                  </span>
                  <div>
                    <h3 className="font-['Poppins'] text-[29px] leading-[1.2] font-semibold text-[#111827]">
                      {item.title}
                    </h3>
                    <p className="mt-[4px] text-[15px] leading-[1.6] text-[#6a717b]">
                      {item.text}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f3f3f3] px-6 pb-[36px] pt-[18px]">
        <div className="mx-auto w-full max-w-[1312px]">
          <div className="mx-auto max-w-[760px] text-center">
            <span className="inline-flex h-[22px] items-center bg-[#efe4d7] px-[10px] text-[11px] font-medium text-[#5a4938]">
              Our Project
            </span>
            <h2 className="mx-auto mt-[12px] max-w-[700px] font-['Poppins'] text-[52px] leading-[1.14] font-semibold tracking-[-0.01em] text-[#111827]">
              Successes A Look at Our Projects
            </h2>
            <p className="mx-auto mt-[8px] max-w-[640px] text-[16px] leading-[1.6] text-[#6a7079]">
              Explore our portfolio of successful projects that showcase the
              impact we ve made
            </p>
          </div>

          <div className="mx-auto mt-[26px] grid w-full max-w-[980px] grid-cols-1 gap-[14px] md:grid-cols-3">
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
                  <p className="mt-[5px] text-[16px] text-[#6c727c]">{member.role}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f3f3f3] px-6 pb-[52px] pt-[18px]">
        <div className="mx-auto w-full max-w-[1312px]">
          <div className="mx-auto flex w-full max-w-[980px] items-end justify-between gap-6">
            <div>
              <span className="inline-flex h-[22px] items-center bg-[#efe4d7] px-[10px] text-[11px] font-medium text-[#5a4938]">
                Testimonial
              </span>
              <h2 className="mt-[12px] max-w-[520px] font-['Poppins'] text-[52px] leading-[1.14] font-semibold tracking-[-0.01em] text-[#111827]">
                Real Stories, Real Results
              </h2>
              <p className="mt-[8px] max-w-[560px] text-[16px] leading-[1.6] text-[#6a7079]">
                Discover why businesses trust us to find the right talent and
                candidates trust us to find the perfect fit.
              </p>
            </div>

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

          <div className="mx-auto mt-[20px] grid w-full max-w-[980px] grid-cols-1 gap-[12px] md:grid-cols-2">
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
                className="flex items-stretch justify-between gap-[10px] bg-[#f6f6f6] px-[16px] py-[16px]"
              >
                <div className="max-w-[290px]">
                  <p className="text-[11px] tracking-[0.08em] text-[#f39f5a]">★★★★★</p>
                  <p className="mt-[7px] text-[15px] leading-[1.6] text-[#4d5562]">
                    &quot;But don&apos;t just take our word for it-hear what our
                    satisfied clients have to say. From Fortune 500 companies to
                    small&quot;
                  </p>
                  <h3 className="mt-[8px] font-['Poppins'] text-[31px] leading-[1.2] font-semibold text-[#111827]">
                    {item.name}
                  </h3>
                  <p className="mt-[3px] text-[15px] text-[#6b7280]">{item.role}</p>
                </div>

                <div className="h-[165px] w-[138px] shrink-0 overflow-hidden bg-[#ececec]">
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