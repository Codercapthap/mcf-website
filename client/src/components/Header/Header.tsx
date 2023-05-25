import {
  Box,
  useMediaQuery,
  ListItem,
  List,
  ListItemButton,
} from "@mui/material";
import Colors from "@/Colors";
import { pages, PageType } from "@/shared/type.ts";
import SearchIcon from "@mui/icons-material/Search";
import { Link } from "react-router-dom";
type Props = {};

function Header({}: Props) {
  return (
    <Box width="100%" height="98px">
      <Box
        width="1400px"
        height="100%"
        marginX="auto"
        paddingX="20px"
        display="flex"
        justifyContent="space-between"
        alignItems="center"
      >
        <Box>
          <Link to="/">
            <Box
              component="img"
              src="/images/logo_72px.png"
              height="auto"
              width="auto"
              maxHeight="100%"
            ></Box>
          </Link>
        </Box>
        <Box height="100%">
          <List
            sx={{
              display: "flex",
              flexDirection: "row",
              paddingY: "0",
              height: "100%",
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
                    paddingX: "18px",
                    textAlign: "center",
                    width: "auto",
                    ":hover": {
                      color: Colors.button1,
                    },
                    transition: "0.3s",
                  }}
                >
                  {page.title}
                </ListItem>
              );
            })}
            <ListItemButton
              sx={{
                textDecoration: "none",
                color: Colors.text2,
                textTransform: "uppercase",
                fontWeight: 700,
                fontSize: "13px",
                textAlign: "center",
                paddingX: "18px",
                width: "auto",
                ":hover": {
                  color: Colors.button1,
                },
                transition: "0.3s",
              }}
            >
              Tiếng Việt
            </ListItemButton>
            <SearchIcon
              sx={{
                color: Colors.text2,
                textAlign: "center",
                cursor: "pointer",
                alignSelf: "center",
                paddingX: "18px",
                ":hover": {
                  color: Colors.button1,
                },
                transition: "0.3s",
              }}
            ></SearchIcon>
          </List>
        </Box>
      </Box>
    </Box>
  );
}

export default Header;
