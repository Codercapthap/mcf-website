import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { Wrapper } from "@/styles";
import { theme } from "@/styles";

type props = {
  image?: string;
  name: string;
  title: string;
};

const Headline = ({ image, name, title }: props) => {
  return (
    <Box
      height="560px"
      marginBottom="90px"
      sx={{
        background: image ? `url(${image})` : `var(--btn-hover-bg)`,
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
            / {name || title}
          </Typography>
        </Box>
      </Wrapper>
    </Box>
  );
};

export default Headline;
