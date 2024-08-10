import { useState, useEffect } from "react";

const date = new Date();
// const date = new Date(2024, 9, 8, 19);
const currentTime = date.getHours();

let doSomething;
let whatToEat;

if (currentTime < 12) {
    doSomething = "Get to Work";
} else if (currentTime < 16) {
    doSomething = "Time for Lunch";
} else if (currentTime < 20) {
    doSomething = "Time for Dinner";
    whatToEat = "What to Eat:";
} else {
    doSomething = "Time to Sleep";
}

function Message() {
    // State to store the current date and time
    const [dateTime, setDateTime] = useState(new Date());

    useEffect(() => {
        // To Update the date and time every second
        const interval = setInterval(() => {
            setDateTime(new Date());
        }, 1000);

        // Cleanup interval on component unmount
        return () => clearInterval(interval);
    }, []);

    const fullDate = dateTime.toLocaleDateString();
    const fullTime = dateTime.toLocaleTimeString();

    return (
        <div>
            <h3>The time is {fullTime} {fullDate}</h3>
            <h1 className="message">{doSomething}!</h1>
            <p style={{textAlign: "left", marginLeft: "100px"}}>{whatToEat}</p>
        </div>

    )
}

export default Message;