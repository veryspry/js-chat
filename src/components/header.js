import React from "react";
import {
  faTwitter,
  faGithub,
  faInstagram
} from "@fortawesome/free-brands-svg-icons";
import {
  Flex,
  Box,
  StyledLink,
  StyledAnchor,
  HeaderText,
  Img,
  Icon
} from "../components";

const Header = props => {
  const navItems = [
    {
      title: "Home",
      to: ""
    },
    {
      title: "Blog",
      to: "/blog"
    }
  ];
  const socialIcons = [
    {
      icon: faGithub,
      to: "https://github.com/veryspry",
      bg: "#ebe8ec"
    },
    {
      icon: faTwitter,
      to: "https://twitter.com/veryspry",
      bg: "#26abec"
    },
    {
      icon: faInstagram,
      to: "https://www.instagram.com/veryspry/",
      bg: "#cc2d8a"
    }
  ];

  return (
    <Flex
      flexDirection={["column-reverse", "column-reverse", "row"]}
      justifyContent={["center", "center", "space-around"]}
      alignItems="center"
    >
      <Flex
        flexDirection={["column", "column", "row"]}
        alignItems="center"
        textAlign="center"
      >
        <Flex flexDirection="row" my={["20px", "20px", "0px"]} zIndex="4000">
          {navItems.map(({ title, to }) => {
            return (
              <Box mx="10px" key={title}>
                <StyledLink
                  to={to}
                  fontWeight="100"
                  color="black"
                  hovercolor="#2096c7"
                  textDecoration="underline"
                >
                  <HeaderText>{title}</HeaderText>
                </StyledLink>
              </Box>
            );
          })}
        </Flex>
        <Flex flexDirection="row" my={["20px", "20px", "0px"]} zIndex="4000">
          {socialIcons.map(({ icon, to, bg }) => {
            return (
              <Box mx="30px" key={bg}>
                <StyledAnchor
                  href={to}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon
                    icon={icon}
                    bg={bg}
                    size="2x"
                    color="black"
                    p="10px"
                    borderRadius="10px"
                  />
                </StyledAnchor>
              </Box>
            );
          })}
        </Flex>
      </Flex>
      <Flex zIndex="4000">
        <Img
          src="/img/header-img.jpg"
          alt="header-pic"
          height="175px"
          width="175px"
          borderRadius="100%"
          mt="20px"
        />
      </Flex>
    </Flex>
  );
};

export default Header;
