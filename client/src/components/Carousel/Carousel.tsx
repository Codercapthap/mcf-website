import { Box } from "@mui/material";
import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { CustomizedButton, CustomizedTypography } from "@/styles/Components";
import { ImageSliderType } from "@/shared/type";
import theme from "@/styles/Theme";

type Props = {
  images: Array<ImageSliderType>;
};

const Carousel = ({ images }: Props) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isPause, setisPause] = useState<boolean>(false);
  const refCarouselDiv: Array<React.MutableRefObject<any>> = [];
  const refTypo1: Array<React.MutableRefObject<any>> = [];
  const refTypo2: Array<React.MutableRefObject<any>> = [];
  const refButton: Array<React.MutableRefObject<any>> = [];
  const refPauseButton: React.MutableRefObject<any> = useRef<any>();
  const refPlayButton: React.MutableRefObject<any> = useRef<any>();

  const slideToNextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % 3);

    const newIndex = (currentIndex + 1) % images.length;
    const newNextIndex =
      (((currentIndex - 1) % images.length) + images.length) % images.length;
    console.log(currentIndex);
    // carouseldiv handle motion
    refCarouselDiv[currentIndex].current.style.visibility = "hidden";
    refCarouselDiv[currentIndex].current.style.left = "-100vw";
    refCarouselDiv[newIndex].current.style.left = "0";
    refCarouselDiv[newNextIndex].current.style.left = "100vw";
    refCarouselDiv[newIndex].current.style.visibility = "visible";

    // typo1 handle motion
    refTypo1[currentIndex].current.style.opacity = 0;
    refTypo1[newIndex].current.style.left = images[newIndex].typoLeft;
    refTypo1[
      newIndex
    ].current.style.right = `calc(${images[newIndex].typoRight} + 7vw + 2vw`;
    refTypo1[
      newNextIndex
    ].current.style.left = `calc(${images[newNextIndex].typoLeft} + 5vw`;
    refTypo1[
      newNextIndex
    ].current.style.right = `calc(${images[newNextIndex].typoRight} + 7vw + 2vw - 5vw`;
    refTypo1[newIndex].current.style.opacity = 1;
    // typo2 handle motion
    refTypo2[currentIndex].current.style.opacity = 0;
    refTypo2[
      newIndex
    ].current.style.left = `calc(${images[newIndex].typoLeft} + 7vw`;
    refTypo2[
      newIndex
    ].current.style.right = `calc(${images[newIndex].typoRight} + 2vw`;
    refTypo2[
      newNextIndex
    ].current.style.left = `calc(${images[newNextIndex].typoLeft} + 7vw + 5vw`;
    refTypo2[
      newNextIndex
    ].current.style.right = `calc(${images[newNextIndex].typoRight} + 2vw - 5vw`;
    refTypo2[newIndex].current.style.opacity = 1;
    // button handle motion
    refButton[currentIndex].current.style.opacity = 0;
    refButton[
      newIndex
    ].current.style.left = `calc(${images[newIndex].typoLeft} + 7vw`;
    refButton[
      newIndex
    ].current.style.right = `calc(${images[newIndex].typoRight}`;
    refButton[
      newNextIndex
    ].current.style.left = `calc(${images[newNextIndex].typoLeft} + 7vw + 5vw`;
    refButton[
      newNextIndex
    ].current.style.right = `calc(${images[newNextIndex].typoRight} - 5vw`;
    refButton[newIndex].current.style.opacity = 1;
  };

  const slideToPreviousImage = () => {
    setCurrentIndex((prev) => (((prev - 1) % 3) + 3) % 3);
    const newPrevIndex = (currentIndex + 1) % images.length;
    const newIndex =
      (((currentIndex - 1) % images.length) + images.length) % images.length;
    // carouselDiv handle motion
    console.log(currentIndex);
    refCarouselDiv[currentIndex].current.style.visibility = "hidden";
    refCarouselDiv[currentIndex].current.style.left = "100vw";
    refCarouselDiv[newPrevIndex].current.style.left = "-100vw";
    refCarouselDiv[newIndex].current.style.left = "0";
    refCarouselDiv[newIndex].current.style.visibility = "visible";

    // typo1 handle motion
    refTypo1[currentIndex].current.style.opacity = 0;
    refTypo1[newIndex].current.style.left = images[newIndex].typoLeft;
    refTypo1[
      newIndex
    ].current.style.right = `calc(${images[newIndex].typoRight} + 7vw + 2vw`;
    refTypo1[
      currentIndex
    ].current.style.left = `calc(${images[currentIndex].typoLeft} + 5vw`;
    refTypo1[
      currentIndex
    ].current.style.right = `calc(${images[currentIndex].typoRight} + 7vw + 2vw - 5vw`;
    refTypo1[newIndex].current.style.opacity = 1;
    // typo2 handle motion
    refTypo2[currentIndex].current.style.opacity = 0;
    refTypo2[
      newIndex
    ].current.style.left = `calc(${images[newIndex].typoLeft} + 7vw`;
    refTypo2[
      newIndex
    ].current.style.right = `calc(${images[newIndex].typoRight} + 2vw`;
    refTypo2[
      currentIndex
    ].current.style.left = `calc(${images[currentIndex].typoLeft} + 7vw + 5vw`;
    refTypo2[
      currentIndex
    ].current.style.right = `calc(${images[currentIndex].typoRight} + 2vw - 5vw`;
    refTypo2[newIndex].current.style.opacity = 1;
    // button handle motion
    refButton[currentIndex].current.style.opacity = 0;
    refButton[
      newIndex
    ].current.style.left = `calc(${images[newIndex].typoLeft} + 7vw`;
    refButton[
      newIndex
    ].current.style.right = `calc(${images[newIndex].typoRight}`;
    refButton[
      currentIndex
    ].current.style.left = `calc(${images[currentIndex].typoLeft} + 7vw + 5vw`;
    refButton[
      currentIndex
    ].current.style.right = `calc(${images[currentIndex].typoRight} - 5vw`;
    refButton[newIndex].current.style.opacity = 1;
  };

  // auto slide to next image
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isPause) {
        slideToNextImage();
      }
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, [currentIndex, isPause]);

  // set for the first slide
  useEffect(() => {
    refCarouselDiv[0].current.style.left = "0";
    refCarouselDiv[0].current.style.visibility = "visible";
    refCarouselDiv[1].current.style.left = "100vw";
    refCarouselDiv[2].current.style.left = "-100vw";
  }, []);

  // create ref for each elements
  images.forEach(() => {
    refCarouselDiv.push(useRef<any>());
    refTypo1.push(useRef<any>());
    refTypo2.push(useRef<any>());
    refButton.push(useRef<any>());
  });

  return (
    <Box
      width="100%"
      overflow="hidden"
      position="relative"
      paddingTop="98px"
      sx={{
        ":hover .arrow_icon": { opacity: 1 },
        [theme.breakpoints.down("laptop")]: {
          paddingTop: "0",
        },
      }}
    >
      {/* IMAGES SESSION */}
      <Box
        position="relative"
        overflow="hidden"
        height="50vw"
        maxHeight="617px"
      >
        {images.map((image: ImageSliderType, index: number) => {
          return (
            <Box key={image.src}>
              <Box
                ref={refCarouselDiv[index]}
                component="div"
                position="absolute"
                width="100%"
                height="100%"
                maxHeight="617px"
                visibility="hidden"
                sx={{
                  top: 0,
                  left: "100vw",
                  transition: "1s",
                }}
              >
                <Box
                  component="img"
                  width="100%"
                  height="100%"
                  src={image.src}
                ></Box>
                <CustomizedTypography
                  ref={refTypo1[index]}
                  left={image.typoLeft}
                  right={`calc(${image.typoRight} + 7vw + 2vw)`}
                  bottom={`calc(${image.typoBottom} + 5.5vw + 38px + 1vw)`}
                  top={image.typoTop}
                  sx={{
                    transition: "0.5s",
                    transitionDelay: "1s",
                  }}
                >
                  {image.typo1}
                </CustomizedTypography>
                <CustomizedTypography
                  ref={refTypo2[index]}
                  left={`calc(${image.typoLeft} + 7vw)`}
                  right={`calc(${image.typoRight} + 2vw)`}
                  bottom={`calc(${image.typoBottom} + 38px + 1vw)`}
                  top={`calc(${image.typoTop} + 5.5vw)`}
                  sx={{
                    transition: "0.5s",
                    transitionDelay: ".8s",
                  }}
                >
                  {image.typo2}
                </CustomizedTypography>
                <CustomizedButton
                  ref={refButton[index]}
                  component={Link}
                  to={image.link}
                  top={`calc(${image.typoTop} + 5.5vw + 5.5vw)`}
                  left={`calc(${image.typoLeft} + 7vw)`}
                  right={image.typoRight}
                  bottom={image.typoBottom}
                  sx={{
                    transition: "0.5s",
                    transitionDelay: "1s",
                  }}
                >
                  Find more
                </CustomizedButton>
              </Box>
            </Box>
          );
        })}
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
        onClick={() => {
          slideToPreviousImage();
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
        onClick={() => {
          slideToNextImage();
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
          ref={refPlayButton}
          sx={{
            cursor: "pointer",
            backgroundImage: "url('/images/skin.png')",
            backgroundPosition: "-300px -75px",
            ":hover": {
              backgroundPosition: "-300px -75px",
            },
          }}
          onClick={() => {
            setisPause(false);
            refPauseButton.current.style.backgroundPosition = "-450px 0";
            refPlayButton.current.style.backgroundPosition = "-300px -75px";
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
                  opacity: 1,
                },
              }}
              onClick={() => {
                if ((currentIndex + 1) % 3 === index) {
                  slideToNextImage();
                } else if ((((currentIndex - 1) % 3) + 3) % 3 === index) {
                  slideToPreviousImage();
                }
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
                  opacity: 0,
                  visibility: "hidden",
                  transition: "0.5s",
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
          ref={refPauseButton}
          onClick={() => {
            setisPause(true);
            refPauseButton.current.style.backgroundPosition = "-450px -75px";
            refPlayButton.current.style.backgroundPosition = "-300px 0";
          }}
        ></Box>
      </Box>
    </Box>
  );
};

export default Carousel;
