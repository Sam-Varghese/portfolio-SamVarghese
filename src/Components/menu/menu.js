import "./menu.scss";
function Menu() {
  return (
    <div className="menuBar">
      <a href="http://localhost:3000/introduction" className="menuItem">
        <div>Introduction</div>
      </a>
      <a href="http://localhost:3000/achievements" className="menuItem">
        <div>Achievements</div>
      </a>
      <a href="http://localhost:3000/skills" className="menuItem">
        <div>Skills</div>
      </a>
      <a href="http://localhost:3000/certificates" className="menuItem">
        <div>Certifications</div>
      </a>
      <a href="http://localhost:3000/experience" className="menuItem">
        <div>Projects</div>
      </a>
      <a href="http://localhost:3000/experience" className="menuItem">
        <div>Experience</div>
      </a>
      <a href="http://localhost:3000/contact" className="menuItem">
        <div>Contact</div>
      </a>
    </div>
  );
}

export default Menu;
