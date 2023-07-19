import AboutUs from "../pages/AboutUs";
import Home from "../pages/Home";
import Conservation from "../pages/Conservation";
import Livelihood from "../pages/Livelihood";
import Museum from "../pages/Museum";
import Contact from "../pages/Contact";
import Category from "../pages/Category";
import Stories from "../pages/Stories";

import VuVanHieu from "../pages/Profile/Vu-Van-Hieu";
import THDan from "../pages/Profile/Truong-Hoang-Dan";
import LATuan from "../pages/Profile/Le-Anh-Tuan";
import DavidWilmoth from "../pages/Profile/david-wilmoth";
import HLKhoa from "../pages/Profile/Ho-Le-Khoa";
import NTKVuong from "../pages/Profile/Nguyen-Thi-Kieu-Vuong";
import DVNi from "../pages/Profile/Duong-Van-Ni";
import NHBao from "../pages/Profile/Nguyen-Hoai-Bao";
import LVLoi from "../pages/Profile/Ly-Van-Loi";
import NTTung from "../pages/Profile/Nguyen-Thanh-Tung";
// import ProfileMuseum from "../pages/ProfileMuseum";
import PostConservation1 from "../pages/ProfileConservation/Post1";
import PostConservation2 from "../pages/ProfileConservation/Post2";
import PostConservation3 from "../pages/ProfileConservation/Post3";
import PostConservation4 from "../pages/ProfileConservation/Post4";

import PostLH1 from "../pages/ProfileLiveHoods/Post1";
import PostLH2 from "../pages/ProfileLiveHoods/Post2";
import PostLH3 from "../pages/ProfileLiveHoods/Post3";

import PostMuseum1 from "../pages/ProfileMuseum/Post1";

import PageNotFound from "../pages/PageNotFound";

import "../i18n.tsx";
import i18next from "i18next";

import { PageType, Projects } from "./index.ts";

