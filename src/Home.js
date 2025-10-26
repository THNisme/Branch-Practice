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
      <Container className="my-5">
        <p>Loading...</p>
      </Container>
    );
  }

  return (
    <Container className="my-5">
      <h1>{homeData.title}</h1>
      {/* content là HTML nên phải render bằng dangerouslySetInnerHTML */}
      <div dangerouslySetInnerHTML={{ __html: homeData.content }} />
    </Container>
  );
}

export default Home;
