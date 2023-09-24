// import UserList from "./UserList";
import { useState } from "react";
import Card from "./UI/Card";
import classes from './InputForm.module.css';
import Validation from "./Validation";

const InputForm = (props) => {
    const [userName, setUserName] = useState('');
    const [userAge, setUserAge] = useState('');
    const [error, setError] = useState();

    const submitHandler = (event) => {
        event.preventDefault();
        if (userName.trim().length === 0 || userAge.trim().length === 0) {
            setError({
                title: 'Invalid Input',
                message: 'Enter valid input with length > 0'
            })
            return;
        }
        if (+userAge < 1) {
            setError({
                title: 'Invalid Input',
                message: 'Enter age greater than 0'
            })
            return;
        }
        props.addDetails(userName, userAge);
        setUserAge('');
        setUserName('');

    }

    const usernameHandler = (event) => {
        setUserName(event.target.value);

    }
    const ageHandler = (event) => {
        setUserAge(event.target.value);

    }

    const handleConfirm = () => {
        setError(null);
    }

    return (
        <div>
            {error && <Validation title={error.title} message={error.message} onConfirm={handleConfirm} />}
            <Card className={classes.input}>
                <div className="container">
                    <form onSubmit={submitHandler} className="input-form">
                        <div className="input_item">
                            <label>Username:</label>
                            <input type="text" onChange={usernameHandler} value={userName} />
                            <label >Age(years)</label>
                            <input type="number" onChange={ageHandler} value={userAge} />
                        </div>
                        <input type="submit" value='Add User' />
                    </form>
                </div>
            </Card>
        </div>
    );
}

export default InputForm;