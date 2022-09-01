import classes from "./Features.module.css";
import FeatureItem from "./FeatureItem";
import icon1 from "../../img/icon-brand-recognition.svg";
import icon2 from "../../img/icon-detailed-records.svg";
import icon3 from "../../img/icon-fully-customizable.svg";

const featureData = [
  {
    id: 1,
    image: icon1,
    title: "Brand Recognition",
    description:
      "Boost your brand recognition with each click. generic links don't mean a thing. Branded links help instil confidenxe in your content.",
  },
  {
    id: 2,
    image: icon2,
    title: "Detailed Records",
    description:
      "Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better descisions.",
  },
  {
    id: 3,
    image: icon3,
    title: "Fully Customizable",
    description:
      "Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.",
  },
];

const Features = () => {
  return (
    <div className={classes.features}>
      <div>
        <h1>Advanced Statitics</h1>
        <p>
          Track how your link are performing across the web with<br/>our advanced
          statistics dashborad
        </p>
      </div>
      <div className={classes.cards}>
        <span className={classes.line}></span>
        {featureData.map((data) => (
          <FeatureItem
            key={data.id}
            id={data.id}
            image={data.image}
            title={data.title}
            description={data.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Features;
