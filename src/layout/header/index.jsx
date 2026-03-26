import React, { useEffect, useState } from "react";
import {
  FiArrowUpRight,
  FiChevronRight,
  FiMail,
  FiMapPin,
  FiPhone,
  FiX,
} from "react-icons/fi";
import "./style.scss";
import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import recruteLogo from "../../assets/png/recru.png";
import { IoMenuSharp } from "react-icons/io5";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about" },
  {
    label: "Services",
    to: "/services",
    menuItem: [
      { label: "Services", to: "/services" },
      { label: "Services Details", to: "/services-details" },
    ],
  },
  {
    label: "Projects",
    to: "/projects",
    menuItem: [
      { label: "Projects", to: "/projects" },
      { label: "Projects Details", to: "/projects-details" },
    ],
  },
  {
    label: "Job Posts",
    to: "/jobs",
    menuItem: [
      { label: "Job Posts", to: "/jobs" },
      { label: "Job Details", to: "/jobs-details" },
    ],
  },
  {
    label: "Pages",
    to: "/about",
    menuItem: [
      { label: "About Us", to: "/about" },
      { label: "Our Team", to: "/team" },
      { label: "Testimonial", to: "/testimonial" },
      { label: "Contact Us", to: "/contact" },
    ],
  },
  {
    label: "Blog",
    to: "/blog",
    menuItem: [
      { label: "Blog Standard", to: "/blog" },
      { label: "Blog Grid", to: "/blog-grid" },
      { label: "Blog Details", to: "/blog-details" },
    ],
  },
  { label: "Contact Us", to: "/contact" },
];

const contactInfo = [
  {
    icon: FiPhone,
    text: "+8801310-069824",
    href: "tel:+8801310069824",
  },
  {
    icon: FiMail,
    text: "recrute@support.com",
    href: "mailto:recrute@support.com",
  },
  {
    icon: FiMapPin,
    text: "734 H, Bryan Burlington, NC 27215",
    href: "https://maps.google.com/?q=734+H+Bryan+Burlington+NC+27215",
  },
];

