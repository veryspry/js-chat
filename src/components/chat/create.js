import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import styled from "styled-components";

import {
  Flex,
  Form,
  Input,
  TextArea,
  Button,
  FooterText,
  Footer,
  TimelineDate
} from "../../components";

import { requestConstructor } from "../../utils";

const FlexPointer = styled(Flex)`
  cursor: pointer;
`;

class CreateChat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentFormInput: "",
      errorMessage: "",
      users: [],
      tempUser: null
    };
    this.requestor = requestConstructor();
  }

  _handleChange = async event => {
    const { name, value } = event.target;
    await this.setState({
      [name]: value
    });
    this._findUser();
  };

  _findUser = event => {
    let { users, currentFormInput } = this.state;
    this.requestor
      .get("/user", {
        params: {
          email: currentFormInput
        }
      })
      .then(res => {
        let { data } = res;
        if (data.message) {
          if (data.message === "User not found") {
            this.setState({
              errorMessage: "User not found"
            });
            return;
          }
        }
        this.setState({
          errorMessage: "User found",
          tempUser: res.data.user
        });
      })
      .catch(err => console.log(err));
  };

  _addUser = event => {
    const { users, tempUser } = this.state;
    event.preventDefault();
    this.setState({
      users: [...users, tempUser],
      currentFormInput: "",
      errorMessage: "",
      tempUser: null
    });
  };

  _createConversation = event => {
    event.preventDefault();
    let userIDs = this.state.users.map(user => user.id);
    this.requestor
      .post("/chat/conversations/new", {
        userIDs
      })
      .then(res => {
        let { conversation } = res.data;
        if (conversation) {
          this.props.history.push(`/chat/${conversation.id}`);
        }
      })
      .catch(err => console.log(err));
  };

  _removeUserFromList = event => {
    let id = event.target.getAttribute("id");
    this.setState({
      users: this.state.users.filter(user => user.id != id)
    });
  };

  render() {
    const { users, currentFormInput, errorMessage } = this.state;

    return (
      <Flex>
        {users.length > 0 && (
          <FooterText>Current selected users to start chat with:</FooterText>
        )}
        {users.map(user => {
          return (
            <Flex key={user.id} flexDirection="row">
              <Flex mr="10px">
                <FooterText color="grey">{user.email}</FooterText>
              </Flex>
              <FlexPointer
                onClick={this._removeUserFromList}
                justifyContent="center"
              >
                <TimelineDate id={user.id}> Remove (x)</TimelineDate>
              </FlexPointer>
            </Flex>
          );
        })}
        <Form>
          <Flex my="10px">
            <FooterText>Type in a users email to find them</FooterText>
          </Flex>
          {errorMessage.length > 0 && currentFormInput.length > 0 && (
            <Flex mt="2px" mb="10px">
              {" "}
              <FooterText color="error">{errorMessage}</FooterText>
            </Flex>
          )}
          <Flex my="10px">
            <Input
              type="text"
              name="currentFormInput"
              value={this.state.currentFormInput}
              onChange={this._handleChange}
            />
          </Flex>
          <Flex my="10px">
            <Button onClick={this._addUser}>
              <FooterText>Add user</FooterText>
            </Button>
          </Flex>
          {users.length > 0 && (
            <Flex my="10px">
              <Button>
                <FooterText onClick={this._createConversation}>
                  Create Conversation
                </FooterText>
              </Button>
            </Flex>
          )}
        </Form>
      </Flex>
    );
  }
}

export default withRouter(CreateChat);
