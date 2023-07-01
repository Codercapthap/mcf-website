import Header from "@/components/Header";
import Headline from "@/components/Headline";
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Box,
  Typography,
} from "@mui/material";
import { Wrapper, theme } from "@/styles";
import "./AboutUs.scss";
import { Link } from "react-router-dom";
import Footer from "@/components/Footer";

const TheMcfCouncil = [
  {
    name: "Dr Duong Van Ni",
    image: "images/people/Duong-Van-Ni.png",
    position: "CHAIRPERSON AND DIRECTOR",
    description: "",
  },
  {
    name: "Mr Vu Van Hieu",
    image: "images/people/Vu-Van-Hieu.png",
    position: "VICE CHAIRPERSON",
    description:
      "Mr Vu Van Hieu is the cofounder and a director of the Australian company Titan Dealer Management Solutions",
  },
  {
    name: "Ms Nguyen Thi Kieu Vuong",
    image: "images/people/Nguyen-Thi-Kieu-Vuong.png",
    position: "VICE CHAIRPERSON",
    description:
      "Ms Nguyen Thi Kieu Vuong is a lawyer of the Vietnam Bar Federation and Ho Chi Minh City Bar Association and has over 18 years legal experience",
  },
];

const TheSupervisoryCouncil = [
  {
    name: "Dr David Wilmoth",
    image: "images/people/david-wilmoth-400x490.jpg",
    position: "CHAIRPERSON OF THE SUPERVISORY COUNCIL",
  },
  {
    name: "Dr Ho Le Khoa",
    image: "images/people/Ho-Van-Khoa-580x490.jpg",
    position: "MEMBER OF THE SUPERVISORY COUNCIL",
  },
];

const MemberOfMcf = [
  {
    name: "Mr. Ly Van Loi",
    image: "images/people/ly-van-loi-1-580x490.jpg",
  },
  {
    name: "Assoc. Prof. Dr LE ANH TUAN",
    image: "images/people/le-anh-tuan-1-580x490.jpg",
  },
  {
    name: "Assoc. Prof. Dr. NGUYEN THANH TUNG",
    image: "images/people/nguyen-thanh-tung-1-e1624288880348-580x490.jpg",
  },
  {
    name: "Mr Nguyen Hoai Bao",
    image: "images/people/nguyen-hoai-bao.jpg",
  },
  {
    name: "Assoc. Prof. Truong Hoang Dan",
    image: "images/people/Truong-Hoang-Dan_gioithieu-580x490.jpg",
  },
];

const AboutUs = () => {
  document.title = `About Us - MCF`;
  return (
    <>
      <Header></Header>
      <Headline
        image="images/headlines/mcf_ceremony_banner-scaled.jpg"
        title="About Us"
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
              THE MEKONG CONSERVANCY AND RESEARCH ASSISTANCE FOUNDATION
            </Typography>
            <Typography fontWeight="300" variant="h6" marginBottom="20px">
              The Mekong Conservancy Foundation – MCF
            </Typography>
          </Box>
          <Box
            component="img"
            src="images/others/thanh-vien-MCF-580x387.jpg"
            maxWidth="100%"
          ></Box>
          <Box color="var(--text-grey)" marginTop="50px">
            <Typography fontWeight="300" variant="body1">
              The Mekong Conservancy & Research Assistance Foundation (MCF) was
              founded and run under Decision No. 567/QD/BNV dated July 24, 2019.
              MCF focuses on research and problem solving in the fields of
              livelihood, education, environment, and natural resources in order
              to contribute to the Mekong Delta’s long-term development. The MCF
              has successfully conducted numerous projects in the aforementioned
              sectors, establishing a vast network of both national and
              international partners.
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
            <Typography fontWeight="300" variant="h3">
              THE MCF COUNCIL
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
                    <CardMedia image={information.image} className="card-media">
                      <Box className="card-hover"></Box>
                    </CardMedia>
                    <CardContent className="card-content">
                      <Typography
                        variant="h5"
                        component="div"
                        gutterBottom
                        className="card-title"
                      >
                        {information.name}
                      </Typography>
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
                      >
                        {information.description}
                      </Typography>
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
            <Typography fontWeight="300" variant="h3">
              THE SUPERVISORY COUNCIL
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
                    <CardMedia image={information.image} className="card-media">
                      <Box className="card-hover"></Box>
                    </CardMedia>
                    <CardContent className="card-content">
                      <Typography
                        variant="h5"
                        component="div"
                        gutterBottom
                        className="card-title"
                      >
                        {information.name}
                      </Typography>
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
            <Typography fontWeight="300" variant="h3">
              MEMBER OF MCF
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
                    <CardMedia image={information.image} className="card-media">
                      <Box className="card-hover"></Box>
                    </CardMedia>
                    <CardContent className="card-content">
                      <Typography
                        variant="h5"
                        component="div"
                        gutterBottom
                        className="card-title"
                      >
                        {information.name}
                      </Typography>
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
