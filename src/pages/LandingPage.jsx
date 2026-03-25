import React from "react";
import {
  FiArrowUpRight,
  FiMail,
  FiPhoneCall,
  FiCalendar,
  FiUser,
} from "react-icons/fi";
import { FaStar } from "react-icons/fa";
import { HiOutlineLightBulb, HiOutlineDocumentText } from "react-icons/hi";
import {
  RiCustomerService2Line,
  RiUserSearchLine,
  RiTeamLine,
  RiMedalLine,
} from "react-icons/ri";
import SectionHeader from "../components/sections/header";
import { IoMdArrowBack, IoMdArrowForward } from "react-icons/io";

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
    <main className="bg-[#ffffff] text-[#1b2a28]">
      <section className="relative vikin-hero flex overflow-hidden px-6 pb-[6.9rem] pt-[7.2rem] lg:pb-[5.3rem] lg:pt-[6.2rem] md:pb-[4.4rem] md:pt-[5.8rem]">
        <div className="container">
          <main className="flex gap-1 pt-4.5">
            <div className="max-w-1/2">
              <span className="inline-flex rounded bg-white/15 px-[0.635rem] py-[0.285rem] text-base text-white tracking-[0.01em]">
                Staffing Power Your Success
              </span>

              <h1 className="mt-[1.1rem] text-6xl text-white font-bold">
                Growth Exceptional Talent Lets Build Success Together
              </h1>

              <p className="mt-[1.15rem] text-base leading-[1.65] text-[var(--primary-text-2)]">
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

              <div className="mt-[1.1rem]">
                <p className="text-lg font-bold text-white">
                  Trusted By 5,789 Users
                </p>
                <p className="flex mt-[0.38rem] text-white/90">
                  <span className="flex gap-[6px] items-center text-[var(--color-yellow)] text-base">
                    <FaStar className="text-[18px]" />
                    <FaStar className="text-[18px]" />
                    <FaStar className="text-[18px]" />
                    <FaStar className="text-[18px]" />
                    <FaStar className="text-[18px] text-[#d7dfdc]" />
                  </span>
                  <span className="block ml-1 text-lg">4K Happy Client</span>
                </p>
              </div>
            </div>
            <div className="w-1/2">
              <div className="flex gap-1">
                <article className="relative flex-1 overflow-hidden">
                  <figure className="h-full">
                    <img
                      src="https://recrute.vikinglab.agency/staffing-agency/wp-content/uploads/sites/3/2025/11/hero3-img1.png"
                      alt="Team reviewing talent profiles together"
                      className="object-contain"
                    />
                  </figure>
                </article>
                <div className="flex flex-col gap-1">
                  <article className="relative overflow-hidden h-full">
                    <figure className="h-full">
                      <img
                        src="https://recrute.vikinglab.agency/staffing-agency/wp-content/uploads/sites/3/2025/11/hero3-img2.png"
                        alt="Recruitment interview in progress"
                        className="object-contain"
                      />
                    </figure>
                  </article>

                  <article className="relative overflow-hidden">
                    <figure>
                      <img
                        src="https://recrute.vikinglab.agency/staffing-agency/wp-content/uploads/sites/3/2025/11/hero3-img3.png"
                        alt="Business meeting for staffing strategy"
                        className="object-contain"
                      />
                    </figure>
                    <button className="video-buttton play-btn " type="button">
                      <a id="play-video play-btn" className="video-play-button">
                        <span></span>
                      </a>
                    </button>
                  </article>
                </div>
              </div>
            </div>
          </main>
        </div>
      </section>

      <section className="pt-4 pb-4">
        <div className="container">
          <main className="flex gap-1">
            <div className="flex w-1/2 gap-1">
              <div className="flex w-1/2 flex-col gap-1">
                <img
                  src="https://images.unsplash.com/photo-1573164574572-cb89e39749b4?auto=format&fit=crop&w=760&q=80"
                  alt="Business people discussing work"
                  className="w-full object-cover"
                />
                <div className="bg-[#173a33] px-1 pt-1 py-1 text-white">
                  <p className="text-4xl leading-none font-semibold">
                    16+
                  </p>
                  <p className="mt-1 text-lg font-medium">
                    Years of Experienced
                  </p>
                </div>
              </div>

              <div className="flex w-1/2 flex-col gap-1">
                <div className="bg-[#f29459] px-1 pt-1 text-white md:mt-0 py-1">
                  <p className="text-4xl leading-none font-semibold">
                    1590+
                  </p>
                  <p className="mt-2 text-lg font-medium">
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
          </main>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#fffbec] px-6 py-[6.6rem]">
        <span className="pointer-events-none absolute top-[0] left-[-50%] h-[110%] w-[80%] rounded-full bg-[#faf6e8]" />
        <span className="pointer-events-none absolute top-2 right-0 text-[length:var(--f-fs-font-fs48)] leading-none text-[#f8dac5]">
          ✧
        </span>
        <span className="pointer-events-none absolute top-8 right-8 text-[length:var(--f-fs-font-fs48)] leading-none text-[#f8dac5]">
          ✧
        </span>
        <span className="pointer-events-none absolute top-2 right-16 text-[length:var(--f-fs-font-fs48)] leading-none text-[#f8dac5]">
          ✧
        </span>

        <div className="relative mx-auto w-full max-w-[1312px]">
          <SectionHeader
            type="Our Service"
            title="Temporary Staffing Services"
            description="With our proven track record and commitment to excellence, we re here to support your organization's growth and help you achieve"
          />

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
                <span className="inline-flex h-16 w-16 items-center justify-center bg-[#f9f4ef] rounded-[4px] text-[#d68c54]">
                  <Icon className="text-[32px]" />
                </span>
                <h3 className="mt-5 font-['Poppins'] text-[length:var(--f-fs-font-fs22)] leading-[1.2] font-semibold text-[#131b2a]">
                  {title}
                </h3>
                <p className="mt-4 text-[length:var(--f-fs-font-fs16)] leading-[1.55] text-[#5f666f]">
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

      <section className="px-6 pb-[5.8rem] pt-[5.8rem] ">
        <SectionHeader
          type="Case Studies"
          title="Elevate Your Talent Strategy"
          description="Our tailored services include talent acquisition, recruitment expertise, and industry-specific staffing solutions to help you build"
        />

        <div className="container">
          <div className="mt-12 grid w-full grid-cols-3 grid-rows-[210px_210px] gap-[18px]">
            {/* Left top */}
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=900&q=80"
              alt="Team collaborating in an office"
              className="h-full w-full object-cover rounded-[4px]"
            />

            {/* Middle top */}
            <img
              src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=900&q=80"
              alt="Interview and candidate discussion"
              className="h-full w-full object-cover rounded-[4px]"
            />

            {/* Right (spans two rows) */}
            <img
              src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=900&q=80"
              alt="Manager reviewing documents"
              className="row-span-2 h-full w-full object-cover rounded-[4px]"
            />

            {/* Left bottom */}
            <img
              src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=900&q=80"
              alt="Group discussion"
              className="h-full w-full object-cover rounded-[4px]"
            />

            {/* Middle bottom */}
            <img
              src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=900&q=80"
              alt="Team presenting and reviewing"
              className="h-full w-full object-cover rounded-[4px]"
            />
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#23342f] px-6 pb-[5.8rem] pt-[4.5rem]">
        <span className="pointer-events-none absolute right-[-300px] top-[0] h-[110%] w-[38%] rounded-full bg-[#273832]" />

        <div className="relative container w-full">
          <div className="flex gap-8">
            <div className="w-1/2">
              <span className="inline-flex rounded-[4px] items-center bg-[#5b6864] px-[9px] py-[2px] text-[length:var(--f-fs-font-fs16)] font-medium text-white">
                How it Work
              </span>
              <h2 className="mt-4 font-['Poppins'] text-[length:var(--f-fs-font-fs44)] leading-[1.08] font-semibold tracking-[-0.02em] text-white">
                Our Portfolio: Showcasing Successful Placements
              </h2>
            </div>

            <div className="w-1/2 pt-[2px]">
              <p className="text-[length:var(--f-fs-font-fs18)] leading-[1.56] text-[#d3e1dd]">
                Through our tailored staffing solutions and industry expertise,
                we&apos;ve facilitated countless success stories, from small
                businesses to Fortune 500 companies Our portfolio highlights.
              </p>
              <button type="button" className="theme-btn6 mt-5">
                <span>See Plans</span>
                <FiArrowUpRight aria-hidden="true" />
              </button>
            </div>
          </div>

          <div className="mt-7 flex">
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
                <div className="flex items-center ">
                  <span className="relative text-[15px] inline-flex h-[44px] w-[44px] items-center justify-center text-white">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="56"
                      height="40"
                      viewBox="0 0 56 40"
                      fill="none"
                    >
                      <path
                        d="M0 4C0 1.79086 1.79086 0 4 0H33.7195C34.7204 0 35.6849 0.375212 36.4226 1.05157L52.9411 16.1956C54.612 17.7275 54.6773 20.3403 53.085 21.9537L36.4503 38.8097C35.6987 39.5713 34.6733 40 33.6032 40H4C1.79086 40 0 38.2091 0 36V4Z"
                        fill="#FD965B"
                      ></path>
                    </svg>
                    <span className="absolute top-1/2 left-[16px] -translate-x-1/2 -translate-y-1/2 text-[length:var(--f-fs-font-fs16)] leading-[1.2] font-semibold text-white">
                      {index + 1}
                    </span>
                  </span>
                  <span className="h-[1px] w-full bg-[#fff]" />
                </div>
                <div className="pr-12">
                  <h3 className="mt-3 font-['Poppins'] text-[length:var(--f-fs-font-fs18)] leading-[1.2] font-semibold text-white hover:text-[#fd965b]">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-[length:var(--f-fs-font-fs16)] leading-[1.52] text-[#d1dfdb]">
                    {item.body}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 pb-[7rem] pt-[5.7rem]">
        <div className="container">
          <div className="flex items-center justify-between">
            <SectionHeader
              type="Testimonial"
              title="Feedback from Satisfied Customers"
              description="We take pride in delivering exceptional staffing solutions that exceed our clients' expectations. But don't just take our word for it"
              textAlign="start"
            />

            <div className="mt-6 flex gap-2 md:mt-[34px]">
              <button
                type="button"
                className="inline-flex h-11 w-11 items-center justify-center bg-[#dfe0e2] text-[18px] text-[#263140]"
              >
                <IoMdArrowBack />
              </button>
              <button
                type="button"
                className="inline-flex h-11 w-11 items-center justify-center bg-[#dfe0e2] text-[18px] text-[#263140]"
              >
                <IoMdArrowForward />
              </button>
            </div>
          </div>

          <div className="mt-8 grid gap-[14px] lg:grid-cols-2">
            <div>
              <article className="relative rounded-[8px] border border-[#ddb995] bg-[#fffaec] px-7 py-6">
                <div className="flex gap-[6px]">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <span
                      key={`star-a-${index}`}
                      className="inline-flex h-7 w-7 items-center justify-center bg-[#f7e7d9] text-[13px] text-[#f39f5a]"
                    >
                      <FaStar />
                    </span>
                  ))}
                </div>
                <p className="mt-5 text-[length:var(--f-fs-font-fs18)] leading-[1.62] text-[var(--vtc-text-pera-text-4)]">
                  “Discover what our clients have to say about their experience
                  with Recrute. From small businesses to Fortune 500 companies,
                  our tailored staffing solutions have left a lasting impact on
                  organizations across industries. With a focus on excellence”
                </p>
                <span className="absolute bottom-[-20px] left-8 h-0 w-0 border-x-[20px] border-t-[20px] border-x-transparent border-t-[#f39f5a]" />
              </article>

              <div className="mt-10 flex items-center gap-4 pl-[6px]">
                <figure className="h-12 w-12 rounded-full object-cover">
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
              <article className="bg-[#fffaec] rounded-[8px] px-7 py-6">
                <div className="flex gap-[6px]">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <span
                      key={`star-b-${index}`}
                      className="inline-flex h-7 w-7 items-center justify-center bg-[#f7e7d9] text-[13px] text-[#f39f5a]"
                    >
                      <FaStar />
                    </span>
                  ))}
                </div>
                <p className="mt-5 text-[length:var(--f-fs-font-fs18)] leading-[1.62] text-[var(--vtc-text-pera-text-1)]">
                  “From startups seeking their first hires to established
                  corporations aiming to expand their teams, our tailored
                  staffing solutions have consistently exceeded expectations.
                  With testimonials highlighting our ability to find the perfect
                  , our tailored staffing solutions.”
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

      <section className="bg-[#fffbec] px-6 pb-[7.2rem] pt-[5.8rem]">
        <div className="container">
          <SectionHeader
            type="Our Service"
            title="Temporary Staffing Services"
            description="With our proven track record and commitment to excellence, we're here to support your organization's growth and help you achieve"
          />

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
                <figure className="w-full h-[282px]">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </figure>
                <div className="px-4 pb-5 pt-4 text-center">
                  <h3 className="font-['Poppins'] text-[length:var(--f-fs-font-fs22)] leading-[1.2] font-semibold text-[#131b2a]">
                    {member.name}
                  </h3>
                  <p className="mt-1 text-[length:var(--f-fs-font-fs16)] text-[#737a82]">
                    {member.role}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="overflow-hidden py-[5rem]">
        <div className="mx-auto w-full max-w-[1312px] px-6">
          <div className="mb-4 pt-4 text-center">
            <p className="font-['Poppins'] text-[length:var(--f-fs-font-fs18)] font-semibold text-[#111a29]">
              More Than 5K+ Brands With Work Recrute
            </p>
          </div>
        </div>

        <div className="space-y-[1.125rem] mt-[5rem]">
          <div className="relative">
            <div
              className="flex w-max gap-4"
              style={{ animation: "brandMarqueeSlow 34s linear infinite" }}
            >
              {[...topBrands, ...topBrands].map((brand, index) => (
                <article
                  key={`top-${brand}-${index}`}
                  className="flex h-[64px] min-w-[168px] items-center justify-center border border-[#ded8c9] bg-[#f7f7f7] px-6"
                >
                  <span className="font-['Poppins'] text-[length:var(--f-fs-font-fs22)] leading-none font-semibold text-[#2a3442]">
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
                  className="flex h-[64px] min-w-[168px] items-center justify-center border border-[#ded8c9] bg-[#f7f7f7] px-6"
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

      <section className="bg-[#fffbec] px-6 pb-[7.5rem] pt-[5.8rem]">
        <div className="container flex w-full items-start gap-8">
          <div className="w-1/2 pt-2">
            <SectionHeader
              type="Contact Us"
              title="Get in Touch Lets Start the Conversation"
              description="We are here to help you find the right staffing solutions for your needs. Whether you are a company looking to hire top talent or a candidate seeking your next career opportunity"
              textAlign="start"
            />

            <div className="mt-7 space-y-4">
              <article className="flex min-h-[88px] items-center gap-4 bg-white px-7">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-[#f7f2e8] text-[20px] text-[#d99a67]">
                  <FiPhoneCall />
                </span>
                <div>
                  <p className="text-[length:var(--f-fs-font-fs16)] text-[#5f6670]">
                    Gives us a Call
                  </p>
                  <p className="mt-1 font-['Poppins'] text-[length:var(--f-fs-font-18)] leading-none font-semibold text-[#111a29]">
                    123-456-7890
                  </p>
                </div>
              </article>

              <article className="flex min-h-[88px] items-center gap-4 bg-white px-7">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-[#f7f2e8] text-[20px] text-[#d99a67]">
                  <FiMail />
                </span>
                <div>
                  <p className="text-[length:var(--f-fs-font-fs16)] text-[#5f6670]">
                    Send me Mail
                  </p>
                  <p className="mt-1 font-['Poppins'] text-[length:var(--f-fs-font-fs18)] leading-none font-semibold text-[#111a29]">
                    Consult@hotmail.com
                  </p>
                </div>
              </article>
            </div>
          </div>

          <div className="bg-[var(--primary-main-1)] p-6 md:p-7 w-1/2">
            <h3 className="font-['Poppins'] text-[length:var(--f-fs-font-fs24)] leading-[1.1] font-semibold text-white">
              Send us a Message
            </h3>
            <p className="mt-3 max-w-[500px] text-[length:var(--f-fs-font-fs16)] leading-[1.6] text-[#d0ddd9]">
              Feel free to reach out to us with any questions, inquiries, or
              staffing requirements you may have. Our experienced
            </p>

            <form className="mt-5 space-y-3">
              <div className="grid gap-3 sm:grid-cols-2">
                <input
                  type="text"
                  placeholder="First Name"
                  className="h-12 w-full bg-[#394843] px-4 text-[14px] text-white placeholder:text-[#b7c7c2] focus:outline-none"
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  className="h-12 w-full bg-[#394843] px-4 text-[14px] text-white placeholder:text-[#b7c7c2] focus:outline-none"
                />
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                <input
                  type="email"
                  placeholder="Email"
                  className="h-12 w-full bg-[#394843] px-4 text-[14px] text-white placeholder:text-[#b7c7c2] focus:outline-none"
                />
                <input
                  type="text"
                  placeholder="Phone Number"
                  className="h-12 w-full bg-[#394843] px-4 text-[14px] text-white placeholder:text-[#b7c7c2] focus:outline-none"
                />
              </div>

              <input
                type="text"
                placeholder="Subject"
                className="h-12 w-full bg-[#394843] px-4 text-[14px] text-white placeholder:text-[#b7c7c2] focus:outline-none"
              />

              <textarea
                rows={4}
                placeholder="You Message"
                className="w-full resize-none bg-[#394843] px-4 py-3 text-[14px] text-white placeholder:text-[#b7c7c2] focus:outline-none"
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
        <div className="container">
          <SectionHeader
            type="Our Service"
            title="Temporary Staffing Services"
            description="With our proven track record and commitment to excellence, we're here to support your organization's growth and help you achieve"
          />

          <div className="mt-9 flex gap-4">
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
                className="relative min-h-[420px] overflow-hidden w-1/2"
              >
                <img
                  src={post.image}
                  alt="Team collaboration"
                  className="h-full w-full object-cover"
                />

                <div className="absolute right-0 bottom-4 left-[76px] bg-[#ededee] px-4 py-4">
                  <div className="flex items-center gap-6 text-[12px] text-[#6e737b]">
                    <span className="inline-flex items-center gap-1">
                      <FiCalendar className="text-[length:var(--f-fs-font-fs18)]" />
                      {post.date}
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <FiUser className="text-[length:var(--f-fs-font-fs18)]" />
                      {post.author}
                    </span>
                  </div>

                  <h3 className="mt-3 font-['Poppins'] text-[length:var(--f-fs-font-fs18)] leading-[1.22] font-semibold text-[#121a29]">
                    The Staffing Strategist Your Guide to Talent Acquisition
                  </h3>

                  <p className="mt-3 border-b border-[#dfc3aa] pb-4 text-[length:var(--f-fs-font-fs16)] leading-[1.55] text-[#646b74]">
                    Welcome to our blog, where we share valuable insights, tips,
                    and industry news to
                  </p>

                  <button
                    type="button"
                    className="mt-3 inline-flex items-center gap-1 text-[length:var(--f-fs-font-fs16)] font-semibold text-[#121a29]"
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
