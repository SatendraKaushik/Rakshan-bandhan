const endDate = "31 August 2023 12:00 AM";
document.getElementById("end").innerText = endDate;
const tittle = document.querySelector(".tittle");
const inputs = document.querySelectorAll("input");
function clock() {
    // we are getting time in miniseconds 
    const end = new Date(endDate);
    const now = new Date();

    //  we change the time into seconds by divinding 1000
    const diff = (end - now) / 1000;

    if (diff < 0) {
        tittle.innerText = " Happy Raksha Bandhan";
        return;

    }
    //calculate days
    inputs[0].value = Math.floor(diff / 3600 / 24);
    // calculate hours 
    inputs[1].value = Math.floor(diff / 3600) % 24;
    // cslculate minutes
    inputs[2].value = Math.floor(diff / 60) % 60;
    inputs[3].value = Math.floor(diff) % 60;
}


clock();

//  1 day= 24hr;
//  1hr=60min;
//  60min=3600sec;
setInterval(
    () => {
        clock();
    }, 1000
)