import Header from "@/components/Header";
import Headline from "@/components/Headline";
import Footer from "@/components/Footer";
import { Livelihood as LivelihoodType } from "@/shared";
import CardTemplate from "@/components/CardTemplate";

const livelihoods: Array<LivelihoodType> = [
  {
    likes: 0,
    author: "Ly Van Loi",
    authorLink: "lvloi",
    date: "19 June, 2021",
    category: "Livelihoods",
    categoryLink: "/livelihoods",
    thumbnail: "images/livelihoods/sinh-ke_sinh-ke-580x490.jpg",
    title: "Established MLS Joint Stock Company",
  },
  {
    likes: 0,
    author: "Ly Van Loi",
    authorLink: "lvloi",
    date: "26 May, 2023",
    category: "Livelihoods",
    categoryLink: "/livelihoods",
    thumbnail: "images/livelihoods/sinh-ke-580x490.jpg",
    title: "Signing short-term hands-on training for students",
  },
  {
    likes: 0,
    author: "mcf_admin",
    authorLink: "mcf_admin",
    date: "15 March, 2021",
    category: "Livelihoods",
    categoryLink: "/livelihoods",
    thumbnail: "images/livelihoods/sinhke-580x490.png",
    title: "Improve Livelihoods",
  },
];

const Livelihood = () => {
  return (
    <>
      <Header></Header>
      <Headline
        image="images/headlines/sinh-ke_background.jpg"
        title="Livelihoods"
      ></Headline>
      <CardTemplate
        projectsProp={livelihoods}
        type="Livelihoods"
      ></CardTemplate>
      <Footer></Footer>
    </>
  );
};

export default Livelihood;
