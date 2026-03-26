import React from "react";
import PageHero from "../../../components/sections/pageHero";
import Sidebar from "../../../components/sections/sidebar";


const recentWorks = [
  {
    title: "Demonstrating Our Expertise",
    date: "December 10, 2024",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=160&q=80",
  },
  {
    title: "Demonstrating Our Expertise",
    date: "December 10, 2024",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=160&q=80",
  },
  {
    title: "Demonstrating Our Expertise",
    date: "December 10, 2024",
    image:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=160&q=80",
  },
];

const categories = ["Recruitment", "Staffing Services"];
const tags = ["IT", "Solutions"];

const progressData = [
  { title: "Business Planning", value: 82 },
  { title: "International Business", value: 64 },
];

const ProjectDetails = () => {
  return (
    <main className="bg-white">
      <PageHero
        title="Demonstrating Our Expertise"
        breadcrumbs={[
          "Recrute Sites",
          "Staffing Agency",
          "Projects",
          "Staffing Service",
          "Demonstrating Our Expertise",
        ]}
      />

      <section className="pt-[100px]">
        <div className="container grid w-full grid-cols-1 gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(210px,410px)] lg:gap-x-10">
          <article className="min-w-0 text-[var(--primary-text-3)]">
            <h2 className="text-4xl font-['Figtree-Bold'] text-black">
              Demonstrating Our Expertise
            </h2>
            <p className="mt-3 text-base leading-[1.68]">
              Our HR consulting and staffing support services provide guidance
              and expertise in areas such as compliance, workforce planning, and
              talent management, helping you optimize your staffing strategy for
              long-term success.
            </p>

            <section className="mt-8">
              <h3 className="text-3xl font-['Figtree-Bold'] text-black">
                Placements Transformative Partnerships
              </h3>
              <p className="mt-2 text-base leading-[1.68]">
                From executive-level placements to specialized skill sets, our
                projects highlight the diverse range of industries and roles
                we&apos;ve successfully filled.
              </p>
            </section>

            <section className="mt-8">
              <h3 className="text-3xl font-['Figtree-Bold'] text-black">
                Project Portfolio Our Proof Achievements
              </h3>
              <p className="mt-2 text-base leading-[1.68]">
                Sharing these success stories, we aim to provide insight into
                our process, expertise, and commitment to excellence. Explore
                our projects section to learn more about the impactful
                partnerships we&apos;ve forged and the results we&apos;ve
                achieved.
              </p>
            </section>

            <section className="mt-8">
              <h3 className="text-3xl font-['Figtree-Bold'] text-black">
                Showcasing Our Work
              </h3>
              <p className="mt-2 text-base leading-[1.68]">
                From executive-level placements shaping the direction of
                companies to specialized skill sets driving innovation in
                diverse industries, our projects span a spectrum of success.
              </p>
              <p className="mt-3 text-base leading-[1.68]">
                Through meticulous candidate selection, tailored recruitment
                strategies, and a deep understanding of our clients&apos; needs,
                we&apos;ve consistently delivered exceptional results.
              </p>
            </section>

            <blockquote className="mt-8 border-l-[5px] border-l-[var(--primary-main)] bg-[#f5f5f5] px-5 py-4 text-base italic leading-[1.72] text-[#5d6470]">
              Our blog is your go-to resource for the latest trends, best
              practices, and expert advice in the staffing industry. From
              articles on optimizing your hiring process and navigating
              employment law changes to career development.
            </blockquote>

            <section className="mt-8 flex flex-col gap-7 border border-[#ececec] p-4 sm:flex-row sm:items-start sm:gap-8 sm:p-5">
              <figure className="h-[206px] w-full shrink-0 overflow-hidden border border-[#e7e7e7] bg-[#fafafa] sm:w-[332px]">
                <img
                  src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=700&q=80"
                  alt="Business planning consultation"
                  className="h-full w-full object-cover"
                />
              </figure>
              <div className="min-w-0">
                <h4 className="text-3xl font-['Figtree-Bold'] text-black">
                  Drive
                </h4>
                <p className="mt-2 text-base leading-[1.68] text-[var(--primary-text-3)]">
                  Facer volutpat metus, volutes. Habitant seeped corrupts fuse
                  culpas. Tempore Aenean debits, Aenean.
                </p>
                <p className="mt-2 text-base leading-[1.68] text-[var(--primary-text-3)]">
                  Quisquesa venerates fringilid bland. Bibendum corrupts quake
                  vilorum.
                </p>
                <p className="mt-2 text-base leading-[1.68] text-[var(--primary-text-3)]">
                  Habitant seeped corrupts fuse culpas.
                </p>
              </div>
            </section>

            <div className="mt-7 space-y-4">
              {progressData.map((item) => (
                <div key={item.title}>
                  <div className="mb-2 flex items-center justify-between text-lg text-black">
                    <span>{item.title}</span>
                    <span>{item.value}%</span>
                  </div>
                  <div className="h-3.5 rounded-full bg-[#ececec] p-[2px]">
                    <div
                      className="h-full rounded-full bg-[#0e1b35]"
                      style={{ width: `${item.value}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>

            <section className="mt-9">
              <h3 className="text-3xl font-['Figtree-Bold'] text-black">
                Driving Business Growth
              </h3>
              <p className="mt-2 text-base leading-[1.68]">
                These case studies serve as testament to our expertise,
                dedication, and unwavering commitment to excellence. Dive into
                our projects section to discover.
              </p>
            </section>
          </article>

          <Sidebar
            searchTitle="Search"
            recentWorks={{
              title: "Recent Works",
              items: recentWorks,
            }}
            categories={{
              title: "Categories",
              items: categories,
            }}
            tags={{
              title: "Tags",
              items: tags,
            }}
            contactUs={true}
          />
        </div>
      </section>
    </main>
  );
};

export default ProjectDetails;
