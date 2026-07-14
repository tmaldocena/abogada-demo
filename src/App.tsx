import Hero from './components/Hero';
import About from './components/About';
import Featured from './components/Featured';
import Philosophy from './components/Philosophy';
import Services from './components/Services';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-ink">
      <Hero />
      <About />
      <Featured />
      <Philosophy />
      <Services />
      <Footer />
    </div>
  );
}

export default App;
