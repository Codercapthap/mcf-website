import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import Header from "@/components/Header";
import ToggleModalImg from "@/components/ToggleModalImg";
import { Box, Link, Typography } from "@mui/material";
import "../Profile.scss";
import Footer from "@/components/Footer";
import { useTranslation } from "react-i18next";

const Profile = () => {
  const { t } = useTranslation();

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
                        // href="https://mcf.com.vn/wp-content/uploads/2015/04/Vu-Van-Hieu.png"
                        rel="ilightbox[img_12627_64987034241fd]"
                        title="Cập nhật chiến lược quản lý nước để phục hồi sinh cảnh đất ngập nước Vườn quốc gia Tràm chim trong bối cảnh biến đổi khí hậu và phát triển ở thượng nguồn"
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
                          alt="Cập nhật chiến lược quản lý nước để phục hồi sinh cảnh đất ngập nước Vườn quốc gia Tràm chim trong bối cảnh biến đổi khí hậu và phát triển ở thượng nguồn"
                          src="http://localhost:5173/images/conservation/chien-luoc-quan-li-nuoc/chien-luoc-quan-li-nuoc_Bao-ton-1160x635.jpg"
                          title="Cập nhật chiến lược quản lý nước để phục hồi sinh cảnh đất ngập nước Vườn quốc gia Tràm chim trong bối cảnh biến đổi khí hậu và phát triển ở thượng nguồn"
                          srcSet="http://localhost:5173/images/conservation/chien-luoc-quan-li-nuoc/chien-luoc-quan-li-nuoc_Bao-ton-1160x635.jpg 1160w, http://localhost:5173/images/conservation/chien-luoc-quan-li-nuoc/chien-luoc-quan-li-nuoc_Bao-ton-300x164.jpg 300w, http://localhost:5173/images/conservation/chien-luoc-quan-li-nuoc/chien-luoc-quan-li-nuoc_Bao-ton-1024x560.jpg 1024w, http://localhost:5173/images/conservation/chien-luoc-quan-li-nuoc/chien-luoc-quan-li-nuoc_Bao-ton-768x420.jpg 768w, http://localhost:5173/images/conservation/chien-luoc-quan-li-nuoc/chien-luoc-quan-li-nuoc_Bao-ton-1536x840.jpg 1536w, http://localhost:5173/images/conservation/chien-luoc-quan-li-nuoc/chien-luoc-quan-li-nuoc_Bao-ton-2048x1121.jpg 2048w, http://localhost:5173/images/conservation/chien-luoc-quan-li-nuoc/chien-luoc-quan-li-nuoc_Bao-ton-580x317.jpg 580w, http://localhost:5173/images/conservation/chien-luoc-quan-li-nuoc/chien-luoc-quan-li-nuoc_Bao-ton-860x471.jpg 860w, http://localhost:5173/images/conservation/chien-luoc-quan-li-nuoc/chien-luoc-quan-li-nuoc_Bao-ton-1440x788.jpg 1440w, http://localhost:5173/images/conservation/chien-luoc-quan-li-nuoc/chien-luoc-quan-li-nuoc_Bao-ton-440x241.jpg 440w"
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
                        Cập nhật chiến lược quản lý nước để phục hồi sinh cảnh
                        đất ngập nước Vườn quốc gia Tràm chim trong bối cảnh
                        biến đổi khí hậu và phát triển ở thượng nguồn
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
                                    "conservation.profile.post1.content"
                                  )}`,
                                }}
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
                        Bạn thích hồ sơ này?
                      </Typography>
                      <Box component="div" className="share_posts_inner">
                        <Link href="https://www.facebook.com/sharer/sharer.php?display=popup&u=https%3A%2F%2Fmcf.com.vn%2Fprofile%2Fvu-van-hieu-2%2F">
                          Facebook
                        </Link>
                        <Link href="https://twitter.com/intent/tweet?text=Check+out+%27%C3%94ng+V%C5%A9+V%C4%83n+Hi%E1%BB%87u%27+on+MCF+website&amp;url=https%3A%2F%2Fmcf.com.vn%2Fprofile%2Fvu-van-hieu-2%2F">
                          Twitter
                        </Link>
                        <Link href="https://pinterest.com/pin/create/button/?url=https%3A%2F%2Fmcf.com.vn%2Fprofile%2Fvu-van-hieu-2%2F&amp;media=https%3A%2F%2Fmcf.com.vn%2Fwp-content%2Fuploads%2F2015%2F04%2FVu-Van-Hieu.png&amp;description=Ông%20Vũ%20Văn%20Hiệu">
                          Pinterest
                        </Link>
                      </Box>
                    </Box>
                    <Box component="aside" className="cmsmasters_single_slider">
                      <Typography
                        variant="h4"
                        className="cmsmasters_single_slider_title"
                      >
                        Các dự án khác
                      </Typography>
                      <Typography
                        variant="h5"
                        className="cmsmasters_single_slider_no_items"
                      >
                        Danh sách trống
                      </Typography>
                    </Box>
                  </Box>
                </Box>
                <Box component="div" className="profile_sidebar">
                  <Box component="div" className="profile_details">
                    <Typography variant="h4" className="profile_details_title">
                      Thông tin dự án
                    </Typography>
                    <Box component="div" className="profile_details_item">
                      <Box
                        component="div"
                        className="profile_details_item_title"
                      >
                        Lượt thích:
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
                            href="#"
                            className="cmsmasters_theme_icon_like icon-heart"
                            sx={{}}
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
                        Người đăng:
                      </Box>
                      <Box
                        component="div"
                        className="profile_details_item_desc"
                      >
                        <Link
                          href="http://localhost:5173/author/lvloi/"
                          title="Projects by Ly Van Loi"
                          rel="author"
                        >
                          <Box component="span">Ly Van Loi</Box>
                        </Link>
                      </Box>
                    </Box>
                    <Box component="div" className="profile_details_item">
                      <Box
                        component="div"
                        className="profile_details_item_title"
                      >
                        Ngày đăng
                      </Box>
                      <Box
                        component="div"
                        className="profile_details_item_desc"
                      >
                        <Box component="abbr" title="26 Tháng Năm, 2023">
                          26 Tháng Năm, 2023
                        </Box>
                      </Box>
                    </Box>
                    <Box component="div" className="profile_details_item">
                      <Box
                        component="div"
                        className="profile_details_item_title"
                      >
                        Chuyên mục:
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
                            href="https://mcf.com.vn/pl-categs/hoi-dong-mcf/"
                            className="cmsmasters_cat_color cmsmasters_cat_153"
                            rel="category tag"
                          >
                            Bảo tồn
                          </Link>
                        </Box>
                      </Box>
                    </Box>
                    <Box component="div" className="profile_details_item">
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
                        Vườn Quốc gia Tràm Chim
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
                        WWF - Việt Nam
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
                        Đã hoàn thành
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
                          href="#"
                          className="cmsmasters_social_icon cmsmasters-icon-custom-googleplus-rect icon-googleplus-rect"
                        ></Link>
                      </Box>
                      <Box component="li">
                        <Link
                          href="#"
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
              href="http://localhost:5173/project/dong-chay-cua-van-hoa-va-su-song"
              rel="prev"
              className="icon-angle-left"
            >
              Dòng chảy của Văn hóa và Sự sống
            </Link>
          </Box>
          <Box
            component="span"
            className="cmsmasters_next_post post_nav_next_arrow"
          >
            {/* <Link
              href="http://localhost:5173/profile/pgs-ts-nguyen-thanh-tung/"
              rel="next"
              className="icon-angle-right"
            >
              PGS.TS Nguyễn Thanh Tùng
            </Link> */}
          </Box>
        </Box>
      </Box>
      <AnimatePresence>
        {toggleModal && (
          <ToggleModalImg
            src="http://localhost:5173/images/conservation/chien-luoc-quan-li-nuoc/chien-luoc-quan-li-nuoc_Bao-ton-1160x635.jpg"
            setToggleModal={setToggleModal}
          ></ToggleModalImg>
        )}
      </AnimatePresence>
      <Footer></Footer>
    </>
  );
};
export default Profile;
