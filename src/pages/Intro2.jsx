import { Link } from "react-router-dom";

import "./Intro2.css"

function Intro2() {
    return (
        <div id="intro2-body">
            <h2>Une nouvelle aire est née,<br/>
            nous vous offrons la possibilité de délivrer vos messages et/ou colis<br/>
            de façon personnalisée en fonction de vos envies et de vos moyens</h2>
            <h2 className="intro2-bienvenue">Bienvenue sur :</h2>
            <Link to="/">
            <img src="src/assets/pigeon-prime.png" alt ="logo pigeon prime" />
            </Link>
        </div>
    )
}

export default Intro2;