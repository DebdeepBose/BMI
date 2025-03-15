import UserGreeting from "./USG";
import React from "react";

function PPApp() {
    return (
    <>
    <UserGreeting isLoggedIn={true} username="Debdeep" />
    <UserGreeting isLoggedIn={true} username="lol" />
    <UserGreeting isLoggedIn={true} username="kekw" />
    <UserGreeting isLoggedIn={true} username="lmao" />
    <UserGreeting isLoggedIn={true} username="lmfao" />
    </>
    );

}

export default PPApp;
