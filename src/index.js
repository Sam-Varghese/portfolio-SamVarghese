import React, {useEffect} from "react";
import ReactDOM from "react-dom";
// import './index.css';
import Menu from "./Components/menu/menu";
import Achievements from "./Components/achievements/achievements";
import Introduction from "./Components/introduction/intro";
import HomePage from "./Components/homepage/homepage";
import Skills from "./Components/skills/skills";
import DisplayCertificates from "./Components/certifications/certifications";
import Experience from "./Components/experience/experience";
import Contact from "./Components/contact/contact";
import Projects from "./Components/projects/projects";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReactGa from 'react-ga';

export default function App() {
  useEffect(() => {
    ReactGa.initialize("G-WSM5XT1D9E");
    ReactGa.pageview('/');
  }, [])
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}>
        </Route>
        <Route path="/achievements" element={<Achievements />}>
        </Route>
        <Route path="/introduction" element={<Introduction />}>
        </Route>
        <Route path="/skills" element={<Skills />}>
        </Route>
        <Route path="/certificates" element={<DisplayCertificates />}>
        </Route>
        <Route path="/experience" element={<Experience />}>
        </Route>
        <Route path="/contact" element={<Contact />}>
        </Route>
        <Route path="/projects" element={<Projects />}>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
