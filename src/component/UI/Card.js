import "./Card.css"

function Card(props) {

    const classes = "Card " + props.className;
    return (
        //In this div, we want to seperate the background and also add .children inbiult property which aids to create wrapper
        //.children gives rise to availability of the children of the particuler box
        //the classes group had some way of concatenating all the classNames mentioned plus the props class names, Please kindly note the method 
        //of concatenation, a space was kept after the major className before the other list of strings were added
        <div className={classes}>{props.children}</div>  
    );
}

export default Card;