$(document).ready(function () {
    $("#currentDay").text(moment().format("[The time is currently] h:mm:ss a [on] dddd, MMMM Do YYYY")); // Using Moment.js to retrive the current date and time and then displays in the html element with the currentDay id.
    let currentHour = moment().hour(); //Gives the current hour of the day.

    console.log(currentHour);

    $(".saveBtn").on("click", function() { //function that assigns the users input to a variable and that saves it alonmg with its corresponding time slot to the users local storage.
        let hour = $(this).parent().attr("id");
        let content = $(this).siblings(".description").val();

        localStorage.setItem(hour, content);
    })
    //The next block retrieves the users input from local storage and displays it on the webpage in its corresponding location.
    $("#hour9 .description").val(localStorage.getItem("hour9"));
    $("#hour10 .description").val(localStorage.getItem("hour10"));
    $("#hour11 .description").val(localStorage.getItem("hour11"));
    $("#hour12 .description").val(localStorage.getItem("hour12"));
    $("#hour13 .description").val(localStorage.getItem("hour1"));
    $("#hour14 .description").val(localStorage.getItem("hour2"));
    $("#hour15 .description").val(localStorage.getItem("hour3"));
    $("#hour16 .description").val(localStorage.getItem("hour4"));
    $("#hour17 .description").val(localStorage.getItem("hour5"));

    function timeTracker() { //This function determines how the web page interacts given the users current time.
       $(".time-block").each(function() { //This function is applied to every element with the time-block class and then changes the color of the input box depending on wheter or not that time is in the future, past, or present.
            let blockHour = parseInt($(this).attr("id").split("hour")[1]);
            console.log(blockHour, currentHour);
            if (currentHour < blockHour) {
                $(this).addClass("future");
                $(this).removeClass("past");
                $(this).removeClass("present");
            } else if (currentHour > blockHour) {
                $(this).addClass("past");
                $(this).addClass("present");
                $(this).addClass("future");
            } else if (currentHour === blockHour) {
                $(this).addClass("present");
                $(this).addClass("past");
                $(this).addClass("future");
            } else {
                console.log("Error. Something isn't being recognized.") //personal checker to make sure that the above code does recognize every hour as an integer.
            }
       }) 
    }

    timeTracker();
})

