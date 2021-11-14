import React from "react";
import { useParams } from "react-router";
import HistoryCard from "../Components/CollectibleHistory";
import "./Collectible.css";

export default function Collectible() {
  let Collectible1 = {
    name: "Collectible1",
    description: "This is a description",
    price: "0.11",
    priceInUSD: "10",
    img: "https://lh3.googleusercontent.com/Fviz0PWzUMQ98uvUZV8e_3y2R3D0nwk9q3jCQONoA2jh83vN2phkxEmLD3zpE1iiPOWNqh38rCqOC4agChgi704d0VGjgqwXrjiZ1Q=w600",
  };
  let Collectible2 = {
    name: "Collectible2",
    description: "This is a description",
    price: "0.12",
    priceInUSD: "10",
    img: "https://lh3.googleusercontent.com/8pQQRseehVjJ5PRZkXANawtaCooQfdTF9Ld3UvJVXxVaiixxM9x357NqLwFqindvDlKZ-XqbLytwzL-LxpiDPgJLIqOq5OHjhg5PAQ=w600",
    list_date: "here",
  };
  let Collectible3 = {
    name: "Collectible3",
    description: "This is a description",
    price: "0.13",
    priceInUSD: "10",
    img: "https://lh3.googleusercontent.com/a2w4nmFDYU1Z5kimGQtymbw7E-Jj8zrZRGiKmkmv03e9z5VJAFFqSIsvq39EjtlETwluC9hDGx6EpS5YOCVN6X6pTlAiOpuD5tYW=w600",
    list_date: "here",
  };
  let Collectible4 = {
    name: "Collectible4",
    description: "This is a description",
    price: "0.14",
    priceInUSD: "10",
    img: "https://lh3.googleusercontent.com/P0FjJQ-9_YlBUtl6-pg5tgz1KUOqxgGRnB0u4v3C6YnY14cMWealXb5u3O2OI_Zr-YxMYaRs_b4TVrBTZzXF18_zhZ1WWPsBYj6xyg=w600",
    list_date: "here",
  };
  let Collectible5 = {
    name: "Collectible5",
    description: "This is a description",
    price: "0.15",
    priceInUSD: "10",
    img: "https://lh3.googleusercontent.com/alrw4OsjldeYC5WpJCfneeui2F4lNDU0xYLp80LA9horlf7wufhRG_2ln5u72PLaNh9tF_3WqSXZoCFTgIC9GatkKPobLQ5zYJgrug=w600",
    list_date: "here",
  };
  let Collectible6 = {
    name: "Collectible6",
    description: "This is a description",
    price: "0.16",
    priceInUSD: "15",
    img: "https://lh3.googleusercontent.com/lGp0y5VfF0j0gpe9OcY34inan58xkJuH6i6vCtCempSbUBMsF0cXexO_rFJNixIQP3n27M0L1waBS8oUI_JayefpzmB9Lw3q5oq6=w600",
    list_date: "here",
  };

  let Collectibles = {
    Collectible1,
    Collectible2,
    Collectible3,
    Collectible4,
    Collectible5,
    Collectible6,
  };
  const { name } = useParams();
  const collectible = Collectibles[name];
  console.log(Collectibles[name]);

  return (
    <>
      <div className="body">
        <div className="flex">
          <div className="image">
            <img src={collectible.img} alt=""></img>
          </div>
          <div className="information">
            <div className="icon"></div>
            <div className="title">
              <h1>
                {" "}
                <b> {collectible.name} </b>{" "}
              </h1>
            </div>
            <div className="cost">
              <div className="special">
                <h5> Price </h5>
              </div>
              <div>
                <h2>
                  {" "}
                  <b> {collectible.price} ETH </b>{" "}
                </h2>
              </div>
              <div>
                <h4> {collectible.priceInUSD} USD </h4>
              </div>
            </div>
          </div>
        </div>

        <div className="details">
          <div className="description">
            <h3> Description: </h3>
            <p> {collectible.description} </p>
          </div>
          <div className="history">
            <h3> History: </h3>
            <HistoryCard />
          </div>
        </div>
      </div>
    </>
  );
}
