// 18. Given two dates, find total number of days between them.
// Input: dt1 = {10, 2, 2014} dt2 = {10, 3, 2015}
// Output: 393

// dt1 represents “10-Feb-2014” and dt2 represents “10-Mar-2015” 
// The difference is 365 + 28

// Input: dt1 = {10, 2, 2000} dt2 = {10, 3, 2000}
// Output: 29

// Note that 2000 is a leap year

// Input: dt1 = {10, 2, 2000} dt2 = {10, 2, 2000}
// Output: 0 

// Both dates are same 

// Input: dt1 = {1, 2, 2000}; dt2 = {1, 2, 2004};
// Output: 1461 
// Number of days is 365*4 + 1

const isLeapYear = year => (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);

const getDaysInMonth = (month, year) => {
    const daysInMonth = [31, isLeapYear(year) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    return daysInMonth[month - 1];
};

const countDaysSinceStartOfYear = (day, month, year) => {
    let days = day;
    for (let m = 1; m < month; m++) days += getDaysInMonth(m, year);
    return days;
};

const countDaysBetweenYears = (year1, year2) => {
    let days = 0;
    for (let year = year1 + 1; year < year2; year++) days += isLeapYear(year) ? 366 : 365;
    return days;
};

const daysBetweenDates = (dt1, dt2) => {
    const [day1, month1, year1] = dt1;
    const [day2, month2, year2] = dt2;
    if (year1 === year2 && month1 === month2 && day1 === day2) return 0;
    let days = 0;
    if (year1 === year2) days = countDaysSinceStartOfYear(day2, month2, year2) - countDaysSinceStartOfYear(day1, month1, year1);
    else {
        days += (isLeapYear(year1) ? 366 : 365) - countDaysSinceStartOfYear(day1, month1, year1);
        days += countDaysSinceStartOfYear(day2, month2, year2);
        days += countDaysBetweenYears(year1, year2);
    }
    return days;
};

let dt1 = [10, 2, 2014], dt2 = [10, 3, 2015];
console.log(daysBetweenDates(dt1, dt2));

dt1 = [10, 2, 2000]; 
dt2 = [10, 3, 2000]; 
console.log(daysBetweenDates(dt1, dt2));

dt1 = [10, 2, 2000]; 
dt2 = [10, 2, 2000]; 
console.log(daysBetweenDates(dt1, dt2));

dt1 = [1, 2, 2000]; 
dt2 = [1, 2, 2004]; 
console.log(daysBetweenDates(dt1, dt2));

dt1 = [12, 5, 1894]; 
dt2 = [20, 9, 2094]; 
console.log(daysBetweenDates(dt1, dt2));