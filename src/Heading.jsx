
const date = new Date();
// const date = new Date(2024, 9, 8, 1);
const currentTime = date.getHours();

let greeting = "Good morning"

const customColor = {
    color: "red"
}

if (currentTime < 12) {
    greeting = "Good morning"
    customColor.color = "rgb(43, 132, 235)"
} else if (currentTime < 16) {
    greeting = "Good afternoon"
    customColor.color = "rgb(252, 206, 0)"
} else if (currentTime < 20) {
    greeting = "Good evening"
    customColor.color = "rgb(44, 103, 180)"
} else {
    greeting = "Good night"
    customColor.color = "rgb(0, 26, 59)"
}

function Heading() {
    return (
        <h1 className="heading" style={customColor}>{greeting}</h1>
    )
}

export default Heading;