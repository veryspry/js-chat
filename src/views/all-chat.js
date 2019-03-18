import React from "react";

import { Flex, ChatList } from "../components";

const AllChat = props => {
  return (
    <Flex
      //   minHeight="90vh"
      //   justifyContent="center"
      alignItems="center"
      py="20px"
    >
      <ChatList />
    </Flex>
  );
};

export default AllChat;
