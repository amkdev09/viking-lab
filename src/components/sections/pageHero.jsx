import React from "react";

const PageHero = ({ title, breadcrumbs = [] }) => {
  return (
    <section className="relative overflow-hidden bg-[#1b2a26]">
      <div className="container flex items-center justify-center px-6 py-[88px] sm:py-[96px]">
        <div className="text-center">
          <h1 className="font-['Poppins'] text-[clamp(2rem,4vw,2.75rem)] font-bold leading-tight tracking-[-0.02em] text-white">
            {title}
          </h1>
          {breadcrumbs?.length > 0 && (
            <nav
              className="mt-[18px] flex flex-wrap items-center justify-center gap-x-0 gap-y-1 text-[13px] font-normal leading-normal text-white sm:text-sm"
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
    </section>
  );
};

export default PageHero;
