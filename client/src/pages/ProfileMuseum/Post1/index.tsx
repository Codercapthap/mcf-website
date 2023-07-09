import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import Header from "@/components/Header";
import ToggleModalImg from "@/components/ToggleModalImg";
import { Box, Link, Typography, Table, TableBody,TableCell, TableRow } from "@mui/material";
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
                        title="Tiến trình của Bảo tàng Lịch sử Tự nhiên Mekong"
                        className="preloader highImg"
                        onClick={() => {
                          document.body.style.overflow = "hidden"
                          setToggleModal(true);
                        }}
                      >
                        <Box
                          component="img"
                          width="334"
                          height="250"
                          alt="Tiến trình của Bảo tàng Lịch sử Tự nhiên Mekong"
                          src="http://localhost:5173/public/images/museum/post1/bao-tang_ky-ket-voi-usa.png"
                          title="Tiến trình của Bảo tàng Lịch sử Tự nhiên Mekong"
                          srcSet="http://localhost:5173/public/images/museum/post1/bao-tang_ky-ket-voi-usa.png 334w, http://localhost:5173/public/images/museum/post1/bao-tang_ky-ket-voi-usa-300x225.png 300w"
                          sizes="(max-width: 334px) 100vw, 334px"
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
                        Tiến trình của Bảo tàng Lịch sử Tự nhiên Mekong
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
                                Bảo tàng Lịch sử Tự nhiên Mê Kông (MNHM) lần đầu tiên được công bố trong Kế hoạch Hành động của Ủy ban hợp tác KH&CN Việt Nam (JCM) 2013-2015 (<em>4. Khoa học Bảo tồn, phần 4.5</em>), và được cập nhật bằng Thư đề nghị (LoI) ký ngày 23 Tháng 5 năm 2016, do bốn bên: Đại sứ quán Hoa Kỳ tại Việt Nam đại diện cho Bộ Ngoại giao Hoa Kỳ, Cơ quan Khảo sát Địa chất Hoa Kỳ (USGS), Smithsonian và Đại học Cantho (CTU) của Việt Nam.
                                </Box>
                                <Box component="p">
                                Để theo đuổi mục tiêu này, Đại học Cần Thơ đã hỗ trợ thành lập một tổ chức Phi chính phủ, lấy tên là Quỹ Hỗ trợ Nghiên cứu và Bảo tồn Mekong (MCF), MCF đã đăng ký tại Việt Nam và nhận được giấy phép vào năm 2018.
                                </Box>
                                <Box component="p">
                                Cho đến nay, CTU / MCF đã kết nối mạng lưới 14 trường Đại học tại Đồng bằng sông Cửu Long của Việt Nam, 20 trường Đại học khu vực sông Mê Kông bao phủ toàn bộ sáu quốc gia Trung Quốc, Myanmar, Thái Lan, CHDCND Lào, Campuchia và Việt Nam. Ngoài ra còn có 4 trường đại học tại Hoa Kỳ tham gia vào mạng lưới. Với hàng trăm nhà khoa học từ USGS, NOAA và các trường Đại học trong Mạng lưới, đứng đầu là CTU và MCF, dữ liệu và thông tin về Địa chất, Đất, Thủy văn, Đa dạng sinh học, Lịch sử sử dụng đất, Kinh nghiệm truyền thống và Văn hóa bản địa đang được các chương trình thu thập/quản lý. Tất cả các chi phí cho dữ liệu và thông tin tổng hợp được tài trợ bởi các khu vực tư nhân.
                                </Box>
                                <Box component="p">
                                Trong quá trình thu thập dữ liệu và thông tin, CTU / MCF cũng đang làm việc trên một nền tảng bảo tàng ảo. Chúng tôi cũng đang thảo luận với Chính quyền thành phố Cần Thơ về vị trí đất của Bảo tàng Lịch sử Tự nhiên Mekong.
                                </Box>
                                <Box component="div" sx={{
                                  width: "100%",
                                  paddingLeft: "1px"
                                }}>
                                  <Table>
                                  <TableBody>
                                      <TableCell width="50%">
                                        <Box component="p"></Box>
                                        <Box component="p">
                                        <Box component="img"
                                        src="http://localhost:5173/public/images/museum/post1/bao-tang_ky-ket-voi-usa_1.jpg"
                                        ></Box>
                                        </Box>
                                        
                                      </TableCell>
                                      <TableCell width="50%" sx={{ fontStyle: "normal", color: "#717171", fontsWeight: "normal", fontSize: "16px", lineHeight: "30px", verticalAlign: "top"}}>
                                      Ý định thư (LoI) được ký bởi bốn bên: Bộ Ngoại giao Hoa Kỳ, USGS, Smithsonian và Đại học Cần Thơ tại Hà Nội, Việt Nam nhân chuyến thăm của Tổng thống Hoa Kỳ Obama tới Việt Nam.
                                      </TableCell>
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
                      <Typography variant="h4" className="cmsmasters_single_slider_title">Các dự án khác</Typography>
                      <Typography variant="h5" className="cmsmasters_single_slider_no_items">Danh sách trống</Typography>
                    </Box>
                  </Box>
                </Box>
                <Box component="div" className="profile_sidebar">
                  <Box component="div" className="profile_details">
                    <Typography variant="h4" className="profile_details_title">
                    PROJECT DETAILS
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
                          rel="author">
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
                        <Box component="abbr" title="11 Tháng Sáu, 2021">11 Tháng Sáu, 2021</Box>
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
                            Bảo tàng
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
                    </Box> */}
                    {/* <Box component="div" className="profile_details_item">
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
                    </Box> */}
                    {/* <Box component="div" className="profile_details_item">
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
                    </Box> */}
                    {/* <Box component="div" className="profile_details_item">
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
                    </Box> */}
                    {/* <Box component="div" className="profile_details_item">
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
                href="http://localhost:5173/project/ky-ket-dao-tao-sinh-vien-thuc-hanh-ngan-han/"
                rel="prev"
                className="icon-angle-left"
              >
                Ký kết đào tạo sinh viên thực hành ngắn hạn
              </Link>
            </Box>
            <Box
              component="span"
              className="cmsmasters_next_post post_nav_next_arrow"
            >
              <Link
                href="http://localhost:5173/project/dong-chay-cua-van-hoa-va-su-song/"
                rel="next"
                className="icon-angle-right"
              >
                Dòng chảy của Văn hóa và Sự sống
              </Link>
            </Box>
          </Box>
        </Box>
        <AnimatePresence>
          {toggleModal &&
            (<ToggleModalImg
              src="http://localhost:5173/public/images/museum/post1/bao-tang_ky-ket-voi-usa.png"
              setToggleModal={setToggleModal}
            >

            </ToggleModalImg>
            )
          }

        </AnimatePresence>
        <Footer></Footer>
      </>
      );
};
      export default Profile;
