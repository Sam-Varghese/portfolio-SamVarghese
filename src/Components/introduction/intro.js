import "./intro.scss";
import Menu from "../menu/menu";

function Introduction() {
  return (
    <div>
        <Menu forPage = "Introduction"/>
      <div className="profileDiv">
        

        <div className="profileDescription">
          Hey there 👋 I am Sam Varghese from Indore, MP. Currently I'm a first
          year student at NMIMS, Indore pursuing MBATech, which is an integrated
          course of MBA in technology, and BTech, in computer engineering. I see
          myself as an hardworking person, passionate in coding and computer
          stuffs. Exploring new technologies in order to enhance the quality of
          softwares is what I like the most. I'm always open to opportunities
          that can enhance my technical and social skills.
        </div>
        <img
          src={require("./assets/profileImage.png")}
          className="profileImage"
        />
      </div>
    </div>
  );
}
export default Introduction;
