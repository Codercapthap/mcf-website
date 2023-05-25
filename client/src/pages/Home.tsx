import Header from "@/components/header/Header";
import { ImageSliderType } from "@/shared/type";
import Carousel from "@/components/Carousel/Carousel";
type Props = {};

const images: Array<ImageSliderType> = [
  {
    src: "images/Bao-tang_home.jpg",
    typoLeft: "200px",
    typoRight: "unset",
    typoBottom: "unset",
    typoTop: "32%",
    typo1: "The Mekong Delta",
    typo2: "Natural History Museum",
    link: "/museum",
    buttonText: "Find more",
  },
];

// "images/Bao-tang_home.jpg",
// "images/Sinh-ke_trangchu-2048x1110.jpg",
// "images/Bao-ton_home-2048x1365.jpg",
const Home = (props: Props) => {
  return (
    <>
      <Header></Header>
      <Carousel images={images}></Carousel>
      {/* <Carousel
        infiniteLoop={true}
        autoPlay={true}
        showStatus={false}
        transitionTime={1000}
      >
        <Box sx={{ height: "617px", overflow: "hidden" }}>
          <img src="images/banner_bg.jpg" />
        </Box>
        <Box sx={{ height: "617px", overflow: "hidden" }}>
          <img src="images/slogan-2.jpg" />
        </Box>
        <Box sx={{ height: "617px", overflow: "hidden" }}>
          <img src="images/slogan-3.jpg" />
        </Box>
      </Carousel> */}
    </>
  );
};

export default Home;
