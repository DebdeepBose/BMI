import { useState, useEffect } from "react";
import WorkHtml from "./DcWork";

function DCApp() {
    const [time, setTime] = useState({
        hour: new Date().getHours(),
        minute: new Date().getMinutes(),
        second: new Date().getSeconds(),
    });

    useEffect(() => {
        const interval = setInterval(() => {
            setTime({
                hour: new Date().getHours(),
                minute: new Date().getMinutes(),
                second: new Date().getSeconds(),
            });
        }, 1000);

        return () => clearInterval(interval); 
    }, []);

    return <WorkHtml hour={time.hour} minute={time.minute} second={time.second} />;
}

export default DCApp;
