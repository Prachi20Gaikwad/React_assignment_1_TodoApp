import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const LoadingToRedirect = () => {
    const [count, setCount] = useState(5);
    const history = useNavigate();

    useEffect(() => {
        const interval = setInterval(() => {
            setCount((currentCount) => --currentCount);
        }, 1000);

        count === 0 && history("/login");
        return () => clearInterval(interval);
    }, [count, history]);

    return (
        <div>
            <p>Redirecting you in {count} seconds</p>
        </div>
    )
};

export default LoadingToRedirect;