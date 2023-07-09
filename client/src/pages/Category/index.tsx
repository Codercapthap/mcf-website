import { projects, Project } from "@/shared";
import Headline from "@/components/Headline";
import Header from "@/components/Header";
import CategoryCard from "@/components/CategoryCard";
import { Wrapper } from "@/styles";
import Footer from "@/components/Footer";
import SearchIcon from "@mui/icons-material/Search";
import { useLocation, useNavigate } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import { FormEvent, useState } from "react";

type Props = {
  resultProjects: Array<Project>;
  title?: string;
};

const Category = ({ resultProjects, title }: Props) => {
  const [searchInput, setSearchInput] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  if (location.state) {
    resultProjects = location.state.projects;
  }
  title ? (document.title = `Category ${title} - MCF`) : `Search - MCF`;
  const search = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Enter") {
      // var result: Record<string, Array<Project>> = {};
      var result: Array<Project> = [];
      Object.entries(projects).map((projectArray: any) => {
        projectArray[1] = projectArray[1].filter((project: Project) => {
          return (
            project.title.toLowerCase().includes(searchInput.toLowerCase()) ||
            (project.description &&
              project.description
                .toLowerCase()
                .includes(searchInput.toLowerCase()))
          );
        });
        console.log(projectArray[0]);
        // if (projectArray[1].length > 0) {
        // result[`${projectArray[0]}`] = projectArray[1];
        result = [...result, ...projectArray[1]];
        // }
      });
      navigate("/search", { state: { projects: result, input: searchInput } });
    }
  };
  return (
    <>
      <Header></Header>
      <Headline
        title={
          title
            ? `Project Category: ${title}`
            : `${resultProjects.length} result for: ${location.state.input}`
        }
        name={title || `search result for: ${location.state.input}`}
      ></Headline>
      <Wrapper
        sx={{
          paddingBottom: "30px",
        }}
      >
        {resultProjects.map((project: Project) => {
          return (
            <CategoryCard
              project={project}
              isSearch={location.state ? true : false}
            ></CategoryCard>
          );
        })}
        {(() => {
          if (location.state && resultProjects.length === 0) {
            return (
              <Box paddingBottom="50px">
                <Typography
                  fontSize="16px"
                  fontWeight="700"
                  textAlign="center"
                  letterSpacing=".1em"
                >
                  SORRY, BUT NOTHING MATCHED YOUR SEARCH TERMS. PLEASE TRY AGAIN
                  WITH SOME DIFFERENT KEYWORDS.
                </Typography>
                <Box position="relative" textAlign="center">
                  <Box
                    margin="auto"
                    component="input"
                    width="30vw"
                    sx={{
                      marginTop: "10px",
                      border: "1px solid var(--border-color)",
                      borderRadius: "30px",
                      padding: "0 22px",
                      width: "100%",
                      minWidth: "100px",
                      fontSize: "16px",
                      lineHeight: "30px",
                      fontWeight: "300",
                      fontStyle: "normal",
                      height: "48px",
                      transition: "border-color .2s ease-in-out",
                      "&:before": {
                        border: "none",
                      },
                      "&:hover:not(.Mui-disabled, .Mui-error):before": {
                        border: "none",
                      },
                      "&:after": {
                        border: "none",
                      },
                      "&:focus": {
                        borderColor: "#46c965",
                      },
                      "&:focus-visible": {
                        // borderColor: "#46c965",
                        outline: "none",
                      },
                    }}
                    value={searchInput}
                    onChange={(e: FormEvent<HTMLInputElement>) => {
                      setSearchInput(e.currentTarget.value);
                    }}
                    onKeyDown={search}
                    placeholder="Search..."
                  ></Box>
                  <SearchIcon
                    sx={{
                      position: "absolute",
                      bottom: "20%",
                      right: "-2%",
                      cursor: "pointer",
                      transition: "all linear .3s",
                      ":hover": {
                        color: "#46c965",
                      },
                    }}
                  ></SearchIcon>
                </Box>
              </Box>
            );
          }
        })()}
      </Wrapper>
      <Footer></Footer>
    </>
  );
};

export default Category;
