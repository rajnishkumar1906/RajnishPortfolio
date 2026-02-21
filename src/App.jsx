import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="min-h-screen text-white">
      <Navbar />

      <main className="pt-16">
        {/* Glassmorphism separator */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />

        <Hero />

        {/* Glassmorphism separator */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />

        <About />

        {/* Glassmorphism separator */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />

        <Skills />

        {/* Glassmorphism separator */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />

        <Projects />

        {/* Glassmorphism separator */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />

        <Contact />
      </main>

      {/* Footer with glassmorphism */}
      <footer className="backdrop-blur-md bg-white/5 border-t border-white/10 py-8 mt-12">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-white/70 text-sm tracking-wide">
            © 2025 Rajnish Kumar — All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;