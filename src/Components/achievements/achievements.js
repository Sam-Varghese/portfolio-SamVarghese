import Menu from "../menu/menu";
import AchievementsComponent from "../achievementsComponent/achievementsComponent";

import "./achievements.scss";
let data = require("./achievements.json");
let titles = data.achievementsTitle;
let images = data.achievementsImage;
let descriptions = data.achievementsDescription;

// console.log(`titles = ${titles}`);
// console.log(`images = ${images}`);
let counter = 0;

// Making an array of achievements components

let achievementsList = titles.map((object, index) => {
  // console.log(`Object is ${object}`);
  return (
    <AchievementsComponent
      url={images[index]}
      title={titles[index]}
      description={descriptions[index]}
    />
  );
});

// console.log(achievementsList[0]);

function Achievements() {
  return (
    <div>
      <Menu forPage="Achievements"/>
      <div className="achievementsDiv">{achievementsList}</div>
    </div>
  );
}

export default Achievements;
