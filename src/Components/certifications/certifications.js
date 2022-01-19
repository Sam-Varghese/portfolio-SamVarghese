import "./certifications.scss";
import Certificate from "../certificationsComponent/certificationsComponent";
import Menu from "../menu/menu";

const data = require("./certificatesInfo.json");

const certificateTitles = data.certificateTitles;
const certificatesUrl = data.certificatesURL;
const bannerUrl = data.bannerURL;
const certificatesDescription = data.certificatesDescription;

const certificatesComponentList = certificateTitles.map((object, index) => {
  return (
    <Certificate
      title={object}
      imageUrl={bannerUrl[index]}
      description={certificatesDescription[index]}
      certificateUrl={certificatesUrl[index]}
    />
  );
});

function DisplayCertificates() {
  return (
    <div>
      <Menu forPage="Certifications"/>
      <div className="certificatesDiv">{certificatesComponentList}</div>
    </div>
  );
}

export default DisplayCertificates;
