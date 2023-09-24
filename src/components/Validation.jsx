import Card from './UI/Card';
import classes from './Validation.module.css';

const Validation = (props) => {
    return (
        <div>
            <div className={classes.backdrop} onClick={props.onConfirm} />
            <Card className={classes.modal}>
                <header className={classes.header}><h2>{props.title}</h2></header>
                <div className={classes.content}><p>{props.message}</p></div>
                <footer className={classes.action}><button onClick={props.onConfirm}>Okay!!</button></footer>
            </Card>
        </div>
    )
}
export default Validation