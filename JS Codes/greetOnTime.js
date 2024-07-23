function greetOnTime(){
    let hours = new Date().getHours();

    if(hours < 12){
        console.log('Good Morning');
    }else if(hours < 17){
        console.log('Good Afternoon');
    }else{
        console.log('Good Evening');
    }
}

greetOnTime();

// with return statement

function greetOnTime() {
    const hrs = new Date().getHours();

    if (hrs < 12) {
        return 'Good Morning';
    } else if (hrs < 17) {
        return 'Good Afternoon';
    } else {
        return 'Good Evening';
    }
}

console.log(greetOnTime());
