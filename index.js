// This is executed when the ask button is pressed
document.getElementById("askBtn").addEventListener("click", function(event){
    // This prevents refresh
    event.preventDefault()

    let command
    let answer

    // This gets the value that user has inputted
    command = document.getElementById("commandInput").value

    answer = command //TODO

    // This displays the answer on the answer div
    document.getElementById("answer").innerHTML = answer

})



















function getDateTime() {
    let today = new Date()
    let dayNum = today.getUTCDay()
    let date = today.getDate()
    let day
    let monthNum = today.getMonth()+1
    let month

    function getTime() { 

        let hours = today.getHours()
        let minutes = today.getMinutes()
        let postTime
        let time

        // Get time in 12hrs
        if (hours > 12) {
            hours -= 12
            postTime = "pm"
        }else {
            postTime = "am"
        }

        // Get minutes in double digits at all times
        if (minutes < 10) {
            minutes = "0" + minutes
        }

        // Set the time to how it should be displayed in html
        time = hours + '</div>' + ":" + '<div id="dateTime">'+ minutes + " " + postTime + '</div>'
        
        return time
    }

    // Get the time (to be displayed) and store it in a variable called time
    // Initial getTime function call
    time = getTime()

    // Assign day names to dayNum
    if (dayNum === 1) {
        day = "Mon"
    }else if (dayNum === 2) {
        day = "Tue"
    }else if (dayNum === 3) {
        day = "Wed"
    }else if (dayNum === 4) {
        day = "Thr"
    }else if (dayNum === 5) {
        day = "Fri"
    }else if (dayNum === 6) {
        day = "Sat"
    }else if (dayNum === 7) {
        day = "Sun"
    }

    // Assign month names to monthNum
    if (monthNum === 1) {
        month = "Jan"
    }else if (monthNum === 2) {
        month = "Feb"
    }else if (monthNum === 3) {
        month = "Mar"
    }else if (monthNum === 4) {
        month = "Apr"
    }else if (monthNum === 5) {
        month = "May"
    }else if (monthNum === 6) {
        month = "Jun"
    }else if (monthNum === 7) {
        month = "Jul"
    }else if (monthNum === 8) {
        month = "Aug"
    }else if (monthNum === 9) {
        month = "Sep"
    }else if (monthNum === 10) {
        month = "Oct"
    }else if (monthNum === 11) {
        month = "Nov"
    }else if (monthNum === 12) {
        month = "Dec"
    }

    // It's 7:38 on Thr, 31 Dec
    let greeting = "It's " + '<div id="dateTime">' + time + " on " + '<div id="dateTime">'+ day + ", " + date + " " + month + '</div>'
    return greeting
}


function showGreeting() {
    // Set the greeting to the greeting div
    document.getElementById("greeting").innerHTML = getDateTime()

    // Recursion to get current date without refreshing the page (Gets the time every two seconds)
    setTimeout(showGreeting, 2000)
}

// Initial function call
showGreeting()