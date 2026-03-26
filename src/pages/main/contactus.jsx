import React from "react";
import PageHero from "../../components/sections/pageHero";
import { FiArrowUpRight } from "react-icons/fi";
import SectionHeader from "../../components/sections/header";

const contactItems = [
  {
    label: "Give us a Call",
    value: "123-456-7890",
    icon: (
      <svg
        className="h-[24px] w-[24px]"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M8.40002 10.8C9.60002 13.2 10.8 14.4 13.2 15.6L15 13.8C15.24 13.56 15.6 13.48 15.92 13.58C16.96 13.92 18.08 14.1 19.2 14.1C19.64 14.1 20 14.46 20 14.9V19.2C20 19.64 19.64 20 19.2 20C10.8 20 4 13.2 4 4.8C4 4.36 4.36 4 4.8 4H9.1C9.54 4 9.9 4.36 9.9 4.8C9.9 5.92 10.08 7.04 10.42 8.08C10.52 8.4 10.44 8.76 10.2 9L8.40002 10.8Z"
          stroke="currentColor"
          strokeWidth="1.3"
        />
      </svg>
    ),
  },
  {
    label: "Send me Mail",
    value: "Consult@hotmail.com",
    icon: (
      <svg
        className="h-[24px] w-[24px]"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M4.2 6.2H19.8C20.24 6.2 20.6 6.56 20.6 7V17C20.6 17.44 20.24 17.8 19.8 17.8H4.2C3.76 17.8 3.4 17.44 3.4 17V7C3.4 6.56 3.76 6.2 4.2 6.2Z"
          stroke="currentColor"
          strokeWidth="1.3"
        />
        <path
          d="M4 7L12 12.8L20 7"
          stroke="currentColor"
          strokeWidth="1.3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
];

const ContactUs = () => {
  return (
    <main className="text-[#1f2937]">
      <PageHero
        title="Contact"
        breadcrumbs={["Recrute Sites", "Staffing Agency", "Contact"]}
      />

      <section className="py-25">
        <div className="container mx-auto max-w-[1200px]">
          <div className="flex w-full flex-col gap-10 lg:flex-row lg:items-start lg:gap-12 xl:gap-16">
            <div className="w-full lg:w-[46%] lg:min-w-0 lg:flex-1">
              <SectionHeader
                type="Contact Us"
                title="Get in Touch Let's Start the Conversation"
                description="We are here to help you find the right staffing solutions for your needs. Whether you are a company looking to hire top talent or a candidate seeking your next career opportunity"
                textAlign="start"
              />

              <div className="mt-8 h-px w-full bg-[#e5e7eb]" />

              <div className="mt-8 flex w-full flex-col gap-8 sm:flex-row sm:gap-6">
                {contactItems.map((item) => (
                  <div key={item.label} className="min-w-0 flex-1">
                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[var(--primary-text-bg-1)] text-[var(--primary-main)]">
                      {item.icon}
                    </div>
                    <p className="mt-3 text-sm font-medium leading-snug text-[#6b7280] md:text-base">
                      {item.label}
                    </p>
                    <p className="mt-1 text-lg font-['Figtree-Bold'] leading-tight text-[#111827] md:text-xl">
                      {item.value}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="w-full lg:w-[54%] lg:min-w-0 lg:flex-1">
              <div className="rounded-4 bg-[#f3f4f6] p-6 shadow-sm sm:p-8 md:p-9">
                <h3 className="text-2xl font-['Figtree-Bold'] leading-tight tracking-[-0.02em] text-[#0f172a] md:text-3xl">
                  Send us a Message
                </h3>
                <p className="mt-3 text-base leading-[1.65] text-[#6b7280]">
                  Feel free to reach out to us with any questions, inquiries, or
                  staffing requirements you may have. Our experienced
                </p>

                <form
                  className="mt-6 space-y-3.5"
                  onSubmit={(e) => e.preventDefault()}
                >
                  <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2">
                    <input
                      type="text"
                      name="firstName"
                      placeholder="First Name"
                      className="h-14 font-['Figtree-Regular'] w-full bg-[#e5e7eb] px-3.5 text-base text-[#374151] placeholder:text-[#9ca3af] transition-colors focus:border-[var(--primary-main)] focus:outline-none"
                    />
                    <input
                      type="text"
                      name="lastName"
                      placeholder="Last Name"
                      className="h-14 font-['Figtree-Regular'] w-full bg-[#e5e7eb] px-3.5 text-base text-[#374151] placeholder:text-[#9ca3af] transition-colors focus:border-[var(--primary-main)] focus:outline-none"
                    />
                  </div>

                  <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2">
                    <input
                      type="email"
                      name="email"
                      placeholder="Email"
                      className="h-14 font-['Figtree-Regular'] w-full bg-[#e5e7eb] px-3.5 text-base text-[#374151] placeholder:text-[#9ca3af] transition-colors focus:border-[var(--primary-main)] focus:outline-none"
                    />
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Phone Number"
                      className="h-14 font-['Figtree-Regular'] w-full bg-[#e5e7eb] px-3.5 text-base text-[#374151] placeholder:text-[#9ca3af] transition-colors focus:border-[var(--primary-main)] focus:outline-none"
                    />
                  </div>

                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    className="h-14 font-['Figtree-Regular'] w-full bg-[#e5e7eb] px-3.5 text-base text-[#374151] placeholder:text-[#9ca3af] transition-colors focus:border-[var(--primary-main)] focus:outline-none"
                  />

                  <textarea
                    name="message"
                    placeholder="Your Message"
                    rows={5}
                    className="min-h-[140px] w-full resize-y font-['Figtree-Regular'] bg-[#e5e7eb] px-3.5 py-3 text-base text-[#374151] placeholder:text-[#9ca3af] transition-colors focus:border-[var(--primary-main)] focus:outline-none"
                  />

                  <div className="flex justify-end pt-1">
                    <button
                      type="submit"
                      className="theme-btn6"
                    >
                      Submit Now
                      <FiArrowUpRight
                        className="h-4 w-4 shrink-0"
                        strokeWidth={2.5}
                        aria-hidden
                      />
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full">
        <iframe
          title="London map"
          src="https://maps.google.com/maps?q=London&t=&z=11&ie=UTF8&iwloc=&output=embed"
          className="h-[520px] sm:h-[600px] md:h-[685px] w-full border-0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </section>
    </main>
  );
};

export default ContactUs;
