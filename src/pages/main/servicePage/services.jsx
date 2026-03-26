import React from "react";
import PageHero from "../../../components/sections/pageHero";

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
    <main>
      <PageHero
        title="Our Services"
        breadcrumbs={["Recrute Sites", "Staffing Agency", "Our Services"]}
      />

      <section className="pt-[100px]">
        <div className="container">
          <div className="grid w-full grid-cols-1 gap-[24px] sm:grid-cols-2 lg:grid-cols-3">
            {serviceImages.map((image, index) => (
              <article
                key={`${image}-${index}`}
                className="h-[330px] overflow-hidden bg-white rounded-[4px]"
              >
                <img
                  src={image}
                  alt={`Service item ${index + 1}`}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default ServicesPage;
