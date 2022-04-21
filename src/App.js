import "./App.css";
import Header from "./components/header";
import Navbar from "./components/navbar";
import ParticleAnimation from "react-particle-animation";

function App() {
  return (
    <>
      <ParticleAnimation />
      <Navbar />
      <Header />
    </>
  );
}

export default App;
