import { StrictMode } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createRoot } from "react-dom/client";
import Footer from "./components/Footer/index.jsx";
import "./index.css";
import App from "./pages/App.jsx";
import CreateNav from "./components/Header/index.jsx";
import Epoxy from "./pages/Epoxy.jsx";
import Contact from "./pages/Contact.jsx";
import Faq from "./pages/Faq.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <CreateNav />
      <main id="glavni-sadržaj">
        <Routes>
          <Route path="/" element={<App />}></Route>
          <Route path="/epoxy" element={<Epoxy />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/faq" element={<Faq></Faq>}></Route>
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  </StrictMode>,
);
