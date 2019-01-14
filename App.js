import React, { Component } from "react";
import { Platform, StyleSheet, Text, View,WebView } from "react-native";
import Header from "./src/components/common/Header";
import LoginForm from "./src/components/LoginForm";
import RegisterForm from "./src/components/RegisterForm";
import WebViewToped from "./src/components/WebViewToped";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pageWillBeRendered: "Register"
    };
  }

  openOtherPage = page => {
    if (page && page !== "") {
      this.setState({ pageWillBeRendered: page });
    }
  };

  render() {
    const { pageWillBeRendered } = this.state;
    if (pageWillBeRendered === "Register") {
      return (
        <View>
          <Header headerText="Register Form" />
          <RegisterForm backToMainPage={this.openOtherPage} />
        </View>
      );
      //return <GetPage backToMainPage={this.openOtherPage} />
    } 
    else if (pageWillBeRendered === "ViewToped"){
      return (
          <WebView source={{ uri: 'https://www.tokopedia.com/' }} />
      );
      //return <PostPage backToMainPage={this.openOtherPage}  />
    }
    else {
      return (
        <View>
          <Header headerText="Login Form" />
          <LoginForm backToMainPage={this.openOtherPage} />
        </View>
      );
      //return <PostPage backToMainPage={this.openOtherPage}  />
    }

    // return (
    //   // <View>
    //   //     <Header headerText="Authentication"></Header>
    //   //     <LoginForm></LoginForm>
    //   // </View>
    // );
  }
}

export default App;
