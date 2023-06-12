import { Box } from "@mui/material";
import { Wrapper } from "@/styles";
const Footer = () => {
  return (
    <Box
      height="98px"
      sx={{
        backgroundColor: "var(--bg-black)",
      }}
      width="100%"
      display="flex"
      alignItems="center"
    >
      <Wrapper>
        <Box
          component="p"
          fontSize="12px"
          fontWeight="700"
          color="rgba(255,255,255,.6)"
          letterSpacing=".1em"
          padding={0}
        >
          MCF © 2020 | ALL RIGHTS RESERVED
        </Box>
      </Wrapper>
    </Box>
  );
};

export default Footer;
