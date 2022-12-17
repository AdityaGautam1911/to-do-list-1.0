module.exports.getDate=getDate;
//we use parenthesis getDate() inly to call the function

//see nodeJS documentation for date etc

//this function gets the date and the day
function getDate(){
    let today = new Date();//instantiation date module


    // let currentDay = today.getDay();//gets todays day
    // let day = "";//empty string to put current day
    // switch (currentDay) {
    //     case 0:
    //         day = "Sunday";
    //         break;
    //     case 1:
    //         day = "Monday";
    //         break;
    //     case 2:
    //         day = "Tuesday";
    //         break;
    //     case 3:
    //         day = "Wednesday";
    //         break;
    //     case 4:
    //         day = "Thusrday";
    //         break;
    //     case 5:
    //         day = "Friday";
    //         break;
    //     case 6:
    //         day = "Saturday";
    //         break;
    //     default:
    //         console.log("Error:current day is equal to " + currentDay);
    // }


    //alternative for switch case
    let options = {
        weekday: "long",
        day: "numeric",
        month: "long"
    };
    return day = today.toLocaleDateString("en-US", options);
}


//this functions gets the day
module.exports.getDay=getDay;
function getDay(){
    let today = new Date();
    let options = {
        weekday: "long"
    };
    return day = today.toLocaleDateString("en-US", options);
}


