import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import Header from "@/components/Header";
import ToggleModalImg from "@/components/ToggleModalImg";
import { Box, Typography } from "@mui/material";
import "../Profile.scss";
import Footer from "@/components/Footer";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
const Profile = () => {
  const { t } = useTranslation();
  document.title = `${t("about-us.member_of_mcf.ly-van-loi.name")} - MCF`;
  const [toggleModal, setToggleModal] = useState(false);
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
                    <Box component="figure" className="cmsmasters_img_wrap">
                      <Link
                        to="#"
                        rel="ilightbox[img_12627_64987034241fd]"
                        title={t("about-us.member_of_mcf.ly-van-loi.name")}
                        className="preloader highImg"
                        onClick={() => {
                          document.body.style.overflow = "hidden";
                          setToggleModal(true);
                        }}
                      >
                        <Box
                          component="img"
                          width="100%"
                          height="100%"
                          alt={t("about-us.member_of_mcf.ly-van-loi.name")}
                          src="http://localhost:5173/images/people/ly-van-loi-1-960x610.jpg"
                          title={t("about-us.member_of_mcf.ly-van-loi.name")}
                          sizes="(max-width: 410px) 100vw, 410px"
                        ></Box>
                      </Link>
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
                        {t("about-us.member_of_mcf.ly-van-loi.name")}
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
                              <Box component="div">
                                <Box
                                  component="p"
                                  dangerouslySetInnerHTML={{
                                    __html: `${t(
                                      "about-us.member_of_mcf.ly-van-loi.story"
                                    )}`,
                                  }}
                                ></Box>
                              </Box>
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
                  </Box>
                </Box>
                <Box component="div" className="profile_sidebar">
                  <Box component="div" className="profile_details">
                    <Typography variant="h4" className="profile_details_title">
                      {t("profileDetail.profile_detail")}
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
                        {t("profileDetail.email")}
                      </Box>
                      <Box
                        component="div"
                        className="profile_details_item_desc"
                      >
                        lvloi@ctu.edu.vn
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
                            to="/pl-categs/member-of-mcf/"
                            className="cmsmasters_cat_color cmsmasters_cat_153"
                            rel="category tag"
                          >
                            {t("about-us.member_of_mcf.member_of_mcf")}
                          </Link>
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                  <Box component="div" className="profile_social_icons">
                    <Typography
                      variant="h4"
                      className="profile_social_icons_title"
                    >
                      {t("profileDetail.social")}
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
                  </Box>
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
              to="/profile/ong-nguyen-hoai-bao/"
              rel="prev"
              className="icon-angle-left"
            >
              {t("about-us.member_of_mcf.nguyen-hoai-bao.name")}
            </Link>
          </Box>
          <Box
            component="span"
            className="cmsmasters_next_post post_nav_next_arrow"
          >
            <Link
              to="/profile/pgs-ts-nguyen-thanh-tung/"
              rel="next"
              className="icon-angle-right"
            >
              {t("about-us.member_of_mcf.nguyen-thanh-tung.name")}
            </Link>
          </Box>
        </Box>
      </Box>
      <AnimatePresence>
        {toggleModal && (
          <ToggleModalImg
            src="http://localhost:5173/images/people/ly-van-loi-1-960x610.jpg"
            setToggleModal={setToggleModal}
          ></ToggleModalImg>
        )}
      </AnimatePresence>
      <Footer></Footer>
    </>
  );
};
export default Profile;
