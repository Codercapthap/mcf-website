import Header from "@/components/Header";
import Headline from "@/components/Headline";
import Footer from "@/components/Footer";
import { Conservation as ConservationType, Status } from "@/shared";
import CardTemplate from "@/components/CardTemplate";

const conservations: Array<ConservationType> = [
  {
    likes: 0,
    author: "Ly Van Loi",
    authorLink: "lvloi",
    date: "26 May, 2023",
    category: "Conservation",
    categoryLink: "/conservation",
    thumbnail:
      "images/conservation/chien-luoc-quan-li-nuoc_Bao-ton-580x490.jpg",
    title:
      "Updating water management strategy for restoring wetland habitats in Tram chim National park in the context of climate change and upstream development",
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
      "images/conservation/flow-of-culture-and-life_conservation-580x490.jpg",
    title: "The flow of Culture and Life",
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
    thumbnail: "images/conservation/vuon-co-tan-my-580x490.jpg",
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
    thumbnail: "images/conservation/sumernet_map-580x490.jpg",
    title: "The role of wetlands in water security for the Mekong region",
    implemented: "MCF",
    endTime: "31/12/2022",
    studySite: "Vietnam, Laos, Cambodia and Thailand",
    fundedBy: "Stiftelsen The Stockholm Environment Institute",
    fundMount: "SEK 1,000,000",
    status: Status.Pending,
  },
];

const Conservation = () => {
  return (
    <>
      <Header></Header>
      <Headline
        image="images/headlines/Bao-ton_baoton.jpg"
        title="Conservation"
      ></Headline>
      <CardTemplate
        projectsProp={conservations}
        type="Conservation"
      ></CardTemplate>
      <Footer></Footer>
    </>
  );
};

export default Conservation;
