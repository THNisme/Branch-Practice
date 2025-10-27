import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import NavbarMenu from './NavbarMenu';
import Footer from './Footer';

const Home = lazy(() => import('./Home'));
const BookList = lazy(() => import('./BookList'));
const BookDetail = lazy(() => import('./BookDetail'));
const Contact = lazy(() => import('./Contact'));

function App() {
  return (
    <Router>
      <NavbarMenu />
      <Suspense fallback={<div className="text-center my-5">Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/books" element={<BookList />} />
          <Route path="/books/:id" element={<BookDetail />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Suspense>
      <Footer />
    </Router>
  );
}

export default App;
