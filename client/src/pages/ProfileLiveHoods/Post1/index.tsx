import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import Header from "../../../components/Header";
import ToggleModalImg from "../../../components/ToggleModalImg";
import { Box, Typography } from "@mui/material";
import "../Profile.scss";
import Footer from "../../../components/Footer";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
const Profile = () => {
  const { t } = useTranslation();
  document.title = `${t("livelihoods.profile.post1.title")} - MCF`;
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
                        title={t("livelihoods.profile.post1.title")}
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
                          alt={t("livelihoods.profile.post1.title")}
                          src="/images/livelihoods/profile/ky-ket-dao-tao-sinh-vien-thuc-hanh-ngan-han/sinh-ke.jpg"
                          title={t("livelihoods.profile.post1.title")}
                          srcSet="/images/livelihoods/profile/ky-ket-dao-tao-sinh-vien-thuc-hanh-ngan-han/sinh-ke-1160x564.jpg 1160w, /images/livelihoods/profile/ky-ket-dao-tao-sinh-vien-thuc-hanh-ngan-han/sinh-ke-300x146.jpg 300w, /images/livelihoods/profile/ky-ket-dao-tao-sinh-vien-thuc-hanh-ngan-han/sinh-ke-1024x498.jpg 1024w, /images/livelihoods/profile/ky-ket-dao-tao-sinh-vien-thuc-hanh-ngan-han/sinh-ke-768x373.jpg 768w, /images/livelihoods/profile/ky-ket-dao-tao-sinh-vien-thuc-hanh-ngan-han/sinh-ke-580x282.jpg 580w, /images/livelihoods/profile/ky-ket-dao-tao-sinh-vien-thuc-hanh-ngan-han/sinh-ke-860x418.jpg 860w, /images/livelihoods/profile/ky-ket-dao-tao-sinh-vien-thuc-hanh-ngan-han/sinh-ke-440x214.jpg 440w, /images/livelihoods/profile/ky-ket-dao-tao-sinh-vien-thuc-hanh-ngan-han/sinh-ke.jpg 1348w"
                          sizes="(max-width: 1160px) 100vw, 1160px"
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
                        {t("livelihoods.profile.post1.title")}
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
                                  component="div"
                                  dangerouslySetInnerHTML={{
                                    __html: `${t(
                                      "livelihoods.profile.post1.content"
                                    )}`,
                                  }}
                                ></Box>

                                <Box
                                  component="div"
                                  id="gallery-1"
                                  className="gallery gallery-columns-3"
                                >
                                  <Box
                                    component="figure"
                                    className="gallery-item"
                                  >
                                    <Box
                                      component="div"
                                      className="gallery-icon portrait"
                                    >
                                      <Box
                                        component="img"
                                        loading="lazy"
                                        aria-describedby="gallery-cap"
                                        src="/images/livelihoods/profile/ky-ket-dao-tao-sinh-vien-thuc-hanh-ngan-han/sinhke_kyket_1-150x150.jpg"
                                        srcSet="/images/livelihoods/profile/ky-ket-dao-tao-sinh-vien-thuc-hanh-ngan-han/sinhke_kyket_1-150x150.jpg 150w, /images/livelihoods/profile/ky-ket-dao-tao-sinh-vien-thuc-hanh-ngan-han/sinhke_kyket_1-60x60.jpg 60w, /images/livelihoods/profile/ky-ket-dao-tao-sinh-vien-thuc-hanh-ngan-han/sinhke_kyket_1-300x300.jpg 300w, /images/livelihoods/profile/ky-ket-dao-tao-sinh-vien-thuc-hanh-ngan-han/sinhke_kyket_1-320x320.jpg 320w, /images/livelihoods/profile/ky-ket-dao-tao-sinh-vien-thuc-hanh-ngan-han/sinhke_kyket_1-100x100.jpg 100w"
                                        sizes="(max-width: 150px) 100vw, 150px"
                                      ></Box>
                                    </Box>
                                    <Box
                                      component="figcaption"
                                      id="gallery-cap"
                                      className="wp-caption-text gallery-caption"
                                    >
                                      Sinh viên khoan lấy mẫu đất
                                    </Box>
                                  </Box>
                                  <Box
                                    component="figure"
                                    className="gallery-item"
                                  >
                                    <Box
                                      component="div"
                                      className="gallery-icon portrait"
                                    >
                                      <Box
                                        component="img"
                                        loading="lazy"
                                        aria-describedby="gallery-cap"
                                        src="/images/livelihoods/profile/ky-ket-dao-tao-sinh-vien-thuc-hanh-ngan-han/hoat-dong-thuc-te_sinh-ke-150x150.jpg"
                                        srcSet="/images/livelihoods/profile/ky-ket-dao-tao-sinh-vien-thuc-hanh-ngan-han/hoat-dong-thuc-te_sinh-ke-150x150.jpg 150w, /images/livelihoods/profile/ky-ket-dao-tao-sinh-vien-thuc-hanh-ngan-han/hoat-dong-thuc-te_sinh-ke-60x60.jpg 60w, /images/livelihoods/profile/ky-ket-dao-tao-sinh-vien-thuc-hanh-ngan-han/hoat-dong-thuc-te_sinh-ke-300x300.jpg 300w, /images/livelihoods/profile/ky-ket-dao-tao-sinh-vien-thuc-hanh-ngan-han/hoat-dong-thuc-te_sinh-ke-320x320.jpg 320w, /images/livelihoods/profile/ky-ket-dao-tao-sinh-vien-thuc-hanh-ngan-han/hoat-dong-thuc-te_sinh-ke-100x100.jpg 100w"
                                        sizes="(max-width: 150px) 100vw, 150px"
                                      ></Box>
                                    </Box>
                                    <Box
                                      component="figcaption"
                                      id="gallery-cap"
                                      className="wp-caption-text gallery-caption"
                                    >
                                      Sinh viên khoan lấy mẫu đất
                                    </Box>
                                  </Box>
                                </Box>
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
                              "livelihoods.profile.post1.profile_detail.author"
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
                            "livelihoods.profile.post1.profile_detail.date"
                          )}
                        >
                          {t("livelihoods.profile.post1.profile_detail.date")}
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
                            to="/pj-categs/livelihoods/"
                            className="cmsmasters_cat_color cmsmasters_cat_153"
                            rel="category tag"
                          >
                            {t(
                              "livelihoods.profile.post1.profile_detail.categories"
                            )}
                          </Link>
                        </Box>
                      </Box>
                    </Box>
                    {/* <Box component="div" className="profile_details_item">
                      <Box
                        component="div"
                        className="profile_details_item_title"
                      >
                        Triển khai:
                      </Box>
                      <Box
                        component="div"
                        className="profile_details_item_desc"
                      >
                        MCF
                      </Box>
                    </Box>
                    <Box component="div" className="profile_details_item">
                      <Box
                        component="div"
                        className="profile_details_item_title"
                      >
                        Kết thúc:
                      </Box>
                      <Box
                        component="div"
                        className="profile_details_item_desc"
                      >
                        2022
                      </Box>
                    </Box>
                    <Box component="div" className="profile_details_item">
                      <Box
                        component="div"
                        className="profile_details_item_title"
                      >
                        Địa điểm:
                      </Box>
                      <Box
                        component="div"
                        className="profile_details_item_desc"
                      >
                        Đồng Tháp, Cần Thơ, Vĩnh Long, Sóc Trăng
                      </Box>
                    </Box>
                    <Box component="div" className="profile_details_item">
                      <Box
                        component="div"
                        className="profile_details_item_title"
                      >
                        Tài trợ:
                      </Box>
                      <Box
                        component="div"
                        className="profile_details_item_desc"
                      >
                        OXFAM
                      </Box>
                    </Box>
                    <Box component="div" className="profile_details_item">
                      <Box
                        component="div"
                        className="profile_details_item_title"
                      >
                        Tình trạng:
                      </Box>
                      <Box
                        component="div"
                        className="profile_details_item_desc"
                      >
                        Hoàn thành
                      </Box>
                    </Box> */}
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
                  </Box>  */}
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
              to="/project/thanh-lap-cong-ty-co-phan-mcf-viet-nam/"
              rel="prev"
              className="icon-angle-left"
            >
              {t("livelihoods.profile.post2.title")}
            </Link>
          </Box>
          <Box
            component="span"
            className="cmsmasters_next_post post_nav_next_arrow"
          >
            <Link
              to="/project/tien-trinh-cua-bao-tang-lich-su-tu-nhien-mekong/"
              rel="next"
              className="icon-angle-right"
            >
              {t("museum.profile.post1.title")}
            </Link>
          </Box>
        </Box>
      </Box>
      <AnimatePresence>
        {toggleModal && (
          <ToggleModalImg
            src="/images/livelihoods/profile/ky-ket-dao-tao-sinh-vien-thuc-hanh-ngan-han/sinh-ke.jpg"
            setToggleModal={setToggleModal}
          ></ToggleModalImg>
        )}
      </AnimatePresence>
      <Footer></Footer>
    </>
  );
};
export default Profile;
