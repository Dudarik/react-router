import { Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';

import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Category from './Pages/Category';
import Recipe from './Pages/Recipe';
import NotFound from './Pages/NotFound';

function App() {
  return (
    <>
      <Header />
      <main className="container content">
        <Routes basename="/react-router">
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/category/:name" element={<Category />} />
          <Route path="/meal/:idMeal" element={<Recipe />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
