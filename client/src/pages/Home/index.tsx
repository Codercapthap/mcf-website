import { Box, Typography, useMediaQuery } from "@mui/material/";
import FullScreen from "react-fullscreen-crossbrowser";
import { useState } from "react";
import { Wrapper, CustomizedPrimaryButton } from "../../styles";
import Header from "../../components/Header";
import Carousel from "../../components/Carousel";
import Footer from "../../components/Footer";
import { useTranslation } from "react-i18next";
const Home = () => {
  const { t } = useTranslation();
  document.title = `${t("nav.home")} - MCF`;
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
          className="carousel"
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
          {t("home.title")}
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
                dangerouslySetInnerHTML={{
                  __html: `${t("home.content1")}`,
                }}
              ></Typography>
              <Typography
                paddingBottom="20px"
                fontWeight="300"
                variant="body1"
                textAlign="justify"
                lineHeight="30px"
              >
                {t("home.content2")}
              </Typography>
            </Box>
            <CustomizedPrimaryButton sx={{ marginTop: "40px" }}>
              {t("home.information")}
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
          {t("home.news")}
        </Typography>
      </Wrapper>

      {/* FOOTER SESSION */}
      <Footer></Footer>
    </>
  );
};

export default Home;
