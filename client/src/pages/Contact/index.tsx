import { Box, Input, styled, TextareaAutosize, Button } from "@mui/material";

import Header from "@/components/Header";

const CustomInput = styled(Input)({
  marginTop: "10px",
  border: "1px solid #dfdfdf",
  borderRadius: "30px",
  padding: "0 22px",
  width: "100%",
  minWidth: "100px",
  fontSize: "16px",
  lineHeight: "30px",
  fontWeight: "300",
  fontStyle: "normal",
  height: "48px",
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
  color: "#717171",
  width: "94.7%",
  minWidth: "100px",
  resize: "vertical",
  border: "1px solid #dfdfdf",
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
  return (
    <>
      <Header></Header>
      {/* <link rel="stylesheet" href="path/to/pe-icon-set-transportation/css/pe-icon-set-transportation.css"/>
            <link rel="stylesheet" href="path/to/pe-icon-set-transportation/css/helper.css"/> */}

      {/* <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/> */}
      <Box component="div" width="100%" position="relative">
        <Box
          component="div"
          width="1400px"
          sx={{
            display: "block",
            minWidth: "inherit",
            position: "relative",
            margin: "0 auto",
          }}
        >
          <Box
            component="div"
            width="100%"
            position="relative"
            sx={{
              color: "#717171",
              padding: "40px 0 0",
            }}
          >
            <Box component="div" padding="100px 0">
              <Box
                component="div"
                sx={{
                  width: "100%",
                  position: "relative",
                }}
              >
                <Box
                  component="div"
                  sx={{
                    position: "relative",
                    padding: "0 20px",
                    margin: "0 auto",
                  }}
                >
                  <Box
                    component="div"
                    sx={{
                      width: "63.27%",
                      margin: "0 1.7%",
                      position: "relative",
                      float: "left",
                      minHeight: "1px",
                    }}
                  >
                    <Box component="div" marginBottom="10px">
                      <Box
                        component="h1"
                        color="#343434"
                        fontWeight="300"
                        fontSize="48px"
                        fontStyle="normal"
                        margin="0"
                      >
                        Liên hệ
                      </Box>
                    </Box>
                    <Box component="div" marginBottom="20px" lineHeight="30px">
                      <Box
                        component="h3"
                        color="#343434"
                        fontWeight="300"
                        fontSize="20px"
                        fontStyle="normal"
                        margin="0"
                      >
                        Vui lòng điền đầy đủ thông tin của bạn bên dưới, chúng
                        tôi sẽ liên lạc với bạn trong vòng 24 giờ
                      </Box>
                    </Box>
                    <Box component="div" paddingTop="30px"></Box>
                    <Box component="div" display="block">
                      <Box component="form">
                        <Box
                          component="div"
                          sx={{
                            color: "#717171",
                            padding: "0 0 20px",
                            margin: "0",
                            letterSpacing: ".1em",
                            fontSize: "13px",
                            lineHeight: "20px",
                            fontWeight: "700",
                            fontStyle: "normal",
                            textTransform: "uppercase",
                            textDecoration: "none",
                          }}
                        >
                          <Box
                            component="label"
                            htmlFor="name"
                            sx={{ verticalAlign: "baseline" }}
                          >
                            tên của bạn
                            <br />
                            <CustomInput id="name" />
                          </Box>
                        </Box>
                        <Box
                          component="div"
                          sx={{
                            color: "#717171",
                            padding: "0 0 20px",
                            margin: "0",
                            letterSpacing: ".1em",
                            fontSize: "13px",
                            lineHeight: "20px",
                            fontWeight: "700",
                            fontStyle: "normal",
                            textTransform: "uppercase",
                            textDecoration: "none",
                          }}
                        >
                          <Box
                            component="label"
                            htmlFor="email"
                            sx={{ verticalAlign: "baseline" }}
                          >
                            email
                            <br />
                            <CustomInput id="email" />
                          </Box>
                        </Box>
                        <Box
                          component="div"
                          sx={{
                            color: "#717171",
                            padding: "0 0 20px",
                            margin: "0",
                            letterSpacing: ".1em",
                            fontSize: "13px",
                            lineHeight: "20px",
                            fontWeight: "700",
                            fontStyle: "normal",
                            textTransform: "uppercase",
                            textDecoration: "none",
                          }}
                        >
                          <Box
                            component="label"
                            htmlFor="subject"
                            sx={{ verticalAlign: "baseline" }}
                          >
                            Tiêu đề
                            <br />
                            <CustomInput id="subject" />
                          </Box>
                        </Box>
                        <Box
                          component="div"
                          sx={{
                            color: "#717171",
                            padding: "0 0 20px",
                            margin: "0",
                            letterSpacing: ".1em",
                            fontSize: "13px",
                            lineHeight: "20px",
                            fontWeight: "700",
                            fontStyle: "normal",
                            textTransform: "uppercase",
                            textDecoration: "none",
                            maxWidth: "100%",
                          }}
                        >
                          <Box component="label" htmlFor="subject">
                            Lời nhắn (tùy chọn)
                            <br />
                            <Box
                              component="div"
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
                                id="message"
                                style={{ height: "325px" }}
                              ></CustomTextArea>
                              {/* <Box component='textarea' height='320px' maxWidth='100%' width='100%'></Box> */}

                              {/* <TextareaAutosize/> */}
                            </Box>
                          </Box>
                        </Box>
                        <Box
                          component="div"
                          sx={{
                            color: "#717171",
                            padding: "0 0 20px",
                            margin: "0",
                            letterSpacing: ".1em",
                            fontSize: "13px",
                            lineHeight: "20px",
                            fontWeight: "700",
                            fontStyle: "normal",
                            textTransform: "uppercase",
                            textDecoration: "none",
                          }}
                        >
                          <CustomButton>Gửi ngay</CustomButton>
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                </Box>
                <Box
                  component="div"
                  sx={{
                    width: "29.93%",
                    position: "relative",
                    margin: "0 1.7%",
                    float: "left",
                    minHeight: "1px",
                    color: "#717171",
                    fontFamily: "roboto,Tahoma,Geneva,Kalimati,sans-serif",
                    fontSize: "16px",
                    fontWeight: "300",
                    fontStyle: "normal",
                  }}
                >
                  <Box
                    component="div"
                    sx={{
                      marginTop: "15px",
                      marginBottom: "20px",
                      position: "relative",
                    }}
                  >
                    <Box
                      component="h4"
                      className="fontLato"
                      sx={{
                        fontWeight: "bold",
                        color: "#343434",
                        fontStyle: "normal",
                        fontSize: "16px",
                        lineHeight: "22px",
                        textTransform: "uppercase",
                        textDecoration: "none",
                        letterSpacing: ".1em",
                      }}
                    >
                      THÔNG TIN LIÊN HỆ
                    </Box>
                  </Box>
                  <Box
                    component="ul"
                    sx={{
                      padding: "0",
                      margin: "0",
                      paddingLeft: "40px",
                      listStyle: "none",
                      display: "block",
                      position: "relative",
                    }}
                  >
                    <Box
                      component="li"
                      className="icon-mobile-1"
                      sx={{
                        // color: '#84d553'
                        lineHeight: "30px",
                        padding: "0",
                        display: "block",
                        position: "relative",
                        "&::before": {
                          color: "#84d553",
                          lineHeight: "30px",
                          top: "0px",
                          fontSize: "20px",
                          position: "absolute",
                          left: "-40px",
                          right: "auto",
                        },
                      }}
                    >
                      {" "}
                      +84 909 987 887
                    </Box>
                  </Box>
                  <Box
                    component="div"
                    sx={{
                      borderBottomWidth: "1px",
                      borderBottomStyle: "solid",
                      borderColor: "#dfdfdf",
                      paddingTop: "10px",
                      marginBottom: "10px",
                      width: "100%",
                      backgroundColor: "transparent",
                      height: "1px",
                      position: "relative",
                      display: "block",
                      clear: "both",
                    }}
                  ></Box>
                  <Box
                    component="ul"
                    sx={{
                      padding: "0",
                      margin: "0",
                      paddingLeft: "40px",
                      listStyle: "none",
                      display: "block",
                      position: "relative",
                    }}
                  >
                    <Box
                      component="li"
                      className="icon-location"
                      sx={{
                        // color: '#84d553'
                        lineHeight: "30px",
                        padding: "0",
                        display: "block",
                        position: "relative",
                        "&:before": {
                          color: "#84d553",
                          lineHeight: "30px",
                          top: "0px",
                          fontSize: "20px",
                          position: "absolute",
                          left: "-40px",
                          right: "auto",
                        },
                      }}
                    >
                      Phòng 216, Khoa Môi trường & TNTN, Đại học Cần Thơ khu II,
                      đường 3/2, Xuân Khánh, Ninh Kiều, Cần Thơ, Việt Nam
                    </Box>
                  </Box>
                  <Box
                    component="div"
                    sx={{
                      borderBottomWidth: "1px",
                      borderBottomStyle: "solid",
                      borderColor: "#dfdfdf",
                      paddingTop: "10px",
                      marginBottom: "10px",
                      width: "100%",
                      backgroundColor: "transparent",
                      height: "1px",
                      position: "relative",
                      display: "block",
                      clear: "both",
                    }}
                  ></Box>
                  <Box
                    component="ul"
                    sx={{
                      padding: "0",
                      margin: "0",
                      paddingLeft: "40px",
                      listStyle: "none",
                      display: "block",
                      position: "relative",
                    }}
                  >
                    <Box
                      component="li"
                      className="icon-mail"
                      sx={{
                        // color: '#84d553'
                        lineHeight: "30px",
                        padding: "0",
                        display: "block",
                        position: "relative",
                        "&:before": {
                          color: "#84d553",
                          lineHeight: "30px",
                          top: "0px",
                          fontSize: "20px",
                          position: "absolute",
                          left: "-40px",
                          right: "auto",
                        },
                      }}
                    >
                      duongvani@gmail.com
                    </Box>
                  </Box>
                  <Box
                    component="div"
                    sx={{
                      borderBottomWidth: "1px",
                      borderBottomStyle: "solid",
                      borderColor: "#dfdfdf",
                      paddingTop: "10px",
                      marginBottom: "10px",
                      width: "100%",
                      backgroundColor: "transparent",
                      height: "1px",
                      position: "relative",
                      display: "block",
                      clear: "both",
                    }}
                  ></Box>
                  <Box
                    component="ul"
                    sx={{
                      padding: "0",
                      margin: "0",
                      paddingLeft: "40px",
                      listStyle: "none",
                      display: "block",
                      position: "relative",
                    }}
                  >
                    <Box
                      component="li"
                      className="icon-clock"
                      sx={{
                        // color: '#84d553'
                        lineHeight: "30px",
                        padding: "0",
                        display: "block",
                        position: "relative",
                        "&:before": {
                          color: "#84d553",
                          lineHeight: "30px",
                          top: "0px",
                          fontSize: "20px",
                          position: "absolute",
                          left: "-40px",
                          right: "auto",
                        },
                      }}
                    >
                      Thứ 2 - Thứ 6: 7:00am - 5:00pm
                    </Box>
                  </Box>
                  <Box
                    component="div"
                    sx={{
                      borderBottomWidth: "1px",
                      borderBottomStyle: "solid",
                      borderColor: "#dfdfdf",
                      paddingTop: "10px",
                      marginBottom: "10px",
                      width: "100%",
                      backgroundColor: "transparent",
                      height: "1px",
                      position: "relative",
                      display: "block",
                      clear: "both",
                    }}
                  ></Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};
export default Contact;
