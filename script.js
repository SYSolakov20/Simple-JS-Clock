function showTime(){
    var date = new Date();
    var hour = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
    var session = "AM";

    if(hour == 0)
    {
        h = 12;
    }

    if(hour > 12)
    {
        hour = hour -12;
        session = "PM";
    }

   
    document.getElementById("MyClockDisplay").textContent = time;

    setTimeout(showTime, 1000);

}

showTime();
