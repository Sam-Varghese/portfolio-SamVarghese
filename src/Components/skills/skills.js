import "./skills.scss";
import Menu from "../menu/menu";

function Skills() {
    return (
        <div className="skillsPage">
            <Menu forPage="Skills" />
            <div className="skillsSection">
                <img src={require("./icons/github.png")} className="techIcon" />
                <img
                    src={require("./icons/tensorflow.png")}
                    className="techIcon"
                />
                <img src={require("./icons/git.png")} className="techIcon" />
                <img src={require("./icons/react.png")} className="techIcon" />
                <img src={require("./icons/python.png")} className="techIcon" />
                <img src={require("./icons/html.png")} className="techIcon" />
                <img src={require("./icons/css.png")} className="techIcon" />
                <img src={require("./icons/sql.png")} className="techIcon" />
            </div>
        </div>
    );
}

export default Skills;
