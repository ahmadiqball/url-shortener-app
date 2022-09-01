import classes from "./LinkList.module.css";
import { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";

const LinkList = (props) => {
  const [copy, setCopy] = useState(false);

  return (
    <div className={classes.item}>
      <div className={classes.links}>
        <h4 className={classes.original}>{props.original}</h4>
        <h4 className={classes.short}>{props.short}</h4>
      </div>
      <CopyToClipboard text={props.short} onCopy={() => setCopy(true)}>
        <button className={copy ? classes.buttonCoppied : classes.buttonCopy}>
          {copy ? "Coppied!" : "Copy"}
        </button>
      </CopyToClipboard>
    </div>
  );
};

export default LinkList;
