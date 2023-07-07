import { Box, Input, styled, TextareaAutosize, Button, Typography } from "@mui/material";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./Contact.scss"
const CustomInput = styled(Input)({
  marginTop: "10px",
  border: "1px solid var(--border-color)",
  borderRadius: "30px",
  padding: "0 22px",
  width: "100%",
  minWidth: "100px",
  fontSize: "16px",
  lineHeight: "30px",
  fontWeight: "300",
  fontStyle: "normal",
  height: "48px",
  color: "var(--text-grey)",
  transition: "border-color .2s ease-in-out",
  "&:before": {
    border: "none",
  },
  "&:hover:not(.Mui-disabled, .Mui-error):before": {
    border: "none",
  },
  "&:after": {
    border: "none",
  },
  "&:focus-within": {
    borderColor: "#46c965",
  },
});
// const CustomInputLabel = styled(InputLabel)({
//     letterSpacing: '.1em',
//     fontSize: '13px',
//     lineHeight: '20px',
//     fontWeight: '700',
//     fontStyle: 'normal',
//     textTransform: 'uppercase',
//     textDecoration: 'none'
// })

const CustomTextArea = styled(TextareaAutosize)({
  marginTop: "10px",
  color: "#717171",
  width: "100%",
  minWidth: "100px",
  resize: "vertical",
  border: "1px solid var(--border-color)",
  borderRadius: "30px",
  padding: "10px 22px",
  transition: "border-color .2s ease-in-out",
  fontSize: "16px",
  fontWeight: "300",
  lineHeight: "30px",
  fontStyle: "normal",

  "&:focus": {
    borderColor: "#46c965",
  },
  "&:focus-visible": {
    outline: 0,
  },
});

