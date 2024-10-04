import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchSearchResults } from "../redux/actions/movieActions";
import { Card, Row, Col } from "react-bootstrap";

const SearchResults = () => {
  const { query } = useParams();
  const dispatch = useDispatch();
  const { loading, popularMovies } = useSelector((state) => state.movies);

  useEffect(() => {
    dispatch(fetchSearchResults(query));
  }, [dispatch, query]);

  if (loading) return <p>Loading...</p>;
  if (!popularMovies.length) return <p>No movies found for "{query}".</p>;

  return (
    <Row
      xs={1}
      md={4}
      className="g-4"
    >
      {popularMovies.map((movie) => (
        <Col key={movie.id}>
          <Card>
            <Card.Img
              variant="top"
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            />
            <Card.Body>
              <Card.Title>{movie.title}</Card.Title>
              <Card.Text>{movie.overview}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default SearchResults;
