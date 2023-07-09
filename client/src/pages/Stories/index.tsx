import Header from "@/components/Header";
import Headline from "@/components/Headline";
import Footer from "@/components/Footer";
import { Wrapper } from "@/styles";
import { Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

const Stories = () => {
  const { t } = useTranslation();

  document.title = `${t("nav.stories")} - MCF`;
  return (
    <>
      <Header></Header>
      <Headline
        image="images/headlines/Tu-Thien_cauchuyen-scaled.jpg"
        title={t("nav.stories")}
      ></Headline>
      <Wrapper>
        <Typography
          variant="h1"
          fontWeight="300"
          fontSize="2.5em"
          paddingTop="200px"
          paddingBottom="50px"
        >
          {t("stories")}
        </Typography>
      </Wrapper>
      <Footer></Footer>
    </>
  );
};

export default Stories;
