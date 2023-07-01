import { Box } from "@mui/material";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import { useEffect, useState, useRef } from "react";

const ScrollToTopBtn = () => {
  const [scrollY, setScrollY] = useState(0);
  const buttonRef = useRef<any>();
  // Get Scroll Position
  const changeScrollY = () => {
    setScrollY(window.scrollY);
  };
  useEffect(() => {
    window.addEventListener("scroll", changeScrollY);
    return () => {
      window.removeEventListener("scroll", changeScrollY);
    };
  }, [scrollY]);

  useEffect(() => {
    if (buttonRef.current) {
      if (scrollY >= 200) {
        buttonRef.current.style.opacity = 1;
        buttonRef.current.style.visibility = "visible";
      } else {
        buttonRef.current.style.opacity = 0;
        buttonRef.current.style.visibility = "hidden";
      }
    }
  }, [scrollY]);

  return (
    <Box
      position="fixed"
      bottom="48px"
      right="20px"
      sx={{
        opacity: 0,
        backgroundColor: "var(--btn-primary-bg)",
        ":hover": {
          backgroundColor: "var(--btn-hover-bg)",
        },
        transition: "0.5s",
        cursor: "pointer",
        zIndex: 100,
      }}
      ref={buttonRef}
      display="flex"
      padding="14px"
      color="var(--text-white)"
      onClick={() => {
        window.scrollTo({ behavior: "smooth", top: 0 });
      }}
    >
      <ExpandLessIcon></ExpandLessIcon>
    </Box>
  );
};

export default ScrollToTopBtn;
