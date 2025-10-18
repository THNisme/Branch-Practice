import { Container } from 'react-bootstrap';

function Home() {
  return (
    <Container className="my-5">
      <h1>Welcome to the Book Store</h1>
      <p className='fw-light fs-5'>
        Discover a world of stories and knowledge. Whether you&apos;re looking for the latest bestsellers
        or timeless classics, we have something for everyone.
      </p>
      <p>
        Our collection spans various genres including fiction, non-fiction, mystery, romance,
        and science fiction. Dive into your next adventure today!
      </p>
    </Container>
  );
}
export default Home;
