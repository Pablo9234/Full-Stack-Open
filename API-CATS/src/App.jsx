import { useEffect, useState } from "react";
import "./styles.css";

export function App() {
  const [fact, setFact] = useState("");
  const [img, setImg] = useState("");
  const [newFact, setNewFact] = useState("");

  const urlCatFact = "https://catfact.ninja/fact";
  const imgCat = "https://api.thecatapi.com/v1/images/search?limit=1";

  const newFactCat = () => {
    fetch(urlCatFact)
      .then((response) => response.json())
      .then((data) => {
        setFact(data.fact);
        setNewFact(data.fact);
      });

    fetch(imgCat)
      .then((response) => response.json())
      .then((cat) => {
        setImg(cat[0].url);
      });
  };

  useEffect(() => {
    newFactCat();
  }, []);

  return (
    <>
    <h1>Cat's App</h1>
      <div className="container">
        <div>
        <p className="containertext">{fact}</p>
        </div>
        <img src={img} alt="" />
        <button onClick={newFactCat}>Get new fact cat</button>
        </div>
         
    </>
  );
}
