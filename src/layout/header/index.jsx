import React, { useEffect, useState } from "react";
import { FiArrowUpRight } from "react-icons/fi";
import "./style.scss";
import { Link } from "react-router-dom";
import recruteLogo from "../../assets/png/recru.png";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about" },
  {
    label: "Services", to: "/services", menuItem: [
      { label: "Services", to: "/services" },
      { label: "Services Details", to: "/services-details" }
    ]
  },
  {
    label: "Projects", to: "/projects", menuItem: [
      { label: "Projects", to: "/projects" },
      { label: "Projects Details", to: "/projects-details" }
    ]
  },
  {
    label: "Job Posts", to: "/jobs", menuItem: [
      { label: "Job Posts", to: "/job-posts" },
      { label: "Job Details", to: "/job-details" }
    ]
  },
  {
    label: "Pages", to: "/pages", menuItem: [
      { label: "About Us", to: "/about-us" },
      { label: "Our Team", to: "/our-team" },
      { label: "Testimonials", to: "/testimonials" },
      { label: "Contact Us", to: "/contact" }
    ]
  },
  {
    label: "Blog", to: "/blog",
    menuItem: [
      { label: "Blog Standard", to: "/blog-standard" },
      { label: "Blog Grid", to: "/blog-grid" },
      { label: "Blog Details", to: "/blog-details" }
    ]
  },
  { label: "Contact Us", to: "/contact" }
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [openMenu, setOpenMenu] = useState(null);

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 16);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`site-header ${isScrolled ? "is-scrolled" : ""}`}>
      <div className="container site-header__inner">
        <a className="site-header__brand" href="/">
          <figure className="site-header__brand-mark" aria-hidden="true">
            <img src={recruteLogo} alt="Recrute" />
          </figure>
          <span className="site-header__brand-text">Recrute</span>
        </a>

        <nav className="site-header__nav" aria-label="Main Navigation">
          {navLinks.map((item) => {
            const hasMenu = Array.isArray(item.menuItem) && item.menuItem.length > 0;

            if (!hasMenu) {
              return (
                <Link key={item.label} className="site-header__link" to={item.to}>
                  {item.label}
                </Link>
              );
            }

            const isOpen = openMenu === item.label;

            return (
              <div
                key={item.label}
                className="site-header__nav-item"
                onMouseEnter={() => setOpenMenu(item.label)}
                onMouseLeave={() => setOpenMenu(null)}
              >
                <Link
                  className="site-header__link"
                  to={item.to}
                  aria-haspopup="true"
                  aria-expanded={isOpen}
                  onFocus={() => setOpenMenu(item.label)}
                >
                  {item.label}
                </Link>

                <div className={`site-header__dropdown ${isOpen ? "is-open" : ""}`}>
                  <ul className="site-header__dropdown-list">
                    {item.menuItem.map((menuItem) => (
                      <li key={menuItem.label} className="site-header__dropdown-li">
                        <Link
                          className="site-header__dropdown-link"
                          to={menuItem.to}
                          onClick={() => setOpenMenu(null)}
                        >
                          {menuItem.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </nav>
        <button className="theme-btn6" type="button">
          Get Started
          <FiArrowUpRight aria-hidden="true" />
        </button>
      </div>
    </header>
  );
};

export default Header;