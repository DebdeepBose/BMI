let currTime = new Date().getHours(); 

const timeStyles = {
    morning: { color: "red" },
    afternoon: { color: "green" },
    night: { color: "blue" }
};

let Udemy287 = () => {
    let greeting, style;

    if (currTime >= 0 && currTime < 12) {
        greeting = "Morning";
        style = timeStyles.morning;
    } else if (currTime >= 12 && currTime < 18) {
        greeting = "Afternoon";
        style = timeStyles.afternoon;
    } else {
        greeting = "Night";
        style = timeStyles.night;
    }

    return <h1 style={style}>Good {greeting}</h1>;
}

export default Udemy287;
