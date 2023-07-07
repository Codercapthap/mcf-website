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
                        title="Dòng chảy của Văn hóa và Sự sống"
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
                          alt="Dòng chảy của Văn hóa và Sự sống"
                          src="http://localhost:5173/public/images/conservation/dong-chay-cua-van-hoa-va-su-song/flow-of-culture-and-life_conservation-1160x870.jpg"
                          title="Dòng chảy của Văn hóa và Sự sống"
                          srcSet="http://localhost:5173/public/images/conservation/dong-chay-cua-van-hoa-va-su-song/flow-of-culture-and-life_conservation-1160x870.jpg 1160w, http://localhost:5173/public/images/conservation/dong-chay-cua-van-hoa-va-su-song/flow-of-culture-and-life_conservation-300x225.jpg 300w, http://localhost:5173/public/images/conservation/dong-chay-cua-van-hoa-va-su-song/flow-of-culture-and-life_conservation-1024x768.jpg 1024w, http://localhost:5173/public/images/conservation/dong-chay-cua-van-hoa-va-su-song/flow-of-culture-and-life_conservation-768x576.jpg 768w, http://localhost:5173/public/images/conservation/dong-chay-cua-van-hoa-va-su-song/flow-of-culture-and-life_conservation-580x435.jpg 580w, http://localhost:5173/public/images/conservation/dong-chay-cua-van-hoa-va-su-song/flow-of-culture-and-life_conservation-860x645.jpg 860w, http://localhost:5173/public/images/conservation/dong-chay-cua-van-hoa-va-su-song/flow-of-culture-and-life_conservation-440x330.jpg 440w, http://localhost:5173/public/images/conservation/dong-chay-cua-van-hoa-va-su-song/flow-of-culture-and-life_conservation.jpg 1190w"
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
                        Dòng chảy của Văn hóa và Sự sống
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
                                Nguồn nước đại diện cho một thành phần cơ bản của nền kinh tế trong khu vực, ngoài nhu cầu tiêu dùng cho sinh hoạt, nước còn được sử dụng cho nông nghiệp, công nghiệp và dịch vụ. Sông và các khu vực ven sông cũng góp phần tạo nên cảnh quan cho khu vực và phát triển các dịch vụ du lịch khác. Bên cạnh đó, dòng sông còn là sự kết nối và tạo môi trường sống của nhiều sinh vật trên cạn và dưới nước và tạo nên các giá trị thẩm mỹ và giải trí khác. Tại đồng bằng sông Cửu Long (ĐBSCL), sông Mekong được coi là nguồn cung cấp nước và các dịch vụ hệ sinh thái quan trọng nhất bởi nó cung cấp khoảng 90% lưu lượng nước cho ĐBSCL, đặc biệt vào mùa khô lượng nước hoàn toàn phụ thuộc vào vùng thượng lưu Mekong. Tuy nhiên, các lưu vực sông đã và đang bị khai thác quá mức để phục vụ cho mục tiêu phát triển kinh tế – xã hội, từ đó gây ra các áp lực cho hệ sinh thái. Trong khi đó, nhiều cộng đồng nông thôn và đồng bào dân tộc thiểu số vẫn phụ thuộc nhiều vào nguồn nước sông. Hiện nay các giá trị dịch vụ hệ sinh thái dòng sống cung cấp cho cộng đồng đã dần bị lãng quên dẫn đến các hoạt động gây nhiều ảnh hưởng xấu cho dòng sông thường xuyên xảy ra. Vì vậy, dự án đã đánh giá các dịch vụ hệ sinh thái mà dòng sông thật sự cung cấp cho con người nhằm thay đổi tư duy quản trị sông hiện nay.
                                </Box>
                                <Box component="p">
                                Kết quả nghiên cứu cho thấy các dịch vụ hệ sinh thái trên sông Hậu rất đa dạng và đóng vai trò rất quan trọng đối với sự phát triển của cả vùng Đồng bằng sông Cửu Long. Nơi đây là nguồn cung cấp nước và thực phẩm cho nhiều hoạt động của vùng. Sông Hậu đã cung cấp trực tiếp và gián tiếp các dịch vụ về điều tiết và hỗ trợ khác nhau, như điều hoà khí hậu, chất dinh dưỡng,…Hơn nữa, đây được xem là nơi diễn ra nhiều lễ hội, các hoạt động tín ngưỡng trên sông, đặc trưng với nhiều hoạt động du lịch sinh thái và các loại hình du lịch trải nghiệm. Vai trò của dịch vụ cung cấp được người dân quan tâm nhiều nhất trong quá trình khảo sát. Tuy nhiên, các dịch vụ này đã ngày càng bị suy giảm bởi nhiều yếu tố khác nhau như sự thay đổi thuỷ văn, chất lượng, trữ lượng môi trường nước giảm và các chính sách phát triển liên quan đến dòng sông. Trong đó, sự thay đổi về chất lượng và trữ lượng nước là một trong những nguyên nhân chính dẫn đế sự thay đổi của các dịch vụ hệ sinh thái trên sông.
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
                        <Box component="abbr" title="26 Tháng Năm, 2023">26 Tháng Năm, 2023</Box>
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
              href="http://localhost:5173/project/tien-trinh-cua-bao-tang-lich-su-tu-nhien-mekong/"
              rel="prev"
              className="icon-angle-left"
            >
             Tiến trình của Bảo tàng Lịch sử Tự nhiên Mekong
            </Link>
          </Box>
          <Box
            component="span"
            className="cmsmasters_next_post post_nav_next_arrow"
          >
            <Link
              href="http://localhost:5173/project/cap-nhat-chien-luoc-quan-ly-nuoc-de-phuc-hoi-sinh-canh-dat-ngap-nuoc-vuon-quoc-gia-tram-chim-trong-boi-canh-bien-doi-khi-hau-va-phat-trien-o-thuong-nguon"
              rel="next"
              className="icon-angle-right"
            >
              Cập nhật chiến lược quản lý nước để phục hồi sinh cảnh đất ngập nước Vườn quốc gia Tràm chim trong bối cảnh biến đổi khí hậu và phát triển ở thượng nguồn
            </Link>
          </Box>
        </Box>
      </Box>
      <AnimatePresence>
        {toggleModal &&
          (<ToggleModalImg 
            src="http://localhost:5173/public/images/conservation/dong-chay-cua-van-hoa-va-su-song/flow-of-culture-and-life_conservation-1160x870.jpg"
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
