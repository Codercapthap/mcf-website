import {
  Box,
  Button,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  FormGroup,
  FormControlLabel,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { motion, AnimatePresence } from "framer-motion";
import ReactDOM from "react-dom";
import { useState } from "react";
import { IOSSwitch } from "@/styles";
import "./Cookie.scss";

type Props = {};

const Cookie = (props: Props) => {
  const [toggleCookieModal, setToggleCookieModal] = useState(false);
  return (
    <>
      <Box
        justifyContent="space-between"
        sx={{
          padding: "14px 25px",
          backgroundColor: "#ffffff",
          boxShadow: "0 -1px 10px 0 rgba(172, 171, 171, 0.3)",
        }}
        className="cookie-fixed"
      >
        <Typography
          color="var(--text-black)"
          width="70%"
          padding="0"
          sx={{
            fontSize: "15px",
            lineHeight: "18px",
          }}
        >
          We use cookies on our website to give you the most relevant experience
          by remembering your preferences and repeat visits. By clicking
          “Accept”, you consent to the use of ALL the cookies.
        </Typography>
        <Box display="flex" alignItems="center">
          <Typography
            color="var(--text-grey)"
            sx={{ textDecoration: "underline", cursor: "pointer" }}
            padding="0"
            onClick={() => {
              setToggleCookieModal(true);
            }}
          >
            Cookie settings
          </Typography>
          <Typography
            sx={{
              color: "var(--text-white)",
              padding: "6px 12px",
              backgroundColor: "rgb(97, 162, 41)",
              marginLeft: "12px",
              fontSize: "13px",
              cursor: "pointer",
            }}
          >
            ACCEPT
          </Typography>
        </Box>
      </Box>
      <AnimatePresence>
        {toggleCookieModal && (
          <CookieModal
            setToggleCookieModal={setToggleCookieModal}
          ></CookieModal>
        )}
      </AnimatePresence>
    </>
  );
};

const CookieModal = ({
  setToggleCookieModal,
}: {
  setToggleCookieModal: Function;
}) => {
  const [readMore, setReadMore] = useState(false);
  const body = `This website uses cookies to improve your experience while you
              navigate through the website. Out of these, the cookies that are
              categorized as necessary are stored on your browser as they are
              essential for the working of basic functionalities of the
              website. We also use third-party cookies
              that help us analyze and understand how you use this website.
              These cookies will be stored in your browser only with your
              consent. You also have the option to opt-out of these cookies. But
              opting out of some of these cookies may affect your browsing
              experience.`;
  const [expanded, setExpanded] = useState<string | false>("");
  const [checked, setChecked] = useState(true);

  const handleCheck = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
    };
  return ReactDOM.createPortal(
    <Box
      component={motion.div}
      zIndex="100"
      top="0"
      justifyContent="center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      sx={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}
      className="cookie-fixed"
      alignItems="center"
    >
      <Box
        component={motion.div}
        padding="20px"
        maxWidth="44%"
        sx={{
          borderRadius: "5px",
          backgroundColor: "#fff",
          boxSizing: "border-box",
          position: "relative",
        }}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0 }}
      >
        <CloseIcon
          sx={{
            cursor: "pointer",
            position: "absolute",
            top: "8px",
            right: "8px",
          }}
          onClick={() => {
            setToggleCookieModal(false);
          }}
        ></CloseIcon>
        <Box>
          <Box>
            <Typography
              color="var(--text-black)"
              fontSize="14px"
              letterSpacing=".1rem"
              lineHeight="30px"
              fontWeight="700"
            >
              PRIVACY OVERVIEW
            </Typography>
            <Typography className="cookie-text">
              {readMore ? body : `${body.substring(0, 300)}...`}
            </Typography>
            <Typography
              sx={{
                cursor: "pointer",
                fontSize: "12px",
                textDecoration: "underline",
                color: "var(--text-grey)",
                transition: ".5s",
                ":hover": {
                  color: "var(--btn-hover-bg)",
                },
              }}
              onClick={() => setReadMore(!readMore)}
            >
              {readMore ? "Show less" : "Show more"}
            </Typography>
          </Box>
          <Box>
            <Accordion
              disableGutters
              elevation={0}
              sx={{
                "::before": {
                  display: "none",
                },
              }}
              expanded={expanded === "panel1"}
              onChange={handleChange("panel1")}
            >
              <AccordionSummary
                aria-controls="panel1d-content"
                id="panel1d-header"
                expandIcon={<ArrowForwardIosIcon sx={{ fontSize: "0.8rem" }} />}
                sx={{
                  borderRadius: "5px",
                  backgroundColor: "#e9e9e9",
                }}
                className="accordion-summary"
              >
                <Typography padding="0" className="cookie-text">
                  Necessary
                </Typography>

                <Typography
                  padding="0"
                  color="var(--text-black)"
                  marginLeft="auto"
                  fontSize="12px"
                >
                  Always Enabled
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography padding="0" className="cookie-text">
                  Necessary cookies are absolutely essential for the website to
                  function properly. This category only includes cookies that
                  ensures basic functionalities and security features of the
                  website. These cookies do not store any personal information.
                </Typography>
              </AccordionDetails>
            </Accordion>

            <Accordion
              disableGutters
              elevation={0}
              sx={{
                "::before": {
                  display: "none",
                },
                marginTop: "12px",
              }}
              expanded={expanded === "panel2"}
              onChange={handleChange("panel2")}
            >
              <Box
                position="relative"
                sx={{
                  backgroundColor: "#e9e9e9",
                  borderRadius: "5px",
                }}
              >
                <AccordionSummary
                  aria-controls="panel2d-content"
                  id="panel2d-header"
                  expandIcon={
                    <ArrowForwardIosIcon sx={{ fontSize: "0.9rem" }} />
                  }
                  className="accordion-summary"
                >
                  <Typography padding="0" className="cookie-text">
                    Non-Necessary
                  </Typography>
                </AccordionSummary>

                <FormGroup
                  sx={{
                    position: "absolute",
                    top: "12px",
                    right: "24px",
                  }}
                >
                  <FormControlLabel
                    control={
                      <IOSSwitch
                        sx={{
                          marginLeft: "8px",
                        }}
                        checked={checked}
                        onChange={handleCheck}
                        inputProps={{ "aria-label": "controlled" }}
                        focusVisibleClassName=".Mui-focusVisible"
                      ></IOSSwitch>
                    }
                    sx={{
                      "& .MuiFormControlLabel-label": {
                        fontSize: "12px",
                        verticalAlign: "middle",
                      },
                    }}
                    label={checked ? "Enabled" : "Disabled"}
                    labelPlacement="start"
                  />
                </FormGroup>
              </Box>
              <AccordionDetails>
                <Typography padding="0" className="cookie-text">
                  Any cookies that may not be particularly necessary for the
                  website to function and is used specifically to collect user
                  personal data via analytics, ads, other embedded contents are
                  termed as non-necessary cookies. It is mandatory to procure
                  user consent prior to running these cookies on your website.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </Box>
          <Box paddingY="20px">
            <Button
              sx={{
                color: "var(--text-white)",
                padding: "6px 12px",
                backgroundColor: "rgb(97, 162, 41)",
                marginLeft: "12px",
                fontSize: "14px",
                cursor: "pointer",
                borderRadius: "0",
                fontWeight: "400",
                float: "right",
              }}
            >
              SAVE & ACCEPT
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>,
    document.querySelector("body") as HTMLElement
  );
};

export default Cookie;
