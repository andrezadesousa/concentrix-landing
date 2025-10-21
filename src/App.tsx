import { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import "./App.css";
import Home from "./components/Home";
import PersonalizedService from "./components/PersonalizedService";
import StartNow from "./components/StartNow";
import Faq from "./components/Faq";
import Footer from "./components/Footer";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <>
      <Header />
      <main>
        <Hero onLogin={() => setLoggedIn(true)} />
        {loggedIn && (
          <>
            <Home />
            <PersonalizedService />
            <StartNow />
            <Faq />
          </>
        )}
      </main>
      <Footer />
    </>
  );
}

export default App;
