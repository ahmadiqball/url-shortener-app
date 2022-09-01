import { Fragment } from "react";
import classes from "./Footer.module.css";
import icon1 from "../../img/icon-facebook.svg";
import icon2 from "../../img/icon-twitter.svg";
import icon3 from "../../img/icon-pinterest.svg";
import icon4 from "../../img/icon-instagram.svg";

const socmedData = [
  { id: 1, icon: icon1, link: "https:/facebook.com" },
  { id: 2, icon: icon2, link: "https:/twitter.com" },
  { id: 3, icon: icon3, link: "https:/pinterest.com" },
  { id: 4, icon: icon4, link: "https:/instagram.com" },
];

const linkData = [
  {
    id: 1,
    title: "Features",
    list: ["Link Shortening", "Branded Links", "Analytics"],
  },
  {
    id: 2,
    title: "Resources",
    list: ["Blog", "Developers", "Support"],
  },
  {
    id: 3,
    title: "Company",
    list: ["About", "Our Team", "Careers", "Contact"],
  },
];

const Footer = () => {
  return (
    <Fragment>
      <div className={classes.boost}>
        <h1>Boost your link today</h1>
        <button>Get Started</button>
      </div>
      <div className={classes.footer}>
        <h1>Shortly</h1>
        <div className={classes.links}>
          {linkData.map((data) => (
            <div className={classes.link} key={data.id}>
              <h2>{data.title}</h2>
              {data.list.map((item) => (
                <h3 key={item}>{item}</h3>
              ))}
            </div>
          ))}
        </div>
        <div className={classes.socmed}>
          {socmedData.map((data) => (
            <a key={data.id} href={data.link}>
              <img src={data.icon} alt="socmed-img" />
            </a>
          ))}
        </div>
      </div>
    </Fragment>
  );
};

export default Footer;
