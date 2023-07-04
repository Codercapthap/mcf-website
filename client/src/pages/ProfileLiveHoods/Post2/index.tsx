import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import Header from "@/components/Header";
import ToggleModalImg from "@/components/ToggleModalImg";
import {
  Box,
  Link,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableRow,
  TableHead,
} from "@mui/material";
import "../Profile.scss";
import Footer from "@/components/Footer";

const Profile = () => {
  const [toggleModal, setToggleModal] = useState(false);
  function createData(code: String, profession: String) {
    return { code, profession };
  }
  const rows = [
    createData("0118 (Chính)", "Trồng rau, đậu các loại và trồng hoa"),
    createData("0161", "Hoạt động dịch vụ trồng trọt"),
    createData("0162", "Hoạt động dịch vụ chăn nuôi"),
    createData("0163", "Hoạt động dịch vụ sau thu hoạch"),
    createData("0322", "Nuôi trồng thuỷ sản nội địa"),
    createData(
      "1629",
      "Sản xuất sản phẩm khác từ gỗ; sản xuất sản phẩm từ tre, nứa, rơm, rạ và vật liệu tết bện"
    ),
    createData("4632", "Bán buôn thực phẩm"),
    createData("4669", "Bán buôn chuyên doanh khác chưa được phân vào đâu"),
    createData("7020", "Hoạt động tư vấn quản lý"),
    createData(
      "7490",
      "Hoạt động chuyên môn, khoa học và công nghệ khác chưa được phân vào đâu <p>Chi tiết: Tư vấn nông học, tư vấn khoa học về khí hậu và biến đổi khí hậu, cung cấp dịch vụ nghiên cứu, khảo sát khoa học về các lĩnh vực khoa học nông nghiệp, khoa học tự nhiên</p>"
    ),
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
                        // href="https://mcf.com.vn/wp-content/uploads/2015/04/Vu-Van-Hieu.png"
                        rel="ilightbox[img_12627_64987034241fd]"
                        title="Thành lập Công ty cổ phần MLS Việt Nam"
                        className="preloader highImg"
                        onClick={() => {
                          document.body.style.overflow = "hidden";
                          setToggleModal(true);
                        }}
                      >
                        <Box
                          component="img"
                          alt="Thành lập Công ty cổ phần MLS Việt Nam"
                          src="http://localhost:5173/images/livelihoods/profile/thanh-lap-cong-ty-co-phan-mcf-viet-nam/sinh-ke_sinh-ke-1160x542.jpg"
                          title="Thành lập Công ty cổ phần MLS Việt Nam"
                          srcSet="http://localhost:5173/images/livelihoods/profile/thanh-lap-cong-ty-co-phan-mcf-viet-nam/sinh-ke_sinh-ke-1160x542.jpg 1160w, http://localhost:5173/images/livelihoods/profile/thanh-lap-cong-ty-co-phan-mcf-viet-nam/sinh-ke_sinh-ke-300x140.jpg 300w, http://localhost:5173/images/livelihoods/profile/thanh-lap-cong-ty-co-phan-mcf-viet-nam/sinh-ke_sinh-ke-1024x478.jpg 1024w, http://localhost:5173/images/livelihoods/profile/thanh-lap-cong-ty-co-phan-mcf-viet-nam/sinh-ke_sinh-ke-768x359.jpg 768w, http://localhost:5173/images/livelihoods/profile/thanh-lap-cong-ty-co-phan-mcf-viet-nam/sinh-ke_sinh-ke-1536x718.jpg 1536w, http://localhost:5173/images/livelihoods/profile/thanh-lap-cong-ty-co-phan-mcf-viet-nam/sinh-ke_sinh-ke-2048x957.jpg 2048w, http://localhost:5173/images/livelihoods/profile/thanh-lap-cong-ty-co-phan-mcf-viet-nam/sinh-ke_sinh-ke-580x271.jpg 580w, http://localhost:5173/images/livelihoods/profile/thanh-lap-cong-ty-co-phan-mcf-viet-nam/sinh-ke_sinh-ke-860x402.jpg 860w, http://localhost:5173/images/livelihoods/profile/thanh-lap-cong-ty-co-phan-mcf-viet-nam/sinh-ke_sinh-ke-1440x673.jpg 1440w, http://localhost:5173/images/livelihoods/profile/thanh-lap-cong-ty-co-phan-mcf-viet-nam/sinh-ke_sinh-ke-440x206.jpg 440w"
                          sizes="(max-width: 1160px) 100vw, 1160px"
                        ></Box>
                      </Link>
                    </Box>
                    <Box
                      component="header"
                      className="cmsmasters_profile_header"
                    >
                      <Typography variant="h2">
                        Thành lập Công ty cổ phần MLS Việt Nam
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
                                <Typography variant="h2">
                                  <strong>I. Giới thiệu về công ty</strong>
                                </Typography>
                                <Box component="p">
                                  Công ty Cổ phần Giải pháp sinh kế cho Đồng
                                  bằng sông Cửu Long (MLS) được thành lập vào
                                  ngày 20/02/2021, là công ty hoạt động trong
                                  lĩnh vực sản xuất, phát triển nông nghiệp, tư
                                  vấn về nông học, khoa học về khí hậu và biến
                                  đổi khí hậu, cung cấp dịch vụ nghiên cứu, khảo
                                  sát khoa học về các lĩnh vực khoa học nông
                                  nghiệp, khoa học tự nhiên nhằm mục đích hỗ trợ
                                  phát triển nông nghiệp cho người nông dân,
                                  phát triển kinh tế gắn liền với bảo vệ môi
                                  trường và đa dạng sinh học.
                                </Box>
                                <Box component="p">
                                  Công ty Cổ phần MLS vừa là cầu nối gắn kết
                                  giữa các tổ chức nghiên cứu, các tổ chức phi
                                  lợi nhuận trong lĩnh vực tư vấn phát triển
                                  nông nghiệp bền vững với người nông dân vừa là
                                  trung gian thương mại, hỗ trợ người nông dân
                                  trong quá trình phân phối, tiêu thụ sản phẩm.
                                </Box>
                                <Box component="p">
                                  Công ty Cổ phần MLS định hướng phát triển
                                  trong tương lai là trở thành một trong những
                                  công ty hàng đầu tại khu vực đồng bằng Sông
                                  Cửu Long tiên phong trong việc phát triển kinh
                                  tế nông nghiệp bền vững đi liền với việc bảo
                                  vệ môi trường và đa dạng sinh học, tạo ra sự
                                  hài hòa giữa con người và tự nhiên, góp phần
                                  chống lại và thích nghi với các tác động của
                                  việc biến đổi khí hậu tại khu vực.
                                </Box>
                                <Typography variant="h2">
                                  <strong>II. Lĩnh vực kinh doanh</strong>
                                </Typography>
                                <Box
                                  component="div"
                                  sx={{ paddingLeft: "1px" }}
                                >
                                  <Table>
                                    <TableBody>
                                      <TableRow key="head">
                                        <TableCell sx={{ fontWeight: "bold" }}>
                                          Mã ngành
                                        </TableCell>
                                        <TableCell sx={{ fontWeight: "bold" }}>
                                          Tên ngành, nghề kinh doanh
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
                                  <Table>
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
                                  </Table>
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
                        <Box component="abbr" title="11 Tháng Sáu, 2021">
                          11 Tháng Sáu, 2021
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
                            Sinh kế
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
              href="http://localhost:5173/project/vai-tro-cua-dat-ngap-nuoc-doi-voi-an-ninh-nguon-nuoc-cho-khu-vuc-song-mekong/"
              rel="prev"
              className="icon-angle-left"
            >
              Vai trò của Đất ngập nước đối với an ninh nguồn nước cho khu vực
              sông Mekong
            </Link>
          </Box>
          <Box
            component="span"
            className="cmsmasters_next_post post_nav_next_arrow"
          >
            <Link
              href="http://localhost:5173/project/ky-ket-dao-tao-sinh-vien-thuc-hanh-ngan-han/"
              rel="next"
              className="icon-angle-right"
            >
              Ký kết đào tạo sinh viên thực hành ngắn hạn
            </Link>
          </Box>
        </Box>
      </Box>
      <AnimatePresence>
        {toggleModal && (
          <ToggleModalImg
            src="http://localhost:5173/images/livelihoods/profile/thanh-lap-cong-ty-co-phan-mcf-viet-nam/sinh-ke_sinh-ke-1160x542.jpg"
            setToggleModal={setToggleModal}
          ></ToggleModalImg>
        )}
      </AnimatePresence>
      <Footer></Footer>
    </>
  );
};
export default Profile;
