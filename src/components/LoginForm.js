import React, { Component } from "react";
import {
  TextInput,
  Text,
  View,
  TouchableOpacity,
  ActivityIndicator
} from "react-native";
import Button from "./common/Button";
import Card from "./common/Card";
import CardSection from "./common/CardSection";
import Input from "./common/Input";
import firebase from "@firebase/app";
import "@firebase/auth";

class LoginForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      message: "",
      isLoading: false
    };
  }

  onBtnSignInPress = () => {
    this.setState({ isLoading: true });
    const { email, password } = this.state;
    if (password == "" || email == "") {
      //console.log("Password and confirmation password should be the same!");
      this.setState({
        message: "User or Password can't be empty"
      });
      this.setState({ isLoading: false });
    } else {
      firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then(response => {
          //this.setState({ message: "Login Success." });
          this.setState({ isLoading: false });
          this.props.backToMainPage("ViewToped");
        })
        .catch(() => {
          this.setState({ message: "Authentication Failed." });
          this.setState({ isLoading: false });
        });
    }
  };

  render() {
    const {
      labelStyle,
      inputStyle,
      containerStyle,
      messageStyle,
      textBtnStyle,
      buttonStyle,
      TextSignUpStyle
    } = style;
    const { isLoading } = this.state;
    return (
      <Card>
        <CardSection>
          <View style={containerStyle}>
            <Text style={labelStyle}>Email</Text>
            <TextInput
              onChangeText={txtEmail => this.setState({ email: txtEmail })}
              style={inputStyle}
              placeholder="user@gmail.com"
            />
          </View>
        </CardSection>
        <CardSection>
          <View style={containerStyle}>
            <Text style={labelStyle}>Password</Text>
            <TextInput
              secureTextEntry
              onChangeText={txtPassword =>
                this.setState({ password: txtPassword })
              }
              style={inputStyle}
              placeholder="Password"
            />
          </View>
        </CardSection>
        <Text style={messageStyle}>{this.state.message}</Text>
        <CardSection>
          {/* <Button onPress={() => this.onBtnSignInPress()} name="Sign In" /> */}
          <TouchableOpacity
            onPress={() => this.onBtnSignInPress()}
            style={buttonStyle}
          >
            {isLoading && <ActivityIndicator Size="large" />}
            <Text style={textBtnStyle}>Sign In</Text>
          </TouchableOpacity>
        </CardSection>

        <TouchableOpacity onPress={() => this.props.backToMainPage("Register")}>
          <Text style={TextSignUpStyle}>Register Here...</Text>
        </TouchableOpacity>
      </Card>
    );
  }
}

export default LoginForm;

const style = {
  labelStyle: {
    fontSize: 18,
    paddingLeft: 20,
    flex: 1
  },
  inputStyle: {
    color: "#000",
    paddingRight: 5,
    paddingLeft: 5,
    fontSize: 18,
    lineHeight: 23,
    height: 42,
    width: 100,
    flex: 2
  },
  containerStyle: {
    height: 40,
    flex: 1,
    flexDirection: "row",
    alignItems: "center"
  },
  TextSignUpStyle: {
    fontSize: 12,
    alignSelf: "center",
    color: "black"
  },
  messageStyle: {
    fontSize: 20,
    alignSelf: "center",
    color: "red"
  },
  buttonStyle: {
    flex: 1,
    alignSelf: "stretch",
    backgroundColor: "#fff",
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#007aff",
    marginLeft: 5,
    marginRight: 5
  },
  textBtnStyle: {
    alignSelf: "center",
    color: "#007aff",
    fontSize: 16,
    fontWeight: "600",
    paddingTop: 10,
    paddingBottom: 10
  }
};
