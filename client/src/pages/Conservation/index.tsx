import Header from "@/components/Header";
import Headline from "@/components/Headline";
import Footer from "@/components/Footer";
import {
  Conservation as ConservationType,
  // Status,
  // Project as ProjectType,
} from "@/shared";
import CardTemplate from "@/components/CardTemplate";
import { useTranslation } from "react-i18next";
type props = {
  conservations: ConservationType;
};

const Conservation = ({ conservations }: props) => {
  const { t } = useTranslation();
  document.title = `${t("nav.conservation")} - MCF`;
  return (
    <>
      <Header></Header>
      <Headline
        image="images/headlines/Bao-ton_baoton.jpg"
        title={t("nav.conservation")}
      ></Headline>
      <CardTemplate
        projectsProp={conservations}
        type="Conservation"
      ></CardTemplate>
      <Footer></Footer>
    </>
  );
};

export default Conservation;
