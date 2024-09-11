import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

const MovieModal = ({ show, handleClose, addMovie }) => {
  const [movie, setMovie] = useState({
    title: '',
    description: '',
    posterURL: '',
    rating: '',
  });

  const handleChange = (e) => {
    setMovie({ ...movie, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    addMovie(movie);
    handleClose();
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Add New Movie</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="formTitle">
            <Form.Label>Title</Form.Label>
            <Form.Control 
              type="text" 
              name="title" 
              value={movie.title} 
              onChange={handleChange} 
              placeholder="Enter movie title" 
            />
          </Form.Group>

          <Form.Group controlId="formDescription">
            <Form.Label>Description</Form.Label>
            <Form.Control 
              as="textarea" 
              rows={3} 
              name="description" 
              value={movie.description} 
              onChange={handleChange} 
              placeholder="Enter movie description" 
            />
          </Form.Group>

          <Form.Group controlId="formPosterURL">
            <Form.Label>Poster URL</Form.Label>
            <Form.Control 
              type="text" 
              name="posterURL" 
              value={movie.posterURL} 
              onChange={handleChange} 
              placeholder="Enter movie poster URL" 
            />
          </Form.Group>

          <Form.Group controlId="formRating">
            <Form.Label>Rating</Form.Label>
            <Form.Control 
              type="number" 
              name="rating" 
              value={movie.rating} 
              onChange={handleChange} 
              placeholder="Enter movie rating (1-5)" 
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleSubmit}>
          Add Movie
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default MovieModal;