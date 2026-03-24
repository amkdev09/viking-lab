import React from "react";

const PageHero = ({ title, breadcrumbs = [] }) => {
  return (
    <section className="relative overflow-hidden bg-[#23342e]">
      <div className="container flex h-[332px] items-center justify-center px-6">
        <div className="text-center pt-20">
          <h1 className="font-['Poppins'] text-[50px] leading-none font-semibold tracking-[-0.01em] text-white">
            {title}
          </h1>
          <p className="mt-7 text-[length:var(--f-fs-font-fs16)] font-semibold tracking-[0.01em] text-white/90">
            {breadcrumbs?.length > 0 &&
              breadcrumbs?.map((breadcrumb, index) => (
                <React.Fragment key={index}>
                  {breadcrumb}
                  {index < breadcrumbs.length - 1 && (
                    <span className="px-2 text-white/60" aria-hidden="true">
                      &gt;
                    </span>
                  )}
                </React.Fragment>
              ))}
          </p>
        </div>
      </div>
    </section>
  );
};

export default PageHero;
