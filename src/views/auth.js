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

class Auth extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
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
        console.log("res", res);
        const { history, setAuthToken } = this.props;
        const {
          data: { isAuthenticated, message, user, token }
        } = res;

        if (isAuthenticated) {
          setAuthToken(token);
          console.log("set", this.props);
          history.push("/");
        }
      })
      .catch(err => console.log(err));
  };

  render() {
    console.log("state", this.props);
    return (
      <Flex flexDirection="column" alignItems="center" my="70px">
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
  console.log("stateToProps", state);
  return {
    ...state
  };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  setAuthToken: authToken => dispatch(setAuthToken(authToken))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Auth));
