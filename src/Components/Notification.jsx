import React, { useContext, useEffect } from "react";
import { GlobalContext } from "./utils/global.context";

const Notification = () => {
    const { state, dispatch } = useContext(GlobalContext);
    const { notification, theme } = state;

    useEffect(() => {
        if (notification) {
            const timeout = setTimeout(() => {
                dispatch({ type: "SET_NOTIFICATION", payload: null });
            }, 3000);
            return () => clearTimeout(timeout);
        }
    }, [notification, dispatch]);

    return (
        <>
            {notification && (
                <div
                    className={`notification ${theme} ${notification ? "show" : ""}`}
                >
                    {notification}
                </div>
            )}
        </>
    );
};

export default Notification;