import { Link, styled, Typography, Box, Button, Switch } from "@mui/material";

export const CustomizedButton = styled(Link)`
  padding: 12px 24px;
  border-radius: 20px;
  color: var(--text-primary);
  font-family: serif;
  text-transform: uppercase;
  font-size: 0.7em;
  font-weight: 700;
  background-color: var(--btn-carousel-bg);
  text-decoration: none;
  position: absolute;
`;

export const CustomizedTypography = styled(Typography)`
  font-family: serif;
  position: absolute;
  background-color: var(--text-bg);
  color: var(--text-white);
  font-size: 3.5vw;
  padding: 0 20px;
  line-height: normal;
`;

export const Wrapper = styled(Box)`
  max-width: 1400px;
  width: 100%;
  padding-right: 20px;
  padding-left: 20px;
  margin: 0 auto;
  box-sizing: border-box;
  @media screen and (max-width: 1400px) {
    max-width: 980px;
  }
`;

export const CustomizedPrimaryButton = styled(Button)`
  padding: 0 35px;
  border-radius: 30px;
  color: white;
  text-transform: uppercase;
  font-size: 0.8em;
  font-weight: 700;
  line-height: 48px;
  letter-spacing: 0.1em;
  background-color: var(--btn-primary-bg);
  text-decoration: none;
  :hover {
    background-color: var(--btn-hover-bg);
  }
`;

export const SortingButton = styled(Button)`
  color: var(--text-black);
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.1em;
  line-height: 24px;
  border: 1px solid var(--border-color);
  transition: 0.5s;
  -webkit-transition: 0.5s;
  -moz-transition: 0.5s;
  -ms-transition: 0.5s;
  -o-transition: 0.5s;
  &:hover {
    border: 1px solid var(--btn-hover-bg);
    color: var(--btn-hover-bg);
    background-color: #ffffff;
  }
  &.active {
    border: 1px solid var(--btn-hover-bg);
    background-color: #ffffff;
  }
`;

export const IOSSwitch = styled(Switch)(({ theme }) => ({
  width: 38,
  height: 20,
  padding: 0,
  "& .MuiSwitch-switchBase": {
    padding: 0,
    margin: 2,
    transitionDuration: "300ms",
    "&.Mui-checked": {
      transform: "translateX(20px)",
      color: "#fff",
      "& + .MuiSwitch-track": {
        backgroundColor: "#65C466",
        opacity: 1,
        border: 0,
      },
      "&.Mui-disabled + .MuiSwitch-track": {
        opacity: 0.5,
      },
    },
    "&.Mui-focusVisible .MuiSwitch-thumb": {
      color: "#33cf4d",
      border: "6px solid #fff",
    },
    "&.Mui-disabled .MuiSwitch-thumb": {
      color:
        theme.palette.mode === "light"
          ? theme.palette.grey[100]
          : theme.palette.grey[600],
    },
    "&.Mui-disabled + .MuiSwitch-track": {
      opacity: theme.palette.mode === "light" ? 0.7 : 0.3,
    },
  },
  "& .MuiSwitch-thumb": {
    boxSizing: "border-box",
    width: 16,
    height: 16,
  },
  "& .MuiSwitch-track": {
    borderRadius: 26 / 2,
    backgroundColor: "#e2e0e7",
    opacity: 1,
    transition: theme.transitions.create(["background-color"], {
      duration: 500,
    }),
  },
}));
