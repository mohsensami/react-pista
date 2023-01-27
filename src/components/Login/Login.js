import React, { useState, useEffect, useReducer } from "react";

import Card from "../UI/Card/Card";
import classes from "./Login.module.css";
import Button from "../UI/Button/Button";

const emailReducer = (state, action) => {
    if (action.type === "USER_INPUT") {
        return { value: action.val, isValid: action.val.includes("@") };
    }
    if (action.type === "USER_BLUR") {
        return { value: state.value, isValid: state.value.includes("@") };
    }
    return { value: "", isValid: false };
};

const Login = (props) => {
    // const [enteredEmail, setEnteredEmail] = useState("");
    // const [emailIsValid, setEmailIsValid] = useState();
    const [enteredPassword, setEnteredPassword] = useState("");
    const [passwordIsValid, setPasswordIsValid] = useState();
    const [formIsValid, setFormIsValid] = useState(false);

    const [emailState, dispatchEmail] = useReducer(emailReducer, {
        value: "",
        isValid: null,
    });

    // useEffect(() => {
    //     console.log("Only first time");
    // }, []);

    // useEffect(() => {
    //     const identifier = setTimeout(() => {
    //         setFormIsValid(emailState.value.includes("@") && enteredPassword.trim().length > 6);
    //     }, 5000);

    //     return () => {
    //         console.log("when destroy component, cleanup");
    //         clearInterval(identifier);
    //     };
    // }, [emailState.value, enteredPassword]);

    const emailChangeHandler = (event) => {
        dispatchEmail({ type: "USER_INPUT", val: event.target.value });
        setFormIsValid(emailState.isValid && enteredPassword.trim().length > 6);
    };

    const passwordChangeHandler = (event) => {
        setFormIsValid(emailState.isValid && enteredPassword.trim().length > 6);
        setEnteredPassword(event.target.value);
    };

    const validateEmailHandler = () => {
        dispatchEmail({ type: "USER_BLUR" });
    };

    const validatePasswordHandler = () => {
        setPasswordIsValid(enteredPassword.trim().length > 6);
    };

    const submitHandler = (event) => {
        event.preventDefault();
        props.onLogin(emailState.value, enteredPassword);
    };

    return (
        <Card className={classes.login}>
            <form onSubmit={submitHandler}>
                <div className={`${classes.control} ${emailState.isValid === false ? classes.invalid : ""}`}>
                    <label htmlFor="email">E-Mail</label>
                    <input type="email" id="email" value={emailState.value} onChange={emailChangeHandler} onBlur={validateEmailHandler} />
                </div>
                <div className={`${classes.control} ${passwordIsValid === false ? classes.invalid : ""}`}>
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" value={enteredPassword} onChange={passwordChangeHandler} onBlur={validatePasswordHandler} />
                </div>
                <div className={classes.actions}>
                    <Button type="submit" className={classes.btn} disabled={!formIsValid}>
                        Login
                    </Button>
                </div>
            </form>
        </Card>
    );
};

export default Login;