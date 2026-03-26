import asyncComponent from "../utils/asyncComponent.jsx";

export const publicRouters = [
  {
    path: "/",
    component: asyncComponent(() => import("../pages/main/LandingPage.jsx")),
    isHeader: true,
    isBottomNav: true,
  },
  {
    path: "/about",
    component: asyncComponent(() => import("../pages/main/aboutus.jsx")),
    isHeader: true,
    isBottomNav: true,
  },
  {
    path: "/contact",
    component: asyncComponent(() => import("../pages/main/contactus.jsx")),
    isHeader: true,
    isBottomNav: true,
  },
  {
    path: "/services",
    component: asyncComponent(() => import("../pages/main/servicePage/services.jsx")),
    isHeader: true,
    isBottomNav: true,
  },
  {
    path: "/services-details",
    component: asyncComponent(() => import("../pages/main/servicePage/serviceDetails.jsx")),
    isHeader: true,
    isBottomNav: true,
  },
  {
    path: "/projects",
    component: asyncComponent(() => import("../pages/main/projectPage/projects.jsx")),
    isHeader: true,
    isBottomNav: true,
  },
  {
    path: "/projects-details",
    component: asyncComponent(() => import("../pages/main/projectPage/projectDetails.jsx")),
    isHeader: true,
    isBottomNav: true,
  },
  {
    path: "/jobs",
    component: asyncComponent(() => import("../pages/main/jobPage/jobs.jsx")),
    isHeader: true,
    isBottomNav: true,
  },
  {
    path: "/jobs-details",
    component: asyncComponent(() => import("../pages/main/jobPage/jobDetails.jsx")),
    isHeader: true,
    isBottomNav: true,
  },
  {
    path: "/blog",
    component: asyncComponent(() => import("../pages/main/blogPage/blog.jsx")),
    isHeader: true,
    isBottomNav: true,
  },
  {
    path: "/blog-grid",
    component: asyncComponent(() => import("../pages/main/blogPage/blogGrid.jsx")),
    isHeader: true,
    isBottomNav: true,
  },
  {
    path: "/blog-details",
    component: asyncComponent(() => import("../pages/main/blogPage/blogDetails.jsx")),
    isHeader: true,
    isBottomNav: true,
  },
  {
    path: "/team",
    component: asyncComponent(() => import("../pages/main/pages/team.jsx")),
    isHeader: true,
    isBottomNav: true,
  },
  {
    path: "/testimonial",
    component: asyncComponent(() => import("../pages/main/pages/testimonial.jsx")),
    isHeader: true,
    isBottomNav: true,
  },
];

export const protectedRouters = [];

export const routers = [...publicRouters, ...protectedRouters];
