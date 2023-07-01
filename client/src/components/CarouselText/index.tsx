import { motion } from "framer-motion";
import { Box } from "@mui/material";

type Props = {
  topDistant?: number;
  leftDistant?: number;
  marginLeftVw?: number;
  text1?: string;
  text2: string;
};

const index = ({
  topDistant,
  leftDistant,
  marginLeftVw,
  text1,
  text2,
}: Props) => {
  return (
    <Box
      component={motion.div}
      className="customize-div"
      // style={{
      //   top: `${topDistant}%` || "40%",
      //   left: `${leftDistant}%` || "10%",
      // }}
      top={`${topDistant}%` || "40%"}
      left={`${leftDistant}%` || "10%"}
      initial={{ opacity: 0 }}
      transition={{ delay: 1, duration: 0.5 }}
      animate={{ opacity: 1 }}
      exit={{
        opacity: 0,
        transition: { delay: 0 },
      }}
    >
      {text1 && (
        <motion.div
          initial={{ opacity: 0, transform: "translateX(10%)" }}
          transition={{ delay: 1.25, duration: 0.5 }}
          animate={{ opacity: 1, transform: "translateX(0)" }}
          exit={{
            opacity: 0,
            transform: "translateX(10%)",
            transition: { delay: 0.25 },
          }}
        >
          <span className="customize-typo">{text1}</span>
        </motion.div>
      )}
      <motion.div
        initial={{ transform: "translateX(10%)" }}
        transition={{ delay: 1, duration: 0.5 }}
        animate={{ transform: "translateX(0)" }}
        exit={{
          transform: "translateX(10%)",
          transition: { delay: 0 },
        }}
      >
        <span className={`customize-typo ${text1 && "typo2"}`}>{text2}</span>
      </motion.div>
      <Box
        component={motion.button}
        className="customize-button"
        initial={{ opacity: 0, transform: "translateX(10%)" }}
        transition={{ delay: 1.25, duration: 0.5 }}
        animate={{ opacity: 1, transform: "translateX(0)" }}
        exit={{
          opacity: 0,
          transform: "translateX(10%)",
          transition: { delay: 0.25 },
        }}
        // style={{ marginLeft: `${marginLeftVw}vw` || "5vw" }}
        marginLeft={`${marginLeftVw}vw` || "5vw"}
      >
        Find More
      </Box>
    </Box>
  );
};

export default index;
