/* Your Code Here */
function createEmployeeRecord(data) {
    return {
        firstName: data[0],
        familyName: data[1],
        title: data[2],
        payPerHour: data[3],
        timeInEvents: [],
        timeOutEvents: []
    };
}

// Function to create employee records for an array of data records
function createEmployeeRecords(data) {
    return data.map(rec => createEmployeeRecord(rec));
}

// Function to add a time-in event to an employee's record
function createTimeInEvent(str) {
    const [inDate, inHour] = str.split(' ');
    this.timeInEvents.push({
        type: 'TimeIn',
        date: inDate, 
        hour: parseInt(inHour, 10)        
    });  
    return this;
}

// Function to add a time-out event to an employee's record
function createTimeOutEvent(str) {
    const [outDate, outHour] = str.split(' ');
    this.timeOutEvents.push({
        type: 'TimeOut',
        date: outDate,
        hour: parseInt(outHour, 10)
    });
    return this;
}

// Function to calculate the hours worked by an employee on a specific date
function hoursWorkedOnDate(str) {
    const date = str.split(' ')[0];
    const inTime = this.timeInEvents.find(day => day.date === date);
    const outTime = this.timeOutEvents.find(day => day.date === date);
    return (outTime.hour - inTime.hour) / 100;
}

// Function to calculates wages earned by an employee on a specific date
function wagesEarnedOnDate(str) {
    return hoursWorkedOnDate.call(this, str) * this.payPerHour;
}

// Function to find an employee by their first name in the array
function findEmployeeByFirstName(data, name) {
    return data.find(employee => employee.firstName === name ? createEmployeeRecord.call(this, name) : undefined);
}

// Function to calculate the total payroll for all employees in the array
function calculatePayroll(data) {
    return data.reduce((sum, employee) => {
        return sum += allWagesFor.call(employee);
    }, 0);
}

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}