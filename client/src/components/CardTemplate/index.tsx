import { Wrapper, SortingButton } from "../../styles";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import FlipMove from "react-flip-move";
import { Project } from "../../shared";
import "./CardTemplate.scss";
import { theme } from "../../styles";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
type Props = {
  projectsProp: Array<Project>;
  type: string;
};

const CardTemplate = ({ projectsProp, type }: Props) => {
  const [orderByTitle, setOrderByTitle] = useState("asc");
  const [orderByDate, setOrderByDate] = useState("asc");
  const allCateButtonRef = useRef<any>();
  const currentPageButtonRef = useRef<any>();
  const [projects, setProjects] = useState<Array<Project>>(projectsProp);
  const { t } = useTranslation();

  const toggleSortByName = () => {
    const sortAsc = (a: Project, b: Project) => (a.title > b.title ? 1 : -1);
    const sortDesc = (a: Project, b: Project) => {
      return b.title > a.title ? 1 : -1;
    };
    setOrderByTitle((prev) => {
      return prev === "asc" ? "desc" : "asc";
    });
    setProjects((prev) => {
      const newArray = prev.sort(orderByTitle === "asc" ? sortDesc : sortAsc);
      return newArray;
    });
  };
  const toggleSortByDate = () => {
    const sortAsc = (a: Project, b: Project) => (a.date > b.date ? 1 : -1);
    const sortDesc = (a: Project, b: Project) => {
      return b.date > a.date ? 1 : -1;
    };
    setOrderByDate((prev) => {
      return prev === "asc" ? "desc" : "asc";
    });
    setProjects((prev) => {
      const newArray = prev.sort(orderByDate === "asc" ? sortDesc : sortAsc);
      return newArray;
    });
  };

  useEffect(() => {
    const arrowElement = document.querySelector(
      "[data-testid=KeyboardArrowDownIcon]"
    ) as HTMLElement;
    if (arrowElement) {
      if (orderByTitle === "asc") {
        arrowElement.style.transform = "rotate(-180deg)";
      } else {
        arrowElement.style.transform = "rotate(0)";
      }
    }
  }, [orderByTitle]);
  useEffect(() => {
    const arrowElement = document.querySelector(
      "[data-testid=KeyboardArrowUpIcon]"
    ) as HTMLElement;
    if (arrowElement) {
      if (orderByDate === "desc") {
        arrowElement.style.transform = "rotate(-180deg)";
      } else {
        arrowElement.style.transform = "rotate(0)";
      }
    }
  }, [orderByDate]);

  return (
    <>
      <Wrapper paddingBottom="50px">
        <Box display="flex" justifyContent="space-between">
          <Box id="breadcrumb">
            <SortingButton
              ref={allCateButtonRef}
              className="active"
              sx={{ marginRight: "12px" }}
              onClick={(e: any) => {
                document
                  .querySelector("#breadcrumb .active")
                  ?.classList.remove("active");
                (e.currentTarget as HTMLElement).classList.add("active");
              }}
            >
              {t("categories.all_categories")}
            </SortingButton>
            <SortingButton
              ref={currentPageButtonRef}
              onClick={(e: any) => {
                document
                  .querySelector("#breadcrumb .active")
                  ?.classList.remove("active");
                (e.currentTarget as HTMLElement).classList.add("active");
              }}
            >
              {type.toLocaleUpperCase()}
            </SortingButton>
          </Box>
          <Box id="sorting">
            <SortingButton
              sx={{ marginRight: "12px" }}
              onClick={(e: any) => {
                document
                  .querySelector("#sorting .active")
                  ?.classList.remove("active");
                (e.currentTarget as HTMLElement).classList.add("active");
                toggleSortByName();
              }}
            >
              {t("sort.name")}
              <KeyboardArrowDownIcon
                sx={{ lineHeight: "24px", transition: ".5s" }}
              ></KeyboardArrowDownIcon>
            </SortingButton>
            <SortingButton
              onClick={(e: any) => {
                document
                  .querySelector("#sorting .active")
                  ?.classList.remove("active");
                (e.currentTarget as HTMLElement).classList.add("active");
                toggleSortByDate();
              }}
              className="active"
            >
              {t("sort.date")}
              <KeyboardArrowUpIcon
                sx={{ lineHeight: "24px", transition: ".5s" }}
              ></KeyboardArrowUpIcon>
            </SortingButton>
          </Box>
        </Box>
        <Box>
          <Box
            component={FlipMove}
            display="grid"
            gap={6}
            gridTemplateColumns="repeat(4, 3fr)"
            marginTop="60px"
            staggerDurationBy="30"
            duration={500}
            enterAnimation="accordionHorizontal"
            leaveAnimation="accordionHorizontal"
            typeName="ul"
            paddingLeft={0}
            className="cards-container"
            sx={{
              [theme.breakpoints.down("desktop")]: {
                gridTemplateColumns: "repeat(3, 4fr)",
              },
              [theme.breakpoints.down("tablet")]: {
                gridTemplateColumns: "repeat(2, 6fr)",
              },
              [theme.breakpoints.down("mobile")]: {
                gridTemplateColumns: "repeat(1, 12fr)",
              },
            }}
          >
            {projects.map((information) => {
              return (
                <Card
                  sx={{ display: "flex", flexDirection: "column" }}
                  key={information.title}
                >
                  <Box component={Link} to={information.link}>
                    <CardMedia
                      image={information.thumbnail}
                      className="card-media"
                    >
                      <Box className="card-hover">
                        <Box className="icon-leaf"></Box>
                      </Box>
                    </CardMedia>
                  </Box>
                  <CardContent className="card-content">
                    <Box component={Link} to={information.link}>
                      <Typography
                        variant="h5"
                        component="div"
                        gutterBottom
                        className="card-title"
                      >
                        {information.title}
                      </Typography>
                    </Box>
                    <Box
                      component={Link}
                      to={`/pj-categs/${type.toLowerCase()}`}
                      marginTop="auto"
                    >
                      <Typography
                        color="var(--btn-primary-bg)"
                        variant="h6"
                        sx={{
                          fontSize: "11px",
                          fontWeight: "700",
                          letterSpacing: ".1rem",
                        }}
                      >
                        {type}
                      </Typography>
                    </Box>
                  </CardContent>
                </Card>
              );
            })}
          </Box>
        </Box>
      </Wrapper>
    </>
  );
};

export default CardTemplate;
