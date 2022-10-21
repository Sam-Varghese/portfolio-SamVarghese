import "./contact.scss";
import Menu from "../menu/menu";
import discordIcon from "./icons/discord.png";
import facebookIcon from "./icons/facebook.png";
import githubIcon from "./icons/github.png";
import instagramIcon from "./icons/instagram.png";
import linkedinIcon from "./icons/linkedin.png";
import mailIcon from "./icons/mail.png";

function Contact() {
    return (
        <div className = "contactsPage">
            <Menu forPage="Contact" />
            <div className="contactDiv">
                <a
                    href="https://discord.gg/TuRVWJqVhf"
                    target="_blank"
                    className="contactIcons"
                >
                    <div>
                        <img src={discordIcon} />
                    </div>
                </a>
                <a
                    href="https://www.facebook.com/constNameSamVarghese"
                    target="_blank"
                    className="contactIcons"
                >
                    <div>
                        <img src={facebookIcon} />
                    </div>
                </a>
                <a
                    href="https://github.com/Sam-Varghese"
                    target="_blank"
                    className="contactIcons"
                >
                    <div>
                        <img src={githubIcon} />
                    </div>
                </a>
                <a
                    href="https://www.instagram.com/sam_varghese2003/"
                    target="_blank"
                    className="contactIcons"
                >
                    <div>
                        <img src={instagramIcon} />
                    </div>
                </a>
                <a
                    href="https://www.linkedin.com/in/sam-varghese2003/"
                    target="_blank"
                    className="contactIcons"
                >
                    <div>
                        <img src={linkedinIcon} />
                    </div>
                </a>
                <a
                    href="mailto: sam.varg.2003@gmail.com"
                    className="contactIcons"
                >
                    <div>
                        <img src={mailIcon} />
                    </div>
                </a>
            </div>
        </div>
    );
}

export default Contact;