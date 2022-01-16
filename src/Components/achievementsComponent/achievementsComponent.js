import "./achievementsComponents.scss";

function AchievementsComponent(props) {
  console.log(`URL=${"../achievements/" + props.url}`);
  return (
      <div className="achievement">
        <div className="achievementHeader">
          <h1>{props.title}</h1>
        </div>
        <div className="achievementBanner">
          <img src={require("./" + props.url)} />
        </div>
        <div className="achievementDescription">{props.description}</div>
      </div>
  );
}

export default AchievementsComponent;
