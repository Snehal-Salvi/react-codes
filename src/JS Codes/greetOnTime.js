function greetBasedOnTime() {
    const currentTime = new Date();
    const currentHour = currentTime.getHours();

    let greeting;

    if (currentHour >= 5 && currentHour < 12) {
        greeting = "Good morning!";
    } else if (currentHour >= 12 && currentHour < 17) {
        greeting = "Good afternoon!";
    } else if (currentHour >= 17 && currentHour < 21) {
        greeting = "Good evening!";
    } else {
        greeting = "Good night!";
    }

    return greeting;
}

// Test the function
const greeting = greetBasedOnTime();
console.log(greeting);
