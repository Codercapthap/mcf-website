import AboutUs from "@/pages/AboutUs";
import Home from "@/pages/Home";
import Conservation from "@/pages/Conservation";
import Livelihood from "@/pages/Livelihood";
import Museum from "@/pages/Museum";
import Contact from "@/pages/Contact";
import ProfileMuseum from "@/pages/ProfileMuseum";
import Category from "@/pages/Category";
import Stories from "@/pages/Stories";

import VuVanHieu from "@/pages/Profile/Vu-Van-Hieu";
import THDan from "@/pages/Profile/Truong-Hoang-Dan";
import LATuan from "@/pages/Profile/Le-Anh-Tuan";
import DavidWilmoth from "@/pages/Profile/david-wilmoth";
import HLKhoa from "@/pages/Profile/Ho-Le-Khoa";
import NTKVuong from "@/pages/Profile/Nguyen-Thi-Kieu-Vuong";
import DVNi from "@/pages/Profile/Duong-Van-Ni";
import NHBao from "@/pages/Profile/Nguyen-Hoai-Bao";
import LVLoi from "@/pages/Profile/Ly-Van-Loi";
import NTTung from "@/pages/Profile/Nguyen-Thanh-Tung";
// import ProfileMuseum from "@/pages/ProfileMuseum";
import PostConservation1 from "@/pages/ProfileConservation/Post1";
import PostConservation2 from "@/pages/ProfileConservation/Post2";
import PostConservation3 from "@/pages/ProfileConservation/Post3";
import PostConservation4 from "@/pages/ProfileConservation/Post4";

import PostLH1 from "@/pages/ProfileLiveHoods/Post1";
import PostLH2 from "@/pages/ProfileLiveHoods/Post2";
import PostLH3 from "@/pages/ProfileLiveHoods/Post3";

import PostMuseum1 from "@/pages/ProfileMuseum/Post1";

import { PageType, Projects, Status, Project } from "@/shared";

