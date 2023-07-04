import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import Header from "@/components/Header";
import ToggleModalImg from "@/components/ToggleModalImg";
import { Box, Link, Typography } from "@mui/material";
import "../Profile.scss";
import Footer from "@/components/Footer";

const Profile = () => {
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
                        title="Công tác kiểm kê, khảo sát vườn chim Vạc tại xã Tân Mỹ, huyện Trà Ôn, tỉnh Vĩnh Long"
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
                          alt="Công tác kiểm kê, khảo sát vườn chim Vạc tại xã Tân Mỹ, huyện Trà Ôn, tỉnh Vĩnh Long"
                          src="https://mcf.com.vn/wp-content/uploads/2021/03/MG_3165-1160x773.jpg"
                          title="Công tác kiểm kê, khảo sát vườn chim Vạc tại xã Tân Mỹ, huyện Trà Ôn, tỉnh Vĩnh Long"
                          srcSet="https://mcf.com.vn/wp-content/uploads/2021/03/MG_3165-1160x773.jpg 1160w, https://mcf.com.vn/wp-content/uploads/2021/03/MG_3165-300x200.jpg 300w, https://mcf.com.vn/wp-content/uploads/2021/03/MG_3165-1024x683.jpg 1024w, https://mcf.com.vn/wp-content/uploads/2021/03/MG_3165-768x512.jpg 768w, https://mcf.com.vn/wp-content/uploads/2021/03/MG_3165-1536x1024.jpg 1536w, https://mcf.com.vn/wp-content/uploads/2021/03/MG_3165-2048x1365.jpg 2048w, https://mcf.com.vn/wp-content/uploads/2021/03/MG_3165-580x387.jpg 580w, https://mcf.com.vn/wp-content/uploads/2021/03/MG_3165-860x573.jpg 860w, https://mcf.com.vn/wp-content/uploads/2021/03/MG_3165-1440x960.jpg 1440w, https://mcf.com.vn/wp-content/uploads/2021/03/MG_3165-440x293.jpg 440w"
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
                        Công tác kiểm kê, khảo sát vườn chim Vạc tại xã Tân Mỹ,
                        huyện Trà Ôn, tỉnh Vĩnh Long
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
                                <Box component="p">
                                  Đồng bằng sông Cửu Long là vùng giàu tiềm năng
                                  về đa dạng sinh học (ĐDSH), trong đó quần thể
                                  chim nước rất phong phú về số loài và số cá
                                  thể. Hiện nay, quần thể chim nước xuất hiện
                                  chủ yếu tại các nơi đã có kế hoạch bảo tồn ở
                                  cấp tỉnh hay cấp quốc gia như Vườn quốc gia
                                  Tràm Chim (Đồng Tháp), U-Minh Thượng (Kiên
                                  Giang), Mũi Cà Mau; hay các Khu bảo tồn như
                                  Láng Sen (Long An), Lung Ngọc Hoàng (Hậu
                                  Giang), Phú Mỹ (Kiên Giang); hoặc có qui mô
                                  nhỏ hơn như các sân chim Cái Nước (Cà Mau),
                                  sân chim Bạc Liêu, Vàm Hồ (Bến Tre); đặc biệt
                                  là các quần thể chim định cư rãi rác khắp
                                  ĐBSCL mà người dân hay gọi là “Vườn Cò”. Những
                                  vườn cò nầy có qui mô diện tích nhỏ hơn như
                                  vườn cò Bằng Lăng (Cần Thơ), Trung tâm Nông
                                  nghiệp Mùa Xuân (Hậu Giang).
                                </Box>
                                <Box component="p">
                                  Ngoài ra, kiểm kê vườn Vạc nhằm thực hiện đúng
                                  theo mục tiêu và Phương pháp quy hoạch được
                                  UBND tỉnh phê duyệt tại Quyết định số
                                  2269/QĐ-UBND ngày 27/9/2016 về việc phê duyệt
                                  Quy hoạch bảo tồn đa dạng sinh học tỉnh Vĩnh
                                  Long giai đoạn 2015 – 2020 và định hướng đến
                                  năm 2030
                                </Box>
                                <Box component="p">
                                  <strong>Mục tiêu của đề tài: </strong>
                                </Box>
                                <Box component="p">
                                  Khảo sát và đánh giá hiện trạng đa dạng loài
                                  của quần thể chim nước. Dựa vào tập tính sinh
                                  học của từng loài và mật độ cá thể biến động
                                  trong năm để phân tích khả năng hiện diện theo
                                  mùa hay thường xuyên và những mối đe dọa đối
                                  với các loài chim, nhằm đề xuất kế hoạch quản
                                  lý và bảo tồn bền vững.
                                </Box>
                                <Typography variant="h3">
                                  Video đàn chim bay về tổ
                                </Typography>
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
                      Thông tin đề tài
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
                        <Box component="abbr" title="17 Tháng Ba, 2021">
                          17 Tháng Ba, 2021
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
                        Thời gian:
                      </Box>
                      <Box
                        component="div"
                        className="profile_details_item_desc"
                      >
                        01-10/2021
                      </Box>
                    </Box>
                    <Box component="div" className="profile_details_item">
                      <Box
                        component="div"
                        className="profile_details_item_title"
                      >
                        Kinh phí:
                      </Box>
                      <Box
                        component="div"
                        className="profile_details_item_desc"
                      >
                        200.000.000
                      </Box>
                    </Box>
                    <Box component="div" className="profile_details_item">
                      <Box
                        component="div"
                        className="profile_details_item_title"
                      >
                        Chủ quản:
                      </Box>
                      <Box
                        component="div"
                        className="profile_details_item_desc"
                      >
                        Sở Nông nghiệp và Phát triển Nông thôn tỉnh Vĩnh Long
                      </Box>
                    </Box>
                    <Box component="div" className="profile_details_item">
                      <Box
                        component="div"
                        className="profile_details_item_title"
                      >
                        Thực hiện:
                      </Box>
                      <Box
                        component="div"
                        className="profile_details_item_desc"
                      >
                        Chi cục Kiểm lâm và Quản lý Chất lượng Nông lâm Thủy sản
                        Vĩnh Long
                      </Box>
                    </Box>
                    <Box component="div" className="profile_details_item">
                      <Box
                        component="div"
                        className="profile_details_item_title"
                      >
                        Tư vấn:
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
              href="http://localhost:5173/project/bai-viet-sinh-ke-01/"
              rel="prev"
              className="icon-angle-left"
            >
              CẢI THIỆN SINH KẾ
            </Link>
          </Box>
          <Box
            component="span"
            className="cmsmasters_next_post post_nav_next_arrow"
          >
            <Link
              href="http://localhost:5173/project/vai-tro-cua-dat-ngap-nuoc-doi-voi-an-ninh-nguon-nuoc-cho-khu-vuc-song-mekong/"
              rel="next"
              className="icon-angle-right"
            >
              Vai trò của Đất ngập nước đối với an ninh nguồn nước cho khu vực
              sông Mekong
            </Link>
          </Box>
        </Box>
      </Box>
      <AnimatePresence>
        {toggleModal && (
          <ToggleModalImg
            src="http://localhost:5173/images/conservation/cong-tac-kiem-ke-khao-sat-vuon-chim-vac-tai-xa-tan-my-huyen-tra-on-tinh-vinh-long/flow-of-culture-and-life_conservation-1160x870.jpg"
            setToggleModal={setToggleModal}
          ></ToggleModalImg>
        )}
      </AnimatePresence>
      <Footer></Footer>
    </>
  );
};
export default Profile;
