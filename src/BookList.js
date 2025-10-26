import { useEffect, useState } from 'react';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function BookList() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/books')
      .then((res) => res.json())
      .then((data) => setBooks(data))
      .catch((error) => console.error('Error fetching books:', error));
  }, []);

  if (books.length === 0) {
    return (
      <Container className="my-5">
        <p>Loading books...</p>
      </Container>
    );
  }

  return (
    <Container className="my-5">
      <Row>
        {books.map((book) => (
          <Col key={book.id} md={4} className="mb-4">
            <Card>
              <Card.Img variant="top" src={book.image} />
              <Card.Body>
                <Card.Title>{book.title}</Card.Title>
                <Card.Text>Author: {book.author}</Card.Text>
                <Card.Text>Price: {book.price}</Card.Text>
                <Button as={Link} to={`/books/${book.id}`} variant="success">
                  <span className="mx-1">
                    <i className="bi bi-arrow-right"></i>
                  </span>
                  View Detail
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default BookList;
