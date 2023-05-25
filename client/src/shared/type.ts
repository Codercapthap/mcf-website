export interface PageType {
  link: string;
  title: string;
}

export const pages: Array<PageType> = [
  { link: "/home", title: "Home" },
  { link: "/about-us", title: "About Us" },
  { link: "/conservation", title: "Conservation" },
  { link: "/livelihoods", title: "Livelihood" },
  { link: "/museum", title: "Museum" },
  { link: "/stories", title: "Stories" },
  { link: "/contact-us", title: "Contact Us" },
];

export interface ImageSliderType {
  src: string;
  typoLeft: string;
  typoRight: string;
  typoBottom: string;
  typoTop: string;
  typo1: string;
  typo2: string;
  link: string;
  buttonText: string;
}

// <Box position="relative" overflow="hidden">
//   <Box
//     component="img"
//     width="100%"
//     height="auto"
//     maxHeight="617px"
//     src={images[0]}
//   ></Box>
//   <CustomizedTypography left="200px" top="32%">
//     The Mekong Delta
//   </CustomizedTypography>
//   <CustomizedTypography left="300px" top="calc(32% + 6.5vw)">
//     Natural History Museum
//   </CustomizedTypography>
//   <CustomizedButton
//     component={Link}
//     to="/museum"
//     top="calc(32% + 6.5vw + 6.5vw)"
//     left="324px"
//   >
//     Find more
//   </CustomizedButton>
// </Box>;
