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
                        title="Vai trò của Đất ngập nước đối với an ninh nguồn nước cho khu vực sông Mekong"
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
                          alt="Vai trò của Đất ngập nước đối với an ninh nguồn nước cho khu vực sông Mekong"
                          src="http://localhost:5173/images/conservation/vai-tro-cua-dat-ngap-nuoc-doi-voi-an-ninh-nguon-nuoc-cho-khu-vuc-song-mekong/sumernet_map.jpg"
                          title="Vai trò của Đất ngập nước đối với an ninh nguồn nước cho khu vực sông Mekong"
                          srcSet="http://localhost:5173/images/conservation/vai-tro-cua-dat-ngap-nuoc-doi-voi-an-ninh-nguon-nuoc-cho-khu-vuc-song-mekong/sumernet_map.jpg 1116w, http://localhost:5173/images/conservation/vai-tro-cua-dat-ngap-nuoc-doi-voi-an-ninh-nguon-nuoc-cho-khu-vuc-song-mekong/sumernet_map-300x170.jpg 300w, http://localhost:5173/images/conservation/vai-tro-cua-dat-ngap-nuoc-doi-voi-an-ninh-nguon-nuoc-cho-khu-vuc-song-mekong/sumernet_map-1024x580.jpg 1024w, http://localhost:5173/images/conservation/vai-tro-cua-dat-ngap-nuoc-doi-voi-an-ninh-nguon-nuoc-cho-khu-vuc-song-mekong/sumernet_map-768x435.jpg 768w, http://localhost:5173/images/conservation/vai-tro-cua-dat-ngap-nuoc-doi-voi-an-ninh-nguon-nuoc-cho-khu-vuc-song-mekong/sumernet_map-580x328.jpg 580w, http://localhost:5173/images/conservation/vai-tro-cua-dat-ngap-nuoc-doi-voi-an-ninh-nguon-nuoc-cho-khu-vuc-song-mekong/sumernet_map-860x487.jpg 860w, http://localhost:5173/images/conservation/vai-tro-cua-dat-ngap-nuoc-doi-voi-an-ninh-nguon-nuoc-cho-khu-vuc-song-mekong/sumernet_map-440x249.jpg 440w"
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
                        Vai trò của Đất ngập nước đối với an ninh nguồn nước cho
                        khu vực sông Mekong
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
                                  Đất ngập nước rất quan trọng đối với mối quan
                                  hệ lương thực-năng lượng-nước của khu vực sông
                                  Mekong. An ninh nguồn nước nông thôn là mối
                                  quan tâm lớn đối với các nước khu vực sông Mê
                                  Kông vì các ngành kinh tế nông thôn giữ vai
                                  trò chủ lực của tất cả các nước, đặc biệt là
                                  nông nghiệp và nuôi trồng thủy sản, cũng như
                                  các nguồn nước chính cho sinh hoạt gia đình và
                                  cấp nước công cộng, phụ thuộc vào nước từ các
                                  vùng đất ngập nước. Những người bị ảnh hưởng
                                  nhiều nhất, đặc biệt là phụ nữ, trẻ em và
                                  người cao tuổi, là những nhóm dễ bị tổn thương
                                  do sinh kế của họ phụ thuộc nhiều vào đất ngập
                                  nước. Để chuẩn bị ứng phó cho các tác động từ
                                  biến đổi toàn cầu và tăng cường quản lý nước ở
                                  khu vực sông Mê Kông, định lượng các dịch vụ
                                  hệ sinh thái từ các vùng đất ngập nước là điều
                                  cấp bách cần được thực hiện.
                                </Box>
                                <Box component="p">
                                  Mối quan tâm cụ thể của chúng tôi là vai trò
                                  của đất ngập nước đối với an ninh nguồn nước.
                                  Các mục tiêu cụ thể của nghiên cứu này:
                                </Box>
                                <Box
                                  component="ul"
                                  style={{ listStyleType: "circle" }}
                                >
                                  <Box
                                    component="li"
                                    className="icon-angle-right-before"
                                  >
                                    Xác định đối với mỗi loại đất ngập nước ở
                                    khu vực sông Mekong thì trữ lượng nước, chất
                                    lượng nước cung cấp và cộng đồng có mối quan
                                    hệ như thế nào với các dịch vụ hệ sinh thái,
                                  </Box>
                                  <Box
                                    component="li"
                                    className="icon-angle-right-before"
                                  >
                                    Dự báo tác động của sự thay đổi toàn cầu và
                                    khu vực về an ninh nước cho cộng đồng thông
                                    qua những thay đổi trong các dịch vụ đó.
                                  </Box>
                                </Box>
                                <Box component="p">
                                  Chúng tôi sẽ chọn bốn vùng đất ngập nước, một
                                  vùng cho mỗi quốc gia trong số bốn nước Hạ lưu
                                  sông Mê Kông làm địa điểm nghiên cứu của chúng
                                  tôi. Mỗi vùng đất ngập nước sẽ đại diện cho
                                  trữ lượng nước đáng kể của khu vực và cách các
                                  nhóm cộng đồng địa phương khác nhau sử dụng
                                  tài nguyên nước. Các vùng đó bao gồm:
                                </Box>
                                <Box
                                  component="ul"
                                  style={{ listStyleType: "circle" }}
                                >
                                  <Box
                                    component="li"
                                    className="icon-angle-right-before"
                                  >
                                    Vùng đất ngập nước ở Campuchia;
                                  </Box>
                                  <Box
                                    component="li"
                                    className="icon-angle-right-before"
                                  >
                                    Đầm lầy cạn do nước ngầm cung cấp ở CHDCND
                                    Lào;
                                  </Box>
                                  <Box
                                    component="li"
                                    className="icon-angle-right-before"
                                  >
                                    Khu hổn hợp rừng – đầm lầy cửa sông ở Thái
                                    Lan; và
                                  </Box>
                                  <Box
                                    component="li"
                                    className="icon-angle-right-before"
                                  >
                                    Khu rừng đầm lầy than bùn ở Việt Nam.
                                  </Box>
                                </Box>
                                <Box component="p">
                                  Chúng tôi sẽ sử dụng các phép đo thực địa về
                                  các tham số thủy văn, các thông số chất lượng
                                  nước và các mô hình đơn giản từ dữ liệu đã
                                  được công bố để định lượng trữ lượng nước, sử
                                  dụng dữ liệu vệ tinh và đo đạc thực địa để xác
                                  định cấu trúc thảm thực vật, sử dụng các đợt
                                  điều tra cộng đồng và kinh tế xã hội để mô tả
                                  việc sử dụng đất và các nhóm sử dụng nước tại
                                  địa phương. Chúng tôi sẽ xem xét sự tương tác
                                  của các hệ thống này (tự nhiên và con người)
                                  bằng cách xác định các dịch vụ hệ sinh thái
                                  nước chính từ các bộ dữ liệu kinh tế xã hội và
                                  lý sinh kết hợp, đồng thời sử dụng các trò
                                  chơi để đánh giá sự phụ thuộc và phản ứng của
                                  cộng đồng đối với thay đổi, nhấn mạnh vai trò
                                  của các yếu tố kinh tế xã hội, vai trò giới,
                                  và tương tác giữa các nhóm người dùng. Chúng
                                  tôi sẽ điều tra vai trò của phụ nữ trong việc
                                  sử dụng nước và duy trì an ninh nguồn nước,
                                  đồng thời xác định các phương thức để tăng
                                  cường những vai trò này. Các địa điểm nghiên
                                  cứu này đại diện cho các điều kiện kinh tế xã
                                  hội nông thôn khu vực sông Mê Kông, bao gồm
                                  xung đột trong sử dụng và quản lý nước chung
                                  giữa các nhóm, công bằng xã hội và bình đẳng
                                  giới, giảm nghèo ở nông thôn và vai trò của
                                  nước từ đất ngập nước trong việc tăng cường
                                  kinh tế hộ gia đình và sinh kế, cũng như giảm
                                  bớt sự phụ thuộc của địa phương vào tài nguyên
                                  tự nhiên. Chúng tôi sẽ tích hợp các kết quả
                                  nghiên cứu vào một dự án đang thực hiện để kết
                                  hợp các nhà khoa học đất ngập nước với các nhà
                                  quản lý đất ngập nước địa phương: dự án đó sẽ
                                  cung cấp thông tin cho nghiên cứu này bằng
                                  cách cải thiện nguồn thông tin giữa các nhóm
                                  sử dụng nước địa phương (bao gồm nam giới, phụ
                                  nữ, người cao tuổi, trẻ em) và các nhà nghiên
                                  cứu của dự án sau đó sẽ có thể tận dụng các
                                  phát hiện của mình bằng cách kết nối với các
                                  nhà quản lý đất ngập nước địa phương. Trong
                                  suốt dự án, chúng tôi sẽ liên lạc với các nhóm
                                  địa phương (thông tin liên lạc được thiết lập
                                  thông qua các đối tác đã có từ trước của chúng
                                  tôi và các đối tác mới được xác định thông qua
                                  khảo sát cộng đồng) để giúp họ nhận thức và
                                  quản lý tốt hơn sự phụ thuộc của cấu trúc xã
                                  hội vào các dịch vụ nước có nguồn gốc từ đất
                                  ngập nước, sử dụng cách tiếp cần về quyền con
                                  người. Chúng tôi sẽ hoàn thành công việc này
                                  bằng cách sử dụng các nhóm địa phương bao gồm
                                  giảng viên địa phương và sinh viên sau đại
                                  học, cùng với nhóm quản lí khu vực bao gồm
                                  giám đốc và điều phối viên dự án. Nghiên cứu
                                  này cần 30 tháng để hoàn thành tất cả các sản
                                  phẩm của dự án.
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
                        31/12/2022
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
                        Việt Nam, Lào, Camphuchia và Thái Lan
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
                        Stiftelsen The Stockholm Environment Institute
                      </Box>
                    </Box>
                    <Box component="div" className="profile_details_item">
                      <Box
                        component="div"
                        className="profile_details_item_title"
                      >
                        Tổng kinh phí:
                      </Box>
                      <Box
                        component="div"
                        className="profile_details_item_desc"
                      >
                        SEK 1,000,000
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
                        Đang thực hiện
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
              href="http://localhost:5173/project/cong-tac-kiem-ke-khao-sat-vuon-chim-vac-tai-xa-tan-my-huyen-tra-on-tinh-vinh-long/"
              rel="prev"
              className="icon-angle-left"
            >
              Công tác kiểm kê, khảo sát vườn chim Vạc tại xã Tân Mỹ, huyện Trà
              Ôn, tỉnh Vĩnh Long
            </Link>
          </Box>
          <Box
            component="span"
            className="cmsmasters_next_post post_nav_next_arrow"
          >
            <Link
              href="http://localhost:5173/project/thanh-lap-cong-ty-co-phan-mcf-viet-nam/"
              rel="next"
              className="icon-angle-right"
            >
              Thành lập Công ty cổ phần MLS Việt Nam
            </Link>
          </Box>
        </Box>
      </Box>
      <AnimatePresence>
        {toggleModal && (
          <ToggleModalImg
            src="http://localhost:5173/images/conservation/vai-tro-cua-dat-ngap-nuoc-doi-voi-an-ninh-nguon-nuoc-cho-khu-vuc-song-mekong/sumernet_map.jpg"
            setToggleModal={setToggleModal}
          ></ToggleModalImg>
        )}
      </AnimatePresence>
      <Footer></Footer>
    </>
  );
};
export default Profile;
