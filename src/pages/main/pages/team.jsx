import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
import PageHero from "../../../components/sections/pageHero";

const teamPhotos = [
  "https://images.unsplash.com/photo-1560250097-192b70627d17?auto=format&fit=crop&w=480&q=80",
  "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=480&q=80",
  "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=480&q=80",
  "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=480&q=80",
  "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=480&q=80",
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=480&q=80",
  "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?auto=format&fit=crop&w=480&q=80",
  "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=480&q=80",
  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=480&q=80",
];

const Team = () => {
  return (
    <main className="bg-white">
      <PageHero
        title="Team"
        breadcrumbs={["Recrute Sites", "Staffing Agency", "Team"]}
      />

      <section className="pt-[100px]">
        <div className="container mx-auto w-full max-w-[1280px]">
          <ul className="grid list-none grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {teamPhotos.map((src, index) => (
              <li key={src}>
                <article className="group overflow-hidden bg-white shadow-sm transition-shadow duration-300 hover:shadow-lg">
                  <div className="relative aspect-[4/5] w-full overflow-hidden bg-[#e8e8e8]">
                    <img
                      src={src}
                      alt={`Team member ${index + 1}`}
                      className="h-full w-full object-cover object-top hover:scale-105 transition-all duration-300"
                      loading={index < 3 ? "eager" : "lazy"}
                    />
                    <div
                      className="absolute bottom-0 left-0 right-0 z-10 flex flex-col items-center bg-[#f9fafb] px-6 pb-5 pt-6 text-center shadow-[0_-8px_24px_rgba(0,0,0,0.06)] transition-[max-height] duration-500 ease-out md:px-8
                      max-h-[124px] group-hover:max-h-[248px] overflow-hidden"
                    >
                      <h3 className="text-lg font-['Figtree-Bold'] text-[#001C30] sm:text-xl">
                        Sameer Rizvi
                      </h3>
                      <p className="mt-2 text-base text-[#6b7280]">
                        Senior Consultant
                      </p>
                      <div
                        className="mt-6 flex flex-wrap items-center justify-center gap-3 opacity-0 transition-opacity duration-300 delay-75 group-hover:opacity-100"
                        aria-label="Social links"
                      >
                        {[
                          { icon: FaFacebookF, label: "Facebook" },
                          { icon: FaInstagram, label: "Instagram" },
                          { icon: FaLinkedinIn, label: "LinkedIn" },
                          { icon: FaTwitter, label: "Twitter" },
                        ].map((social) => {
                          const SocialIcon = social.icon;
                          return (
                            <a
                              key={social.label}
                              href="#"
                              aria-label={social.label}
                              className="flex h-10 w-10 items-center justify-center rounded-full bg-[#F9E7D9] text-[#001C30] transition-opacity hover:opacity-90"
                            >
                              <SocialIcon className="h-4 w-4" aria-hidden />
                            </a>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </article>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
};

export default Team;