const socialLinks = [
  { Icon: FaFacebookF, label: "Facebook", href: "#" },
  { Icon: FaLinkedinIn, label: "LinkedIn", href: "#" },
  { Icon: FaInstagram, label: "Instagram", href: "#" },
  { Icon: FaXTwitter, label: "X", href: "#" },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [openMenu, setOpenMenu] = useState(null);
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState(null);

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 16);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!mobileDrawerOpen) return undefined;
    const onKey = (e) => {
      if (e.key === "Escape") setMobileDrawerOpen(false);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [mobileDrawerOpen]);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 1200) {
        setMobileDrawerOpen(false);
        setMobileExpanded(null);
      }
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const closeDrawer = () => {
    setMobileDrawerOpen(false);
    setMobileExpanded(null);
  };

  return (
    <header className={`site-header ${isScrolled ? "is-scrolled" : ""}`}>
      <div className="container site-header__inner">
        <Link className="site-header__brand" to="/">
          <figure className="site-header__brand-mark" aria-hidden="true">
            <img src={recruteLogo} alt="" />
          </figure>
          <span className="site-header__brand-text">Recrute</span>
        </Link>

        <nav className="site-header__nav" aria-label="Main Navigation">
          {navLinks.map((item) => {
            const hasMenu =
              Array.isArray(item.menuItem) && item.menuItem.length > 0;

            if (!hasMenu) {
              return (
                <Link
                  key={item.label}
                  className="site-header__link"
                  to={item.to}
                >
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

                <div
                  className={`site-header__dropdown ${isOpen ? "is-open" : ""}`}
                >
                  <ul className="site-header__dropdown-list">
                    {item.menuItem.map((menuItem) => (
                      <li
                        key={menuItem.label}
                        className="site-header__dropdown-li"
                      >
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

        <button className="theme-btn6 site-header__cta-desktop" type="button">
          Get Started
          <FiArrowUpRight aria-hidden="true" />
        </button>

        <button
          type="button"
          className="site-header__menu-toggle"
          aria-label="Open menu"
          aria-expanded={mobileDrawerOpen}
          onClick={() => setMobileDrawerOpen(true)}
        >
          <IoMenuSharp className="h-8 w-8" />
        </button>
      </div>

      <div
        className={`site-header__drawer-backdrop ${mobileDrawerOpen ? "is-open" : ""}`}
        aria-hidden="true"
        onClick={closeDrawer}
      />

      <div
        className={`site-header__drawer ${mobileDrawerOpen ? "is-open" : ""}`}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
      >
        <div className="site-header__drawer-inner">
          <div className="site-header__drawer-header">
            <Link
              to="/"
              className="site-header__drawer-brand"
              onClick={closeDrawer}
            >
              <img src={recruteLogo} alt="Recrute" />
            </Link>
            <button
              type="button"
              className="site-header__drawer-close"
              aria-label="Close menu"
              onClick={closeDrawer}
            >
              <FiX className="h-7 w-7" strokeWidth={2.5} />
            </button>
          </div>

          <nav className="site-header__drawer-nav" aria-label="Mobile menu">
            {navLinks.map((item) => {
              const hasMenu =
                Array.isArray(item.menuItem) && item.menuItem.length > 0;
              const expanded = mobileExpanded === item.label;

              if (!hasMenu) {
                return (
                  <div key={item.label} className="site-header__drawer-row">
                    <Link
                      to={item.to}
                      className="site-header__drawer-link"
                      onClick={closeDrawer}
                    >
                      {item.label}
                    </Link>
                  </div>
                );
              }

              return (
                <div key={item.label} className="site-header__drawer-group">
                  <div className="site-header__drawer-row site-header__drawer-row--expandable">
                    <Link
                      to={item.to}
                      className="site-header__drawer-link"
                      onClick={closeDrawer}
                    >
                      {item.label}
                    </Link>
                    <button
                      type="button"
                      className={`site-header__drawer-chevron ${expanded ? "is-expanded" : ""}`}
                      aria-expanded={expanded}
                      aria-label={`${expanded ? "Collapse" : "Expand"} ${item.label} submenu`}
                      onClick={() =>
                        setMobileExpanded(expanded ? null : item.label)
                      }
                    >
                      <FiChevronRight className="h-4 w-4" strokeWidth={2.5} />
                    </button>
                  </div>
                  {expanded && (
                    <div className="site-header__drawer-sub">
                      {item.menuItem.map((sub) => (
                        <Link
                          key={sub.label}
                          to={sub.to}
                          className="site-header__drawer-sublink"
                          onClick={closeDrawer}
                        >
                          {sub.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </nav>

          <button
            type="button"
            className="theme-btn6 site-header__drawer-cta w-full"
            onClick={closeDrawer}
          >
            Get Started
            <FiArrowUpRight aria-hidden="true" />
          </button>

          <div className="site-header__drawer-contact">
            <h3 className="site-header__drawer-section-title">Contact Us</h3>
            <ul className="site-header__drawer-contact-list">
              {contactInfo.map((item) => {
                const ContactIcon = item.icon;
                return (
                  <li key={item.text}>
                    <a
                      href={item.href}
                      className="site-header__drawer-contact-item"
                    >
                      <ContactIcon
                        className="site-header__drawer-contact-icon"
                        aria-hidden
                      />
                      <span>{item.text}</span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="site-header__drawer-social">
            <h3 className="site-header__drawer-section-title">Socail Media</h3>
            <div className="site-header__drawer-social-row">
              {socialLinks.map((item) => {
                const SocialIcon = item.Icon;
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    className="site-header__drawer-social-btn"
                    aria-label={item.label}
                  >
                    <SocialIcon className="h-4 w-4" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
