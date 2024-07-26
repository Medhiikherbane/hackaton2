import { useEffect, useState } from "react";
import "./Birds.css";
import Navbar from "./Navbar";

function Birds() {
  const [birds, setBirds] = useState ([]);

    useEffect(() => {
        fetch("http://localhost:3510/birds/")
        .then((res) => res.json())
        .then((res) => console.table(res) || setBirds(res));
    }, []);

    return (
      <>
        <Navbar />
      <div className="grid-birds">
        {birds.map((bird) => {
          return (
            <div className="card-birds" key={bird.id}>
              <p className="names">{bird.name}</p>
              <p>{bird.livraison}</p>
              <img src={bird.imgSrc} alt={bird.name}/>
              <p className="bio">{bird.bio}</p>
            </div>
          )
        })}
      </div>
      </>
    )
  }
  
  export default Birds;