import { Box, Typography, styled } from "@mui/material";
import { Link } from "react-router-dom";
import { theme } from "@/styles";
import { Project } from "@/shared";

const CardTitleTypography = styled(Typography)`
  font-size: 11px;
  color: var(--text-grey);
  vertical-align: middle;
  font-weight: 700;
  letter-spacing: 0.1rem;
  line-height: 38px;
  padding: 0;
`;

type Props = {
  project: Project;
  isSearch: boolean;
};

const CategoryCard = ({ project, isSearch = false }: Props) => {
  return (
    <Box
      width="100%"
      display={"flex"}
      sx={{
        [theme.breakpoints.down("tablet")]: {
          flexDirection: "column",
        },
      }}
      marginY="50px"
    >
      <Box
        component={Link}
        width="30vw"
        height="100%"
        to="/"
        sx={{
          [theme.breakpoints.down("tablet")]: {
            width: "100%",
          },
        }}
      >
        <Box
          component="img"
          height="420px"
          width="100%"
          src={project.thumbnail}
        ></Box>
      </Box>
      <Box flex={1} border="1px solid var(--border-color)">
        <CardTitleTypography
          sx={{
            textAlign: "right",
            border: "1px solid var(--border-color)",
            padding: "0 38px",
          }}
        >
          PROJECT
        </CardTitleTypography>
        <Box>
          <Box padding="20px 38px">
            <Typography
              variant="h3"
              fontWeight={300}
              fontSize="36px"
              lineHeight="42px"
              paddingBottom="10px"
            >
              <Box
                component={Link}
                sx={{
                  textDecoration: "none",
                  transition: ".5s",
                  ":hover": {
                    color: "var(--btn-hover-bg)",
                  },
                }}
                color="var(--text-black)"
              >
                {project.title}
              </Box>
            </Typography>
            {isSearch && (
              <CardTitleTypography>
                IN{" "}
                <Box
                  component={Link}
                  to={`/pj-categs${project.categoryLink}`}
                  color="var(--btn-hover-bg)"
                  sx={{
                    textTransform: "uppercase",
                  }}
                >
                  {project.category}
                </Box>
              </CardTitleTypography>
            )}
            <Typography
              fontWeight={300}
              color="var(--text-grey)"
              fontSize="16px"
              lineHeight="30px"
            >
              {project.description}
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default CategoryCard;
