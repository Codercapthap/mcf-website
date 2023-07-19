import Header from "../../../components/Header";
import { Box, Typography } from "@mui/material";
import "../Profile.scss";
import Footer from "../../../components/Footer";
import Carousel from "react-material-ui-carousel";
import { Paper } from "@mui/material";
// import { useSwipeable } from 'react-swipeable';
// import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const Profile = () => {
  const { t } = useTranslation();
  document.title = `${t("conservation.profile.post4.title")} - MCF`;

  const carousel = [
    {
      src: "/images/conservation/cong-tac-kiem-ke-khao-sat-vuon-chim-vac-tai-xa-tan-my-huyen-tra-on-tinh-vinh-long/MG_3165-1160x773.jpg",
    },
    {
      src: "/images/conservation/cong-tac-kiem-ke-khao-sat-vuon-chim-vac-tai-xa-tan-my-huyen-tra-on-tinh-vinh-long/MG_3180-1440x960.jpg",
    },
    {
      src: "/images/conservation/cong-tac-kiem-ke-khao-sat-vuon-chim-vac-tai-xa-tan-my-huyen-tra-on-tinh-vinh-long/MG_3146-1440x960.jpg",
    },
    {
      src: "/images/conservation/cong-tac-kiem-ke-khao-sat-vuon-chim-vac-tai-xa-tan-my-huyen-tra-on-tinh-vinh-long/MG_3147-1440x960.jpg",
    },
    {
      src: "/images/conservation/cong-tac-kiem-ke-khao-sat-vuon-chim-vac-tai-xa-tan-my-huyen-tra-on-tinh-vinh-long/MG_3134-1440x960.jpg",
    },
    {
      src: "/images/conservation/cong-tac-kiem-ke-khao-sat-vuon-chim-vac-tai-xa-tan-my-huyen-tra-on-tinh-vinh-long/MG_3163-1-1440x960.jpg",
    },
  ];
  // const [activeStep, setActiveStep] = React.useState(0);

  //    const handleStepChange = (step: any) => {
  //      setActiveStep(step);
  //    };

  //    const handlers = useSwipeable({
  //      onSwipedLeft: () => setActiveStep((prev) => (prev + 1) % carousel.length),
  //      onSwipedRight: () =>
  //        setActiveStep((prev) => (prev - 1 + carousel.length) % carousel.length),
  //     // touchEventOptions: {passive: true},
  //     // preventDefaultTouchmoveEvent: true,
  //     trackMouse: true,
  //     preventScrollOnSwipe: true,
  //    });
  return (
    <>
      <Header></Header>
      <Box component="div" id="page" className="middle_inner">
        <Box component="div" className="content_wrap profile_page">
          <Box component="div" className="middle_content">
            <Box component="div" className="profiles opened-article">
              <Box component="article" className="cmsmasters_open_profile">
                <Box component="div" className="profile_content with_sidebar">
                  <Box component="div" className="cmsmasters_profile_content">
                    <Box
                      component="figure"
                      className="cmsmasters_img_wrap"
                      sx={{
                        "button:hover": {
                          color: "var(--btn-primary-bg) !important",
                          backgroundColor: "var(--btn-primary-bg) !important",
                        },
                      }}
                    >
                      <Carousel
                        autoPlay={false}
                        swipe={true}
                        cycleNavigation={false}
                        animation="slide"
                        navButtonsAlwaysInvisible={true}
                        duration={500}
                        height={657}
                        indicatorIconButtonProps={{
                          style: {
                            width: "12px",
                            height: "12px",
                            margin: "0px 5px 1px",
                            color: "var(--text-white)",
                            backgroundColor: "var(--text-white)",
                          },
                        }}
                        activeIndicatorIconButtonProps={{
                          style: {
                            color: "var(--btn-primary-bg)",
                            backgroundColor: "var(--btn-primary-bg)",
                          },
                        }}
                        indicatorContainerProps={{
                          style: {
                            width: "auto",
                            position: "absolute",
                            left: "auto",
                            right: "10px",
                            top: "0px",
                            bottom: "auto",
                            zIndex: "1",
                          },
                        }}
                        sx={{
                          zIndex: "0",
                        }}
                      >
                        {carousel.map((img, i) => (
                          <Paper key={i}>
                            <Link
                              to="#"
                              rel="ilightbox[img_12627_64987034241fd]"
                              title={t("conservation.profile.post4.title")}
                              className="preloader highImg"
                            >
                              <Box
                                component="img"
                                width="100%"
                                height="100%"
                                alt={t("conservation.profile.post4.title")}
                                src={`${img.src}`}
                                title={t("conservation.profile.post4.title")}
                                // srcSet="/images/conservation/cong-tac-kiem-ke-khao-sat-vuon-chim-vac-tai-xa-tan-my-huyen-tra-on-tinh-vinh-long/MG_3165-1160x773.jpg 1160w, /images/conservation/cong-tac-kiem-ke-khao-sat-vuon-chim-vac-tai-xa-tan-my-huyen-tra-on-tinh-vinh-long/MG_3165-300x200.jpg 300w, /images/conservation/cong-tac-kiem-ke-khao-sat-vuon-chim-vac-tai-xa-tan-my-huyen-tra-on-tinh-vinh-long/MG_3165-1024x683.jpg 1024w, /images/conservation/cong-tac-kiem-ke-khao-sat-vuon-chim-vac-tai-xa-tan-my-huyen-tra-on-tinh-vinh-long/MG_3165-768x512.jpg 768w, /images/conservation/cong-tac-kiem-ke-khao-sat-vuon-chim-vac-tai-xa-tan-my-huyen-tra-on-tinh-vinh-long/MG_3165-1536x1024.jpg 1536w, /images/conservation/cong-tac-kiem-ke-khao-sat-vuon-chim-vac-tai-xa-tan-my-huyen-tra-on-tinh-vinh-long/MG_3165-2048x1365.jpg 2048w, /images/conservation/cong-tac-kiem-ke-khao-sat-vuon-chim-vac-tai-xa-tan-my-huyen-tra-on-tinh-vinh-long/MG_3165-580x387.jpg 580w, /images/conservation/cong-tac-kiem-ke-khao-sat-vuon-chim-vac-tai-xa-tan-my-huyen-tra-on-tinh-vinh-long/MG_3165-860x573.jpg 860w, /images/conservation/cong-tac-kiem-ke-khao-sat-vuon-chim-vac-tai-xa-tan-my-huyen-tra-on-tinh-vinh-long/MG_3165-1440x960.jpg 1440w, /images/conservation/cong-tac-kiem-ke-khao-sat-vuon-chim-vac-tai-xa-tan-my-huyen-tra-on-tinh-vinh-long/MG_3165-440x293.jpg 440w"
                                sizes="(max-width: 1160px) 100vw, 1160px"
                              ></Box>
                            </Link>
                          </Paper>
                        ))}
                      </Carousel>
                    </Box>
                    <Box
                      component="header"
                      className="cmsmasters_profile_header"
                    >
                      <Typography
                        variant="h2"
                        sx={{
                          color: "#343434",
                          fontSize: "36px",
                          lineHeight: "42px",
                          letterSpacing: "normal",
                          fontWeight: "300",
                          fontStyle: "normal",
                          textTransform: "none",
                          textDecoration: "none",
                        }}
                      >
                        {t("conservation.profile.post4.title")}
                      </Typography>
                      {/* <Typography
                        variant="h4"
                        sx={{
                          margin: "6px 0 0",
                          padding: "0",
                          color: "#53d572",
                          fontFamily:
                            "roboto,Tahoma,Geneva,Kalimati,sans-serif",
                          fontSize: "16px",
                          lineHeight: "22px",
                          fontWeight: "700",
                          fontStyle: "normal",
                          textTransform: "uppercase",
                          textDecoration: "none",
                          letterSpacing: ".1em",
                        }}
                      >
                        Phó Chủ tịch Hội đồng MCF
                      </Typography> */}
                    </Box>
                    <Box
                      component="div"
                      id="cmsmasters_row_647f548cc00915_58656243"
                      className="cmsmasters_row"
                    >
                      <Box
                        component="div"
                        className="cmsmasters_row_outer_parent"
                      >
                        <Box component="div" className="cmsmasters_row_inner">
                          <Box
                            component="div"
                            className="cmsmasters_row_margin"
                          >
                            <Box
                              component="div"
                              className="cmsmasters_column one_first"
                            >
                              <Box
                                component="div"
                                dangerouslySetInnerHTML={{
                                  __html: `${t(
                                    "conservation.profile.post4.content"
                                  )}`,
                                }}
                              ></Box>
                              <Box
                                component="iframe"
                                style={{ width: "560px", height: "315px" }}
                                src="https://www.youtube.com/embed/oJnwG_zJWt0?wmode=opaque"
                                frameBorder={0}
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                              ></Box>
                            </Box>
                          </Box>
                        </Box>
                      </Box>
                    </Box>
                    <Box component="aside" className="share_posts">
                      <Typography
                        variant="h4"
                        padding="0"
                        margin="0 0 20px"
                        className="share_posts_title"
                        sx={{
                          fontFamily:
                            "roboto,Tahoma,Geneva,Kalimati,sans-serif",
                          fontSize: "16px",
                          lineHeight: "22px",
                          fontWeight: "700",
                          fontStyle: "normal",
                          textTransform: "uppercase",
                          textDecoration: "none",
                          letterSpacing: ".1em",
                        }}
                      >
                        {t("profileDetail.like_this_profile")}
                      </Typography>
                      <Box component="div" className="share_posts_inner">
                        <Link to="https://www.facebook.com/sharer/sharer.php?display=popup&u=https%3A%2F%2Fmcf.com.vn%2Fprofile%2Fvu-van-hieu-2%2F">
                          Facebook
                        </Link>
                        <Link to="https://twitter.com/intent/tweet?text=Check+out+%27%C3%94ng+V%C5%A9+V%C4%83n+Hi%E1%BB%87u%27+on+MCF+website&amp;url=https%3A%2F%2Fmcf.com.vn%2Fprofile%2Fvu-van-hieu-2%2F">
                          Twitter
                        </Link>
                        <Link to="https://pinterest.com/pin/create/button/?url=https%3A%2F%2Fmcf.com.vn%2Fprofile%2Fvu-van-hieu-2%2F&amp;media=https%3A%2F%2Fmcf.com.vn%2Fwp-content%2Fuploads%2F2015%2F04%2FVu-Van-Hieu.png&amp;description=Ông%20Vũ%20Văn%20Hiệu">
                          Pinterest
                        </Link>
                      </Box>
                    </Box>
                    <Box component="aside" className="cmsmasters_single_slider">
                      <Typography
                        variant="h4"
                        className="cmsmasters_single_slider_title"
                      >
                        {t("profileDetail.more_projects")}
                      </Typography>
                      <Typography
                        variant="h5"
                        className="cmsmasters_single_slider_no_items"
                      >
                        {t("profileDetail.project_found")}
                      </Typography>
                    </Box>
                  </Box>
                </Box>
                <Box component="div" className="profile_sidebar">
                  <Box component="div" className="profile_details">
                    <Typography variant="h4" className="profile_details_title">
                      {t("profileDetail.project_info")}
                    </Typography>
                    <Box component="div" className="profile_details_item">
                      <Box
                        component="div"
                        className="profile_details_item_title"
                      >
                        {t("profileDetail.likes")}
                      </Box>
                      <Box
                        component="div"
                        className="profile_details_item_desc"
                      >
                        <Box
                          component="span"
                          className="cmsmasters_likes cmsmasters_profile_likes"
                        >
                          <Link
                            to="#"
                            className="cmsmasters_theme_icon_like icon-heart"
                          >
                            <Box component="span">0</Box>
                          </Link>
                        </Box>
                      </Box>
                    </Box>
                    <Box component="div" className="profile_details_item">
                      <Box
                        component="div"
                        className="profile_details_item_title"
                      >
                        {t("profileDetail.author")}
                      </Box>
                      <Box
                        component="div"
                        className="profile_details_item_desc"
                      >
                        <Link
                          to="/author/lvloi/"
                          title="Projects by Ly Van Loi"
                          rel="author"
                        >
                          <Box component="span">
                            {t(
                              "conservation.profile.post4.profile_detail.author"
                            )}
                          </Box>
                        </Link>
                      </Box>
                    </Box>
                    <Box component="div" className="profile_details_item">
                      <Box
                        component="div"
                        className="profile_details_item_title"
                      >
                        {t("profileDetail.date")}
                      </Box>
                      <Box
                        component="div"
                        className="profile_details_item_desc"
                      >
                        <Box
                          component="abbr"
                          title={t(
                            "conservation.profile.post4.profile_detail.date"
                          )}
                        >
                          {t("conservation.profile.post4.profile_detail.date")}
                        </Box>
                      </Box>
                    </Box>
                    <Box component="div" className="profile_details_item">
                      <Box
                        component="div"
                        className="profile_details_item_title"
                      >
                        {t("profileDetail.categories")}
                      </Box>
                      <Box
                        component="div"
                        className="profile_details_item_desc"
                      >
                        <Box
                          component="span"
                          className="cmsmasters_profile_category"
                        >
                          <Link
                            to="/pj-categs/conservation/"
                            className="cmsmasters_cat_color cmsmasters_cat_153"
                            rel="category tag"
                          >
                            {t(
                              "conservation.profile.post4.profile_detail.categories"
                            )}
                          </Link>
                        </Box>
                      </Box>
                    </Box>
                    <Box component="div" className="profile_details_item">
                      <Box
                        component="div"
                        className="profile_details_item_title"
                      >
                        {t("profileDetail.time")}
                      </Box>
                      <Box
                        component="div"
                        className="profile_details_item_desc"
                      >
                        {t("conservation.profile.post4.profile_detail.time")}
                      </Box>
                    </Box>
                    <Box component="div" className="profile_details_item">
                      <Box
                        component="div"
                        className="profile_details_item_title"
                      >
                        {t("profileDetail.budget")}
                      </Box>
                      <Box
                        component="div"
                        className="profile_details_item_desc"
                      >
                        {t("conservation.profile.post4.profile_detail.budget")}
                      </Box>
                    </Box>
                    <Box component="div" className="profile_details_item">
                      <Box
                        component="div"
                        className="profile_details_item_title"
                      >
                        {t("profileDetail.investor")}
                      </Box>
                      <Box
                        component="div"
                        className="profile_details_item_desc"
                      >
                        {t(
                          "conservation.profile.post4.profile_detail.investor"
                        )}
                      </Box>
                    </Box>
                    <Box component="div" className="profile_details_item">
                      <Box
                        component="div"
                        className="profile_details_item_title"
                      >
                        {t("profileDetail.implemented")}
                      </Box>
                      <Box
                        component="div"
                        className="profile_details_item_desc"
                      >
                        {t(
                          "conservation.profile.post4.profile_detail.implemented"
                        )}
                      </Box>
                    </Box>
                    <Box component="div" className="profile_details_item">
                      <Box
                        component="div"
                        className="profile_details_item_title"
                      >
                        {t("profileDetail.consultant")}
                      </Box>
                      <Box
                        component="div"
                        className="profile_details_item_desc"
                      >
                        {t(
                          "conservation.profile.post4.profile_detail.consultant"
                        )}
                      </Box>
                    </Box>
                    <Box component="div" className="profile_details_item">
                      <Box
                        component="div"
                        className="profile_details_item_title"
                      >
                        {t("profileDetail.status")}
                      </Box>
                      <Box
                        component="div"
                        className="profile_details_item_desc"
                      >
                        {t("conservation.profile.post4.profile_detail.status")}
                      </Box>
                    </Box>
                  </Box>
                  {/* <Box component="div" className="profile_social_icons">
                    <Typography
                      variant="h4"
                      className="profile_social_icons_title"
                    >
                      Liên kết
                    </Typography>
                    <Box component="ul" className="profile_social_icons_list">
                      <Box component="li">
                        <Link
                          to="#"
                          className="cmsmasters_social_icon cmsmasters-icon-custom-googleplus-rect icon-googleplus-rect"
                        ></Link>
                      </Box>
                      <Box component="li">
                        <Link
                          to="#"
                          className="cmsmasters_social_icon cmsmasters-icon-phone icon-phone"
                        ></Link>
                      </Box>
                    </Box>
                  </Box> */}
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box component="div" className="post_nav">
          <Box
            component="span"
            className="cmsmasters_prev_post post_nav_prev_arrow"
          >
            <Link
              to="/project/bai-viet-sinh-ke-01/"
              rel="prev"
              className="icon-angle-left"
            >
              {t("livelihoods.profile.post3.title")}
            </Link>
          </Box>
          <Box
            component="span"
            className="cmsmasters_next_post post_nav_next_arrow"
          >
            <Link
              to="/project/vai-tro-cua-dat-ngap-nuoc-doi-voi-an-ninh-nguon-nuoc-cho-khu-vuc-song-mekong/"
              rel="next"
              className="icon-angle-right"
            >
              {t("conservation.profile.post3.title")}
            </Link>
          </Box>
        </Box>
      </Box>
      {/* <AnimatePresence>
        {toggleModal &&
          (<ToggleModalImg
            src="/images/conservation/cong-tac-kiem-ke-khao-sat-vuon-chim-vac-tai-xa-tan-my-huyen-tra-on-tinh-vinh-long/.jpg"
            setToggleModal={setToggleModal}
          >

          </ToggleModalImg>
          )
        }

      </AnimatePresence> */}
      <Footer></Footer>
    </>
  );
};
export default Profile;
