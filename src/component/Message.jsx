import { useState, useEffect } from "react";

function Message() {
    // State to store the current date and time
    const [dateTime, setDateTime] = useState(new Date());

    useEffect(() => {
        // Update the date and time every second
        const interval = setInterval(() => {
            setDateTime(new Date());
        }, 1000);

        // Cleanup interval on component unmount
        return () => clearInterval(interval);
    }, []);

    // Get current hour and day of the week
    const currentTime = dateTime.getHours();
    const currentDay = dateTime.getDay();

    let doSomething;
    let whatToEat;

    // Check if it's the weekend (Saturday or Sunday)
    if (currentDay === 0 || currentDay === 6) {
        doSomething = `Relax, it's ${currentDay === 0 ? "Sunday" : "Saturday"}`;
        if (currentTime > 16 && currentTime < 20) {
            whatToEat = "What to Eat:";
        }
    } else if (currentTime < 12) {
        doSomething = "Get to Work";
    } else if (currentTime < 16) {
        doSomething = "Time for Lunch";
    } else if (currentTime > 16 && currentTime < 20) {
        doSomething = "Time for Dinner";
        // whatToEat = "What to Eat:";
    } else {
        doSomething = "Time to Sleep";
    }

    // Options for displaying full day and month names
    const options = {
        weekday: "long",
        month: "long",
        day: "numeric",
        year: "numeric",
    };

    const fullDate = dateTime.toLocaleDateString("en-US", options);
    const fullTime = dateTime.toLocaleTimeString();

    return (
        <div>
            <h3>
                Today is <span style={{ color: "red" }}>{fullDate}</span> <br /> The time is <span style={{ color: "red" }}>{fullTime}</span>
            </h3>
            <h1 className="message">{doSomething}</h1>
            <p className="center" style={{marginLeft: "6%"}}>{whatToEat}</p>
        </div>
    );
}

export default Message;
