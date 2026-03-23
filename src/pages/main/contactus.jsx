import React from "react";

const contactItems = [
  {
    label: "Give us a Call",
    value: "123-456-7890",
    icon: (
      <svg
        className="h-[18px] w-[18px]"
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
        className="h-[18px] w-[18px]"
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
    <main className="bg-[#f3f3f3] font-['Inter'] text-[#1f2937]">
      <section
        className="px-6 py-[44px] text-center"
        style={{
          background:
            "linear-gradient(90deg, rgba(14,53,47,1) 0%, rgba(10,43,39,1) 55%, rgba(15,57,51,1) 100%)",
        }}
      >
        <h1 className="font-['Poppins'] text-[46px] leading-none font-semibold text-white">
          Contact
        </h1>
        <p className="mt-[10px] text-[12px] font-semibold tracking-[0.01em] text-white/90">
          Recrute Sites
          <span className="px-2 text-white/65" aria-hidden="true">
            &gt;
          </span>
          Staffing Agency
          <span className="px-2 text-white/65" aria-hidden="true">
            &gt;
          </span>
          Contact
        </p>
      </section>

      <section className="px-6 pb-[34px] pt-[32px]">
        <div className="mx-auto grid w-full max-w-[980px] grid-cols-1 gap-[22px] lg:grid-cols-[1fr_400px] lg:items-start lg:gap-[24px]">
          <div className="pt-[28px]">
            <span className="inline-flex h-[18px] items-center bg-[#f2e6d8] px-[8px] text-[10px] font-medium text-[#7a5f45]">
              Contact Us
            </span>

            <h2 className="mt-[10px] max-w-[460px] font-['Poppins'] text-[42px] leading-[1.14] font-semibold tracking-[-0.01em] text-[#111827]">
              Get in Touch Lets Start the Conversation
            </h2>

            <p className="mt-[10px] max-w-[458px] text-[11px] leading-[1.7] text-[#69707a]">
              We are here to help you find the right staffing solutions for your needs.
              Whether you are a company looking for top talent or a candidate seeking
              your next career opportunity
            </p>

            <div className="mt-[12px] h-px w-full max-w-[460px] bg-[#d8d8d8]" />

            <div className="mt-[14px] grid max-w-[460px] grid-cols-1 gap-y-[12px] sm:grid-cols-2 sm:gap-x-[28px]">
              {contactItems.map((item) => (
                <div key={item.label}>
                  <div className="flex h-[30px] w-[30px] items-center justify-center rounded-full bg-[#f7eee4] text-[#d8ab7a]">
                    {item.icon}
                  </div>
                  <p className="mt-[7px] text-[11px] leading-[1.4] text-[#636b75]">
                    {item.label}
                  </p>
                  <p className="mt-[2px] font-['Poppins'] text-[19px] leading-[1.25] font-semibold text-[#111827]">
                    {item.value}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="bg-[#ececec] px-[16px] pt-[14px] pb-[12px]">
              <h3 className="font-['Poppins'] text-[31px] leading-[1.15] font-semibold tracking-[-0.01em] text-[#111827]">
                Send us a Message
              </h3>
              <p className="mt-[7px] max-w-[320px] text-[10px] leading-[1.65] text-[#6a7079]">
                Feel free to reach out to us with any questions, inquiries, or
                staffing requirements you may have. Our experienced
              </p>

              <form className="mt-[10px] space-y-[8px]">
                <div className="grid grid-cols-1 gap-[8px] sm:grid-cols-2">
                  <input
                    type="text"
                    placeholder="First Name"
                    className="h-[36px] w-full bg-[#dedede] px-[10px] text-[10px] text-[#555] placeholder:text-[#6b6b6b] focus:outline-none"
                  />
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="h-[36px] w-full bg-[#dedede] px-[10px] text-[10px] text-[#555] placeholder:text-[#6b6b6b] focus:outline-none"
                  />
                </div>

                <div className="grid grid-cols-1 gap-[8px] sm:grid-cols-2">
                  <input
                    type="email"
                    placeholder="Email"
                    className="h-[36px] w-full bg-[#dedede] px-[10px] text-[10px] text-[#555] placeholder:text-[#6b6b6b] focus:outline-none"
                  />
                  <input
                    type="text"
                    placeholder="Phone Number"
                    className="h-[36px] w-full bg-[#dedede] px-[10px] text-[10px] text-[#555] placeholder:text-[#6b6b6b] focus:outline-none"
                  />
                </div>

                <input
                  type="text"
                  placeholder="Subject"
                  className="h-[36px] w-full bg-[#dedede] px-[10px] text-[10px] text-[#555] placeholder:text-[#6b6b6b] focus:outline-none"
                />

                <textarea
                  placeholder="Your Message"
                  rows={3}
                  className="h-[74px] w-full resize-none bg-[#dedede] px-[10px] py-[10px] text-[10px] text-[#555] placeholder:text-[#6b6b6b] focus:outline-none"
                />

                <div className="flex justify-end pt-[4px]">
                  <button
                    type="button"
                    className="inline-flex h-[30px] min-w-[92px] items-center justify-center gap-1 bg-[#f3a45f] px-[12px] font-['Poppins'] text-[10px] font-medium text-white transition-colors duration-150 hover:bg-[#e59753]"
                  >
                    Submit Now
                    <span aria-hidden="true">↗</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full">
        <iframe
          title="London map"
          src="https://maps.google.com/maps?q=London&t=&z=11&ie=UTF8&iwloc=&output=embed"
          className="h-[285px] w-full border-0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </section>
    </main>
  );
};

export default ContactUs;