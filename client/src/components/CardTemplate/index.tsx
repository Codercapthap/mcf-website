import { Wrapper, SortingButton } from "@/styles";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import FlipMove from "react-flip-move";
import { Project } from "@/shared";
import "./CardTemplate.scss";
import { theme } from "@/styles";
type Props = {
  projectsProp: Array<Project>;
  type: string;
};

const CardTemplate = ({ projectsProp, type }: Props) => {
  const [orderByTitle, setOrderByTitle] = useState("asc");
  const [orderByDate, setOrderByDate] = useState("asc");
  const allCateButtonRef = useRef();
  const currentPageButtonRef = useRef();
  const [projects, setProjects] = useState<Array<Project>>(projectsProp);

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
              onClick={(e: MouseEvent) => {
                document
                  .querySelector("#breadcrumb .active")
                  ?.classList.remove("active");
                (e.currentTarget as HTMLElement).classList.add("active");
              }}
            >
              ALL CATEGORIES
            </SortingButton>
            <SortingButton
              ref={currentPageButtonRef}
              onClick={(e: MouseEvent) => {
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
              onClick={(e: MouseEvent) => {
                document
                  .querySelector("#sorting .active")
                  ?.classList.remove("active");
                (e.currentTarget as HTMLElement).classList.add("active");
                toggleSortByName();
              }}
            >
              NAME
              <KeyboardArrowDownIcon
                sx={{ lineHeight: "24px", transition: ".5s" }}
              ></KeyboardArrowDownIcon>
            </SortingButton>
            <SortingButton
              onClick={(e: MouseEvent) => {
                document
                  .querySelector("#sorting .active")
                  ?.classList.remove("active");
                (e.currentTarget as HTMLElement).classList.add("active");
                toggleSortByDate();
              }}
              className="active"
            >
              DATE
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
                  <CardMedia
                    image={information.thumbnail}
                    className="card-media"
                  >
                    <Box className="card-hover">
                      <Box className="icon-leaf"></Box>
                    </Box>
                  </CardMedia>
                  <CardContent className="card-content">
                    <Typography
                      variant="h5"
                      component="div"
                      gutterBottom
                      className="card-title"
                    >
                      {information.title}
                    </Typography>
                    <Typography
                      color="var(--btn-primary-bg)"
                      variant="h6"
                      sx={{
                        fontSize: "11px",
                        fontWeight: "700",
                        letterSpacing: ".1rem",
                        marginTop: "auto",
                      }}
                    >
                      {type}
                    </Typography>
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
