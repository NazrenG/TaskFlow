import "./App.css";
import HomePage from "./Pages/Home/home";
import AboutPage from "./Pages/About/about";
import { Route, Routes } from "react-router-dom";
import React, { useEffect } from "react";
import Auth from "./Pages/Auth/auth.jsx";

function App() {
  useEffect(() => {
    // Scriptleri dinamik olarak ekle
    const loadScript = (src) => {
      const script = document.createElement("script");
      script.src = src;
      script.async = true;
      document.body.appendChild(script);
    };
    const scripts = [
      "https://r.mobirisesite.com/827554/assets/web/assets/jquery/jquery.min.js?rnd=1729676536164",
      "https://r.mobirisesite.com/827554/assets/bootstrap/js/bootstrap.bundle.min.js?rnd=1729676536164",
      "https://r.mobirisesite.com/827554/assets/parallax/jarallax.js?rnd=1729676536164",
      "https://r.mobirisesite.com/827554/assets/smoothscroll/smooth-scroll.js?rnd=1729676536164",
      "https://r.mobirisesite.com/827554/assets/ytplayer/index.js?rnd=1729676536164", // Diğer script URL'leri burada
      "https://r.mobirisesite.com/827554/assets/dropdown/js/navbar-dropdown.js?rnd=1729676536164",
      "https://r.mobirisesite.com/827554/assets/vimeoplayer/player.js?rnd=1729676536164",
      "https://r.mobirisesite.com/827554/assets/embla/embla.min.js?rnd=1729676536164",
      "https://r.mobirisesite.com/827554/assets/embla/script.js?rnd=1729676536164",
      "https://r.mobirisesite.com/827554/assets/scrollgallery/scroll-gallery.js?rnd=1729676536164",
      "https://r.mobirisesite.com/827554/assets/theme/js/script.js?rnd=1729676536164",
      "https://r.mobirisesite.com/827554/assets/formoid/formoid.min.js?rnd=1729676536164",
    ];

    scripts.forEach(loadScript);
    return () => {};
  }, []);
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/login" element={<Auth />} />
        <Route path="*" element={<h1>404 Not Found</h1>} />
      </Routes>
    </div>
  );
}

export default App;
