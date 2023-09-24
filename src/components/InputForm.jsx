// import UserList from "./UserList";
import { useRef, useState } from "react";
import Card from "./UI/Card";
import classes from './InputForm.module.css';
import Validation from "./Validation";
import Wrapper from "./Helpers/Wrapper";

const InputForm = (props) => {
    const enteredName = useRef();
    const enteredAge = useRef();
    const enteredCollege = useRef();
    const [error, setError] = useState();

    const submitHandler = (event) => {
        event.preventDefault();
        const enteredUserName = enteredName.current.value;
        const enteredUserAge = enteredAge.current.value;
        const enteredUserCollege = enteredCollege.current.value;
        if (enteredUserName.trim().length === 0 || enteredUserAge.trim().length === 0 || enteredUserCollege.trim().length === 0) {
            setError({
                title: 'Invalid Input',
                message: 'Enter valid input with length > 0'
            })
            return;
        }
        if (+enteredUserAge < 1) {
            setError({
                title: 'Invalid Input',
                message: 'Enter age greater than 0'
            })
            return;
        }
        props.addDetails(enteredUserName, enteredUserAge, enteredUserCollege);
        enteredName.current.value = '';
        enteredAge.current.value = '';
        enteredCollege.current.value = '';

    }


    const handleConfirm = () => {
        setError(null);
    }

    return (
        <Wrapper>
            {error && <Validation title={error.title} message={error.message} onConfirm={handleConfirm} />}
            <Card className={classes.input}>
                <div className="container">
                    <form onSubmit={submitHandler} className="input-form">
                        <div className="input_item">
                            <label>Username:</label>
                            <input type="text" ref={enteredName} />
                            <label >Age(years)</label>
                            <input type="number" ref={enteredAge} />
                            <label>College Name:</label>
                            <input type="text" ref={enteredCollege} />
                        </div>
                        <input type="submit" value='Add User' />
                    </form>
                </div>
            </Card>
        </Wrapper>
    );
}

export default InputForm;