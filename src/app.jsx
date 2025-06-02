import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const Home = lazy(() => import("./Pages/Home"));
const About = lazy(() => import("./Pages/About"));
const Contact = lazy(() => import("./Pages/Contact"));
const Camisas = lazy(() => import("./Pages/Camisas"));
const Canecas = lazy(() => import("./Pages/Canecas"));
const Bolsas = lazy(() => import("./Pages/Bolsas"));
const UserProfile = lazy(() => import("./Pages/UserProfile"));
const NotFound = lazy(() => import("./Pages/NotFound"));

const App = () => (
  <Router>
    <Suspense fallback={<div>Carregando...</div>}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/camisas" element={<Camisas />} />
        <Route path="/canecas" element={<Canecas />} />
        <Route path="/bolsas" element={<Bolsas />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/user/:id" element={<UserProfile />} />
        <Route path="*" element={<NotFound />} /> {/* Página 404 */}
      </Routes>
    </Suspense>
  </Router>
);

export default App;
