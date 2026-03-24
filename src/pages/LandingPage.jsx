import React from "react";
import { FiArrowUpRight, FiMail, FiPhoneCall, FiCalendar, FiUser } from "react-icons/fi";
import { FaPlay } from "react-icons/fa";
import { HiOutlineLightBulb, HiOutlineDocumentText } from "react-icons/hi";
import {
  RiCustomerService2Line,
  RiUserSearchLine,
  RiTeamLine,
  RiMedalLine,
  RiFolderChartLine,
} from "react-icons/ri";

const LandingPage = () => {
  const topBrands = [
    "Cockroach LABS",
    "workday.",
    "outsystems",
    "GitHub",
    "Razorpay",
    "Socure",
  ];

  const bottomBrands = [
    "outsystems",
    "workday.",
    "Cockroach LABS",
    "FanRuan",
    "Office",
    "Socure",
  ];

  return (
    <main className="bg-[#efefef] font-['Inter'] text-[#1b2a28]">
      <section
        className="relative vikin-hero flex overflow-hidden px-6 pb-[6.9rem] pt-[7.2rem] lg:pb-[5.3rem] lg:pt-[6.2rem] md:pb-[4.4rem] md:pt-[5.8rem]"
      >
        <div className="container grid w-full justify-center items-center gap-12 lg:grid-cols-1 xl:grid-cols-[minmax(0,1fr)_minmax(350px,510px)]">
          <div className="max-w-[560px]">
            <span className="inline-flex rounded bg-white/15 px-[0.56rem] py-[0.37rem] text-[0.67rem] leading-none font-semibold tracking-[0.01em] text-[#f6f8f7]">
              Staffing Power Your Success
            </span>

            <h1 className="mt-[1.1rem] max-w-[560px] font-['Poppins'] text-[clamp(2rem,3.35vw,3.46rem)] leading-[1.09] font-semibold tracking-[-0.03em] text-white">
              Growth Exceptional Talent Lets Build Success Together
            </h1>

            <p className="mt-[1.15rem] max-w-[520px] text-[1.02rem] leading-[1.65] text-[#d2ddd9]">
              Our tailored staffing solutions streamline the hiring process
              saving you time and resources while ensuring the perfect fit.
            </p>

            <div className="mt-[1.8rem] flex flex-wrap gap-[0.8rem]">
              <button className="theme-btn6" type="button">
                Start Your Search
                <FiArrowUpRight aria-hidden="true" />
              </button>
              <button className="theme-btn7" type="button">
                Discover More
                <FiArrowUpRight aria-hidden="true" />
              </button>
            </div>

            <div className="mt-[1.35rem]">
              <p className="text-[1.06rem] font-bold text-[#f4f6f6]">
                Trusted By 5,789 Users
              </p>
              <p className="mt-[0.38rem] flex items-center gap-2 text-[0.95rem] text-[#d7dfdc]">
                <span className="text-[0.9rem] tracking-[0.12em] text-[#f6b41a]">
                  ★★★★★
                </span>
                <span>4K Happy Client</span>
              </p>
            </div>
          </div>

          <div className="w-full justify-self-end lg:max-w-[620px] lg:justify-self-stretch xl:max-w-none">
            <div className="flex gap-4">
              <article className="relative flex-1 overflow-hidden">
                <img
                  src="https://recrute.vikinglab.agency/staffing-agency/wp-content/uploads/sites/3/2025/11/hero3-img1.png"
                  alt="Team reviewing talent profiles together"
                  className="object-contain"
                />
              </article>
              <div className="flex flex-col gap-4">
                <article className="relative overflow-hidden">
                  <img
                    src="https://recrute.vikinglab.agency/staffing-agency/wp-content/uploads/sites/3/2025/11/hero3-img2.png"
                    alt="Recruitment interview in progress"
                    className="block h-full w-full object-cover"
                  />
                </article>

                <article className="relative overflow-hidden">
                  <img
                    src="https://recrute.vikinglab.agency/staffing-agency/wp-content/uploads/sites/3/2025/11/hero3-img3.png"
                    alt="Business meeting for staffing strategy"
                    className="block h-full w-full object-cover"
                  />
                  <button className="video-buttton play-btn "
                    type="button"
                  >
                    <a id="play-video play-btn" className="video-play-button" >
                      <span></span>
                    </a>
                  </button>
                </article>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-[6.2rem]">
        <div className="mx-auto grid w-full max-w-[1312px] gap-[2rem] xl:grid-cols-[minmax(0,665px)_minmax(0,1fr)] xl:items-start">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <img
              src="https://images.unsplash.com/photo-1573164574572-cb89e39749b4?auto=format&fit=crop&w=760&q=80"
              alt="Business people discussing work"
              className="h-[300px] w-full object-cover"
            />

            <div className="h-[115px] bg-[#f29459] px-6 pt-5 text-white md:mt-0">
              <p className="font-['Poppins'] text-[40px] leading-none font-semibold">
                1590+
              </p>
              <p className="mt-2 text-[18px] font-medium">Happy Clients</p>
            </div>

            <div className="h-[115px] bg-[#173a33] px-6 pt-5 text-white">
              <p className="font-['Poppins'] text-[40px] leading-none font-semibold">
                16+
              </p>
              <p className="mt-2 text-[18px] font-medium">Years of Experienced</p>
            </div>

            <img
              src="https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=760&q=80"
              alt="Recruiter portrait"
              className="h-[300px] w-full object-cover"
            />
          </div>

          <div className="pt-1">
            <span className="inline-flex h-[24px] items-center bg-[#dcddde] px-3 text-[12px] font-medium text-[#2d3542]">
              About Us
            </span>

            <h2 className="mt-4 max-w-[560px] font-['Poppins'] text-[50px] leading-[1.08] font-semibold tracking-[-0.02em] text-[#131c2a]">
              Our Story Connecting Talent, Powering Success
            </h2>

            <p className="mt-4 max-w-[560px] text-[24px] leading-[1.55] text-[#5e646e]">
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
                  <h3 className="font-['Poppins'] text-[31px] leading-[1.2] font-semibold text-[#141c2a]">
                    Empowering Careers, Driving Growth
                  </h3>
                  <p className="mt-1 text-[23px] leading-[1.55] text-[#5f656f]">
                    we are your strategic partner in talent acquisition. With a
                    steadfast commitment to excellence
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <span className="mt-1 inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#ece7df] text-[#d1844d]">
                  <HiOutlineDocumentText className="text-[22px]" />
                </span>
                <div>
                  <h3 className="font-['Poppins'] text-[31px] leading-[1.2] font-semibold text-[#141c2a]">
                    Leaders in Staffing Excellence
                  </h3>
                  <p className="mt-1 text-[23px] leading-[1.55] text-[#5f656f]">
                    Discover the difference with Your Agency Name and unlock new
                    possibilities for growth
                  </p>
                </div>
              </div>
            </div>

            <button
              type="button"
              className="mt-8 inline-flex h-14 items-center gap-2 bg-[#f39f5a] px-6 text-[18px] font-semibold text-white transition-colors duration-200 hover:bg-[#e58f49]"
            >
              <span>About Us</span>
              <FiArrowUpRight aria-hidden="true" />
            </button>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#f1eee1] px-6 py-[6.6rem]">
        <span className="pointer-events-none absolute top-[-90px] left-[-120px] h-[360px] w-[360px] rounded-full bg-[#ece8da]" />
        <span className="pointer-events-none absolute top-12 right-8 text-[68px] leading-none text-[#e3dcc9]">
          ✧
        </span>

        <div className="relative mx-auto w-full max-w-[1312px]">
          <div className="mx-auto max-w-[760px] text-center">
            <span className="inline-flex h-[24px] items-center bg-[#dcddde] px-3 text-[12px] font-medium text-[#2d3542]">
              Our Service
            </span>
            <h2 className="mt-4 font-['Poppins'] text-[52px] leading-[1.08] font-semibold tracking-[-0.02em] text-[#111827]">
              Temporary Staffing Services
            </h2>
            <p className="mx-auto mt-4 max-w-[700px] text-[22px] leading-[1.55] text-[#5f666f]">
              With our proven track record and commitment to excellence, we re
              here to support your organization&apos;s growth and help you
              achieve
            </p>
          </div>

          <div className="mt-11 grid grid-cols-1 gap-4 lg:grid-cols-2">
            {[
              {
                title: "Consulting and Staffing Support",
                icon: RiCustomerService2Line,
              },
              {
                title: "Temporary Staffing Services",
                icon: RiTeamLine,
              },
              {
                title: "Talent Acquisition Solutions",
                icon: RiUserSearchLine,
              },
              {
                title: "Candidate Screening Services",
                icon: RiMedalLine,
              },
            ].map(({ title, icon: Icon }) => (
              <article
                key={title}
                className="min-h-[273px] bg-white px-8 py-7 shadow-[0_0_0_1px_rgba(17,24,39,0.02)]"
              >
                <span className="inline-flex h-11 w-11 items-center justify-center bg-[#f9f4ef] text-[#d68c54]">
                  <Icon className="text-[24px]" />
                </span>
                <h3 className="mt-5 font-['Poppins'] text-[35px] leading-[1.2] font-semibold text-[#131b2a]">
                  {title}
                </h3>
                <p className="mt-4 max-w-[560px] text-[22px] leading-[1.55] text-[#5f666f]">
                  HR Consulting &amp; Staffing Our HR consulting and staffing
                  support services provide guidance and expertise in areas such
                  as compliance, workforce planning, and talent management,
                  helping
                </p>
                <button
                  type="button"
                  className="mt-4 inline-flex items-center gap-1 text-[18px] font-semibold text-[#131b2a]"
                >
                  <span>Read More</span>
                  <FiArrowUpRight aria-hidden="true" />
                </button>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f1eee1] px-6 pb-[5.8rem] pt-[5.8rem]">
        <div className="mx-auto w-full max-w-[1040px] text-center">
          <div className="inline-flex h-[20px] items-center justify-center bg-[#e7e1d1] px-[14px] text-[11px] font-medium text-[#2d3542]">
            Case Studies
          </div>
          <h2 className="mt-4 font-['Poppins'] text-[30px] font-semibold leading-[1.2] text-[#111827]">
            Elevate Your Talent Strategy
          </h2>
          <p className="mx-auto mt-2 max-w-[640px] text-[12px] leading-[1.5] text-[#6b727a]">
            Our tailored services include talent acquisition, recruitment
            expertise, and industry-specific staffing solutions to help you
            build
          </p>
        </div>

        <div className="mx-auto mt-12 grid w-full max-w-[860px] grid-cols-3 grid-rows-[210px_210px] gap-[18px]">
          {/* Left top */}
          <img
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=900&q=80"
            alt="Team collaborating in an office"
            className="h-full w-full object-cover"
          />

          {/* Middle top */}
          <img
            src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=900&q=80"
            alt="Interview and candidate discussion"
            className="h-full w-full object-cover"
          />

          {/* Right (spans two rows) */}
          <img
            src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=900&q=80"
            alt="Manager reviewing documents"
            className="row-span-2 h-full w-full object-cover"
          />

          {/* Left bottom */}
          <img
            src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=900&q=80"
            alt="Group discussion"
            className="h-full w-full object-cover"
          />

          {/* Middle bottom */}
          <img
            src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=900&q=80"
            alt="Team presenting and reviewing"
            className="h-full w-full object-cover"
          />
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#173d37] px-6 pb-[5.8rem] pt-[4.5rem]">
        <span className="pointer-events-none absolute right-[-340px] top-[-220px] h-[760px] w-[760px] rounded-full bg-[#1e4941]" />
        <span className="pointer-events-none absolute right-[-220px] top-[-70px] h-[520px] w-[520px] rounded-full bg-[#214f46]" />

        <div className="relative mx-auto w-full max-w-[1312px]">
          <div className="grid gap-8 lg:grid-cols-[1.05fr_1fr]">
            <div>
              <span className="inline-flex h-[20px] items-center bg-white/16 px-[9px] text-[10px] leading-none font-medium text-white">
                How it Work
              </span>
              <h2 className="mt-4 max-w-[560px] font-['Poppins'] text-[53px] leading-[1.08] font-semibold tracking-[-0.02em] text-white">
                Our Portfolio: Showcasing Successful Placements
              </h2>
            </div>

            <div className="pt-[2px]">
              <p className="max-w-[560px] text-[17px] leading-[1.56] text-[#d3e1dd]">
                Through our tailored staffing solutions and industry expertise,
                we&apos;ve facilitated countless success stories, from small
                businesses to Fortune 500 companies Our portfolio highlights.
              </p>
              <button
                type="button"
                className="mt-5 inline-flex h-[42px] items-center gap-1 bg-[#f39f5a] px-5 text-[14px] font-semibold text-white transition-colors duration-200 hover:bg-[#e58f49]"
              >
                <span>See Plans</span>
                <FiArrowUpRight aria-hidden="true" />
              </button>
            </div>
          </div>

          <div className="mt-7 grid gap-5 lg:grid-cols-3">
            {[
              {
                title: "Employee On-Boarding Checklist",
                body: "We offer a comprehensive suite of staffing solutions designed to meet your organization's evolving needs.",
              },
              {
                title: "Employee On-Boarding Checklist",
                body: "Browse our latest openings, explore new opportunities, and take the next step towards your professional goals",
              },
              {
                title: "Take Care of Employee’s Benefits",
                body: "With our proven track record and commitment to excellence, we re here support your",
              },
            ].map((item, index) => (
              <article key={`${item.title}-${index}`}>
                <div className="flex items-center gap-2">
                  <span className="text-[15px] inline-flex h-[31px] w-[31px] items-center justify-center bg-[#f39f5a] text-white">
                    {index + 1}
                  </span>
                  <span className="h-[1px] w-full bg-[#f39f5a]" />
                </div>
                <h3 className="mt-3 max-w-[365px] font-['Poppins'] text-[26px] leading-[1.2] font-semibold text-white">
                  {item.title}
                </h3>
                <p className="mt-2 max-w-[390px] text-[15px] leading-[1.52] text-[#d1dfdb]">
                  {item.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#efefef] px-6 pb-[7rem] pt-[5.7rem]">
        <div className="mx-auto w-full max-w-[1312px]">
          <div className="grid items-start gap-8 md:grid-cols-[1fr_auto]">
            <div className="max-w-[560px]">
              <span className="inline-flex h-[20px] items-center bg-[#dadcde] px-[8px] text-[10px] font-medium text-[#2d3542]">
                Testimonial
              </span>
              <h2 className="mt-3 font-['Poppins'] text-[53px] leading-[1.1] font-semibold tracking-[-0.02em] text-[#121a29]">
                Feedback from Satisfied Customers
              </h2>
              <p className="mt-4 max-w-[520px] text-[16px] leading-[1.62] text-[#5f6670]">
                We take pride in delivering exceptional staffing solutions that
                exceed our clients&apos; expectations. But don&apos;t just take
                our word for it
              </p>
            </div>

            <div className="mt-6 flex gap-2 md:mt-[34px]">
              <button
                type="button"
                className="inline-flex h-11 w-11 items-center justify-center bg-[#dfe0e2] text-[18px] text-[#263140]"
              >
                ←
              </button>
              <button
                type="button"
                className="inline-flex h-11 w-11 items-center justify-center bg-[#dfe0e2] text-[18px] text-[#263140]"
              >
                →
              </button>
            </div>
          </div>

          <div className="mt-8 grid gap-[14px] lg:grid-cols-2">
            <div>
              <article className="relative border border-[#ddb995] bg-[#f4eee0] px-7 py-6">
                <div className="flex gap-[6px]">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <span
                      key={`star-a-${index}`}
                      className="inline-flex h-7 w-7 items-center justify-center bg-[#f7e7d9] text-[13px] text-[#f39f5a]"
                    >
                      ★
                    </span>
                  ))}
                </div>
                <p className="mt-5 text-[17px] leading-[1.62] text-[#434b57]">
                  “Discover what our clients have to say about their experience
                  with Recrute. From small businesses to Fortune 500 companies,
                  our tailored staffing solutions have left a lasting impact on
                  organizations across industries. With a focus on excellence”
                </p>
                <span className="absolute bottom-[-20px] left-8 h-0 w-0 border-x-[20px] border-t-[20px] border-x-transparent border-t-[#f39f5a]" />
              </article>

              <div className="mt-10 flex items-center gap-4 pl-[6px]">
                <figure
                  className="h-12 w-12 rounded-full object-cover"
                >
                  <img
                    src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80"
                    alt="Sujon M"
                  />
                </figure>
                <div>
                  <p className="font-['Poppins'] text-[30px] leading-none font-semibold text-[#111a29]">
                    Sujon M.
                  </p>
                  <p className="mt-[6px] text-[14px] text-[#656c75]">
                    Software Engineer
                  </p>
                </div>
              </div>
            </div>

            <div>
              <article className="bg-[#f1ecdf] px-7 py-6">
                <div className="flex gap-[6px]">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <span
                      key={`star-b-${index}`}
                      className="inline-flex h-7 w-7 items-center justify-center bg-[#f7e7d9] text-[13px] text-[#f39f5a]"
                    >
                      ★
                    </span>
                  ))}
                </div>
                <p className="mt-5 text-[17px] leading-[1.62] text-[#434b57]">
                  “From startups seeking their first hires to established
                  corporations aiming to expand their teams, our tailored
                  staffing solutions have consistently exceeded expectations.
                  With testimonials highlighting our ability to find the
                  perfect , our tailored staffing solutions.”
                </p>
              </article>

              <div className="mt-10 flex items-center gap-4 pl-[6px]">
                <figure className="h-12 w-12 rounded-full object-cover">
                  <img
                    src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&w=150&q=80"
                    alt="Amir Jamil"
                    className="h-12 w-12 rounded-full object-cover"
                  />
                </figure>
                <div>
                  <p className="font-['Poppins'] text-[30px] leading-none font-semibold text-[#111a29]">
                    Amir Jamil
                  </p>
                  <p className="mt-[6px] text-[14px] text-[#656c75]">
                    Software Engineer
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f1eee1] px-6 pb-[7.2rem] pt-[5.8rem]">
        <div className="mx-auto w-full max-w-[1312px]">
          <div className="mx-auto max-w-[760px] text-center">
            <span className="inline-flex h-[22px] items-center bg-[#dfe0e2] px-[10px] text-[10px] font-medium text-[#2d3542]">
              Our Service
            </span>
            <h2 className="mt-4 font-['Poppins'] text-[53px] leading-[1.08] font-semibold tracking-[-0.02em] text-[#121a29]">
              Temporary Staffing Services
            </h2>
            <p className="mx-auto mt-4 max-w-[720px] text-[16px] leading-[1.62] text-[#626a73]">
              With our proven track record and commitment to excellence, we&apos;re
              here to support your organization&apos;s growth and help you achieve
            </p>
          </div>

          <div className="mx-auto mt-10 grid w-full max-w-[980px] gap-4 md:grid-cols-3">
            {[
              {
                name: "Sameer Rizvi",
                role: "Senior Consultant",
                image:
                  "https://images.unsplash.com/photo-1463453091185-61582044d556?auto=format&fit=crop&w=760&q=80",
              },
              {
                name: "Sandeep Sharma",
                role: "Founder",
                image:
                  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=760&q=80",
              },
              {
                name: "Riyan Parag",
                role: "VP, Finance",
                image:
                  "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=760&q=80",
              },
            ].map((member) => (
              <article key={member.name} className="overflow-hidden bg-white">
                <img
                  src={member.image}
                  alt={member.name}
                  className="h-[282px] w-full object-cover"
                />
                <div className="px-4 pb-5 pt-4 text-center">
                  <h3 className="font-['Poppins'] text-[30px] leading-[1.2] font-semibold text-[#131b2a]">
                    {member.name}
                  </h3>
                  <p className="mt-1 text-[14px] text-[#737a82]">{member.role}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="overflow-hidden bg-[#f2f2f2] py-[3.2rem]">
        <div className="mx-auto w-full max-w-[1312px] px-6">
          <div className="mb-4 border-t border-[#dddddd] pt-4 text-center">
            <p className="font-['Poppins'] text-[19px] font-semibold text-[#111a29]">
              More Than 5K+ Brands With Work Recrute
            </p>
          </div>
        </div>

        <div className="space-y-[18px]">
          <div className="relative">
            <div
              className="flex w-max gap-4"
              style={{ animation: "brandMarqueeSlow 34s linear infinite" }}
            >
              {[...topBrands, ...topBrands].map((brand, index) => (
                <article
                  key={`top-${brand}-${index}`}
                  className="flex h-[56px] min-w-[168px] items-center justify-center border border-[#ded8c9] bg-[#f7f7f7] px-6"
                >
                  <span className="font-['Poppins'] text-[22px] leading-none font-semibold text-[#2a3442]">
                    {brand}
                  </span>
                </article>
              ))}
            </div>
          </div>

          <div className="relative">
            <div
              className="flex w-max gap-4"
              style={{ animation: "brandMarqueeFast 24s linear infinite" }}
            >
              {[...bottomBrands, ...bottomBrands].map((brand, index) => (
                <article
                  key={`bottom-${brand}-${index}`}
                  className="flex h-[56px] min-w-[168px] items-center justify-center border border-[#ded8c9] bg-[#f7f7f7] px-6"
                >
                  <span className="font-['Poppins'] text-[21px] leading-none font-semibold text-[#2a3442]">
                    {brand}
                  </span>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f1eee1] px-6 pb-[7.5rem] pt-[5.8rem]">
        <div className="mx-auto grid w-full max-w-[1312px] items-start gap-8 lg:grid-cols-[1fr_600px]">
          <div className="max-w-[640px] pt-2">
            <span className="inline-flex h-[20px] items-center bg-[#dfe0e2] px-[10px] text-[10px] font-medium text-[#2d3542]">
              Contact Us
            </span>

            <h2 className="mt-4 font-['Poppins'] text-[56px] leading-[1.08] font-semibold tracking-[-0.02em] text-[#121a29]">
              Get in Touch Lets Start the Conversation
            </h2>

            <p className="mt-5 max-w-[560px] text-[16px] leading-[1.6] text-[#626a73]">
              We are here to help you find the right staffing solutions for your
              needs. Whether you are a company looking to hire top talent or a
              candidate seeking your next career opportunity
            </p>

            <div className="mt-7 space-y-4">
              <article className="flex min-h-[88px] items-center gap-4 bg-white px-7">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-[#f7f2e8] text-[20px] text-[#d99a67]">
                  <FiPhoneCall />
                </span>
                <div>
                  <p className="text-[14px] text-[#5f6670]">Gives us a Call</p>
                  <p className="mt-1 font-['Poppins'] text-[33px] leading-none font-semibold text-[#111a29]">
                    123-456-7890
                  </p>
                </div>
              </article>

              <article className="flex min-h-[88px] items-center gap-4 bg-white px-7">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-[#f7f2e8] text-[20px] text-[#d99a67]">
                  <FiMail />
                </span>
                <div>
                  <p className="text-[14px] text-[#5f6670]">Send me Mail</p>
                  <p className="mt-1 font-['Poppins'] text-[33px] leading-none font-semibold text-[#111a29]">
                    Consult@hotmail.com
                  </p>
                </div>
              </article>
            </div>
          </div>

          <div className="bg-[#1b3e38] p-6 md:p-7">
            <h3 className="font-['Poppins'] text-[38px] leading-[1.1] font-semibold text-white">
              Send us a Message
            </h3>
            <p className="mt-3 max-w-[500px] text-[14px] leading-[1.6] text-[#d0ddd9]">
              Feel free to reach out to us with any questions, inquiries, or
              staffing requirements you may have. Our experienced
            </p>

            <form className="mt-5 space-y-3">
              <div className="grid gap-3 sm:grid-cols-2">
                <input
                  type="text"
                  placeholder="First Name"
                  className="h-12 w-full bg-[#2e4c46] px-4 text-[14px] text-white placeholder:text-[#b7c7c2] focus:outline-none"
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  className="h-12 w-full bg-[#2e4c46] px-4 text-[14px] text-white placeholder:text-[#b7c7c2] focus:outline-none"
                />
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                <input
                  type="email"
                  placeholder="Email"
                  className="h-12 w-full bg-[#2e4c46] px-4 text-[14px] text-white placeholder:text-[#b7c7c2] focus:outline-none"
                />
                <input
                  type="text"
                  placeholder="Phone Number"
                  className="h-12 w-full bg-[#2e4c46] px-4 text-[14px] text-white placeholder:text-[#b7c7c2] focus:outline-none"
                />
              </div>

              <input
                type="text"
                placeholder="Subject"
                className="h-12 w-full bg-[#2e4c46] px-4 text-[14px] text-white placeholder:text-[#b7c7c2] focus:outline-none"
              />

              <textarea
                rows={4}
                placeholder="You Message"
                className="w-full resize-none bg-[#2e4c46] px-4 py-3 text-[14px] text-white placeholder:text-[#b7c7c2] focus:outline-none"
              />

              <div className="pt-1 text-right">
                <button
                  type="button"
                  className="inline-flex h-[42px] items-center gap-1 bg-[#f39f5a] px-5 text-[14px] font-semibold text-white transition-colors duration-200 hover:bg-[#e58f49]"
                >
                  <span>Submit Now</span>
                  <FiArrowUpRight aria-hidden="true" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      <section className="bg-[#efefef] px-6 pb-[7rem] pt-[5.8rem]">
        <div className="mx-auto w-full max-w-[1312px]">
          <div className="mx-auto max-w-[760px] text-center">
            <span className="inline-flex h-[22px] items-center bg-[#dfe0e2] px-[10px] text-[10px] font-medium text-[#2d3542]">
              Our Service
            </span>
            <h2 className="mt-4 font-['Poppins'] text-[53px] leading-[1.08] font-semibold tracking-[-0.02em] text-[#121a29]">
              Temporary Staffing Services
            </h2>
            <p className="mx-auto mt-4 max-w-[740px] text-[16px] leading-[1.62] text-[#626a73]">
              With our proven track record and commitment to excellence, we&apos;re
              here to support your organization&apos;s growth and help you achieve
            </p>
          </div>

          <div className="mx-auto mt-9 grid w-full max-w-[980px] gap-6 md:grid-cols-2">
            {[
              {
                image:
                  "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1000&q=80",
                date: "December 30, 2024",
                author: "nasujon",
              },
              {
                image:
                  "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1000&q=80",
                date: "November 24, 2024",
                author: "nasujon",
              },
            ].map((post, idx) => (
              <article
                key={`${post.date}-${idx}`}
                className="relative min-h-[420px] overflow-hidden"
              >
                <img
                  src={post.image}
                  alt="Team collaboration"
                  className="h-full w-full object-cover"
                />

                <div className="absolute right-0 bottom-4 left-[76px] bg-[#ededee] px-4 py-4">
                  <div className="flex items-center gap-6 text-[12px] text-[#6e737b]">
                    <span className="inline-flex items-center gap-1">
                      <FiCalendar className="text-[12px]" />
                      {post.date}
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <FiUser className="text-[12px]" />
                      {post.author}
                    </span>
                  </div>

                  <h3 className="mt-3 font-['Poppins'] text-[29px] leading-[1.22] font-semibold text-[#121a29]">
                    The Staffing Strategist Your Guide to Talent Acquisition
                  </h3>

                  <p className="mt-3 border-b border-[#dfc3aa] pb-4 text-[14px] leading-[1.55] text-[#646b74]">
                    Welcome to our blog, where we share valuable insights, tips,
                    and industry news to
                  </p>

                  <button
                    type="button"
                    className="mt-3 inline-flex items-center gap-1 text-[14px] font-semibold text-[#121a29]"
                  >
                    <span>Read More</span>
                    <FiArrowUpRight aria-hidden="true" />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <style>
        {`
          @keyframes brandMarqueeSlow {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          @keyframes brandMarqueeFast {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
        `}
      </style>

    </main>
  );
};

export default LandingPage;