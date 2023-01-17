import React from "react";
import{WebView}from "react-native-webview";

function Location() {
    return(
        <WebView
            source={{uri:"http://webview-domain/app/map"}}
        />
    );
};

export default Location;