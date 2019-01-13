import React, { Component } from "react";
import { WebView, View } from "react-native";

class WebViewToped extends Component {
  render() {
    return (
        <WebView source={{ uri: 'https://www.tokopedia.com/' }} />
    );
  }
}

export default WebViewToped;
