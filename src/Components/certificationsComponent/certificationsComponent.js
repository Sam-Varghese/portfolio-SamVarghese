import "./certificationsComponent.scss";

function Certificate(props) {
  return (
    <div className="certificateDiv">
      <div className="certificateTitle">{props.title}</div>
      <div className="certificateBanner">
        <img src={require("./" + props.imageUrl)} />
      </div>
      <div className="certificateDescription">{props.description}</div>
      <a href={(props.certificateUrl)} target="_blank">
        <div
          className="certificateViewButton"
        >
          View
        </div>
      </a>
    </div>
  );
}

export default Certificate;
