import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./sections/Home/Home";
import Contact from "./sections/Contact/Contact";
import Portfolio from "./sections/Portfolio/Portfolio";
import About from "./sections/About/About";
function App() {
  return (
    <>
      <Header />
      <Home />
      <Portfolio />
      <About />
      <Contact />
      <Footer />
    </>
  );
}
export default App;
