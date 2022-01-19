import "./menu.scss";

// Function to highlight the menu item which is currently getting rendered
// forPage is the name of the webpage the user has currently opened
// pageName is the name associated with every menu item which describes the page that menu item is meant to render
function renderMenuItem(forPage, pageName, trueOutput, falseOutput) {
  // If the page which user has opened is not the page menu item is meant to render
  if (forPage != pageName) {
    // false output is the regular menu item
    return falseOutput;
  } else {
    // true output is the highlighted menu item
    return trueOutput;
  }
}

const link = "http://localhost:3000/";

// Function to render all the menu items
function Menu(props) {
  return (
    <div className="menuBar">
      {/* Introduction menu item */}
      {renderMenuItem(
        props.forPage,
        "Introduction",
        <a href={link + "introduction"} className="menuItemActive">
          <div>Introduction</div>
        </a>,
        <a href={link + "introduction"} className="menuItem">
          <div>Introduction</div>
        </a>
      )}
      {/* Achievements menu item */}
      {renderMenuItem(
        props.forPage,
        "Achievements",
        <a href={link + "achievements"} className="menuItemActive">
          <div>Achievements</div>
        </a>,
        <a href={link + "achievements"} className="menuItem">
          <div>Achievements</div>
        </a>
      )}
      {/* Skills menu item */}
      {renderMenuItem(
        props.forPage,
        "Skills",
        <a href={link + "skills"} className="menuItemActive">
          <div>Skills</div>
        </a>,
        <a href={link + "skills"} className="menuItem">
          <div>Skills</div>
        </a>
      )}
      {/* Certification menu item */}
      {renderMenuItem(
        props.forPage,
        "Certifications",
        <a href={link + "certificates"} className="menuItemActive">
          <div>Certifications</div>
        </a>,
        <a href={link + "certificates"} className="menuItem">
          <div>Certifications</div>
        </a>
      )}
      {/* Projects menu item */}
      {renderMenuItem(
        props.forPage,
        "Projects",
        <a href={link + "projects"} className="menuItemActive">
          <div>Projects</div>
        </a>,
        <a href={link + "projects"} className="menuItem">
          <div>Projects</div>
        </a>
      )}
      {/* Experience menu item */}
      {renderMenuItem(
        props.forPage,
        "Experience",
        <a href={link + "experience"} className="menuItemActive">
          <div>Experience</div>
        </a>,
        <a href={link + "experience"} className="menuItem">
          <div>Experience</div>
        </a>
      )}
      {/* Contacts menu item */}
      {renderMenuItem(
        props.forPage,
        "Contact",
        <a href={link + "contact"} className="menuItemActive">
          <div>Contact</div>
        </a>,
        <a href={link + "contact"} className="menuItem">
          <div>Contact</div>
        </a>
      )}
    </div>
  );
}

export default Menu;