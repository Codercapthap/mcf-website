import { Box, useMediaQuery, ListItem, List } from "@mui/material";
import Colors from "@/styles/Colors";
import { pages, PageType } from "@/shared/type.ts";
import SearchIcon from "@mui/icons-material/Search";
import { Link } from "react-router-dom";
import Search from "@/components/Search/Search";
import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import theme from "@/styles/Theme";
type Props = {};

function Header({}: Props) {
  const isMediumScreenAndBelow = useMediaQuery("(max-width: 1024px)");
  const isMobileScreens = useMediaQuery("(max-width: 768px)");
  const [toggleModal, setToggleModal] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  const changeScrollY = () => {
    setScrollY(window.scrollY);
  };
  useEffect(() => {
    window.addEventListener("scroll", changeScrollY);
    console.log(scrollY);
    return () => {
      window.removeEventListener("scroll", changeScrollY);
    };
  }, [scrollY]);

  return (
    <Box
      width="100%"
      height={isMobileScreens ? "unset" : scrollY >= 98 ? "70px" : "98px"}
      boxShadow="0 2px 3px 0 rgba(0,0,0,.1)"
      position="fixed"
      marginTop={
        isMediumScreenAndBelow
          ? "unset"
          : scrollY >= 98
          ? "-98px"
          : -scrollY + "px"
      }
      paddingTop={
        isMediumScreenAndBelow ? "unset" : scrollY >= 98 ? "98px" : "0"
      }
      sx={{
        top: "0",
        backgroundColor: "white",
        transition: scrollY < 98 ? "unset" : "padding 0.5s",
        [theme.breakpoints.down("laptop")]: {
          position: "relative",
        },
      }}
      zIndex="15"
    >
      <AnimatePresence>
        {toggleModal && <Search setToggleModal={setToggleModal}></Search>}
      </AnimatePresence>
      <Box
        maxWidth="1400px"
        width="100%"
        marginX="auto"
        paddingX="20px"
        height="inherit"
        boxSizing="border-box"
        sx={{
          [theme.breakpoints.down("desktop")]: {
            maxWidth: "980px",
          },
          [theme.breakpoints.down("tablet")]: {
            textAlign: "center",
          },
        }}
        paddingY={isMobileScreens ? "20px" : ""}
      >
        <Box
          height={scrollY >= 98 ? "unset" : "inherit"}
          display="flex"
          alignItems="center"
          justifyContent="center"
          sx={{
            [theme.breakpoints.up("tablet")]: {
              float: "left",
            },
          }}
        >
          <Link to="/">
            <Box
              component="img"
              src="/images/logo_72px.png"
              height="auto"
              width="auto"
              maxHeight="100%"
              sx={{
                [theme.breakpoints.down("tablet")]: {
                  marginBottom: "20px",
                },
              }}
            ></Box>
          </Link>
        </Box>
        <Box
          sx={{
            float: "right",
            display: "flex",
            height: "100%",
            flexDirection: "row",
            [theme.breakpoints.down("tablet")]: {
              float: "unset",
              justifyContent: "center",
              flexDirection: "row-reverse",
            },
          }}
        >
          {isMediumScreenAndBelow && (
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginLeft: "12px",
              }}
            >
              <Box
                component={isActive ? CloseIcon : MenuIcon}
                sx={{
                  color: Colors.text1,
                  textAlign: "center",
                  cursor: "pointer",
                  padding: "12px",
                  ":hover": {
                    backgroundColor: Colors.button1,
                  },
                  border: `1px solid #e8e8e8`,
                  borderRadius: "50%",
                  transition: "0.3s",
                }}
                onClick={() => {
                  setIsActive(!isActive);
                }}
              ></Box>
            </Box>
          )}
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginLeft: "12px",
            }}
          >
            <SearchIcon
              sx={{
                color: Colors.text2,
                textAlign: "center",
                cursor: "pointer",
                ":hover": {
                  color: Colors.button1,
                },
                borderRadius: "50%",
                transition: "0.3s",
                [theme.breakpoints.down("laptop")]: {
                  color: Colors.text1,
                  padding: "12px",
                  ":hover": {
                    backgroundColor: Colors.button1,
                    color: Colors.text1,
                  },
                  border: "1px solid #e8e8e8",
                },
              }}
              onClick={() => {
                setToggleModal(true);
              }}
            ></SearchIcon>
          </Box>
        </Box>

        <List
          sx={{
            display: isMediumScreenAndBelow && !isActive ? "none" : "flex",
            position: "relative",
            flexDirection: "row",
            paddingY: "0",
            height: "100%",
            float: "right",
            [theme.breakpoints.down("laptop")]: {
              flexDirection: "column",
              paddingY: "20px",
              height: "auto",
              width: "100%",
            },
          }}
        >
          {pages.map((page: PageType) => {
            return (
              <ListItem
                key={page.title}
                component={Link}
                to={page.link}
                sx={{
                  textDecoration: "none",
                  color: Colors.text2,
                  textTransform: "uppercase",
                  fontWeight: 700,
                  fontSize: "13px",
                  paddingX: "14px",
                  textAlign: "center",
                  width: "auto",
                  ":hover": {
                    color: Colors.button1,
                  },
                  transition: "0.3s",
                  [theme.breakpoints.down("laptop")]: {
                    paddingX: "0",
                    paddingY: "10px",
                    borderBottom: "1px solid #e5e5e5",
                  },
                }}
              >
                {page.title}
              </ListItem>
            );
          })}
          <ListItem
            sx={{
              textDecoration: "none",
              color: Colors.text2,
              textTransform: "uppercase",
              fontWeight: 700,
              fontSize: "13px",
              textAlign: "center",
              paddingX: "14px",
              width: "auto",
              cursor: "pointer",
              ":hover": {
                color: Colors.button1,
              },
              transition: "0.3s",
              [theme.breakpoints.down("laptop")]: {
                paddingX: "0",
              },
            }}
          >
            Tiếng Việt
          </ListItem>
        </List>
      </Box>
    </Box>
  );
}

export default Header;
