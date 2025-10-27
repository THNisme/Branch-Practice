import { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';

function Home() {
  const [homeData, setHomeData] = useState(null);

  useEffect(() => {
    fetch('http://localhost:5000/home')
      .then((res) => res.json())
      .then((data) => setHomeData(data))
      .catch((error) => console.error('Error fetching home data:', error));
  }, []);

  if (!homeData) {
    return (
      <Container style={{ marginTop: "150px" }} >
        <p>Loading...</p>
      </Container>
    );
  }

  return (
    <Container style={{ marginTop: "100px" }}>
      <h1>{homeData.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: homeData.content }} />
    </Container>
  );
}

export default Home;
