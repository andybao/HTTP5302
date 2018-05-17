/*
 *    Part 2
 */
//html elements
var inputBirthdayDate = document.getElementById("input--date-picker");
var btnBirthdaySubmit = document.getElementById("button--birthday");
var pBirthdayMsg = document.getElementById("p--birthday-message");
btnBirthdaySubmit.onclick = function () {
    var userInput = inputBirthdayDate.value;
    var parts = userInput.split('-');
    var birthday = new Date(parts[0], parts[1] - 1, parts[2]);
    var msg = birthdayCheck(birthday);
    pBirthdayMsg.innerHTML = msg;
};
function birthdayCheck(b) {
    var today = new Date();
    if (b.getDate() == today.getDate() && b.getMonth() == today.getMonth()) {
        return 'Happy Birthday!';
    }
    else {
        today.setDate(b.getDate());
        today.setMonth(b.getMonth());
        return today.toString();
    }
}
/*
 *    Class demo for part 1
 */
//enums
var months;
(function (months) {
    months[months["January"] = 0] = "January";
    months[months["February"] = 1] = "February";
    months[months["March"] = 2] = "March";
    months[months["April"] = 3] = "April";
    months[months["May"] = 4] = "May";
    months[months["June"] = 5] = "June";
    months[months["July"] = 6] = "July";
    months[months["August"] = 7] = "August";
    months[months["September"] = 8] = "September";
    months[months["October"] = 9] = "October";
    months[months["Novemever"] = 10] = "Novemever";
    months[months["December"] = 11] = "December";
})(months || (months = {}));
var days;
(function (days) {
    days[days["Sunday"] = 0] = "Sunday";
    days[days["Monday"] = 1] = "Monday";
    days[days["Tuesday"] = 2] = "Tuesday";
    days[days["Wednesday"] = 3] = "Wednesday";
    days[days["Thursday"] = 4] = "Thursday";
    days[days["Friday"] = 5] = "Friday";
    days[days["Saturday"] = 6] = "Saturday";
})(days || (days = {}));
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
var pTodayDate = document.getElementById("p--today-date");
//today's date
var today = new Date();
console.log(today);
//today's month
console.log(today.getMonth());
var todayMonth = months[today.getMonth()];
//today's day of week
console.log(today.getDay());
var todayDayOfWeek = days[today.getDay()];
//today's day of month
console.log(today.getDate());
//today's year
console.log(today.getFullYear());
//display today's date to page
pTodayDate.innerHTML = "Today is " + todayDayOfWeek + ", " + todayMonth + ", " + today.getDate() + ", " + today.getFullYear();
