import Header from "@/components/Header";
import Headline from "@/components/Headline";
import Footer from "@/components/Footer";
import { Museum as MuseumType } from "@/shared";
import CardTemplate from "@/components/CardTemplate";

type props = {
  museums: MuseumType;
};

const Museum = ({ museums }: props) => {
  document.title = `Museum - MCF`;
  return (
    <>
      <Header></Header>
      <Headline
        image="images/headlines/banner_bg.jpg"
        title="Museum"
      ></Headline>
      <CardTemplate projectsProp={museums} type="Museum"></CardTemplate>
      <Footer></Footer>
    </>
  );
};

export default Museum;
