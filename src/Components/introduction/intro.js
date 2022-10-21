import "./intro.scss";
import Menu from "../menu/menu";

function Introduction() {
    return (
        <div className="introPage">
            <Menu forPage="Introduction" />
            <div className="profileDiv">
            
                <div className="profileDescription">
                    Hey there 👋 I am Sam Varghese from Indore, MP. Currently
                    I'm a second year student at{" "}
                    <a href="https://nmims.edu">NMIMS, Indore</a> pursuing
                    MBATech, which is an integrated course of MBA in technology,
                    and BTech, in computer engineering. I see myself as a
                    hardworking person, passionate in areas like artificial
                    intelligence and machine learning. I've completed my machine
                    learning specialization from
                    <a href="https://stanford.edu">Stanford University</a>.
                    Currently working on 2 research papers in the field of
                    machine learning and computer vision, and learning more from{" "}
                    <a href="https://www.deeplearning.ai/">DeepLearning.AI</a>.
                </div>
                <img
                    src={require("./assets/ProfileImage.jpg")}
                    className="profileImage"
                />
            </div>
        </div>
    );
}
export default Introduction;
