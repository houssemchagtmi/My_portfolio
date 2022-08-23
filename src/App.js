import Navbar from "./components/Navbar/Navbar";
import Intro from "./components/Intro/Intro";
import Services from "./components/Services/Services";
import "./App.css";
import Certificates from "./components/Certificates/Certificates";
import Portfolio from "./components/Portfolio/Portfolio";
import Footer from "./components/Footer/Footer";

function App() {
 
  return (
    <div
      className="App bg-black text-white"
    
    >
      <Navbar />
      <Intro />
      <Services />
      <Certificates />
      <Portfolio />
      <Footer />
    </div>
  );
}

export default App;
