import React from 'react';

import Home from "./Home.js";
import Main from "./Main.js";

export default function App({ images }) {

    const [homeScreen, setHomeScreen] = React.useState(false)

    return !homeScreen ? (
        <>
            <Home homeScreen={homeScreen} setHomeScreen={setHomeScreen} images={images} />
        </>
    ) : (
        <>
            <Main homeScreen={homeScreen} setHomeScreen={setHomeScreen} images={images} />
        </>
    )

}