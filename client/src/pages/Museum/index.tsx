import Header from "@/components/Header";
import Headline from "@/components/Headline";
import Footer from "@/components/Footer";
import { Museum as MuseumType } from "@/shared";
import CardTemplate from "@/components/CardTemplate";

const museums: Array<MuseumType> = [
  {
    likes: 0,
    author: "Ly Van Loi",
    authorLink: "lvloi",
    date: "11 June, 2021",
    category: "Museum",
    categoryLink: "/museum",
    thumbnail: "images/museum/bao-tang_ky-ket-voi-usa.png",
    title: "The Mekong Natural History Museum progress",
  },
];

const Museum = () => {
  return (
    <>
      <Header></Header>
      <Headline
        image="images/headlines/banner_bg.jpg"
        title="Museum"
      ></Headline>
      <CardTemplate projectsProp={museums} type="Museum"></CardTemplate>
      <Footer></Footer>
    </>
  );
};

export default Museum;
