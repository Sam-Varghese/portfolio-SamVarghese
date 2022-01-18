import "./experienceComponent.scss";

function ExperienceComponent(props) {
  // props.technologiesUsed will be an arrays of techs
  // Making list items out of that array elements
  const techLearnt = props.technologiesUsed.map((object, index) => {
    return <li>{object}</li>;
  });

  return (
    <div className="experience">
      <div className="experienceTitle">{props.title}</div>
      <div className="experienceDuration">{props.duration}</div>
      <div className="experienceBanner">
        <img src={require("./" + props.bannerUrl)} />
      </div>
      <div className="subHeadings">Description</div>
      <div className="experienceDescription">{props.description}</div>
      <div className="subHeadings">Skills Gained</div>
      <div className="techsWorkedWith">
        <ul>{techLearnt}</ul>
      </div>
    </div>
  );
}

export default ExperienceComponent;