import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import NavbarMenu from './components/NavbarMenu';
import Footer from './components/Footer';

const BookPage = lazy(() => import('./pages/Books'));

function App() {
  return (
    <Router>
      <NavbarMenu />
      <Suspense fallback={<div className="text-center my-5">Loading...</div>}>
        <Routes>
          <Route path="/" element={<BookPage />} />
        </Routes>
      </Suspense>
      <Footer />
    </Router>
  );
}

export default App;
