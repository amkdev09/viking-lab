import asyncComponent from "../utils/asyncComponent.jsx";

export const publicRouters = [
  {
    path: "/",
    component: asyncComponent(() => import("../pages/LandingPage.jsx")),
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
    component: asyncComponent(() => import("../pages/main/services.jsx")),
    isHeader: true,
    isBottomNav: true,
  },
  {
    path: "/projects",
    component: asyncComponent(() => import("../pages/main/projects.jsx")),
    isHeader: true,
    isBottomNav: true,
  },
  {
    path: "/jobs",
    component: asyncComponent(() => import("../pages/main/jobs.jsx")),
    isHeader: true,
    isBottomNav: true,
  },
  {
    path: "/blog",
    component: asyncComponent(() => import("../pages/main/blog.jsx")),
    isHeader: true,
    isBottomNav: true,
  },
];

export const protectedRouters = [];

export const routers = [...publicRouters, ...protectedRouters];
