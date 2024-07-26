import { Link } from "react-router-dom";
import "./Intro2.css"

import AudioPlayer from "../components/AudioPlayer";

function Intro2() {
    return (
        <div id="intro2-body">
            <h2>Une nouvelle ère est née,<br/>
            nous vous offrons la possibilité de délivrer vos messages et vos colis<br/>
            de façon personnalisée en fonction de vos envies et de vos moyens</h2>
            <h2 className="intro2-bienvenue">Bienvenue sur :</h2>
            <Link to="/Birds">
            <img src="src/assets/images/pigeon-prime.png" alt ="logo pigeon prime" />
            </Link>
            <div className="intro-pigeon">
            <AudioPlayer />
            </div>
        </div>
    )
}

export default Intro2;