import React from "react";

const PageHero = ({ title, breadcrumbs = [] }) => {
  return (
    <section className="relative flex min-h-[300px] flex-col justify-center overflow-hidden bg-[#1b2a26] px-4 pb-12 pt-[max(5.75rem,env(safe-area-inset-top,0px)+4.5rem)] sm:min-h-[340px] sm:px-6 sm:pb-14 sm:pt-[max(6rem,env(safe-area-inset-top,0px)+4.75rem)] md:min-h-[350px] min-[1201px]:pb-16 min-[1201px]:pt-[70px]">
      <div className="container w-full">
        <div className="mx-auto flex max-w-[min(100%,52rem)] flex-col items-center text-center md:max-w-none">
          <h1 className="text-balance text-2xl font-['Figtree-Bold'] leading-[1.15] tracking-[-0.02em] text-white sm:text-3xl sm:leading-[1.12] md:text-4xl md:leading-[1.08] lg:text-5xl lg:leading-none">
            {title}
          </h1>
          {breadcrumbs?.length > 0 && (
            <nav
              className="mt-5 flex flex-wrap items-center justify-center gap-x-0 gap-y-1.5 text-sm font-normal leading-relaxed text-white/95 sm:mt-7 sm:text-base md:mt-8"
              aria-label="Breadcrumb"
            >
              {breadcrumbs.map((breadcrumb, index) => (
                <React.Fragment key={index}>
                  {index > 0 && (
                    <span className="mx-1.5 text-white/90 sm:mx-2" aria-hidden="true">
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
