import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavBar from './components/Navbar/Navbar';
import Header from './components/Header/Header';
import ShortLink from './components/ShortLink/ShortLink';
import Features from './components/Fetaures/Features';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Header />
      <ShortLink />
      <Features />
      <Footer />
    </div>
  );
}

export default App;
