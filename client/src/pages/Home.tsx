import Header from "@/components/header/Header";
import { ImageSliderType } from "@/shared/type";
import Carousel from "@/components/Carousel/Carousel";
import { useRef } from "react";
type Props = {};

const images: Array<ImageSliderType> = [
  {
    src: "images/Bao-tang_home.jpg",
    typoLeft: "13%",
    typoRight: "unset",
    typoBottom: "unset",
    typoTop: "34%",
    typo1: "The Mekong Delta",
    typo2: "Natural History Museum",
    link: "/museum",
    buttonText: "Find more",
  },
  {
    src: "images/Sinh-ke_trangchu-2048x1110.jpg",
    typoLeft: "unset",
    typoRight: "12%",
    typoBottom: "16%",
    typoTop: "unset",
    typo1: "",
    typo2: "Improve local livelihoods",
    link: "/livelihoods",
    buttonText: "Find more",
  },
  {
    src: "images/Bao-ton_home-2048x1365.jpg",
    typoLeft: "unset",
    typoRight: "6%",
    typoBottom: "unset",
    typoTop: "-8%",
    typo1: "",
    typo2: "Natural Conservation",
    link: "/museum",
    buttonText: "Find more",
  },
];

const Home = (props: Props) => {
  return (
    <>
      <Header></Header>
      <Carousel images={images}></Carousel>
    </>
  );
};

export default Home;
