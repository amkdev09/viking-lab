import React from "react";

const PageHero = ({ title, breadcrumbs = [] }) => {
  return (
    <section className="relative overflow-hidden bg-[#23342e] h-[350px] flex items-center">
      <div className="container ">
        <div className="flex items-center justify-center pt-[70px]">
          <div className="text-center">
            <h1 className="text-5xl font-['Figtree-Bold'] leading-none tracking-[-0.02em] text-white">
              {title}
            </h1>
            {breadcrumbs?.length > 0 && (
              <nav
                className="mt-8 flex flex-wrap items-center justify-center gap-x-0 gap-y-1 text-base font-normal leading-normal text-white"
                aria-label="Breadcrumb"
              >
                {breadcrumbs.map((breadcrumb, index) => (
                  <React.Fragment key={index}>
                    {index > 0 && (
                      <span className="mx-2 text-white/90" aria-hidden="true">
                        &gt;
                      </span>
                    )}
                    <span
                      className={
                        index === breadcrumbs.length - 1
                          ? "text-white"
                          : "text-white/90"
                      }
                    >
                      {breadcrumb}
                    </span>
                  </React.Fragment>
                ))}
              </nav>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PageHero;
