import reactDOM from "react-dom";
import App from "./components/App.js";

import "./css/reset.css"
import "./scss/style.scss"

import turnIcon from "./assets/images/turn-arrow.png"
import smallLogo from "./assets/images/logo-small.png"
import logo from "./assets/images/logo.png"
import party from "./assets/images/party.png"
import sad from "./assets/images/sad.png"

const images = {
    turnIcon: turnIcon,
    smallLogo: smallLogo,
    logo: logo,
    party: party,
    sad: sad,
}

reactDOM.render(<App images={images} />, document.querySelector(".root"))