import { Box, Typography } from "@mui/material";
import Header from "../../components/Header";
import SearchIcon from "@mui/icons-material/Search";
import Footer from "../../components/Footer";
import { useTranslation } from "react-i18next";
import "./404.scss";

const PageNotFound = () => {
  const { t } = useTranslation();
  document.title = `Page Not Found`;
  return (
    <Box component="div">
      <Header></Header>
      <Box component="div" id="middle" className="error_page">
        <Box component="div" className="headline">
          <Box
            component="div"
            className="headline_outer cmsmasters_headline_disableds"
          ></Box>
        </Box>
        <Box component="div" className="middle_inner">
          <Box component="div" className="content_wrap fullwidth"></Box>
          <Box component="div" className="entry">
            <Box component="div" className="error">
              <Box component="div" className="error_bg">
                <Box component="div" className="content_wrap fullwidth">
                  <Box component="div" className="error_inner">
                    <Typography variant="h1" className="error_title">
                      404
                    </Typography>
                    <Typography variant="h2" className="error_subtitle">
                      {t("page-not-found")}
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
          <Box component="div" className="content_wrap fullwidth">
            <Box component="div" className="error_cont">
              <Box component="div" className="search_bar_wrap">
                <Box component="form" method="get" action="/">
                  <Box component="p" className="search_field">
                    <Box
                      component="input"
                      name="s"
                      type="search"
                      className="form-control"
                      id="search"
                      placeholder={t("search.search")}
                    ></Box>
                  </Box>
                  <Box component="p" className="search_button">
                    <SearchIcon />
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
      <Footer></Footer>
    </Box>
  );
};
export default PageNotFound;
