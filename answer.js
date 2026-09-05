// ques 1
function describeValue(value) {
    let returnValue = `${typeof value} | `;

    value ? returnValue += `truthy` : returnValue += `falsy`;

    return returnValue;
}


// ques 2
function getDayType(day) {
    day = day.toLowerCase();

    switch (day) {
        case 'friday':
            return 'Weekend';
        case 'saturday':
            return 'Weekend';
        case 'sunday':
            return 'Working Day';
        case 'monday':
            return 'Working Day';
        case 'tuesday':
            return 'Working Day';
        case 'wednesday':
            return 'Working Day';
        case 'thursday':
            return 'Working Day';
        default:
            return "Invalid day";
    }
}

// ques 3
function validateUsername(username) {
    if (username.length < 4)
        return "Too Short";

    if (username.includes(' '))
        return "No Space Allowed";

    if (username.toLowerCase().includes('admin'))
        return "Reserved Word";

    return "Available";
}

// ques 4
function getCngFare(distance, isNight = false, waitingMinutes = 0) {
    let fare = 50;

    if (distance > 2)
        fare += ((distance - 2) * 15);

    if (waitingMinutes)
        fare += waitingMinutes * 2;

    if (isNight)
        fare += fare * 0.2;

    return fare;
}

// ques 5
const getChaseVerdict = (target, scored, ballsLeft) => {
    const runsNeeded = target - scored;

    if (runsNeeded <= 0)
        return "Won";
    else {
        if (ballsLeft <= 0)
            return "Lost";
    }

    const requiredRate = (runsNeeded / ballsLeft) * 6;

    let verdict;

    if (requiredRate <= 6)
        verdict = "Comfortable";
    else if (requiredRate > 6 && requiredRate <= 12)
        verdict = "Tough";
    else
        verdict = "Almost Impossible";

    return `Need ${runsNeeded} runs in ${ballsLeft} balls | ${verdict}`;
}