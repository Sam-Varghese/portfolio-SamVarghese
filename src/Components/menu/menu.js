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
      <div className="menuItem">Certifications</div>
      <div className="menuItem">Projects</div>
      <div className="menuItem">Experience</div>
      <div className="menuItem">Contact</div>
    </div>
  );
}

export default Menu;
