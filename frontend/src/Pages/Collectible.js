import React from "react";
import HistoryCard from "../Components/CollectibleHistory";
import "./Collectible.css";

export default function Collectible() {
  // img: 'https://lh3.googleusercontent.com/Fviz0PWzUMQ98uvUZV8e_3y2R3D0nwk9q3jCQONoA2jh83vN2phkxEmLD3zpE1iiPOWNqh38rCqOC4agChgi704d0VGjgqwXrjiZ1Q=w600'
  let card1 = {
    name: "Collectible 1",
    description: "This is a description",
    price: "0.11",
    img: "https://lh3.googleusercontent.com/Fviz0PWzUMQ98uvUZV8e_3y2R3D0nwk9q3jCQONoA2jh83vN2phkxEmLD3zpE1iiPOWNqh38rCqOC4agChgi704d0VGjgqwXrjiZ1Q=w600",
    list_date: "here",
  };

  return (
    <>
      <div className="body">
        <div className="flex">
          <div className="image">
            <img
              src="https://lh3.googleusercontent.com/Fviz0PWzUMQ98uvUZV8e_3y2R3D0nwk9q3jCQONoA2jh83vN2phkxEmLD3zpE1iiPOWNqh38rCqOC4agChgi704d0VGjgqwXrjiZ1Q=w600"
              alt=""
            ></img>
          </div>
          <div className="information">
            <div className="icon"></div>
            <div className="title">
              <h1>
                {" "}
                <b> The Big B Evolution </b>{" "}
              </h1>
            </div>
            <div className="cost">
              <div className="special">
                <h5> Price </h5>
              </div>
              <div>
                <h2>
                  {" "}
                  <b> 0.00001 ETH </b>{" "}
                </h2>
              </div>
              <div>
                <h4> 10USD </h4>
              </div>
            </div>
          </div>
        </div>

        <div className="details">
          <div className="description">
            <h3> Description: </h3>
            <p> This is a rare NFT of a famous TV-show, the asparagus. </p>
          </div>
          <div class="history">
            <h3> History: </h3>
            <HistoryCard />
          </div>
        </div>
      </div>
    </>
  );
}
