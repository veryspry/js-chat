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

import { logout, requestConstructor } from "../utils";

const Header = props => {
  const navItems = [
    {
      title: "Chat",
      to: "/chat"
    },
    // {
    //   title: "New Chat",
    //   to: "/chat",
    //   onClick: e => {
    //     e.preventDefault();
    //     let requestor = requestConstructor();
    //     requestor
    //       .post(`/chat/conversations/new`)
    //       .then(res => console.log("res", res))
    //       .catch(err => console.log(err));
    //   }
    // },
    {
      title: "Logout",
      to: "/login",
      onClick: e => logout()
    }
  ];

  return (
    <Flex
      flexDirection={["column-reverse", "column-reverse", "row"]}
      justifyContent={["center", "center", "space-around"]}
      alignItems="center"
      bg="lightpink"
    >
      <Flex
        flexDirection={["column", "column", "row"]}
        alignItems="center"
        textAlign="center"
      >
        <Flex
          flexDirection="row"
          my={["20px", "20px", "0px"]}
          zIndex="4000"
          justifyContent="space-between"
          py="40px"
        >
          <HeaderText>
            <StyledLink to="/chat">Go Chat!</StyledLink> 💬{" "}
          </HeaderText>

          <Flex flexDirection="row">
            {navItems.map(({ title, to, onClick }) => {
              return (
                <Box mx="10px" key={title}>
                  <StyledLink
                    to={to}
                    fontWeight="100"
                    color="black"
                    hovercolor="#2096c7"
                    textDecoration="underline"
                    onClick={onClick}
                  >
                    <HeaderText>{title}</HeaderText>
                  </StyledLink>
                </Box>
              );
            })}
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Header;
