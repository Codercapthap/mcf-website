import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import Header from "../../../components/Header";
import ToggleModalImg from "../../../components/ToggleModalImg";
import {
  Box,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableRow,
} from "@mui/material";
import "../Profile.scss";
import Footer from "../../../components/Footer";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const Profile = () => {
  const { t } = useTranslation();
  document.title = `${t("livelihoods.profile.post2.title")} - MCF`;

  const [toggleModal, setToggleModal] = useState(false);
  function createData(code: String, profession: String) {
    return { code, profession };
  }
  const rows = [
    createData(
      `0118 ${t("livelihoods.profile.post2.major")}`,
      `${t("livelihoods.profile.post2.row-1")}`
    ),
    createData("0161", `${t("livelihoods.profile.post2.row-2")}`),
    createData("0162", `${t("livelihoods.profile.post2.row-3")}`),
    createData("0163", `${t("livelihoods.profile.post2.row-4")}`),
    createData("0322", `${t("livelihoods.profile.post2.row-5")}`),
    createData("1629", `${t("livelihoods.profile.post2.row-6")}`),
    createData("4632", `${t("livelihoods.profile.post2.row-7")}`),
    createData("4669", `${t("livelihoods.profile.post2.row-8")}`),
    createData("7020", `${t("livelihoods.profile.post2.row-9")}`),
    createData("7490", `${t("livelihoods.profile.post2.row-10")}`),
  ];
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
                        title={t("livelihoods.profile.post2.title")}
                        className="preloader highImg"
                        onClick={() => {
                          document.body.style.overflow = "hidden";
                          setToggleModal(true);
                        }}
                      >
                        <Box
                          component="img"
                          alt={t("livelihoods.profile.post2.title")}
                          src="/images/livelihoods/profile/thanh-lap-cong-ty-co-phan-mcf-viet-nam/sinh-ke_sinh-ke-1160x542.jpg"
                          title={t("livelihoods.profile.post2.title")}
                          srcSet="/images/livelihoods/profile/thanh-lap-cong-ty-co-phan-mcf-viet-nam/sinh-ke_sinh-ke-1160x542.jpg 1160w, /images/livelihoods/profile/thanh-lap-cong-ty-co-phan-mcf-viet-nam/sinh-ke_sinh-ke-300x140.jpg 300w, /images/livelihoods/profile/thanh-lap-cong-ty-co-phan-mcf-viet-nam/sinh-ke_sinh-ke-1024x478.jpg 1024w, /images/livelihoods/profile/thanh-lap-cong-ty-co-phan-mcf-viet-nam/sinh-ke_sinh-ke-768x359.jpg 768w, /images/livelihoods/profile/thanh-lap-cong-ty-co-phan-mcf-viet-nam/sinh-ke_sinh-ke-1536x718.jpg 1536w, /images/livelihoods/profile/thanh-lap-cong-ty-co-phan-mcf-viet-nam/sinh-ke_sinh-ke-2048x957.jpg 2048w, /images/livelihoods/profile/thanh-lap-cong-ty-co-phan-mcf-viet-nam/sinh-ke_sinh-ke-580x271.jpg 580w, /images/livelihoods/profile/thanh-lap-cong-ty-co-phan-mcf-viet-nam/sinh-ke_sinh-ke-860x402.jpg 860w, /images/livelihoods/profile/thanh-lap-cong-ty-co-phan-mcf-viet-nam/sinh-ke_sinh-ke-1440x673.jpg 1440w, /images/livelihoods/profile/thanh-lap-cong-ty-co-phan-mcf-viet-nam/sinh-ke_sinh-ke-440x206.jpg 440w"
                          sizes="(max-width: 1160px) 100vw, 1160px"
                        ></Box>
                      </Link>
                    </Box>
                    <Box
                      component="header"
                      className="cmsmasters_profile_header"
                    >
                      <Typography variant="h2">
                        {t("livelihoods.profile.post2.title")}
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
                                      "livelihoods.profile.post2.content"
                                    )}`,
                                  }}
                                ></Box>
                              </Box>
                              <Box component="div" sx={{ paddingLeft: "1px" }}>
                                <Table>
                                  <TableBody>
                                    <TableRow key="head">
                                      <TableCell sx={{ fontWeight: "bold" }}>
                                        {t(
                                          "livelihoods.profile.post2.tableHeader-col1"
                                        )}
                                      </TableCell>
                                      <TableCell sx={{ fontWeight: "bold" }}>
                                        {t(
                                          "livelihoods.profile.post2.tableHeader-col2"
                                        )}
                                      </TableCell>
                                    </TableRow>
                                    {rows.map((row) => (
                                      <TableRow key={`${row.code}`}>
                                        <TableCell
                                          sx={{ width: "18%" }}
                                          scope="row"
                                        >
                                          {row.code}
                                        </TableCell>
                                        <TableCell
                                          sx={{ width: "82%" }}
                                          dangerouslySetInnerHTML={{
                                            __html: `${row.profession}`,
                                          }}
                                        ></TableCell>
                                      </TableRow>
                                    ))}
                                  </TableBody>
                                </Table>
                                <Box component="p">&nbsp;</Box>
                                {/* <Table>
                                    <TableBody>
                                      <TableRow>
                                        <TableCell sx={{ width: "100%" }}>
                                          <Typography variant="h3">
                                            CÔNG TY CỔ PHẦN MLS VIỆT NAM
                                          </Typography>
                                          <Box component="p">
                                            Ấp Thạnh Long, Xã Đông Thạnh, Huyện
                                            Châu Thành, Tỉnh Hậu Giang, Việt Nam
                                          </Box>
                                          <Box component="p">
                                            Điện thoại: 0937128716
                                          </Box>
                                          <Box component="p">
                                            Email:
                                            <Box
                                              component="span"
                                              sx={{
                                                color: "#3366ff",
                                              }}
                                            >
                                              {" "}
                                              lskieuvuong.2016@gmail.com
                                            </Box>
                                          </Box>
                                        </TableCell>
                                      </TableRow>
                                    </TableBody>
                                  </Table> */}
                                <Box
                                  component="div"
                                  sx={{
                                    borderStyle: "none",
                                  }}
                                  dangerouslySetInnerHTML={{
                                    __html: `${t(
                                      "livelihoods.profile.post2.table"
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
                              "livelihoods.profile.post2.profile_detail.author"
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
                            "livelihoods.profile.post2.profile_detail.date"
                          )}
                        >
                          {t("livelihoods.profile.post2.profile_detail.date")}
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
                              "livelihoods.profile.post2.profile_detail.categories"
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
              to="/project/vai-tro-cua-dat-ngap-nuoc-doi-voi-an-ninh-nguon-nuoc-cho-khu-vuc-song-mekong/"
              rel="prev"
              className="icon-angle-left"
            >
              {t("conservation.profile.post3.title")}
            </Link>
          </Box>
          <Box
            component="span"
            className="cmsmasters_next_post post_nav_next_arrow"
          >
            <Link
              to="/project/ky-ket-dao-tao-sinh-vien-thuc-hanh-ngan-han/"
              rel="next"
              className="icon-angle-right"
            >
              {t("livelihoods.profile.post1.title")}
            </Link>
          </Box>
        </Box>
      </Box>
      <AnimatePresence>
        {toggleModal && (
          <ToggleModalImg
            src="/images/livelihoods/profile/thanh-lap-cong-ty-co-phan-mcf-viet-nam/sinh-ke_sinh-ke-1160x542.jpg"
            setToggleModal={setToggleModal}
          ></ToggleModalImg>
        )}
      </AnimatePresence>
      <Footer></Footer>
    </>
  );
};
export default Profile;
