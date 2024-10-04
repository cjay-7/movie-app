import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const MovieCard = ({ movie }) => {
  const roundToNearestTenth = (num) => {
    return Math.round(num * 10) / 10;
  };
  return (
    <Card className="mb-4 px-5">
      <Link to={`/movie/${movie.id}`}>
        <Card.Img
          variant="top"
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        />
        <Card.Body>
          <Card.Title>{movie.title}</Card.Title>
          <Card.Text>
            <strong>Rating:</strong> {roundToNearestTenth(movie.vote_average)}
          </Card.Text>
        </Card.Body>
      </Link>
    </Card>
  );
};

export default MovieCard;
