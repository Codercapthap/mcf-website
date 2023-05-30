import Header from "@/components/header/Header";
import { ImageSliderType } from "@/shared/type";
import Carousel from "@/components/Carousel/Carousel";
import { Box, Typography } from "@mui/material/";
import { Wrapper, CustomizedPrimaryButton } from "@/styles/Components";
import { useMediaQuery } from "@mui/material";
import Colors from "@/styles/Colors";
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
      {!isMobileScreens && <Carousel images={images}></Carousel>}
      <Wrapper>
        <Typography
          variant="h1"
          fontSize="48px"
          lineHeight="54px"
          fontWeight="400"
          marginTop="100px"
          marginBottom="20px"
          paddingBottom="50px"
          color={Colors.text2}
        >
          THE MEKONG DELTA
        </Typography>
        <Box display="grid" gap={6} gridTemplateColumns="repeat(12, 1fr)">
          <Box gridColumn="span 6">
            <Box color={Colors.text1}>
              <Typography
                paddingBottom="20px"
                fontWeight="300"
                variant="body1"
                textAlign="justify"
                lineHeight="30px"
              >
                The Mekong Delta is center of Vietnam’s rice, fish, fruits and
                vegetables production. With about 40 thousand square kilometers
                and 20 million people, it is so-called ‘rice-bowl’ of Vietnam.
                Despite its centrality to the Vietnamese economy, the delta is
                particularly vulnerable to increasing climate changes pressures
                and regional development impacts. Challenges such as rising sea
                levels and hydropower development causing erosion, flooding,
                drought, and land subsidence and poverty and migration.
              </Typography>
              <Typography
                paddingBottom="20px"
                fontWeight="300"
                variant="body1"
                textAlign="justify"
                lineHeight="30px"
              >
                Resolution 120/NQ-CP and the integrated master plan for the
                Mekong Delta to respond to climate change by 2050 divides the
                delta into three major ecological zones: permanent saline area,
                salt-fresh water transition zone, and freshwater zone. In each
                ecological zone, it is necessary to transform sustainable
                agricultural systems and adapt to climate change
              </Typography>
            </Box>
            <CustomizedPrimaryButton sx={{ marginTop: "40px" }}>
              LEARN MORE
            </CustomizedPrimaryButton>
          </Box>
          <Box gridColumn="span 6">
            <Box component="img" src="images/MD-zones-300x255.png"></Box>
          </Box>
        </Box>
      </Wrapper>
    </>
  );
};

export default Home;
