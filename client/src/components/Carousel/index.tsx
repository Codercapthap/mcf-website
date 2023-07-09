import Slider from "react-slick";
import "./Carousel.scss";
import { useState, useRef } from "react";
import { AnimatePresence } from "framer-motion";
import { Box } from "@mui/material";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CarouselText from "@/components/CarouselText";
import { useTranslation } from "react-i18next";

const Carousel = () => {
  const [nextDisplay, setNextDisplay] = useState(0);
  const [isPause, setIsPause] = useState(false);
  const sliderRef = useRef<any>();
  const { t } = useTranslation();
  var settings = {
    dots: true,
    Infinity: true,
    speed: 1000,
    autoPlaySpeed: 1000,
    pauseOnHover: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    accessibility: true,
    appendDots: (dots: any) => (
      <ul className="dots-container">
        <li
          className={`dots dots-pause ${!isPause && "active"}`}
          onClick={() => {
            setIsPause(false);
            sliderRef.current?.slickPlay();
          }}
        ></li>
        {dots}
        <li
          className={`dots dots-play ${isPause && "active"}`}
          onClick={() => {
            setIsPause(true);
            sliderRef.current?.slickPause();
          }}
        ></li>
      </ul>
    ),
  };
  return (
    <Box maxHeight="100vh">
      <Slider
        {...settings}
        beforeChange={(currentSlide: number, nextSlide: number) => {
          setNextDisplay(nextSlide);
        }}
        ref={sliderRef}
      >
        <div className="customize-container">
          <img src="images/carousel/Bao-tang_home.jpg" alt="" />
          <AnimatePresence>
            {nextDisplay === 0 && (
              <CarouselText
                text1={t("home.slide.0.text1")}
                text2={t("home.slide.0.text2")}
              ></CarouselText>
            )}
          </AnimatePresence>
        </div>
        <div className="customize-container">
          <img src="images/carousel/Sinh-ke_trangchu-2048x1110.jpg" alt="" />
          <AnimatePresence>
            {nextDisplay === 1 && (
              <CarouselText
                topDistant={55}
                leftDistant={50}
                marginLeftVw={35}
                text2={t("home.slide.1.text2")}
              ></CarouselText>
            )}
          </AnimatePresence>
        </div>
        <div className="customize-container">
          <img src="images/carousel/Bao-ton_home-2048x1365.jpg" alt="" />
          <AnimatePresence>
            {nextDisplay == 2 && (
              <CarouselText
                marginLeftVw={28}
                topDistant={10}
                leftDistant={58}
                text2={t("home.slide.2.text2")}
              ></CarouselText>
            )}
          </AnimatePresence>
        </div>
      </Slider>
      {/* <div className="dots-container">
        <div className="dots dots-pause"></div>

        <div className="dots dots-play"></div>
      </div> */}
    </Box>
  );
};

export default Carousel;
