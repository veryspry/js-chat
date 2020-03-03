import React, { Component } from "react";
import axios from "axios";
import requestConstructor from "../../utils/request";
import { getCurrentUser } from "../../utils";

import { Flex, HeaderText, StyledLink } from "../index";

class ChatList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      conversations: [],
      currentUser: null
    };
  }

  async componentDidMount() {
    this.setState({
      currentUser: getCurrentUser()
    });
    let requestor = requestConstructor();
    if (requestor) {
      requestor
        .get(`/chat/conversations`)
        .then(res => this.setState({ conversations: res.data.conversations }))
        .catch(err => console.log(err));
    }
  }

  render() {
    const { conversations, } = this.state;
    return (
      <Flex width="400px">
        <Flex>
          {conversations.map(({ id, users }) => {
            const formattedNames = users
              .map(({ firstName, lastName }) => `${firstName} ${lastName}`)
              .join(", ");

            return (
              <Flex
                key={id}
                borderBottom="1px solid grey"
                borderTop="1px solid grey"
                pb="2px"
              >
                <HeaderText>
                  <StyledLink to={`/chat/${id}`}>{formattedNames}</StyledLink>
                </HeaderText>
              </Flex>
            );
          })}
          {conversations.length <= 0 && (
            <HeaderText>
              You currently have no conversations.{" "}
              <StyledLink to="/chat/new">Create a new conversation?</StyledLink>
            </HeaderText>
          )}
        </Flex>
      </Flex>
    );
  }
}

export default ChatList;
