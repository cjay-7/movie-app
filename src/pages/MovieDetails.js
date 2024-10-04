import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchMovieDetails } from "../redux/actions/movieActions";
import axios from "axios";
import { Row, Col, Container, Spinner, Image, Carousel } from "react-bootstrap";

const MovieDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { movieDetails, loading } = useSelector((state) => state.movies);
  const [cast, setCast] = React.useState([]);

  useEffect(() => {
    dispatch(fetchMovieDetails(id));

    const fetchCast = async () => {
      const res = await axios.get(
        `https://api.themoviedb.org/3/movie/${id}/credits?api_key=c45a857c193f6302f2b5061c3b85e743&language=en-US`
      );
      setCast(res.data.cast);
    };

    fetchCast();
  }, [dispatch, id]);

  if (loading) return <Spinner animation="border" />;

  const imageUrl = `https://image.tmdb.org/t/p/w500${movieDetails.backdrop_path}`;

  // Helper function to group cast into chunks of 6
  const chunkCast = (array, chunkSize) => {
    const chunks = [];
    for (let i = 0; i < array.length; i += chunkSize) {
      chunks.push(array.slice(i, i + chunkSize));
    }
    return chunks;
  };

  const castChunks = chunkCast(cast, 6);

  return (
    <Container className="mt-4">
      <div
        className="hero-section"
        style={{
          backgroundImage: `url(${imageUrl})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          padding: "20px",
        }}
      >
        <Row className="mb-4">
          <Col md={2}>
            <Image
              variant="top"
              src={`https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`}
            />
          </Col>
          <Col
            md={10}
            className="movie-details-text"
          >
            <h2>{movieDetails.title}</h2>
            <p>
              <strong>Rating:</strong>{" "}
              {Math.round(movieDetails.vote_average * 10) / 10}
            </p>
            <p>
              <strong>Runtime:</strong> {movieDetails.runtime} minutes
            </p>
            <p>
              <strong>Genres:</strong>{" "}
              {movieDetails.genres && movieDetails.genres.length > 0
                ? movieDetails.genres.map((genre) => genre.name).join(", ")
                : "N/A"}
            </p>
            <p>
              <strong>Release Date:</strong> {movieDetails.release_date}
            </p>
          </Col>
        </Row>
        <Row className="overview">
          <h4>Overview</h4>
          <p>{movieDetails.overview}</p>
        </Row>
      </div>

      <h3 className="mt-3">Cast</h3>
      <Carousel
        indicators={false}
        controls={false}
      >
        {castChunks.map((chunk, index) => (
          <Carousel.Item key={index}>
            <Row>
              {chunk.map((actor) => (
                <Col
                  key={actor.cast_id}
                  md={2}
                  className="text-center"
                >
                  <Image
                    src={`https://image.tmdb.org/t/p/w200${actor.profile_path}`}
                    alt={actor.name}
                    className="d-block"
                    style={{ height: "150px" }}
                  />
                  <h5 className="mt-2">{actor.name}</h5>
                  <p>
                    <strong>Character:</strong> {actor.character}
                  </p>
                </Col>
              ))}
            </Row>
          </Carousel.Item>
        ))}
      </Carousel>
    </Container>
  );
};

export default MovieDetails;
