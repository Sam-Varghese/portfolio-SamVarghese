import "./contact.scss";
import Menu from "../menu/menu";

function Contact() {
  return (
    <div>
      <Menu forPage="Contact"/>
      <div className="contactDiv">
        <a
          href="https://discord.gg/qW9CGayxMf"
          target="_blank"
          className="contactIcons"
        >
          <div>
            <img src={require("./icons/discord.png")} />
          </div>
        </a>
        <a
          href="https://www.facebook.com/SammmVarghese"
          target="_blank"
          className="contactIcons"
        >
          <div>
            <img src={require("./icons/facebook.png")} />
          </div>
        </a>
        <a
          href="https://github.com/Sam-Varghese"
          target="_blank"
          className="contactIcons"
        >
          <div>
            <img src={require("./icons/github.png")} />
          </div>
        </a>
        <a
          href="https://www.instagram.com/__sam_varghese__/"
          target="_blank"
          className="contactIcons"
        >
          <div>
            <img src={require("./icons/instagram.png")} />
          </div>
        </a>
        <a
          href="https://www.linkedin.com/in/sam-varghese-1a7701209/"
          target="_blank"
          className="contactIcons"
        >
          <div>
            <img src={require("./icons/linkedin.png")} />
          </div>
        </a>
        <a
          href="https://twitter.com/SamVarg05580035"
          target="_blank"
          className="contactIcons"
        >
          <div>
            <img src={require("./icons/twitter.png")} />
          </div>
        </a>
        <a
          href="mailto: sam.varg.2003@gmail.com"
          className="contactIcons"
        >
          <div>
            <img src={require("./icons/mail.png")} />
          </div>
        </a>
      </div>
    </div>
  );
}

export default Contact;
