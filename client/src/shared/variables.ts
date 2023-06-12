import AboutUs from "@/pages/AboutUs";
import Home from "@/pages/Home";
import Conservation from "@/pages/Conservation";
import Livelihood from "@/pages/Livelihood";
import Museum from "@/pages/Museum";
import { PageType } from "@/shared";

export const pages: Array<PageType> = [
  { link: "/home", title: "Home", component: Home },
  { link: "/about-us", title: "About Us", component: AboutUs },
  { link: "/conservation", title: "Conservation", component: Conservation },
  { link: "/livelihoods", title: "Livelihoods", component: Livelihood },
  { link: "/museum", title: "Museum", component: Museum },
  { link: "/stories", title: "Stories", component: Home },
  { link: "/contact-us", title: "Contact Us", component: Home },
];
