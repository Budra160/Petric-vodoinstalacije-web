import { StrictMode } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createRoot } from "react-dom/client";
import Footer from "./components/footer.jsx";
import "./index.css";
import App from "./pages/App.jsx";
import CreateNav from "./components/header.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <CreateNav />
      <main id="glavni-sadržaj">
        <Routes>
          <Route path="/home"  element={<App />} ><Redirect to="/home"/></Route>
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  </StrictMode>,
);
