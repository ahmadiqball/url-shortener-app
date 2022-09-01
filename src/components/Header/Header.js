import classes from './Header.module.css';
import headImg from '../../img/illustration-working.svg';

const Header = () => {
    return (
        <div className={classes.header}>
            <div className={classes.content}>
                <h1>More than just shorter link</h1>
                <p>Build your brand's recognition and get detailed insight on how your links are performing</p>
                <button>Get Started</button>
            </div>
            <div><img src={headImg} alt='header-img' className={classes.image}/></div>
            
        </div>
    )
}

export default Header;