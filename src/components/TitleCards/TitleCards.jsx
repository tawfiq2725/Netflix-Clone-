import React, { useEffect, useRef, useState } from "react";
import "./TitleCards.css";
import { Link } from "react-router-dom";
import cards_data from "../../assets/cards/Cards_data";

const TitleCards = ({ title, category }) => {
  const [apidata, setApidata] = useState([]);
  const cardsref = useRef();

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1Y2RjMTRkZGYzNDM2NDRiMzcyMDhkMTQyNDAwODQwYyIsIm5iZiI6MTczMDA0MjUwMC41Njc4MzIsInN1YiI6IjY3MWU1N2M5YTRhYzhhNDMyYzVjYTg0NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.JRjWvGZHCj8eGgYV4nf-xhT_wSX3tfSBkaPtvhBkWUA",
    },
  };

  const handleWheel = (e) => {
    e.preventDefault();
    cardsref.current.scrollLeft += e.deltaY;
  };
  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${
        category ? category : "now_playing"
      }?language=en-US&page=1`,
      options
    )
      .then((res) => res.json())
      .then((res) => setApidata(res.results))
      .catch((err) => console.error(err));

    cardsref.current.addEventListener("wheel", handleWheel);
  }, []);
  return (
    <>
      <div className="titlecards">
        <h2>{title ? title : "Popular on Netflix"}</h2>
        <div className="card-list" ref={cardsref}>
          {apidata.map((card, index) => {
            return (
              <Link to={`/player/${card.id}`} className="card" key={index}>
                <img
                  src={`https://image.tmdb.org/t/p/w500${card.backdrop_path}`}
                  alt=""
                />
                <p>{card.original_title}</p>
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default TitleCards;
