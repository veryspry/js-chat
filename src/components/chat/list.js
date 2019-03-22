import React, { Component } from "react";
import axios from "axios";
import requestConstructor from "../../utils/request";

import { Flex, HeaderText, StyledLink } from "../index";

class ChatList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      conversations: []
    };
  }

  async componentDidMount() {
    let requestor = requestConstructor();
    requestor
      .get(`/chat/conversations`)
      .then(res => this.setState({ conversations: res.data.conversations }))
      .catch(err => console.log(err));
  }

  render() {
    console.log("STATE", this.state);
    return (
      <Flex width="400px">
        <Flex>
          {this.state.conversations.map(({ ID }) => {
            return (
              <Flex
                key={ID}
                borderBottom="1px solid grey"
                borderTop="1px solid grey"
                pb="2px"
              >
                <HeaderText>
                  <StyledLink to={`/chat/${ID}`}>{ID}</StyledLink>
                </HeaderText>
              </Flex>
            );
          })}
        </Flex>
      </Flex>
    );
  }
}

export default ChatList;
