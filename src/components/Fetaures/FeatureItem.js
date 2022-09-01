import classes from './FeatureItem.module.css';
 
const FeatureItem = (props) => {
    return (
        <div className={classes.card} style={{ 'top': `calc(40px*${props.id})`}}>
            <div className={classes.round}><img src={props.image} alt='feature-img'/></div>
            <h1>{props.title}</h1>
            <p>{props.description}</p>
        </div>
    )
}

export default FeatureItem;