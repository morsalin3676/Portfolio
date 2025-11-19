import About from './components/About';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Header from './components/Header';
import Banner from './components/Banner';
import './index.css'
import Projects from './components/Projects';

function App() {

  return (
    <div >
      <Header />
      {/* main section */}
      <main>
        <Banner></Banner>
        {/* about section */}
        <About></About>
        {/* skills section */}
        <Skills></Skills>
        {/* project section */}
        <Projects
        ></Projects>
        {/* contact section */}
        <Contact></Contact>
        {/* footer section */}
        <Footer />

      </main>
    </div>
  );
}

export default App;
