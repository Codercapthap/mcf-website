import { Link, styled, Typography } from "@mui/material";
import Colors from "@/Colors";

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
  padding: 0 24px;
`;
