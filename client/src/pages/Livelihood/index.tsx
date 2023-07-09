import Header from "@/components/Header";
import Headline from "@/components/Headline";
import Footer from "@/components/Footer";
import { Livelihood as LivelihoodType } from "@/shared";
import CardTemplate from "@/components/CardTemplate";
import { useTranslation } from "react-i18next";

type props = {
  livelihoods: LivelihoodType;
};

const Livelihood = ({ livelihoods }: props) => {
  const { t } = useTranslation();
  document.title = `${t("nav.livelihoods")} - MCF`;
  return (
    <>
      <Header></Header>
      <Headline
        image="images/headlines/sinh-ke_background.jpg"
        title={t("nav.livelihoods")}
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
