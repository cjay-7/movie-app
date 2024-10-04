import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUpcomingMovies } from "../redux/actions/movieActions";
import MovieCard from "../components/MovieCard";
import { Row, Col } from "react-bootstrap";

const UpcomingMovies = () => {
  const dispatch = useDispatch();
  const { upcomingMovies, loading } = useSelector((state) => state.movies);

  useEffect(() => {
    dispatch(fetchUpcomingMovies());
  }, [dispatch]);

  if (loading) return <p>Loading...</p>;
  if (!upcomingMovies.length) return <p>No movies available.</p>;

  return (
    <Row
      xs={1}
      md={4}
      className="g-4 px-4"
    >
      {upcomingMovies.map((movie) => (
        <Col key={movie.id}>
          <MovieCard movie={movie} /> {/* Use the MovieCard component */}
        </Col>
      ))}
    </Row>
  );
};

export default UpcomingMovies;
