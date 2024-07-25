import { Link } from "react-router-dom";

import "./GifIntro.css"

function GifIntro() {
    return (
        <div id="gif-body">
            <h2>Avant, les messages, on se les envoyait dans la gueule</h2>
            <img 
                src='https://media1.tenor.com/m/8ARZ1iFBh2cAAAAd/monster.gif'
                alt="gif d'introduction"
            />
            <Link to="/Intro2">
            <h2>Mais ça c'était <span className="avant-underline">avant</span></h2>
            </Link>
        </div>
    )
}

export default GifIntro;