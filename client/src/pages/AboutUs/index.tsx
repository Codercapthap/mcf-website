import Header from "../../components/Header";
import Headline from "../../components/Headline";
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Box,
  Typography,
} from "@mui/material";
import { Wrapper, theme } from "../../styles";
import "./AboutUs.scss";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer";
import { useTranslation } from "react-i18next";

const AboutUs = () => {
  const { t } = useTranslation();
  document.title = `${t("nav.about-us")} - MCF`;

  const TheMcfCouncil = [
    {
      name: `${t("about-us.the_mcf_council.duong-van-ni.name")}`,
      image: "images/people/Duong-Van-Ni.png",
      position: `${t("about-us.the_mcf_council.duong-van-ni.position")}`,
      description: `${t("about-us.the_mcf_council.duong-van-ni.brief")}`,
      link: "/profile/dvni",
    },
    {
      name: `${t("about-us.the_mcf_council.vu-van-hieu.name")}`,
      image: "images/people/Vu-Van-Hieu.png",
      position: `${t("about-us.the_mcf_council.vu-van-hieu.position")}`,
      description: `${t("about-us.the_mcf_council.vu-van-hieu.brief")}`,
      link: "/profile/vu-van-hieu",
    },
    {
      name: `${t("about-us.the_mcf_council.nguyen-thi-kieu-vuong.name")}`,
      image: "images/people/Nguyen-Thi-Kieu-Vuong.png",
      position: `${t(
        "about-us.the_mcf_council.nguyen-thi-kieu-vuong.position"
      )}`,
      description: `${t(
        "about-us.the_mcf_council.nguyen-thi-kieu-vuong.brief"
      )}`,
      link: "/profile/nguyen-thi-kieu-vuong",
    },
  ];
  const TheSupervisoryCouncil = [
    {
      name: `${t("about-us.the_supervisory_council.david-wilmoth.name")}`,
      image: "images/people/david-wilmoth-400x490.jpg",
      position: `${t(
        "about-us.the_supervisory_council.david-wilmoth.position"
      )}`,
      link: "/profile/ts-david-wilmoth",
    },
    {
      name: `${t("about-us.the_supervisory_council.ho-le-khoa.name")}`,
      image: "images/people/Ho-Van-Khoa-580x490.jpg",
      position: `${t("about-us.the_supervisory_council.ho-le-khoa.position")}`,
      link: "/profile/tien-si-ho-le-khoa",
    },
  ];
  const MemberOfMcf = [
    {
      name: `${t("about-us.member_of_mcf.ly-van-loi.name")}`,
      image: "images/people/ly-van-loi-1-580x490.jpg",
      link: "/profile/ong-ly-van-loi",
    },
    {
      name: `${t("about-us.member_of_mcf.le-anh-tuan.name")}`,
      image: "images/people/le-anh-tuan-1-580x490.jpg",
      link: "/profile/pgs-ts-le-anh-tuan",
    },
    {
      name: `${t("about-us.member_of_mcf.nguyen-thanh-tung.name")}`,
      image: "images/people/nguyen-thanh-tung-1-e1624288880348-580x490.jpg",
      link: "/profile/pgs-ts-nguyen-thanh-tung",
    },
    {
      name: `${t("about-us.member_of_mcf.nguyen-hoai-bao.name")}`,
      image: "images/people/nguyen-hoai-bao.jpg",
      link: "/profile/ong-nguyen-hoai-bao",
    },
    {
      name: `${t("about-us.member_of_mcf.truong-hoang-dan.name")}`,
      image: "images/people/Truong-Hoang-Dan_gioithieu-580x490.jpg",
      link: "/profile/pgs-ts-truong-hoang-dan",
    },
  ];
  return (
    <>
      <Header></Header>
      <Headline
        image="images/headlines/mcf_ceremony_banner-scaled.jpg"
        title={t("nav.about-us")}
      ></Headline>
      <Wrapper
        sx={{
          textAlign: "center",
        }}
      >
        <Box marginBottom="100px">
          <Box color="var(--text-black)" marginBottom="60px">
            <Typography
              fontWeight="300"
              variant="h3"
              sx={{
                marginY: "20px",
              }}
            >
              {t("about-us.title")}
            </Typography>
            <Typography fontWeight="300" variant="h6" marginBottom="20px">
              {t("about-us.heading")}
            </Typography>
          </Box>
          <Box
            component="img"
            src="images/others/thanh-vien-MCF-580x387.jpg"
            maxWidth="100%"
          ></Box>
          <Box color="var(--text-grey)" marginTop="50px">
            <Typography fontWeight="300" variant="body1">
              {t("about-us.content")}
            </Typography>
          </Box>
        </Box>
      </Wrapper>
      <Box
        sx={{
          width: "100%",
          backgroundColor: "#fafafa",
          paddingBottom: "50px",
        }}
      >
        <Wrapper>
          <Box paddingTop="130px">
            <Typography fontWeight="300" variant="h3" textAlign="center">
              {t("about-us.mcf_council")}
            </Typography>
            <Box
              display="grid"
              gap={6}
              gridTemplateColumns="repeat(3, 4fr)"
              marginTop="60px"
              sx={{
                [theme.breakpoints.down("tablet")]: {
                  gridTemplateColumns: "repeat(1, 12fr)",
                },
              }}
            >
              {TheMcfCouncil.map((information) => {
                return (
                  <Card sx={{ display: "flex", flexDirection: "column" }}>
                    <Box component={Link} to={information.link}>
                      <CardMedia
                        image={information.image}
                        className="card-media"
                      >
                        <Box className="card-hover"></Box>
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
                          {information.name}
                        </Typography>
                      </Box>
                      <Typography
                        color="var(--btn-primary-bg)"
                        variant="h6"
                        sx={{
                          fontSize: "11px",
                          fontWeight: "700",
                          letterSpacing: ".1rem",
                        }}
                      >
                        {information.position}
                      </Typography>
                      <Typography
                        fontWeight="300"
                        sx={{ color: "var(--text-grey)" }}
                        paddingTop="18px"
                        dangerouslySetInnerHTML={{
                          __html: `${information.description}`,
                        }}
                      ></Typography>
                      <CardActions
                        sx={{
                          justifyContent: "center",
                          paddingTop: "28px",
                          flexGrow: "1",
                          alignItems: "flex-end",
                        }}
                      >
                        <Box
                          component={Link}
                          className="icon-googleplus card-icon"
                        ></Box>
                        <Box
                          component={Link}
                          className="icon-phone card-icon"
                        ></Box>
                      </CardActions>
                    </CardContent>
                  </Card>
                );
              })}
            </Box>
          </Box>
          <Box paddingTop="130px">
            <Typography fontWeight="300" variant="h3" textAlign="center">
              {t("about-us.supervisory_council")}
            </Typography>
            <Box
              display="grid"
              gap={6}
              gridTemplateColumns="repeat(3, 4fr)"
              marginTop="60px"
              sx={{
                [theme.breakpoints.down("tablet")]: {
                  gridTemplateColumns: "repeat(1, 12fr)",
                },
              }}
            >
              {TheSupervisoryCouncil.map((information) => {
                return (
                  <Card sx={{ display: "flex", flexDirection: "column" }}>
                    <Box component={Link} to={information.link}>
                      <CardMedia
                        image={information.image}
                        className="card-media"
                      >
                        <Box className="card-hover"></Box>
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
                          {information.name}
                        </Typography>
                      </Box>
                      <Typography
                        color="var(--btn-primary-bg)"
                        variant="h6"
                        sx={{
                          fontSize: "11px",
                          fontWeight: "700",
                          letterSpacing: ".1rem",
                        }}
                      >
                        {information.position}
                      </Typography>
                    </CardContent>
                  </Card>
                );
              })}
            </Box>
          </Box>
          <Box paddingTop="130px">
            <Typography fontWeight="300" variant="h3" textAlign="center">
              {t("about-us.member")}
            </Typography>
            <Box
              display="grid"
              gap={6}
              gridTemplateColumns="repeat(4, 3fr)"
              sx={{
                [theme.breakpoints.down("desktop")]: {
                  gridTemplateColumns: "repeat(2, 6fr)",
                },
                [theme.breakpoints.down("tablet")]: {
                  gridTemplateColumns: "repeat(1, 12fr)",
                },
              }}
              marginTop="60px"
            >
              {MemberOfMcf.map((information) => {
                return (
                  <Card sx={{ display: "flex", flexDirection: "column" }}>
                    <Box component={Link} to={information.link}>
                      <CardMedia
                        image={information.image}
                        className="card-media"
                      >
                        <Box className="card-hover"></Box>
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
                          {information.name}
                        </Typography>
                      </Box>
                    </CardContent>
                  </Card>
                );
              })}
            </Box>
          </Box>
        </Wrapper>
      </Box>
      <Footer></Footer>
    </>
  );
};

export default AboutUs;
