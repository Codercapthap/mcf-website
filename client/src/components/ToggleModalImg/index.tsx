import { Box, Link } from "@mui/material";
import ReactDOM from "react-dom";
import { motion } from "framer-motion";
import FullScreen from "react-fullscreen-crossbrowser";

import "./ToggleImg.scss";
import { useState } from "react";
type Props = {
  src: String;
  setToggleModal: Function;
};

export default function Search({ src, setToggleModal }: Props) {
  const [isFullScreenEnabled, setIsFullScreenEnabled] =
    useState<boolean>(false);
  return ReactDOM.createPortal(
    <FullScreen enabled={isFullScreenEnabled}>
      <Box
        component={motion.div}
        className="ilightbox-overlay dark"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.85 }}
        exit={{ opacity: 0 }}
        style={{ opacity: "0.85", display: "block" }}
        onClick={() => {
          document.body.style.overflow = "auto";
          setToggleModal(false);
        }}
      ></Box>
      <Box
        component="div"
        className="ilightbox-holder dark"
        style={{
          display: "block",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <Box component="div" className="ilightbox-container">
          <Box component="img" src={`${src}`} className="ilightbox-image" />
        </Box>
      </Box>

      <Box
        component="div"
        className="ilightbox-toolbar dark"
        style={{ display: "block" }}
      >
        <Link
          className="ilightbox-close"
          title="Close"
          onClick={() => {
            document.body.style.overflow = "auto";
            setToggleModal(false);
          }}
        ></Link>
        <Link
          className="ilightbox-fullscreen"
          title="Enter Fullscreen (Shift+Enter)"
          onClick={() => {
            setIsFullScreenEnabled(!isFullScreenEnabled);
          }}
        ></Link>
      </Box>
    </FullScreen>,
    document.querySelector("body") as HTMLElement
  );
}
