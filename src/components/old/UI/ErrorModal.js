import React from "react";
import ReactDOM from "react-dom";

import Card from "./Card";
import Button from "./Button";
import styles from "./ErrorModal.module.css";

const ErrorModal = (props) => {
    const Backdrop = (props) => {
        return <div onClick={props.onConfirm} className={styles.backdrop} />;
    };

    const ModalOverlay = (props) => {
        return (
            <Card className={styles.modal}>
                <header className={styles.header}>
                    <h2>{props.title}</h2>
                </header>
                <div className={styles.content}>
                    <p>{props.message}</p>
                </div>
                <footer className={styles.actions}>
                    <Button onClick={props.onConfirm}>Okey</Button>
                </footer>
            </Card>
        );
    };

    return (
        <>
            {ReactDOM.createPortal(<Backdrop onConfirm={props.onConfirm} />, document.getElementById("backdrop-root"))}
            {ReactDOM.createPortal(<ModalOverlay title={props.title} message={props.message} onConfirm={props.onConfirm} />, document.getElementById("overlay-root"))}
        </>
    );
};

export default ErrorModal;
