import Header from "@/components/Header";
import { Box, Typography } from "@mui/material";
import "./ProfileMuseum.scss";

// import { useTranslation } from "react-i18next";

const ProfileMuseum = () => {
  // const { t } = useTranslation();
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
                        to="https://mcf.com.vn/wp-content/uploads/2023/05/chien-luoc-quan-li-nuoc_Bao-ton-scaled.jpg"
                        rel="ilightbox[img_12462_647d8bee23d81]"
                        title="Ông Vũ Văn Hiệu"
                        className="preloader highImg"
                      >
                        <Box
                          component="img"
                          width="1160"
                          height="635"
                          alt="Ông Vũ Văn Hiệu"
                          src="https://mcf.com.vn/wp-content/uploads/2023/05/chien-luoc-quan-li-nuoc_Bao-ton-1160x635.jpg"
                          title="Cập nhật chiến lược quản lý nước để phục hồi sinh cảnh đất ngập nước Vườn quốc gia Tràm chim trong bối cảnh biến đổi khí hậu và phát triển ở thượng nguồn"
                          sizes="(max-width: 1160px) 100vw, 1160px"
                          srcSet="https://mcf.com.vn/wp-content/uploads/2023/05/chien-luoc-quan-li-nuoc_Bao-ton-1160x635.jpg 1160w, https://mcf.com.vn/wp-content/uploads/2023/05/chien-luoc-quan-li-nuoc_Bao-ton-300x164.jpg 300w, https://mcf.com.vn/wp-content/uploads/2023/05/chien-luoc-quan-li-nuoc_Bao-ton-1024x560.jpg 1024w, https://mcf.com.vn/wp-content/uploads/2023/05/chien-luoc-quan-li-nuoc_Bao-ton-768x420.jpg 768w, https://mcf.com.vn/wp-content/uploads/2023/05/chien-luoc-quan-li-nuoc_Bao-ton-1536x840.jpg 1536w, https://mcf.com.vn/wp-content/uploads/2023/05/chien-luoc-quan-li-nuoc_Bao-ton-2048x1121.jpg 2048w, https://mcf.com.vn/wp-content/uploads/2023/05/chien-luoc-quan-li-nuoc_Bao-ton-580x317.jpg 580w, https://mcf.com.vn/wp-content/uploads/2023/05/chien-luoc-quan-li-nuoc_Bao-ton-860x471.jpg 860w, https://mcf.com.vn/wp-content/uploads/2023/05/chien-luoc-quan-li-nuoc_Bao-ton-1440x788.jpg 1440w, https://mcf.com.vn/wp-content/uploads/2023/05/chien-luoc-quan-li-nuoc_Bao-ton-440x241.jpg 440w"
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
                      {/* <Typography variant="h4" sx={{
                                                margin: '6px 0 0',
                                                padding: '0',
                                                color: '#53d572',
                                                fontFamily: 'roboto,Tahoma,Geneva,Kalimati,sans-serif',
                                                fontSize: '16px',
                                                lineHeight: '22px',
                                                fontWeight: '700',
                                                fontStyle: 'normal',
                                                textTransform: 'uppercase',
                                                textDecoration: 'none',
                                                letterSpacing: '.1em'
                                            }}>
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
                                  __html: `${t("museum.content.content")}`,
                                }}
                              >
                                {/* {t('museum.content.content')} */}
                                {/* <Box component='p' >Vườn quốc gia Tràm Chim (VQG Tràm Chim) là một trong những khu bảo tồn đa dạng sinh học quan trọng trong hệ thống các khu bảo tồn của Việt Nam. VQG Tràm Chim là vùng đất tự nhiên lớn nhất còn lại của vùng Đồng Tháp Mười, hệ sinh thái vùng ngập lũ sông Cửu Long. Vì vậy, bảo tồn đa dạng sinh học trong VQG Tràm Chim có tầm quan trọng không chỉ đối với Việt Nam mà còn đối với toàn bộ lưu vực sông Mekong. Ở Tràm Chim, nước lũ và đất chua là hai điều kiện môi trường độc đáo và quan trọng nhất. Trong năm, nước có thể thay đổi từ pH trung tính đến rất axit (pH thấp hơn 4). Chênh lệch mực nước giữa mùa lũ và mùa khô ở Tràm Chim có thể lên đến 4 mét hoặc hơn. Nước lũ cũng là con đường nối Tràm Chim với sông Cửu Long. Vào cao điểm mùa lũ, nước từ sông Cửu Long đổ về Tràm Chim với khối lượng lớn, đầy chất dinh dưỡng. Vào cuối mùa mưa, nước từ Tràm Chim chảy ngược ra sông, giúp thải ra nhiều chất cặn bã từ rừng. Cùng với sự chuyển động của nước là sự di chuyển của thực vật phù du, tôm cá, góp phần tạo nên sự đa dạng và độc đáo của hệ sinh vật. Sự xen kẽ giữa khô và ngập, giữa “chua” và “ngọt”, và sự kết nối với sông Mekong là những đặc điểm sinh thái cơ bản nhất của VQG Tràm Chim. Bảo tồn đa dạng sinh học ở Tràm Chim dựa trên cơ sở khôi phục và duy trì các điều kiện sinh thái cơ bản.</Box>
                                                                <Box component='p' >Vì vậy, công tác quản lý đa dạng sinh học ở Tràm Chim không chỉ giới hạn ở việc thống kê thành phần, độ phong phú của các loài sinh vật mà còn đòi hỏi sự hiểu biết sâu sắc về điều kiện môi trường, đặc biệt là chế độ thủy văn, cháy rừng, điều kiện môi trường đất và nước. Bên cạnh đó, biến đổi khí hậu ngày càng bộc lộ những tác động nghiêm trọng đến đa dạng sinh học của VQG Tràm Chim. Trong những năm gần đây, các yếu tố khí hậu như nắng nóng, lượng mưa, các công trình trên thượng nguồn sông Mekong đã dẫn đến những thay đổi đột ngột, khó lường và chế độ thủy văn không còn tuân theo quy luật tự nhiên. Việc quản lý để đáp ứng tất cả các mục tiêu bảo tồn đa dạng sinh học, phòng chống cháy rừng và thu hút sếu đầu đỏ vào VQG Tràm Chim đòi hỏi phải có những kế hoạch cụ thể và linh hoạt mới, đặc biệt là quản lý chế độ nước trong VQG. Nghiên cứu này được thực hiện nhằm cập nhật chiến lược quản lý nước để phục hồi các sinh cảnh đất ngập nước trong VQG Tràm Chim trong bối cảnh biến đổi khí hậu và phát triển thượng nguồn.</Box> */}
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
                            to="#"
                            className="cmsmasters_theme_icon_like iconheart"
                          >
                            <Box component="span">1</Box>
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
                        <Box
                          component="span"
                          className="cmsmasters_profile_category"
                        >
                          <Link
                            to="/pl-categs/the-mcf-council/"
                            className="cmsmasters_cat_color cmsmasters_cat_153"
                            rel="category tag"
                          >
                            Ly Van Loi
                          </Link>
                        </Box>
                      </Box>
                    </Box>
                    <Box component="div" className="profile_details_item">
                      <Box
                        component="div"
                        className="profile_details_item_title"
                      >
                        Ngày đăng:
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
                            to="/pl-categs/the-mcf-council/"
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
                  {/* <Box component='div' className="profile_social_icons">
                                        <Typography variant="h4" className="profile_social_icons_title">Liên kết</Typography>
                                        <Box component='ul' className="profile_social_icons_list">
                                            <Box component='li'>
                                                <Link to="#" className="cmsmasters_social_icon cmsmasters-icon-custom-googleplus-rect icongoogleplus-rect"></Link>
                                            </Box>
                                            <Box component='li'>
                                            <Link to="#" className="cmsmasters_social_icon cmsmasters-icon-phone iconphone"></Link>
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
              to="https://mcf.com.vn/profile/nguyen-thi-kieu-vuong-2/"
              rel="prev"
              className="iconangle-left"
            >
              Bà Nguyễn Thị Kiều Vương
            </Link>
          </Box>
          <Box
            component="span"
            className="cmsmasters_next_post post_nav_next_arrow"
          >
            <Link
              to="https://mcf.com.vn/profile/ts-david-wilmoth/"
              rel="next"
              className="iconangle-right"
            >
              Tiến sĩ David Wilmoth
            </Link>
          </Box>
        </Box>
      </Box>
    </>
  );
};
export default ProfileMuseum;
