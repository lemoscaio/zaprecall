import React from 'react';

import Home from "./Home.js";
import Main from "./Main.js";

export default function App() {

    const [homeScreen, setHomeScreen] = React.useState(false)

    // TODO add ! on homeScreen to revert logic
    return homeScreen ? (
        <>
            <Home homeScreen={homeScreen} setHomeScreen={setHomeScreen} />
        </>
    ) : (
        <>
            <Main />
        </>
    )


}