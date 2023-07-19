import { Box } from "@mui/material";
import { Wrapper } from "../../styles";
import { useTranslation } from "react-i18next";
const Footer = () => {
  const { t } = useTranslation();
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
          {t("footer")}
        </Box>
      </Wrapper>
    </Box>
  );
};

export default Footer;
