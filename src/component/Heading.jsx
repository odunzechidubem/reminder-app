import { useState, useEffect } from "react";

function Heading() {
    const date = new Date();
    const currentTime = date.getHours();

    const [name, setName] = useState(() => localStorage.getItem('userName') || "");

    useEffect(() => {
        if (!name) {
            const userName = prompt("What's your name?");
            if (userName) {
                setName(userName);
                localStorage.setItem('userName', userName);
            } else {
                setName(""); // Use a default value if the user cancels or doesn't provide a name
            }
        }
    }, [name]);

    let greeting = "Good morning";
    const customColor = {
        color: "red",
    };

    if (currentTime < 12) {
        greeting = "Good morning";
        customColor.color = "rgb(43, 132, 235)";
    } else if (currentTime < 16) {
        greeting = "Good afternoon";
        customColor.color = "rgb(252, 206, 0)";
    } else if (currentTime < 20) {
        greeting = "Good evening";
        customColor.color = "rgb(44, 103, 180)";
    } else {
        greeting = "Good night";
        customColor.color = "rgb(0, 26, 59)";
    }

    return (
        <h1 className="heading" style={customColor}>
            {greeting} {name}!
        </h1>
    );
}

export default Heading;
