import Header from "@/components/Header";
import Headline from "@/components/Headline";
import Footer from "@/components/Footer";
import {
  Conservation as ConservationType,
  // Status,
  // Project as ProjectType,
} from "@/shared";
import CardTemplate from "@/components/CardTemplate";

type props = {
  conservations: ConservationType;
};

const Conservation = ({ conservations }: props) => {
  document.title = `Conservation - MCF`;
  return (
    <>
      <Header></Header>
      <Headline
        image="images/headlines/Bao-ton_baoton.jpg"
        title="Conservation"
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
