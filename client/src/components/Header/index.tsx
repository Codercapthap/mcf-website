import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Box, useMediaQuery, ListItem, List } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { AnimatePresence } from "framer-motion";
import { PageType, pages } from "@/shared";
import Search from "@/components/Search";
import { theme } from "@/styles";
import "./Header.scss";
type Props = {};

function Header({}: Props) {
  const isMediumScreenAndBelow = useMediaQuery("(max-width: 1024px)");
  const isMobileScreens = useMediaQuery("(max-width: 768px)");
  const [toggleModal, setToggleModal] = useState(false);
  const [isShowingNavbar, setIsShowingNavbar] = useState(false);
  const [active, setActive] = useState("");
  const { pathname } = useLocation();
  const [scrollY, setScrollY] = useState(0);

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
    const currentTag = pathname
      .split("-")
      .map((value, index) => {
        if (index === 0) {
          return value.substring(1);
        } else {
          return value;
        }
      })
      .join(" ");
    setActive(currentTag);
  }, [pathname]);

  return (
    <Box
      width="100%"
      height={isMobileScreens ? "unset" : scrollY >= 98 ? "70px" : "98px"}
      boxShadow="0 2px 3px 0 rgba(0,0,0,.1)"
      position={!isMediumScreenAndBelow && scrollY >= 98 ? "fixed" : "relative"}
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
            maxWidth: "1024px",
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
              src="/images/icons/logo_72px.png"
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
                component={isShowingNavbar ? CloseIcon : MenuIcon}
                className="header-icon"
                sx={{
                  color: "var(--text-grey)",
                  padding: "12px",
                  border: `1px solid #e8e8e8`,
                  ":hover": {
                    backgroundColor: "var(--btn-primary-bg)",
                  },
                }}
                onClick={() => {
                  setIsShowingNavbar(!isShowingNavbar);
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
              className="header-icon"
              sx={{
                color: "var(--text-black)",
                ":hover": {
                  color: "var(--btn-primary-bg)",
                },
                [theme.breakpoints.down("laptop")]: {
                  color: "var(--text-grey)",
                  padding: "12px",
                  ":hover": {
                    backgroundColor: "var(--btn-primary-bg)",
                    color: "var(--text-grey)",
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
            display:
              isMediumScreenAndBelow && !isShowingNavbar ? "none" : "flex",
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
                className="header-nav-item"
                key={page.title}
                component={Link}
                to={page.link}
                sx={{
                  color:
                    active === page.title.toLocaleLowerCase()
                      ? "var(--btn-primary-bg)"
                      : "var(--text-black)",
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
            className="header-nav-item"
            sx={{
              color: "var(--text-black)",
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
