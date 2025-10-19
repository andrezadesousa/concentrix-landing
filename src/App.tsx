import { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import "./App.css";
import Home from "./components/Home";

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Home />
      </main>
    </>
  );
}

export default App;
