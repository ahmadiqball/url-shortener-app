import { useRef, useState, useEffect, Fragment } from "react";
import classes from "./ShortLink.module.css";
import LinkList from "./LinkList";

let init = true;

const ShortLink = () => {
  const linkRef = useRef();
  const [linkList, setLinkList] = useState([]);
  const [isError, setIsError] = useState(false);
  const checkLS = JSON.parse(sessionStorage.getItem('linkData'))
  console.log(checkLS)

  useEffect(() => {
    if (init) {
      const checkLS = JSON.parse(sessionStorage.getItem('linkData'))
      console.log(checkLS)
      if (checkLS) {
        setLinkList(checkLS)
      }
      init = false
    }
    sessionStorage.setItem('linkData', JSON.stringify(linkList))
  }, [linkList])

  const submitHandler = async (event) => {
    event.preventDefault();

    const enteredURL = linkRef.current.value;

    const response = await fetch(
      "https://api.shrtco.de/v2/shorten?url=" + enteredURL
    );
    const data = await response.json();
    

    if (!response.ok) {
      setIsError(true);
      linkRef.current.value = ''
      throw new Error("URL is not valid.");
    }

    setLinkList((previousList) => [
      ...previousList,
      {
        id: linkList.length + 1,
        org: data.result.original_link,
        short: data.result.full_short_link,
      },
    ]);
    linkRef.current.value = ''
  };

  return (
    <Fragment>
      <div className={classes.background}>
          <form onSubmit={submitHandler} className={classes.shortlink}>
            <input  
              type="text"
              ref={linkRef}
              placeholder="Shorten a link here..."
              onFocus={() => setIsError(false)}
              className={isError ? classes.inputError : classes.linkInput}
            />
            {isError && <p>Please add a link</p>}
            <button>Shorten It!</button>
          </form>  
      </div>
      <div className={classes.result}>
        {linkList.map((data) => (
          <LinkList key={data.id} original={data.org} short={data.short} />
        ))}
      </div>
    </Fragment>
  );
};

export default ShortLink;
