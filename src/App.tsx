import { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import "./App.css";
import Home from "./components/Home";
import PersonalizedService from "./components/PersonalizedService";
import StartNow from "./components/StartNow";

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Home />
        <PersonalizedService />
        <StartNow />
      </main>
    </>
  );
}

export default App;
