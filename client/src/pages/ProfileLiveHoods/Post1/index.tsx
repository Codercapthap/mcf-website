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
                        title="Ký kết đào tạo sinh viên thực hành ngắn hạn"
                        className="preloader highImg"
                        onClick={() => {
                          document.body.style.overflow = "hidden"
                          setToggleModal(true);
                        }}
                      >
                        <Box
                          component="img"
                          width="100%"
                          height="100%"
                          alt="Ký kết đào tạo sinh viên thực hành ngắn hạn"
                          src="http://localhost:5173/public/images/livelihoods/profile/ky-ket-dao-tao-sinh-vien-thuc-hanh-ngan-han/sinh-ke.jpg"
                          title="Ký kết đào tạo sinh viên thực hành ngắn hạn"
                          srcSet="http://localhost:5173/public/images/livelihoods/profile/ky-ket-dao-tao-sinh-vien-thuc-hanh-ngan-han/sinh-ke-1160x564.jpg 1160w, http://localhost:5173/public/images/livelihoods/profile/ky-ket-dao-tao-sinh-vien-thuc-hanh-ngan-han/sinh-ke-300x146.jpg 300w, http://localhost:5173/public/images/livelihoods/profile/ky-ket-dao-tao-sinh-vien-thuc-hanh-ngan-han/sinh-ke-1024x498.jpg 1024w, http://localhost:5173/public/images/livelihoods/profile/ky-ket-dao-tao-sinh-vien-thuc-hanh-ngan-han/sinh-ke-768x373.jpg 768w, http://localhost:5173/public/images/livelihoods/profile/ky-ket-dao-tao-sinh-vien-thuc-hanh-ngan-han/sinh-ke-580x282.jpg 580w, http://localhost:5173/public/images/livelihoods/profile/ky-ket-dao-tao-sinh-vien-thuc-hanh-ngan-han/sinh-ke-860x418.jpg 860w, http://localhost:5173/public/images/livelihoods/profile/ky-ket-dao-tao-sinh-vien-thuc-hanh-ngan-han/sinh-ke-440x214.jpg 440w, http://localhost:5173/public/images/livelihoods/profile/ky-ket-dao-tao-sinh-vien-thuc-hanh-ngan-han/sinh-ke.jpg 1348w"
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
                        Ký kết đào tạo sinh viên thực hành ngắn hạn
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
                                  Tạo điều kiện cho học sinh, sinh viên (HSSV) các trường cao đẳng và đại học trong vùng Đồng bằng sông Cửu Long, có cơ hội được tiếp cận với môi trường làm việc chuyên sâu; thông qua các hoạt động thực tế như
                                </Box>
                                <Box component="ul">
                                  <Box component="li" className="icon-angle-right-before">
                                    Tham gia thực tập từ khảo sát môi trường tự nhiên đất-nước-không khí;
                                  </Box>
                                  <Box component="li" className="icon-angle-right-before">
                                    Quyết định chọn cây trồng vật nuôi, để xây dựng hệ thống canh tác thông minh;
                                  </Box>
                                  <Box component="li" className="icon-angle-right-before">
                                    Xây dựng và thực hành qui trình sản xuất sạch và sản phẩm an toàn cho người tiêu dùng và cho môi trường;
                                  </Box>
                                  <Box component="li" className="icon-angle-right-before">
                                    Tham gia sản xuất, thiết kế và xây dựng các mô hình thực nghiệm và dây chuyền kinh doanh, phân phối tại Công ty Hai Lúa Vàng, Công ty xuất khẩu hàng tiểu thủ công nghiệp Việt Nam Housewares;
                                  </Box>
                                  <Box component="li" className="icon-angle-right-before">
                                    Các dự án Xóa đói giảm nghèo, Phát triển nông thôn và Bảo tồn Tài nguyên thiên nhiên và Môi trường của Quỹ MCF.
                                  </Box>
                                </Box>
                                <Box component="p">
                                  Thông qua các hoạt động nầy sẽ giúp cho HSSV củng cố và hoàn thiện kiến thức chuyên môn đã học, rèn luyện nâng cao kỹ năng mềm, như:
                                </Box>
                                <Box component="ul">
                                  <Box component="li" className="icon-angle-right-before">
                                    Có khả năng tìm thông tin và tự nghiên cứu để giải quyết những vấn đề khó khăn và nâng cao trình độ chuyên môn;
                                  </Box>
                                  <Box component="li" className="icon-angle-right-before">
                                    Có động cơ và thái độ học tập, làm việc đúng đắn và nghiêm túc;
                                  </Box>
                                  <Box component="li" className="icon-angle-right-before">
                                    Có kỹ năng truyền đạt, giao tiếp, thuyết phục hay đàm phán để chuyển giao khoa học kỹ thuật đến người dân;
                                  </Box>
                                  <Box component="li" className="icon-angle-right-before">
                                    Có khả năng tập hợp và tổ chức làm việc theo nhóm, có bản lĩnh trí tuệ vững vàng đáp ứng đủ các yếu tố chuẩn đầu ra của chương trình đào tạo, đáp ứng yêu cầu ngày càng cao của nhà tuyển dụng, có khả năng tự thích nghi vào công việc và môi trường làm việc mới.
                                  </Box>
                                </Box>
                                <Box component="p">
                                  <strong>Một số hình ảnh thực tế</strong>
                                </Box>
                                <Box component="div" id="gallery-1" className="gallery gallery-columns-3">
                                  <Box component="figure" className="gallery-item">
                                    <Box component="div" className="gallery-icon portrait">
                                      <Box component="img"
                                        loading="lazy"
                                        aria-describedby="gallery-cap"
                                        src="http://localhost:5173/public/images/livelihoods/profile/ky-ket-dao-tao-sinh-vien-thuc-hanh-ngan-han/sinhke_kyket_1-150x150.jpg"
                                        srcSet="http://localhost:5173/public/images/livelihoods/profile/ky-ket-dao-tao-sinh-vien-thuc-hanh-ngan-han/sinhke_kyket_1-150x150.jpg 150w, http://localhost:5173/public/images/livelihoods/profile/ky-ket-dao-tao-sinh-vien-thuc-hanh-ngan-han/sinhke_kyket_1-60x60.jpg 60w, http://localhost:5173/public/images/livelihoods/profile/ky-ket-dao-tao-sinh-vien-thuc-hanh-ngan-han/sinhke_kyket_1-300x300.jpg 300w, http://localhost:5173/public/images/livelihoods/profile/ky-ket-dao-tao-sinh-vien-thuc-hanh-ngan-han/sinhke_kyket_1-320x320.jpg 320w, http://localhost:5173/public/images/livelihoods/profile/ky-ket-dao-tao-sinh-vien-thuc-hanh-ngan-han/sinhke_kyket_1-100x100.jpg 100w"
                                        sizes="(max-width: 150px) 100vw, 150px"
                                      ></Box>
                                    </Box>
                                    <Box component="figcaption" id="gallery-cap" className="wp-caption-text gallery-caption">Sinh viên khoan lấy mẫu đất</Box>
                                  </Box>
                                  <Box component="figure" className="gallery-item">
                                    <Box component="div" className="gallery-icon portrait">
                                      <Box component="img"
                                        loading="lazy"
                                        aria-describedby="gallery-cap"
                                        src="http://localhost:5173/public/images/livelihoods/profile/ky-ket-dao-tao-sinh-vien-thuc-hanh-ngan-han/hoat-dong-thuc-te_sinh-ke-150x150.jpg"
                                        srcSet="http://localhost:5173/public/images/livelihoods/profile/ky-ket-dao-tao-sinh-vien-thuc-hanh-ngan-han/hoat-dong-thuc-te_sinh-ke-150x150.jpg 150w, http://localhost:5173/public/images/livelihoods/profile/ky-ket-dao-tao-sinh-vien-thuc-hanh-ngan-han/hoat-dong-thuc-te_sinh-ke-60x60.jpg 60w, http://localhost:5173/public/images/livelihoods/profile/ky-ket-dao-tao-sinh-vien-thuc-hanh-ngan-han/hoat-dong-thuc-te_sinh-ke-300x300.jpg 300w, http://localhost:5173/public/images/livelihoods/profile/ky-ket-dao-tao-sinh-vien-thuc-hanh-ngan-han/hoat-dong-thuc-te_sinh-ke-320x320.jpg 320w, http://localhost:5173/public/images/livelihoods/profile/ky-ket-dao-tao-sinh-vien-thuc-hanh-ngan-han/hoat-dong-thuc-te_sinh-ke-100x100.jpg 100w"
                                        sizes="(max-width: 150px) 100vw, 150px"
                                      ></Box>
                                    </Box>
                                    <Box component="figcaption" id="gallery-cap" className="wp-caption-text gallery-caption">Sinh viên khoan lấy mẫu đất</Box>
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
              href="http://localhost:5173/project/thanh-lap-cong-ty-co-phan-mcf-viet-nam/"
              rel="prev"
              className="icon-angle-left"
            >
              Thành lập Công ty cổ phần MLS Việt Nam
            </Link>
          </Box>
          <Box
            component="span"
            className="cmsmasters_next_post post_nav_next_arrow"
          >
            <Link
              href="http://localhost:5173/project/tien-trinh-cua-bao-tang-lich-su-tu-nhien-mekong/"
              rel="next"
              className="icon-angle-right"
            >
              Tiến trình của Bảo tàng Lịch sử Tự nhiên Mekong
            </Link>
          </Box>
        </Box>
      </Box>
      <AnimatePresence>
        {toggleModal &&
          (<ToggleModalImg
            src="http://localhost:5173/public/images/livelihoods/profile/ky-ket-dao-tao-sinh-vien-thuc-hanh-ngan-han/sinh-ke.jpg"
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
