import { Box } from "@mui/material";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { CustomizedButton, CustomizedTypography } from "@/styles/Component";
import { ImageSliderType } from "@/shared/type";

type Props = {
  images: Array<ImageSliderType>;
};

const Carousel = ({ images }: Props) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const slideToNextImage = () => {
    if (currentIndex === 2) {
      return setCurrentIndex(0);
    }
    return setCurrentIndex(currentIndex + 1);
  };
  const slideToPreviousImage = () => {
    if (currentIndex === 0) {
      return setCurrentIndex(2);
    }
    return setCurrentIndex(currentIndex - 1);
  };

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     slideToNextImage();
  //   }, 3000);

  //   return () => {
  //     clearInterval(interval);
  //   };
  // }, []);

  return (
    <Box
      width="100%"
      overflow="hidden"
      position="relative"
      sx={{ ":hover .arrow_icon": { opacity: 1 } }}
    >
      {/* IMAGES SESSION */}
      <Box position="relative" overflow="hidden">
        <Box
          component="img"
          width="100%"
          height="auto"
          maxHeight="617px"
          src={images[0].src}
        ></Box>
        <CustomizedTypography
          left={images[0].typoLeft}
          right={images[0].typoRight}
          bottom={images[0].typoBottom}
          top={images[0].typoTop}
        >
          {images[0].typo1}
        </CustomizedTypography>
        <CustomizedTypography
          left={`calc(${images[0].typoLeft} + 100px)`}
          right={`calc(${images[0].typoRight} + 100px)`}
          bottom={`calc(${images[0].typoBottom} - 6.5vw)`}
          top={`calc(${images[0].typoTop} + 6.5vw)`}
        >
          {images[0].typo2}
        </CustomizedTypography>
        <CustomizedButton
          component={Link}
          to={images[0].link}
          top={`calc(${images[0].typoTop} + 6.5vw + 6.5vw)`}
          left={`calc(${images[0].typoLeft} + 100px + 32px)`}
          right={`calc(${images[0].typoRight} - 32px)`}
          bottom={`calc(${images[0].typoBottom} - 6.5vw - 6.5vw)`}
        >
          Find more
        </CustomizedButton>
      </Box>

      {/* ARROWS SESSION */}
      <Box
        className="arrow_icon"
        position="absolute"
        top="50%"
        left="10px"
        component="span"
        width="40px"
        height="50px"
        sx={{
          backgroundImage: "url('/images/skin.png')",
          backgroundPosition: "0 0",
          opacity: 0,
          transform: "translate(0, -50%)",
          cursor: "pointer",
        }}
      ></Box>

      <Box
        className="arrow_icon"
        component="span"
        position="absolute"
        top="50%"
        right="10px"
        width="40px"
        height="50px"
        sx={{
          backgroundImage: "url('/images/skin.png')",
          backgroundPosition: "-150px 0",
          opacity: 0,
          transform: "translate(0, -50%)",
          cursor: "pointer",
        }}
      ></Box>

      {/* INDICATORS SESSION */}
      <Box
        position="absolute"
        bottom="12px"
        left="50%"
        sx={{ transform: "translate(-50%, 0)" }}
        display="flex"
      >
        <Box
          component="span"
          width="20px"
          height="20px"
          sx={{
            cursor: "pointer",
            backgroundImage: "url('/images/skin.png')",
            backgroundPosition: "-300px 0",
            ":hover": {
              backgroundPosition: "-300px -75px",
            },
          }}
        ></Box>
        {images.map((image: ImageSliderType, index: number) => {
          return (
            <Box
              component="span"
              key={image.src}
              width="20px"
              height="20px"
              position="relative"
              sx={{
                cursor: "pointer",
                backgroundImage: "url('/images/skin.png')",
                backgroundPosition: "0 -150px",
                ":hover": { backgroundPosition: "-75px -150px" },
                ":hover .carousel_indicator": {
                  visibility: "visible",
                },
              }}
            >
              <Box
                position="absolute"
                className="carousel_indicator"
                top="-70px"
                padding="1px"
                sx={{
                  backgroundColor: "white",
                  transform: "translate(-42%, 0)",
                  visibility: "hidden",
                  "::before": {
                    content: '""',
                    position: "absolute",
                    top: "64px",
                    left: "40%",
                    borderLeft: "12px solid transparent",
                    borderRight: "12px solid transparent",
                    borderTop: "12px solid #fff",
                  },
                }}
              >
                <Box
                  width="100px"
                  height="60px"
                  component="img"
                  src={image.src}
                ></Box>
              </Box>
            </Box>
          );
        })}

        <Box
          component="span"
          width="20px"
          height="20px"
          sx={{
            cursor: "pointer",
            backgroundImage: "url('/images/skin.png')",
            backgroundPosition: "-450px 0",
            ":hover": {
              backgroundPosition: "-450px -75px",
            },
          }}
        ></Box>
      </Box>
    </Box>
  );
};

export default Carousel;