export const projects: Projects = {
  Conservation: [
    {
      likes: 0,
      author: "Ly Van Loi",
      authorLink: "lvloi",
      date: "26 May, 2023",
      category: "Conservation",
      categoryLink: "/conservation",
      thumbnail:
        "/images/conservation/chien-luoc-quan-li-nuoc_Bao-ton-580x490.jpg",
      title:
        "Updating water management strategy for restoring wetland habitats in Tram chim National park in the context of climate change and upstream development",
      description:
        "Tram Chim National Park (TCNP) is one of the important biodiversity conservation areas in the system of protected areas of Vietnam. TCNP is the largest remaining natural area of ​​the Plain of Reeds region, the floodplain ecosystem of the Mekong River. Biodiversity conservation in TCNP is therefore of importance not only for Vietnam but also...",
      implemented: "MCF",
      endDate: "2022",
      location: "Tram Chim national park",
      funder: "WWF - Viet Nam",
      status: Status.Completed,
    },
    {
      likes: 0,
      author: "Ly Van Loi",
      authorLink: "lvloi",
      date: "26 May, 2023",
      category: "Conservation",
      categoryLink: "/conservation",
      thumbnail:
        "/images/conservation/flow-of-culture-and-life_conservation-580x490.jpg",
      title: "The flow of Culture and Life",
      description:
        "Water represents a basic component of the economy in the region, in addition to domestic consumption, water is also used for agriculture, industry and services. Rivers and riparian areas also contribute to the landscape for the area and the development of other tourism services. In addition, the river is also a connection and creates habitat...",
      implemented: "MCF",
      endDate: "2022",
      location: "Đong Thap, Can Tho, Vinh Long, Soc Trang",
      funder: "OXFAM",
      status: Status.Completed,
    },
    {
      likes: 0,
      author: "Ly Van Loi",
      authorLink: "lvloi",
      date: "19 June, 2021",
      category: "Conservation",
      categoryLink: "/conservation",
      thumbnail: "/images/conservation/vuon-co-tan-my-580x490.jpg",
      title:
        "Inventory and survey of Vac bird garden in Tan My commune, Tra On district, Vinh Long province",
      time: "01-10/2021",
      budget: 200000000,
      investor:
        "Department of Agriculture and Rural Development of Vinh Long province",
      implementation:
        "Forest Protection and Quality Control Department of Agriculture, Forestry and Fisheries of Vinh Long",
      consultant: "MCF",
      status: Status.Completed,
    },
    {
      likes: 0,
      author: "Ly Van Loi",
      authorLink: "lvloi",
      date: "18 March, 2021",
      category: "Conservation",
      categoryLink: "/conservation",
      thumbnail: "/images/conservation/sumernet_map-580x490.jpg",
      title: "The role of wetlands in water security for the Mekong region",
      description:
        "Wetlands are highly important to the food-energy-water nexus of the Mekong region. Rural water security is of specific interest for Mekong-region countries because major rural economic sectors of all countries, especially agriculture and aquaculture, as well as main sources of water for rural household consumption and public water supply, depend on water from wetlands. Many...",
      implemented: "MCF",
      endTime: "31/12/2022",
      studySite: "Vietnam, Laos, Cambodia and Thailand",
      fundedBy: "Stiftelsen The Stockholm Environment Institute",
      fundMount: "SEK 1,000,000",
      status: Status.Pending,
    },
  ],
  Livelihoods: [
    {
      likes: 0,
      author: "Ly Van Loi",
      authorLink: "lvloi",
      date: "19 June, 2021",
      category: "Livelihoods",
      categoryLink: "/livelihoods",
      thumbnail: "/images/livelihoods/sinh-ke_sinh-ke-580x490.jpg",
      title: "Established MLS Joint Stock Company",
    },
    {
      likes: 0,
      author: "Ly Van Loi",
      authorLink: "lvloi",
      date: "26 May, 2023",
      category: "Livelihoods",
      categoryLink: "/livelihoods",
      thumbnail: "/images/livelihoods/sinh-ke-580x490.jpg",
      title: "Signing short-term hands-on training for students",
    },
    {
      likes: 0,
      author: "mcf_admin",
      authorLink: "mcf_admin",
      date: "15 March, 2021",
      category: "Livelihoods",
      categoryLink: "/livelihoods",
      thumbnail: "/images/livelihoods/sinhke-580x490.png",
      title: "Improve Livelihoods",
    },
  ],
  Museums: [
    {
      likes: 0,
      author: "Ly Van Loi",
      authorLink: "lvloi",
      date: "11 June, 2021",
      category: "Museum",
      categoryLink: "/museum",
      thumbnail: "/images/museum/bao-tang_ky-ket-voi-usa.png",
      title: "The Mekong Natural History Museum progress",
    },
  ],
};

export const mainPages: Array<PageType> = [
  { link: "/home", title: "Home", component: Home },
  { link: "/about-us", title: "About Us", component: AboutUs },
  {
    link: "/conservation",
    title: "Conservation",
    component: Conservation,
    props: { conservations: projects.Conservation },
  },
  {
    link: "/livelihoods",
    title: "Livelihoods",
    component: Livelihood,
    props: { livelihoods: projects.Livelihoods },
  },
  {
    link: "/museum",
    title: "Museum",
    component: Museum,
    props: { museums: projects.Museums },
  },
  {
    link: "/stories",
    title: "Stories",
    component: Stories,
  },
  { link: "/contact-us", title: "Contact Us", component: Contact },
];

