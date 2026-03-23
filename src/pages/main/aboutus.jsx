import React from "react";

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

      <section className="bg-white py-[106px]">
        <div className="mx-auto grid w-full max-w-[1160px] grid-cols-1 gap-14 px-6 lg:grid-cols-[540px_minmax(0,1fr)] lg:items-start lg:gap-[54px]">
          <div className="grid grid-cols-[1fr_1fr] gap-4">
            <img
              src="https://images.unsplash.com/photo-1573164574572-cb89e39749b4?auto=format&fit=crop&w=640&q=80"
              alt="Team members in a meeting"
              className="h-[286px] w-full object-cover"
            />

            <div className="h-[286px] bg-[#f09052] px-10 pt-9 text-white">
              <p className="font-['Poppins'] text-[47px] leading-none font-semibold">
                1590+
              </p>
              <p className="mt-3 text-[17px] font-medium text-white/95">
                Happy Clients
              </p>
            </div>

            <img
              src="https://images.unsplash.com/photo-1542204165-65bf26472b9b?auto=format&fit=crop&w=640&q=80"
              alt="Professional portrait"
              className="h-[286px] w-full object-cover"
            />

            <div className="h-[286px] w-full bg-[#f1f4f6]" />
          </div>

          <div className="pt-5 lg:pt-6">
            <span className="inline-flex h-[30px] items-center bg-[#eceff2] px-4 text-[14px] font-medium text-[#49566b]">
              About Us
            </span>

            <h2 className="mt-5 max-w-[640px] font-['Poppins'] text-[54px] leading-[1.12] font-semibold tracking-[-0.015em] text-[#101827]">
              Our Story Connecting Talent, Powering Success
            </h2>

            <p className="mt-6 max-w-[640px] text-[20px] leading-[1.75] text-[#5f6772]">
              Our team of industry experts is dedicated to understanding your
              unique needs and delivering tailored solutions that propel your
              business forward.
            </p>

            <ul className="mt-7 space-y-4">
              {highlights.map((item) => (
                <li key={item} className="flex items-center gap-4">
                  <span className="flex h-[34px] w-[34px] shrink-0 items-center justify-center rounded-full bg-[#f09052] text-[17px] font-semibold text-white">
                    ✓
                  </span>
                  <span className="font-['Poppins'] text-[28px] leading-[1.3] font-semibold text-[#111827]">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AboutUs;