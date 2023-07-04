import { Box, Link } from "@mui/material";
import ReactDOM from "react-dom";
import { motion } from "framer-motion";
import "./ToggleImg.scss"
type Props = {
    src: String;
    setToggleModal: Function;
};

export default function Search({ src, setToggleModal }: Props) {
    return ReactDOM.createPortal(
        <Box component="div" className="ilightbox-overlay" display="block">
            <Box
                component={motion.div} className="ilightbox-overlay dark"

                initial={{ opacity: 0 }}
                animate={{ opacity: 0.85 }}
                exit={{ opacity: 0 }}
                style={{ opacity: "0.85", display: "block" }}
            >
            </Box>
            
            <Box component="div" className="ilightbox-holder dark" style ={{display: "block", top: "50%", left: "50%", transform: "translate(-50%, -50%)"}}>
                <Box component="div" className="ilightbox-container">
                    <Box component="img" src={`${src}`} className="ilightbox-image" />
                </Box>
            </Box>
            
            <Box component="div" className="ilightbox-toolbar dark" style={{ display: "block" }}>
                <Link className="ilightbox-close" title="Close" 
                onClick={() => {
                    document.body.style.overflow = "auto"
                    setToggleModal(false);
                }}></Link>
                <Link className="ilightbox-fullscreen"title="Enter Fullscreen (Shift+Enter)"></Link>
            </Box>
        </Box>,
        document.querySelector("body") as HTMLElement
    );
}

