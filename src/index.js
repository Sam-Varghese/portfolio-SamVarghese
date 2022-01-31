import React from "react";
import ReactDOM from "react-dom";
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

export default function App() {
  return (
    <HomePage />
  )
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
