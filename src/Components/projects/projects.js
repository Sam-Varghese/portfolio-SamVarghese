import "./projects.scss";
import Menu from "../menu/menu";
import ProjectsComponent from "../projectsComponent/projectsComponent";

const data = require("./projects.json");

const titles = data.projectTitle;
const durations = data.projectDuration;
const banners = data.projectBannerLinks;
const descriptions = data.projectsDescription;
const learnings = data.projectsLearning;
const projectUrl = data.projectsUrl;

const projectComponents = titles.map((object, index) => {
  return (
    <ProjectsComponent
      title={object}
      duration={durations[index]}
      bannerUrl={banners[index]}
      description={descriptions[index]}
      technologiesUsed={learnings[index]}
      projectLink={projectUrl[index]}
    />
  );
});

function Projects() {
  return (
    <div>
      <Menu />
      {projectComponents}
    </div>
  );
}

export default Projects;
