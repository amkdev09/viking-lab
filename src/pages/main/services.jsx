import React from "react";

const serviceImages = [
  "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=900&q=80",
];

const ServicesPage = () => {
  return (
    <main className="bg-[#f3f3f3]">
      <section
        className="px-6 py-[64px] text-center"
        style={{
          background:
            "linear-gradient(90deg, rgba(14,53,47,1) 0%, rgba(10,43,39,1) 55%, rgba(15,57,51,1) 100%)",
        }}
      >
        <h1 className="font-['Poppins'] text-[48px] leading-none font-semibold text-white">
          Our Services
        </h1>

        <p className="mt-4 text-[13px] font-medium tracking-[0.01em] text-white/90">
          Recrute Sites
          <span className="mx-2 text-white/70">»</span>
          Staffing Agency
          <span className="mx-2 text-white/70">»</span>
          <span className="text-white">Our Services</span>
        </p>
      </section>

      <section className="px-6 pb-[52px] pt-[46px]">
        <div className="mx-auto grid w-full max-w-[820px] grid-cols-1 gap-[14px] sm:grid-cols-2 lg:grid-cols-3">
          {serviceImages.map((image, index) => (
            <article key={`${image}-${index}`} className="h-[180px] overflow-hidden bg-white">
              <img
                src={image}
                alt={`Service item ${index + 1}`}
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </article>
          ))}
        </div>
      </section>
    </main>
  );
};

export default ServicesPage;
