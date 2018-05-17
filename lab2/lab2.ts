/*
 *    Part 2
 */

//html elements
let inputBirthdayDate = <HTMLInputElement>document.getElementById("input--date-picker");

let btnBirthdaySubmit = document.getElementById("button--birthday");
let pBirthdayMsg = document.getElementById("p--birthday-message");


btnBirthdaySubmit.onclick = function () {
    let userInput =inputBirthdayDate.value;
    
    let parts =userInput.split('-');
    let birthday : Date = new Date(parts[0], parts[1] - 1, parts[2]);


    let msg : string = birthdayCheck(birthday);

    pBirthdayMsg.innerHTML = msg;

};

function birthdayCheck(b : Date) : string {
    let today : Date = new Date();

    if (b.getDate() == today.getDate() && b.getMonth() == today.getMonth()) {
        return 'Happy Birthday!';
    } else {
        today.setDate(b.getDate());
        today.setMonth(b.getMonth());
        return today.toString();
    }
}


/*
 *    Class demo for part 1
 */

//enums
enum months{
    January,
    February,
    March,
    April,
    May,
    June,
    July,
    August,
    September,
    October,
    Novemever,
    December
}

enum days {
    Sunday,
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday
}
/*
enum days {
    Dinanche,
    Lundi,
    Mardi,
    Mecredi,
    Jeudi,
    Vendredi,
    Samedi
}
*/
console.log("Months enum:");
console.log(months);
console.log('January: ' + months.January);
console.log('Month 1: ' + months.January);

//html elements
let pTodayDate = document.getElementById("p--today-date");

//today's date
let today : Date = new Date();
console.log(today);

//today's month
console.log(today.getMonth());
let todayMonth : string = months[today.getMonth()];

//today's day of week
console.log(today.getDay());
let todayDayOfWeek : string = days[today.getDay()];

//today's day of month
console.log(today.getDate());

//today's year
console.log(today.getFullYear());

//display today's date to page
pTodayDate.innerHTML = `Today is ${ todayDayOfWeek}, ${ todayMonth }, ${ today.getDate() }, ${ today.getFullYear() }`;