var subPages: Array<PageType> = [
  {
    link: "/profile/vu-van-hieu",
    title: "Mr Vu Van Hieu",
    component: VuVanHieu,
  },
  {
    link: "/profile/nguyen-thi-kieu-vuong",
    title: "Mr Nguyen Thi Kieu Vuong",
    component: NTKVuong,
  },
  {
    link: "/profile/dvni",
    title: "Dr Duong Van Ni",
    component: DVNi,
  },
  {
    link: "/profile/ong-nguyen-hoai-bao",
    title: "Dr Nguyen Hoai Bao",
    component: NHBao,
  },
  {
    link: "/profile/ong-ly-van-loi",
    title: "Dr Ly Van Loi",
    component: LVLoi,
  },
  {
    link: "/profile/pgs-ts-nguyen-thanh-tung",
    title: "PGS.TS Nguyen Thanh Tung",
    component: NTTung,
  },
  {
    link: "/profile/pgs-ts-le-anh-tuan",
    title: "PGS.TS Le Anh Tuan",
    component: LATuan,
  },
  {
    link: "/profile/pgs-ts-truong-hoang-dan",
    title: "PGS.TS Truong Hoang Dan",
    component: THDan,
  },
  {
    link: "/profile/ts-david-wilmoth",
    title: "Dr David Wilmoth",
    component: DavidWilmoth,
  },
  {
    link: "/profile/tien-si-ho-le-khoa",
    title: "Dr Ho Le Khoa",
    component: HLKhoa,
  },
  // {
  //   link: "/project/the-mekong-natural-history-museum-progress",
  //   title: "The Mekong Natural History Museum progress",
  //   component: ProfileMuseum,
  // },
  {
    link: "/project/cap-nhat-chien-luoc-quan-ly-nuoc-de-phuc-hoi-sinh-canh-dat-ngap-nuoc-vuon-quoc-gia-tram-chim-trong-boi-canh-bien-doi-khi-hau-va-phat-trien-o-thuong-nguon",
    title:
      "Cập nhật chiến lược quản lý nước để phục hồi sinh cảnh đất ngập nước Vườn quốc gia Tràm chim trong bối cảnh biến đổi khí hậu và phát triển ở thượng nguồn",
    component: PostConservation1,
  },
  {
    link: "/project/dong-chay-cua-van-hoa-va-su-song",
    title: "Dòng chảy của Văn hóa và Sự sống",
    component: PostConservation2,
  },
  {
    link: "/project/vai-tro-cua-dat-ngap-nuoc-doi-voi-an-ninh-nguon-nuoc-cho-khu-vuc-song-mekong",
    title:
      "Vai trò của Đất ngập nước đối với an ninh nguồn nước cho khu vực sông Mekong",
    component: PostConservation3,
  },
  {
    link: "/project/cong-tac-kiem-ke-khao-sat-vuon-chim-vac-tai-xa-tan-my-huyen-tra-on-tinh-vinh-long/",
    title:
      "Công tác kiểm kê, khảo sát vườn chim Vạc tại xã Tân Mỹ, huyện Trà Ôn, tỉnh Vĩnh Long",
    component: PostConservation4,
  },

  {
    link: "/project/ky-ket-dao-tao-sinh-vien-thuc-hanh-ngan-han/",
    title: "Ký kết đào tạo sinh viên thực hành ngắn hạn",
    component: PostLH1,
  },
  {
    link: "/project/thanh-lap-cong-ty-co-phan-mcf-viet-nam/",
    title: "Thành lập Công ty cổ phần MLS Việt Nam",
    component: PostLH2,
  },
  {
    link: "/project/bai-viet-sinh-ke-01/",
    title: "CẢI THIỆN SINH KẾ",
    component: PostLH3,
  },

  {
    link: "/project/tien-trinh-cua-bao-tang-lich-su-tu-nhien-mekong",
    title: "Tiến trình của Bảo tàng Lịch sử Tự nhiên Mekong",
    component: PostMuseum1,
  },
  {
    link: "/project/the-mekong-natural-history-museum-progress",
    title: "The Mekong Natural History Museum progress",
    component: ProfileMuseum,
  },
  {
    link: "/search",
    component: Category,
  },
];

// subPages.concat(
const pjCategsLinks: Array<PageType> = Object.keys(projects).map(
  (element: Project) => {
    return {
      link: `/pj-categs/${element.toLowerCase()}/`,
      title: `Project Category: ${element}`,
      component: Category,
      props: { projects: projects[element], title: element },
    };
  }
);
// );
subPages = [...subPages, ...pjCategsLinks];

export { subPages };
