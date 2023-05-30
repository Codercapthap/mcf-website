import { Link, styled, Typography, Box, Button } from "@mui/material";
import Colors from "@/styles/Colors";

export const CustomizedButton = styled(Link)`
  padding: 12px 24px;
  border-radius: 20px;
  color: ${Colors.textPrimary};
  font-family: serif;
  text-transform: uppercase;
  font-size: 0.7em;
  font-weight: 700;
  background-color: ${Colors.button3};
  text-decoration: none;
  position: absolute;
`;

export const CustomizedTypography = styled(Typography)`
  font-family: serif;
  position: absolute;
  background-color: ${Colors.backgroundText};
  color: ${Colors.textWhite};
  font-size: 3.5vw;
  padding: 0 20px;
  line-height: normal;
`;

export const Wrapper = styled(Box)`
  max-width: 1400px;
  width: 100%;
  padding: 0 20px;
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
  background-color: ${Colors.button1};
  text-decoration: none;
  :hover {
    background-color: ${Colors.primary};
  }
`;