var mainPages: Array<PageType> = [{}];
var projects: Projects = {};
var profiles: any = {};
var subPages: Array<PageType> = [{}];
function fill() {
  projects = {
    Conservation: [
      {
        likes: 0,
        author: `${i18next.t(
          "conservation.profile.post1.profile_detail.author"
        )}`,
        authorLink: "lvloi",
        date: `${i18next.t("conservation.profile.post1.profile_detail.date")}`,
        category: `${i18next.t(
          "conservation.profile.post1.profile_detail.categories"
        )}`,
        categoryLink: "/conservation",
        thumbnail:
          "/images/conservation/chien-luoc-quan-li-nuoc_Bao-ton-580x490.jpg",
        title: `${i18next.t("conservation.profile.post1.title")}`,
        description: `${i18next.t("conservation.profile.post1.description")}`,
        implemented: `${i18next.t(
          "conservation.profile.post1.profile_detail.implemented"
        )}`,
        endDate: `${i18next.t(
          "conservation.profile.post1.profile_detail.end_date"
        )}`,
        location: `${i18next.t(
          "conservation.profile.post1.profile_detail.location"
        )}`,
        funder: `${i18next.t(
          "conservation.profile.post1.profile_detail.funded"
        )}`,
        status: `${i18next.t(
          "conservation.profile.post1.profile_detail.status"
        )}`,
        link: "/project/cap-nhat-chien-luoc-quan-ly-nuoc-de-phuc-hoi-sinh-canh-dat-ngap-nuoc-vuon-quoc-gia-tram-chim-trong-boi-canh-bien-doi-khi-hau-va-phat-trien-o-thuong-nguon",
      },
      {
        likes: 0,
        author: `${i18next.t(
          "conservation.profile.post2.profile_detail.author"
        )}`,
        authorLink: "lvloi",
        date: `${i18next.t("conservation.profile.post2.profile_detail.date")}`,
        category: `${i18next.t(
          "conservation.profile.post2.profile_detail.categories"
        )}`,
        categoryLink: "/conservation",
        thumbnail:
          "/images/conservation/flow-of-culture-and-life_conservation-580x490.jpg",
        title: `${i18next.t("conservation.profile.post2.title")}`,
        description: `${i18next.t("conservation.profile.post2.description")}`,
        implemented: `${i18next.t(
          "conservation.profile.post2.profile_detail.implemented"
        )}`,
        endDate: `${i18next.t(
          "conservation.profile.post2.profile_detail.end_date"
        )}`,
        location: `${i18next.t(
          "conservation.profile.post2.profile_detail.location"
        )}`,
        funder: `${i18next.t(
          "conservation.profile.post2.profile_detail.funded"
        )}`,
        status: `${i18next.t(
          "conservation.profile.post2.profile_detail.status"
        )}`,
        link: "/project/dong-chay-cua-van-hoa-va-su-song",
      },
      {
        likes: 0,
        author: `${i18next.t(
          "conservation.profile.post4.profile_detail.author"
        )}`,
        authorLink: "lvloi",
        date: `${i18next.t("conservation.profile.post4.profile_detail.date")}`,
        category: `${i18next.t(
          "conservation.profile.post4.profile_detail.categories"
        )}`,
        categoryLink: "/conservation",
        thumbnail: "/images/conservation/vuon-co-tan-my-580x490.jpg",
        title: `${i18next.t("conservation.profile.post4.title")}`,
        time: `${i18next.t("conservation.profile.post4.profile_detail.time")}`,
        budget: `${i18next.t(
          "conservation.profile.post4.profile_detail.budget"
        )}`,
        investor: `${i18next.t(
          "conservation.profile.post4.profile_detail.investor"
        )}`,
        implementation: `${i18next.t(
          "conservation.profile.post4.profile_detail.implemented"
        )}`,
        consultant: `${i18next.t(
          "conservation.profile.post4.profile_detail.consultant"
        )}`,
        status: `${i18next.t(
          "conservation.profile.post4.profile_detail.status"
        )}`,
        link: "/project/cong-tac-kiem-ke-khao-sat-vuon-chim-vac-tai-xa-tan-my-huyen-tra-on-tinh-vinh-long/",
      },
      {
        likes: 0,
        author: `${i18next.t(
          "conservation.profile.Post3.profile_detail.author"
        )}`,
        authorLink: "lvloi",
        date: `${i18next.t("conservation.profile.post3.profile_detail.date")}`,
        category: `${i18next.t(
          "conservation.profile.post3.profile_detail.categories"
        )}`,
        categoryLink: "/conservation",
        thumbnail: "/images/conservation/sumernet_map-580x490.jpg",
        title: `${i18next.t("conservation.profile.post3.title")}`,
        description: `${i18next.t("conservation.profile.post3.description")}`,
        implemented: `${i18next.t(
          "conservation.profile.post3.profile_detail.implemented"
        )}`,
        endTime: `${i18next.t(
          "conservation.profile.post3.profile_detail.end_date"
        )}`,
        studySite: `${i18next.t(
          "conservation.profile.post3.profile_detail.location"
        )}`,
        fundedBy: `${i18next.t(
          "conservation.profile.post3.profile_detail.funded"
        )}`,
        fundMount: `${i18next.t(
          "conservation.profile.post3.profile_detail.fund_mount"
        )}`,
        status: `${i18next.t(
          "conservation.profile.post3.profile_detail.status"
        )}`,
        link: "/project/vai-tro-cua-dat-ngap-nuoc-doi-voi-an-ninh-nguon-nuoc-cho-khu-vuc-song-mekong",
      },
    ],
    Livelihoods: [
      {
        likes: 0,
        author: `${i18next.t(
          "livelihoods.profile.post2.profile_detail.author"
        )}`,
        authorLink: "lvloi",
        date: `${i18next.t("livelihoods.profile.post2.profile_detail.date")}`,
        category: `${i18next.t(
          "livelihoods.profile.post2.profile_detail.categories"
        )}`,
        categoryLink: "/livelihoods",
        thumbnail: "/images/livelihoods/sinh-ke_sinh-ke-580x490.jpg",
        title: `${i18next.t("livelihoods.profile.post2.title")}`,
        link: "/project/thanh-lap-cong-ty-co-phan-mcf-viet-nam/",
      },
      {
        likes: 0,
        author: `${i18next.t(
          "livelihoods.profile.post1.profile_detail.author"
        )}`,
        authorLink: "lvloi",
        date: `${i18next.t("livelihoods.profile.post1.profile_detail.date")}`,
        category: `${i18next.t(
          "livelihoods.profile.post1.profile_detail.categories"
        )}`,
        categoryLink: "/livelihoods",
        thumbnail: "/images/livelihoods/sinh-ke-580x490.jpg",
        title: `${i18next.t("livelihoods.profile.post1.title")}`,
        link: "/project/ky-ket-dao-tao-sinh-vien-thuc-hanh-ngan-han/",
      },
      {
        likes: 0,
        author: `${i18next.t(
          "livelihoods.profile.post3.profile_detail.author"
        )}`,
        authorLink: "mcf_admin",
        date: `${i18next.t("livelihoods.profile.post3.profile_detail.date")}`,
        category: `${i18next.t(
          "livelihoods.profile.post3.profile_detail.categories"
        )}`,
        categoryLink: "/livelihoods",
        thumbnail: "/images/livelihoods/sinhke-580x490.png",
        title: `${i18next.t("livelihoods.profile.post3.title")}`,
        link: "/project/bai-viet-sinh-ke-01/",
      },
    ],
    Museums: [
      {
        likes: 0,
        author: `${i18next.t("museum.profile.post1.profile_detail.author")}`,
        authorLink: "lvloi",
        date: `${i18next.t("museum.profile.post1.profile_detail.date")}`,
        category: `${i18next.t(
          "museum.profile.post1.profile_detail.categories"
        )}`,
        categoryLink: "/museum",
        thumbnail: "/images/museum/bao-tang_ky-ket-voi-usa.png",
        title: `${i18next.t("museum.profile.post1.title")}`,
        link: "/project/tien-trinh-cua-bao-tang-lich-su-tu-nhien-mekong",
      },
    ],
  };
  profiles = {
    "the mcf council": [
      {
        title: `${i18next.t("about-us.the_mcf_council.duong-van-ni.name")}`,
        position: `${i18next.t(
          "about-us.the_mcf_council.duong-van-ni.position"
        )}`,
        categoryLink: "/the-mcf-council",
        thumbnail: "/images/people/Duong-Van-Ni.png",
        link: "/profile/dvni",
      },
      {
        title: `${i18next.t("about-us.the_mcf_council.vu-van-hieu.name")}`,
        position: `${i18next.t(
          "about-us.the_mcf_council.vu-van-hieu.position"
        )}`,
        categoryLink: "/the-mcf-council",
        thumbnail: "/images/people/Vu-Van-Hieu.png",
        link: "/profile/vu-van-hieu",
      },
      {
        title: `${i18next.t(
          "about-us.the_mcf_council.nguyen-thi-kieu-vuong.name"
        )}`,
        position: `${i18next.t(
          "about-us.the_mcf_council.nguyen-thi-kieu-vuong.position"
        )}`,
        categoryLink: "/the-mcf-council",
        thumbnail: "/images/people/Nguyen-Thi-Kieu-Vuong.png",
        link: "/profile/nguyen-thi-kieu-vuong",
      },
    ],
    "the supervisory council": [
      {
        title: `${i18next.t(
          "about-us.the_supervisory_council.david-wilmoth.name"
        )}`,
        position: `${i18next.t(
          "about-us.the_supervisory_council.david-wilmoth.position"
        )}`,
        categoryLink: "/the-supervisory-council",
        thumbnail: "/images/people/david-wilmoth-400x490.jpg",
        link: "/profile/ts-david-wilmoth",
      },
      {
        title: `${i18next.t(
          "about-us.the_supervisory_council.ho-le-khoa.name"
        )}`,
        position: `${i18next.t(
          "about-us.the_supervisory_council.ho-le-khoa.position"
        )}`,
        categoryLink: "/the-supervisory-council",
        thumbnail: "/images/people/Ho-Van-Khoa-580x490.jpg",
        link: "/profile/tien-si-ho-le-khoa",
      },
    ],
    "member of mcf": [
      {
        title: `${i18next.t("about-us.member_of_mcf.ly-van-loi.name")}`,
        categoryLink: "/member-of-mcf",
        thumbnail: "/images/people/ly-van-loi-1-580x490.jpg",
        link: "/profile/ong-ly-van-loi",
      },
      {
        title: `${i18next.t("about-us.member_of_mcf.le-anh-tuan.name")}`,
        categoryLink: "/member-of-mcf",
        thumbnail: "/images/people/le-anh-tuan-1-580x490.jpg",
        link: "/profile/pgs-ts-le-anh-tuan",
      },
      {
        title: `${i18next.t("about-us.member_of_mcf.nguyen-thanh-tung.name")}`,
        categoryLink: "/member-of-mcf",
        thumbnail:
          "/images/people/nguyen-thanh-tung-1-e1624288880348-580x490.jpg",
        link: "/profile/pgs-ts-nguyen-thanh-tung",
      },
      {
        title: `${i18next.t("about-us.member_of_mcf.nguyen-hoai-bao.name")}`,
        categoryLink: "/member-of-mcf",
        thumbnail: "/images/people/nguyen-hoai-bao.jpg",
        link: "/profile/ong-nguyen-hoai-bao",
      },
      {
        title: `${i18next.t("about-us.member_of_mcf.truong-hoang-dan.name")}`,
        categoryLink: "/member-of-mcf",
        thumbnail: "/images/people/Truong-Hoang-Dan_gioithieu-580x490.jpg",
        link: "/profile/pgs-ts-truong-hoang-dan",
      },
    ],
  };

  mainPages = [
    { link: "/home", title: `${i18next.t("nav.home")}`, component: Home },
    {
      link: "/about-us",
      title: `${i18next.t("nav.about-us")}`,
      component: AboutUs,
    },
    {
      link: "/conservation",
      // title: "Conservation",
      title: `${i18next.t("nav.conservation")}`,
      component: Conservation,
      props: { conservations: projects.Conservation },
    },
    {
      link: "/livelihoods",
      // title: "Livelihoods",
      title: `${i18next.t("nav.livelihoods")}`,
      component: Livelihood,
      props: { livelihoods: projects.Livelihoods },
    },
    {
      link: "/museum",
      // title: "Museum",
      title: `${i18next.t("nav.museums")}`,
      component: Museum,
      props: { museums: projects.Museums },
    },
    {
      link: "/stories",
      // title: "Stories",
      title: `${i18next.t("nav.stories")}`,
      component: Stories,
    },
    {
      link: "/contact-us",
      title: `${i18next.t("nav.contact-us")}`,
      component: Contact,
    },
  ];

  subPages = [
    {
      link: "/profile/vu-van-hieu",
      // title: "Mr Vu Van Hieu",
      title: `${i18next.t("about-us.the_mcf_council.vu-van-hieu.name")}`,
      component: VuVanHieu,
    },
    {
      link: "/profile/nguyen-thi-kieu-vuong",
      // title: "Mr Nguyen Thi Kieu Vuong",

      title: `${i18next.t(
        "about-us.the_mcf_council.nguyen-thi-kieu-vuong.name"
      )}`,
      component: NTKVuong,
    },
    {
      link: "/profile/dvni",
      // title: "Dr Duong Van Ni",
      title: `${i18next.t("about-us.the_mcf_council.duong-van-ni.name")}`,
      component: DVNi,
    },
    {
      link: "/profile/ong-nguyen-hoai-bao",
      // title: "Dr Nguyen Hoai Bao",
      title: `${i18next.t("about-us.member_of_mcf.nguyen-hoai-bao.name")}`,
      component: NHBao,
    },
    {
      link: "/profile/ong-ly-van-loi",
      // title: "Dr Ly Van Loi",
      title: `${i18next.t("about-us.member_of_mcf.ly-van-loi.name")}`,
      component: LVLoi,
    },
    {
      link: "/profile/pgs-ts-nguyen-thanh-tung",
      // title: "PGS.TS Nguyen Thanh Tung",
      title: `${i18next.t("about-us.member_of_mcf.nguyen-thanh-tung.name")}`,
      component: NTTung,
    },
    {
      link: "/profile/pgs-ts-le-anh-tuan",
      // title: "PGS.TS Le Anh Tuan",
      title: `${i18next.t("about-us.member_of_mcf.le-anh-tuan.name")}`,
      component: LATuan,
    },
    {
      link: "/profile/pgs-ts-truong-hoang-dan",
      // title: "PGS.TS Truong Hoang Dan",
      title: `${i18next.t("about-us.member_of_mcf.truong-hoang-dan.name")}`,
      component: THDan,
    },
    {
      link: "/profile/ts-david-wilmoth",
      // title: "Dr David Wilmoth",
      title: `${i18next.t(
        "about-us.the_supervisory_council.david-wilmoth.name"
      )}`,
      component: DavidWilmoth,
    },
    {
      link: "/profile/tien-si-ho-le-khoa",
      // title: "Dr Ho Le Khoa",
      title: `${i18next.t("about-us.the_supervisory_council.ho-le-khoa.name")}`,
      component: HLKhoa,
    },
    // {
    //   link: "/project/the-mekong-natural-history-museum-progress",
    //   title: "The Mekong Natural History Museum progress",
    //   component: ProfileMuseum,
    // },
    {
      link: "/project/cap-nhat-chien-luoc-quan-ly-nuoc-de-phuc-hoi-sinh-canh-dat-ngap-nuoc-vuon-quoc-gia-tram-chim-trong-boi-canh-bien-doi-khi-hau-va-phat-trien-o-thuong-nguon",
      title: `${i18next.t("conservation.profile.post1.title")}`,
      component: PostConservation1,
    },
    {
      link: "/project/dong-chay-cua-van-hoa-va-su-song",
      title: `${i18next.t("conservation.profile.post2.title")}`,
      component: PostConservation2,
    },
    {
      link: "/project/vai-tro-cua-dat-ngap-nuoc-doi-voi-an-ninh-nguon-nuoc-cho-khu-vuc-song-mekong",
      title: `${i18next.t("conservation.profile.post3.title")}`,
      component: PostConservation3,
    },
    {
      link: "/project/cong-tac-kiem-ke-khao-sat-vuon-chim-vac-tai-xa-tan-my-huyen-tra-on-tinh-vinh-long/",
      title: `${i18next.t("conservation.profile.post4.title")}`,
      component: PostConservation4,
    },

    {
      link: "/project/ky-ket-dao-tao-sinh-vien-thuc-hanh-ngan-han/",
      title: `${i18next.t("livelihoods.profile.post1.title")}`,
      component: PostLH1,
    },
    {
      link: "/project/thanh-lap-cong-ty-co-phan-mcf-viet-nam/",
      title: `${i18next.t("livelihoods.profile.post2.title")}`,
      component: PostLH2,
    },
    {
      link: "/project/bai-viet-sinh-ke-01/",
      title: `${i18next.t("livelihoods.profile.post3.title")}`,
      component: PostLH3,
    },

    {
      link: "/project/tien-trinh-cua-bao-tang-lich-su-tu-nhien-mekong",
      title: `${i18next.t("museum.profile.post1.title")}`,
      component: PostMuseum1,
    },
    {
      link: "/search",
      component: Category,
    },
    {
      link: "/page-not-found",
      title: "Page Not Found",
      component: PageNotFound,
    },
  ];

  // subPages.concat(
  const pjCategsLinks: Array<PageType> = Object.keys(projects).map(
    (element: any) => {
      return {
        link: `/pj-categs/${element.toLowerCase()}/`,
        title: `Project Category: ${i18next.t(`nav.${element.toLowerCase()}`)}`,
        component: Category,
        props: {
          resultProjects:
            element == "Conservation"
              ? projects["Conservation"]
              : element == "Livelihoods"
              ? projects["Livelihoods"]
              : projects["Museums"],
          title: `${i18next.t(`nav.${element.toLowerCase()}`)}`,
        },
      };
    }
  );
  // );

  const plCategsLinks: Array<PageType> = Object.keys(profiles).map(
    (element: string) => {
      return {
        link: `/pl-categs/${element.split(" ").join("-").toLowerCase()}/`,
        title: `Profile Category: ${i18next.t(
          `about-us.${element.toLowerCase().split(" ").join("_")}.${element
            .toLowerCase()
            .split(" ")
            .join("_")}`
        )}`,
        component: Category,
        props: {
          resultProjects: profiles[element],
          title: `${i18next.t(
            `about-us.${element.toLowerCase().split(" ").join("_")}.${element
              .toLowerCase()
              .split(" ")
              .join("_")}`
          )}`,
          isProject: false,
        },
      };
    }
  );
  subPages = [...subPages, ...pjCategsLinks, ...plCategsLinks];
}

fill();

i18next.on("languageChanged init", () => {
  fill(); // fills myExport with new value for foo based on current i18n lng
  window.location.reload();
});

export { projects, subPages, mainPages };
