import { Card, Button, Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { bookList } from './booksData';

function BookList() {
  return (
    <Container className="my-5">
      <Row>
        {bookList.map(book => (
          <Col key={book.id} md={4} className="mb-4">
            <Card>
              <Card.Img variant="top" src={book.image} />
              <Card.Body>
                <Card.Title>{book.title}</Card.Title>
                <Card.Text>Author: {book.author}</Card.Text>
                <Card.Text>Price: {book.price}</Card.Text>
                <Button as={Link} to={`/books/${book.id}`} variant="success">
                  <span className='mx-1'><i className="bi bi-arrow-right"></i></span>
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
