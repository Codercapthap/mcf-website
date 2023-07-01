import { Project } from "@/shared";
import Headline from "@/components/Headline";
import Header from "@/components/Header";
import CategoryCard from "@/components/CategoryCard";
import { Wrapper } from "@/styles";
import Footer from "@/components/Footer";
import { useLocation } from "react-router-dom";

type Props = {
  projects: Array<Project>;
  title?: string;
};

const Category = ({ projects, title }: Props) => {
  const location = useLocation();
  if (location.state) {
    projects = location.state.projects;
  }
  title ? (document.title = `Category ${title} - MCF`) : `Search - MCF`;
  return (
    <>
      <Header></Header>
      <Headline
        title={
          title
            ? `Project Category: ${title}`
            : `${projects.length} result for: ${location.state.input}`
        }
        name={title || location.state.input}
      ></Headline>
      <Wrapper
        sx={{
          paddingBottom: "30px",
        }}
      >
        {projects.map((project: Project) => {
          return (
            <CategoryCard
              project={project}
              isSearch={location.state ? true : false}
            ></CategoryCard>
          );
        })}
      </Wrapper>
      <Footer></Footer>
    </>
  );
};

export default Category;
