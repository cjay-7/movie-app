import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTopRatedMovies } from "../redux/actions/movieActions";
import MovieCard from "../components/MovieCard";
import { Row, Col } from "react-bootstrap";

const TopRatedMovies = () => {
  const dispatch = useDispatch();
  const { topRatedMovies, loading } = useSelector((state) => state.movies);

  useEffect(() => {
    dispatch(fetchTopRatedMovies());
  }, [dispatch]);

  if (loading) return <p>Loading...</p>;
  if (!topRatedMovies.length) return <p>No movies available.</p>;

  return (
    <Row
      xs={1}
      md={4}
      className="g-4 px-4"
    >
      {topRatedMovies.map((movie) => (
        <Col key={movie.id}>
          <MovieCard movie={movie} /> {/* Use the MovieCard component */}
        </Col>
      ))}
    </Row>
  );
};

export default TopRatedMovies;
