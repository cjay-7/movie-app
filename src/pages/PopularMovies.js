import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPopularMovies } from "../redux/actions/movieActions";
import MovieCard from "../components/MovieCard";
import { Row, Col } from "react-bootstrap";

const PopularMovies = () => {
  const dispatch = useDispatch();
  const { popularMovies, loading } = useSelector((state) => state.movies);

  useEffect(() => {
    dispatch(fetchPopularMovies());
  }, [dispatch]);

  if (loading) return <p>Loading...</p>;
  if (!popularMovies.length) return <p>No movies available.</p>;

  return (
    <Row
      xs={1}
      md={4}
      className="g-4 px-4 "
    >
      {popularMovies.map((movie) => (
        <Col key={movie.id}>
          <MovieCard movie={movie} />
        </Col>
      ))}
    </Row>
  );
};

export default PopularMovies;
