import { Box } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import ReactDOM from "react-dom";
import { motion } from "framer-motion";
type Props = {
  setToggleModal: Function;
};

export default function Search({ setToggleModal }: Props) {
  return ReactDOM.createPortal(
    <Box
      component={motion.div}
      position="fixed"
      display="flex"
      zIndex="100"
      top="0"
      left="0"
      right="0"
      bottom="0"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      sx={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}
    >
      <Box
        component={CloseIcon}
        position="absolute"
        right="2vw"
        top="4vh"
        color="white"
        cursor="pointer"
        fontSize="1.8em"
        onClick={() => {
          setToggleModal(false);
        }}
      ></Box>
      <Box
        margin="auto"
        component="input"
        width="30vw"
        sx={{
          color: "white",
          border: "1px solid white",
          fontWeight: "300",
          padding: "8px",
          backgroundColor: "grey",
          fontSize: "1.8em",
          borderRadius: "30px",
          textAlign: "center",
          "::placeholder": {
            color: "white",
          },
          ":focus": {
            outline: "none",
          },
        }}
        placeholder="Search..."
      ></Box>
    </Box>,
    document.querySelector("body") as HTMLElement
  );
}

// const SearchModal = ReactDOM.createPortal(
//   Search({}),
//   document.querySelector("body") as HTMLElement
// );
