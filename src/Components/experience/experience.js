import ExperienceComponent from "../experienceComponent/experienceComponent";
import Menu from "../menu/menu";
import "./experience.scss";

const data = require("./experience.json");

const titles = data.experienceTitle;
const durations = data.experienceDuration;
const banners = data.experienceBanner;
const descriptions = data.experienceDescription;
const learnings = data.experienceLearnings;

const experienceComponents = titles.map((object, index) => {
  return (
    <ExperienceComponent
      title={object}
      duration={durations[index]}
      bannerUrl={banners[index]}
      description={descriptions[index]}
      technologiesUsed={learnings[index]}
    />
  );
});

function Experience() {
  return (
    <div>
      <Menu />
      <div className="experienceDiv">{experienceComponents}</div>
    </div>
  );
}

export default Experience;