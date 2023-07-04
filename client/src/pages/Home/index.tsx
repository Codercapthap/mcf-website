import { Box, Typography, useMediaQuery } from "@mui/material/";
import FullScreen from "react-fullscreen-crossbrowser";
import { useState } from "react";
import { Wrapper, CustomizedPrimaryButton } from "@/styles";
import { ImageSliderType } from "@/shared";
import Header from "@/components/header";
import Carousel from "@/components/Carousel";
import Footer from "@/components/Footer";

// const images: Array<ImageSliderType> = [
//   {
//     src: "images/carousel/Bao-tang_home.jpg",
//     typoLeft: "13%",
//     typoRight: "unset",
//     typoBottom: "unset",
//     typoTop: "34%",
//     typo1: "The Mekong Delta",
//     typo2: "Natural History Museum",
//     link: "/museum",
//     buttonText: "Find more",
//   },
//   {
//     src: "images/carousel/Sinh-ke_trangchu-2048x1110.jpg",
//     typoLeft: "unset",
//     typoRight: "12%",
//     typoBottom: "16%",
//     typoTop: "unset",
//     typo1: "",
//     typo2: "Improve local livelihoods",
//     link: "/livelihoods",
//     buttonText: "Find more",
//   },
//   {
//     src: "images/carousel/Bao-ton_home-2048x1365.jpg",
//     typoLeft: "unset",
//     typoRight: "6%",
//     typoBottom: "unset",
//     typoTop: "-8%",
//     typo1: "",
//     typo2: "Natural Conservation",
//     link: "/museum",
//     buttonText: "Find more",
//   },
// ];

const Home = () => {
  document.title = `Home - MCF`;
  const isMobileScreens = useMediaQuery("(max-width: 768px)");
  const [isFullScreenEnabled, setIsFullScreenEnabled] =
    useState<boolean>(false);
  return (
    <>
      {/* HEADER SESSION */}
      <Header></Header>

      {/* CAROUSEL SESSION */}
      {!isMobileScreens && (
        <Box
          onDoubleClick={() => {
            setIsFullScreenEnabled(!isFullScreenEnabled);
          }}
          marginBottom="100px"
        >
          <FullScreen
            enabled={isFullScreenEnabled}
            onChange={(isFullScreenEnabled) =>
              setIsFullScreenEnabled(isFullScreenEnabled)
            }
          >
            <Carousel></Carousel>
          </FullScreen>
        </Box>
      )}

      {/* MAIN CONTENT SESSION */}
      <Wrapper sx={{ paddingBottom: "50px" }}>
        <Typography
          variant="h1"
          fontSize="48px"
          lineHeight="54px"
          fontWeight="400"
          marginTop="100px"
          marginBottom="20px"
          paddingBottom="50px"
          color="var(--text-black)"
        >
          THE MEKONG DELTA
        </Typography>
        <Box display="grid" gap={6} gridTemplateColumns="repeat(12, 1fr)">
          <Box gridColumn="span 6">
            <Box color="var(--text-grey)">
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
            <Box component="img" src="images/others/MD-zones-300x255.png"></Box>
          </Box>
        </Box>
        <Typography
          variant="h1"
          fontWeight="300"
          fontSize="3em"
          paddingTop="200px"
        >
          Latest New
        </Typography>
      </Wrapper>

      {/* FOOTER SESSION */}
      <Footer></Footer>
    </>
  );
};

export default Home;