const CustomButton = styled(Button)({
  backgroundColor: "#53d572",
  fontSize: "11px",
  lineHeight: "42px",
  fontWeight: "700",
  color: "#fff",
  padding: "0 42px",
  borderRadius: "30px",
  maxWidth: "100%",
  transition: "all .3 ease-in-out",
  "&:hover": {
    backgroundColor: "#46c965",
  },
});
const Contact = () => {
  document.title = `Contact - MCF`;
  return (
    <>
      <Header></Header>
      <Box component="div" id="middle">
        <Box component="div" className="headline cmsmasters_color_scheme_default">
          <Box component="div" className="headline_outer cmsmasters_headline_disabled">
            <Box component="div" className="headline_color"></Box>
          </Box>
        </Box>
        <Box component="div" className="middle_inner">
          <Box component="div" className="content_wrap fullwidth">
            <Box component="div" className="middle_content">
              <Box component="div" id="cmsmasters_row_64a3e8e8bee234_87932466" className="cmsmasters_row cmsmasters_color_scheme_default cmsmasters_row_top_default cmsmasters_row_bot_default cmsmasters_row_boxed">
                <Box component="div" className="cmsmasters_row_outer_parent">
                  <Box component="div" className="cmsmasters_row_outer">
                    <Box component="div" className="cmsmasters_row_inner">
                      <Box component="div" className="cmsmasters_row_margin cmsmasters_11">
                        <Box component="div" className="cmsmasters_column one_first">
                          <Box component="div" className="cmsmasters_text"></Box>
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Box>
              <Box component="div" id="cmsmasters_row_64a3e8e8bf1ab0_78745716" className="cmsmasters_row cmsmasters_color_scheme_default cmsmasters_row_top_default cmsmasters_row_bot_default cmsmasters_row_boxed">
                <Box component="div" className="cmsmasters_row_outer_parent">
                  <Box component="div" className="cmsmasters_row_outer">
                    <Box component="div" className="cmsmasters_row_inner">
                      <Box component="div" className="cmsmasters_row_margin">
                        <Box component="div" className="cmsmasters_column two_third">

                          <Box component="div" id="cmsmasters_heading_64a3e8e8bf4be" className="cmsmasters_heading_wrap cmsmasters_heading_align_left">
                            <Typography variant="h1" className="cmsmasters_heading">
                              Liên hệ
                            </Typography>
                          </Box>

                          <Box component="div" id="cmsmasters_heading_64a3e8e8bf5bf" className="cmsmasters_heading_wrap cmsmasters_heading_align_left">
                            <Typography variant="h3" className="cmsmasters_heading">
                              Vui lòng điền đầy đủ thông tin của bạn bên dưới, chúng
                              tôi sẽ liên lạc với bạn trong vòng 24 giờ
                            </Typography>
                          </Box>
                          <Box component="div" id="cmsmasters_divider_64a3e8e8bf6056_43275592" className="cl"></Box>
                          <Box component="div" className="cmsmasters_contact_form">
                            <Box component="div" role="form" className="wpcf7" id="wpcf7-f12038-p12413-o1" dir="ltr">
                              <Box component="div" className="screen-reader-response">
                                <Box component="p" role="status" aria-live="polite" aria-atomic="true"></Box>
                              </Box>

                              <Box component="form" action="/lien-he/#wpcf7-f12038-p12413-o1" method="post" className="wpcf7-form resetting" noValidate data-status="resetting">
                                <Box component="p">
                                  <Box component="label" htmlFor="name">
                                    tên của bạn
                                    <br />
                                    <Box component="span" className="wpcf7-form-control-wrap your-name">
                                      <CustomInput id="name" type="text" name="your-name" aria-valuemax={40} aria-required="true" aria-invalid="false" />
                                    </Box>
                                  </Box>
                                </Box>
                                <Box component="p">
                                  <Box component="label" htmlFor="email">
                                    email
                                    <br />
                                    <Box component="span" className="wpcf7-form-control-wrap your-email">
                                      <CustomInput id="email" type="email" name="your-email" aria-required="true" aria-invalid="false" />
                                    </Box>
                                  </Box>
                                </Box>
                                <Box component="p">
                                  <Box component="label" htmlFor="subject">
                                    Tiêu đề
                                    <br />
                                    <Box component="span">
                                      <CustomInput id="subject" type="text" name="your-subject" aria-required="true" aria-invalid="false" />
                                    </Box>
                                  </Box>
                                </Box>
                                <Box component="p">
                                  <Box component="label" htmlFor="subject">
                                    Lời nhắn (tùy chọn)
                                    <br />
                                    <Box
                                      component="span"
                                      sx={{
                                        margin: 0,
                                        padding: 0,
                                        marginTop: "10px",
                                        position: "relative",
                                        overflow: "hidden",
                                        display: "block",
                                      }}
                                    >
                                      <CustomTextArea
                                        id="message" name="your-message" cols={40} aria-invalid="false"
                                        style={{ height: "325px" }}
                                      ></CustomTextArea>
                                    </Box>
                                  </Box>
                                </Box>
                                <Box component="p">
                                  <CustomButton>Gửi ngay</CustomButton>
                                </Box>
                              </Box>
                            </Box>
                          </Box>

                        </Box>
                        <Box component="div" className="cmsmasters_column one_third">
                          <Box
                            component="div"
                            id="cmsmasters_heading_64a3e8e8c03de"
                            className="cmsmasters_heading_wrap cmsmasters_heading_align_left"
                          >
                            <Typography
                              component="h4"
                              className="cmsmasters_heading"
                                      
                            >
                              THÔNG TIN LIÊN HỆ
                            </Typography>
                          </Box>
                          <Box
                            component="ul"
                            id="cmsmasters_icon_list_items_64a3e8e8c044f7_91028428"
                            className="cmsmasters_icon_list_items cmsmasters_icon_list_type_list cmsmasters_icon_list_pos_left cmsmasters_color_type_border"
                          >
                            <Box
                              component="li"
                              id="cmsmasters_icon_list_item_64a3e8e8c05145_60611078"
                              className="icon-mobile-1 cmsmasters_icon_list_item"
                              
                            >
                              +84 909 987 887
                            </Box>
                          </Box>
                          <Box
                            component="div"
                            id="cmsmasters_divider_64a3e8e8c055a0_29798745"
                            className="cmsmasters_divider cmsmasters_divider_width_long cmsmasters_divider_pos_left"
                          ></Box>
                          <Box
                            component="ul"
                            id="cmsmasters_icon_list_items_64a3e8e8c044f7_91028428"
                            className="cmsmasters_icon_list_items cmsmasters_icon_list_type_list cmsmasters_icon_list_pos_left cmsmasters_color_type_border"
                          >
                            <Box
                              component="li"
                              id="cmsmasters_icon_list_item_64a3e8e8c05145_60611078"
                              className="icon-location cmsmasters_icon_list_item"
                            >
                              Phòng 216, Khoa Môi trường & TNTN, Đại học Cần Thơ khu II,
                              đường 3/2, Xuân Khánh, Ninh Kiều, Cần Thơ, Việt Nam
                            </Box>
                          </Box>
                          <Box
                            component="div"
                            id="cmsmasters_divider_64a3e8e8c055a0_29798745"
                            className="cmsmasters_divider cmsmasters_divider_width_long cmsmasters_divider_pos_left"
                          ></Box>
                          <Box
                            component="ul"
                            id="cmsmasters_icon_list_items_64a3e8e8c044f7_91028428"
                            className="cmsmasters_icon_list_items cmsmasters_icon_list_type_list cmsmasters_icon_list_pos_left cmsmasters_color_type_border"
                          >
                            <Box
                              component="li"
                              id="cmsmasters_icon_list_item_64a3e8e8c05145_60611078"
                              className="icon-mail cmsmasters_icon_list_item"
                            >
                              duongvani@gmail.com
                            </Box>
                          </Box>
                          <Box
                            component="div"
                            id="cmsmasters_divider_64a3e8e8c055a0_29798745"
                            className="cmsmasters_divider cmsmasters_divider_width_long cmsmasters_divider_pos_left"
                          ></Box>
                          <Box
                            component="ul"
                            id="cmsmasters_icon_list_items_64a3e8e8c044f7_91028428"
                            className="cmsmasters_icon_list_items cmsmasters_icon_list_type_list cmsmasters_icon_list_pos_left cmsmasters_color_type_border"
                          >
                            <Box
                              component="li"
                              id="cmsmasters_icon_list_item_64a3e8e8c05145_60611078"
                              className="icon-clock cmsmasters_icon_list_item"
                            >
                              Thứ 2 - Thứ 6: 7:00am - 5:00pm
                            </Box>
                          </Box>
                          <Box
                            component="div"
                            id="cmsmasters_divider_64a3e8e8c055a0_29798745"
                            className="cmsmasters_divider cmsmasters_divider_width_long cmsmasters_divider_pos_left"
                          ></Box>
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
      <Footer></Footer>
    </>
  );
};
export default Contact;
