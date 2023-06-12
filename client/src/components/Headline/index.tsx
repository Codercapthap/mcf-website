import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { Wrapper } from "@/styles";
import useMediaQuery from "@mui/material/useMediaQuery/useMediaQuery";
import { theme } from "@/styles";

type props = {
  image: string;
  title: string;
};

const index = ({ image, title }: props) => {
  return (
    <Box
      height="560px"
      marginBottom="90px"
      sx={{
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "scroll",
        [theme.breakpoints.down("mobile")]: {
          height: "auto",
        },
      }}
    >
      <Wrapper
        height="100%"
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box textAlign="center" color="var(--text-white)">
          <Typography fontWeight="300" variant="h3">
            {title}
          </Typography>
          <Typography
            textTransform="uppercase"
            fontSize=".6em"
            fontWeight="700"
            letterSpacing=".1em"
            lineHeight="30px"
            paddingY="4px"
          >
            <Box
              component={Link}
              sx={{
                color: "var(--text-white)",
                textDecoration: "none",
                cursor: "pointer",
                transition: "color 0.5s",
                ":hover": {
                  color: "var(--btn-hover-bg)",
                },
              }}
              to="/home"
            >
              Home
            </Box>
            / {title}
          </Typography>
        </Box>
      </Wrapper>
    </Box>
  );
};

export default index;
