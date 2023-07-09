import { Box } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import ReactDOM from "react-dom";
import { motion } from "framer-motion";
import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { projects, Project } from "@/shared";
import { useTranslation } from "react-i18next";
type Props = {
  setToggleModal: Function;
};

export default function Search({ setToggleModal }: Props) {
  const [searchInput, setSearchInput] = useState("");
  const navigate = useNavigate();
  const search = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Enter") {
      // var result: Record<string, Array<Project>> = {};
      var result: Array<Project> = [];
      Object.entries(projects).map((projectArray: any) => {
        projectArray[1] = projectArray[1].filter((project: Project) => {
          return (
            project.title.toLowerCase().includes(searchInput.toLowerCase()) ||
            (project.description &&
              project.description
                .toLowerCase()
                .includes(searchInput.toLowerCase()))
          );
        });
        console.log(projectArray[0]);
        // if (projectArray[1].length > 0) {
        // result[`${projectArray[0]}`] = projectArray[1];
        result = [...result, ...projectArray[1]];
        // }
      });
      setToggleModal(false);
      navigate("/search", { state: { projects: result, input: searchInput } });
    }
  };
  const { t } = useTranslation();

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
        autoFocus
        value={searchInput}
        onChange={(e: FormEvent<HTMLInputElement>) => {
          setSearchInput(e.currentTarget.value);
        }}
        onKeyDown={search}
        placeholder={t("nav.search")}
      ></Box>
    </Box>,
    document.querySelector("body") as HTMLElement
  );
}
