import Card from "./UI/Card";
import ReactDOM from "react-dom";
import classes from "./Validation.module.css";

const Validation = (props) => {
    const Backdrop = (props) => {
        return <div className={classes.backdrop} onClick={props.onConfirm} />;
    };
    const Overlay = (props) => {
        return (
            <Card className={classes.modal}>
                <header className={classes.header}>
                    <h2>{props.title}</h2>
                </header>
                <div className={classes.content}>
                    <p>{props.message}</p>
                </div>
                <footer className={classes.action}>
                    <button onClick={props.onConfirm}>Okay!!</button>
                </footer>
            </Card>
        );
    };
    return (
        <>
            {ReactDOM.createPortal(
                <Backdrop onConfirm={props.onConfirm} />,
                document.getElementById("backdrop-root")
            )}
            {ReactDOM.createPortal(
                <Overlay
                    title={props.title}
                    message={props.message}
                    onConfirm={props.onConfirm}
                />,
                document.getElementById('backdrop-overlay')
            )}
        </>
    );
};
export default Validation;
