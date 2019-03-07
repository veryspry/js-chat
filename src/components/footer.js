import React from "react";

import { FooterText, Flex, StyledAnchor } from "./index";

const Footer = props => {
  return (
    <Flex alignItems="center" py="40px" px="20px" textAlign="center">
      <FooterText zIndex="4000">
        This site is built with Node, React and so much{" "}
        <span role="img" aria-label="heart-emoji">
          ❤️
        </span>{" "}
        View the source{" "}
        <StyledAnchor color="link" href="https://github.com/veryspry/vs_ui">
          here
        </StyledAnchor>
      </FooterText>
    </Flex>
  );
};

export default Footer;
