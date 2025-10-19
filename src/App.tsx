import { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import "./App.css";
import Home from "./components/Home";
import PersonalizedService from "./components/PersonalizedService";

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Home />
        <PersonalizedService />
      </main>
    </>
  );
}

export default App;
