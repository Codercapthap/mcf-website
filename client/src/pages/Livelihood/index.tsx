import Header from "@/components/Header";
import Headline from "@/components/Headline";
import Footer from "@/components/Footer";
import { Livelihood as LivelihoodType } from "@/shared";
import CardTemplate from "@/components/CardTemplate";

type props = {
  livelihoods: LivelihoodType;
};

const Livelihood = ({ livelihoods }: props) => {
  document.title = `Livelihood - MCF`;
  return (
    <>
      <Header></Header>
      <Headline
        image="images/headlines/sinh-ke_background.jpg"
        title="Livelihoods"
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
