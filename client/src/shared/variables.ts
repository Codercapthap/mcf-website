import AboutUs from "@/pages/AboutUs";
import Home from "@/pages/Home";
import Conservation from "@/pages/Conservation";
import Livelihood from "@/pages/Livelihood";
import Museum from "@/pages/Museum";
import Contact from "@/pages/Contact";
import Profile from "@/pages/Profile";
import ProfileMuseum from "@/pages/ProfileMuseum";
import { PageType } from "@/shared";

export const mainPages: Array<PageType> = [
  { link: "/home", title: "Home", component: Home },
  { link: "/about-us", title: "About Us", component: AboutUs },
  { link: "/conservation", title: "Conservation", component: Conservation },
  { link: "/livelihoods", title: "Livelihoods", component: Livelihood },
  { link: "/museum", title: "Museum", component: Museum },
  { link: "/stories", title: "Stories", component: Home },
  { link: "/contact-us", title: "Contact Us", component: Contact },
];

export const subPages: Array<PageType> = [
  {
    link: "/profile/vu-van-hieu",
    title: "Mr Vu Van Hieu",
    component: Profile,
  },
  {
    link: "/project/the-mekong-natural-history-museum-progress",
    title: "The Mekong Natural History Museum progress",
    component: ProfileMuseum,
  },
];
