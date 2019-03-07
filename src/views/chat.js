import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import axios from "axios";
import styled from "styled-components";
import { height, width, minHeight } from "styled-system";
import { Flex, FooterText } from "../components";

import { setAuthToken } from "../redux/actions";

const Form = styled.form`
  ${height};
  ${width};
  display: flex;
  flex-direction: column;
  z-index: 1000;
`;

const Input = styled.input`
  width: 100%;
  height: 30px;
  border-radius: 3px;
  border: 1px solid lightgrey;
  ${height};
  ${width};
`;

const TextArea = styled.textarea`
  width: 100%;
  max-width: 100%;
  min-width: 100%;
  border-radius: 3px;
  border: 1px solid lightgrey;
  ${height};
  ${width};
  ${minHeight};
`;

const Button = styled.button`
  height: 60px;
  width: 200px;
  border-radius: 3px;
  border: 0px;
  background-color: #181e2f;
  color: white;
  &:hover {
    cursor: pointer;
  }
`;

const InputWrap = styled(Flex)`
  margin-top: 10px;
  margin-bottom: 10px;
`;

class Chat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: {
        message: ""
      },
      messages: []
    };
  }

  componentDidMount() {
    this.ws = new WebSocket("ws://dev.com:8080/ws");
    this.ws.addEventListener("message", this._handleNewMessage);
  }

  componentWillUnmount() {
    this.ws.removeEventListener("message", this._handleNewMessage);
  }

  _handleNewMessage = event => {
    let msg = JSON.parse(event.data);
    console.log(msg);
    let msgCopy = this.state.messages.slice();
    msgCopy.push(msg);
    this.setState({
      messages: msgCopy
    });
  };

  _handleChange = event => {
    const { name, value } = event.target;
    this.setState({
      message: {
        ...this.state.message,
        [name]: value
      }
    });
  };

  _handleSubmit = async event => {
    event.preventDefault();

    this.ws.send(JSON.stringify(this.state.message));
  };

  render() {
    console.log("p", this.props);
    return (
      <Flex flexDirection="column" alignItems="center" my="70px">
        <Form width={["95vw", "80vw", "600px"]}>
          <Flex>
            {this.state.messages.map(({ message }) => {
              return <FooterText>{message}</FooterText>;
            })}
          </Flex>
          <InputWrap>
            <FooterText>Message:</FooterText>
            <Input
              type="text"
              name="message"
              value={this.state.message.message}
              onChange={this._handleChange}
            />
          </InputWrap>
          <InputWrap alignItems="flex-end">
            <Button type="submit" value="submit" onClick={this._handleSubmit}>
              <FooterText>Send</FooterText>
            </Button>
          </InputWrap>
        </Form>
      </Flex>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    ...state
  };
};

export default connect(
  mapStateToProps,
  null
)(withRouter(Chat));
