import { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import "./App.css";
import Home from "./components/Home";
import PersonalizedService from "./components/PersonalizedService";
import StartNow from "./components/StartNow";
import Faq from "./components/Faq";

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Home />
        <PersonalizedService />
        <StartNow />
        <Faq />
      </main>
    </>
  );
}

export default App;
