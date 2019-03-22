import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import axios from "axios";
import styled from "styled-components";
import { Flex, FooterText, Form, Input, TextArea, Button } from "../components";

import { setUser } from "../redux/actions";

const InputWrap = styled(Flex)`
  margin-top: 10px;
  margin-bottom: 10px;
`;

class Auth extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      errorMsg: ""
    };
  }

  _handleChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  _handleSubmit = async event => {
    event.preventDefault();

    axios
      .post("http://dev.com:8080/login", {
        email: this.state.email,
        password: this.state.password
      })
      .then(res => {
        const { history, setUser } = this.props;
        const {
          data: { isAuthenticated, message, user }
        } = res;

        if (message === "Email address not found") {
          this.setState({
            errorMsg: "Email or password does not exist"
          });
        }

        if (isAuthenticated) {
          setUser(user);
          history.push("/chat");
        }
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <Flex flexDirection="column" alignItems="center" my="70px">
        <FooterText color="red">{this.state.errorMsg}</FooterText>
        <Form width={["95vw", "80vw", "600px"]}>
          <InputWrap>
            <FooterText>Email:</FooterText>
            <Input
              type="text"
              name="email"
              value={this.state.email}
              onChange={this._handleChange}
            />
          </InputWrap>
          <InputWrap>
            <FooterText>Password:</FooterText>
            <Input
              type="text"
              name="password"
              value={this.state.password}
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

const mapDispatchToProps = (dispatch, ownProps) => ({
  setUser: user => dispatch(setUser(user))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Auth));
