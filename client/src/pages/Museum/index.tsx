import Header from "../../components/Header";
import Headline from "../../components/Headline";
import Footer from "../../components/Footer";
import { Museum as MuseumType } from "../../shared";
import CardTemplate from "../../components/CardTemplate";
import { useTranslation } from "react-i18next";

type props = {
  museums: Array<MuseumType>;
};

const Museum = ({ museums }: props) => {
  const { t } = useTranslation();
  document.title = `${t("nav.museums")} - MCF`;
  return (
    <>
      <Header></Header>
      <Headline
        image="images/headlines/banner_bg.jpg"
        title={t("nav.museums")}
      ></Headline>
      <CardTemplate
        projectsProp={museums}
        type={t("nav.museums")}
      ></CardTemplate>
      <Footer></Footer>
    </>
  );
};

export default Museum;
