import { useParams, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Container, Card, Button } from 'react-bootstrap';

function BookDetail() {
  const { id } = useParams();
  const [book, setBook] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:5000/books/${id}`)
      .then((res) => {
        if (!res.ok) throw new Error('Book not found');
        return res.json();
      })
      .then((data) => setBook(data))
      .catch(() => setBook(null));
  }, [id]);

  if (book === null) {
    return (
      <Container className="my-5">
        <h2>Book not found</h2>
        <Button as={Link} to="/books" variant="secondary" style={{ width: "fit-content" }}>
          <span className="mx-1"><i className="bi bi-arrow-left"></i></span>
          Back to Book List
        </Button>
      </Container>
    );
  }

  return (
    <Container className="my-5">
      <Card style={{ border: "none" }}>
        <Card.Body>
          <Card.Title>{book.title}</Card.Title>
          <Card.Text>Author: {book.author}</Card.Text>
          <Card.Text>Price: {book.price}</Card.Text>
          <Card.Img variant="top" src={`/${book.image}`} style={{ width: "300px", height: "auto" }} />
        </Card.Body>
        <Button as={Link} to="/books" variant="secondary" style={{ width: "fit-content" }}>
          <span className="mx-1"><i className="bi bi-arrow-left"></i></span>
          Back to Book List
        </Button>
      </Card>
    </Container>
  );
}

export default BookDetail;
