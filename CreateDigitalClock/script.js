let hrs=document.getElementById("hrs");
let min = document.getElementById("min");
let sec =document.getElementById("sec");

let fullDate = document.getElementById("fullDate");

setInterval(() => {
    let currentTime = new Date();

    // Time
    hrs.innerHTML = (currentTime.getHours() < 10 ? "0" : "") + currentTime.getHours();
    min.innerHTML = (currentTime.getMinutes() < 10 ? "0" : "") + currentTime.getMinutes();
    sec.innerHTML = (currentTime.getSeconds() < 10 ? "0" : "") + currentTime.getSeconds();

    // Full Date Format
    const options = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric"
    };

    fullDate.innerText = currentTime.toLocaleDateString("en-IN", options);

}, 1000);
// setInterval(() => {
//     let currentTime = new Date();

//     // Time
//     hrs.innerHTML = (currentTime.getHours() < 10 ? "0" : "") + currentTime.getHours();
//     min.innerHTML = (currentTime.getMinutes() < 10 ? "0" : "") + currentTime.getMinutes();
//     sec.innerHTML = (currentTime.getSeconds() < 10 ? "0" : "") + currentTime.getSeconds();

//     // Date
//     day.innerHTML = (currentTime.getDate() < 10 ? "0" : "") + currentTime.getDate();
//     month.innerHTML = (currentTime.getMonth() + 1 < 10 ? "0" : "") + (currentTime.getMonth() + 1);
//     year.innerHTML = currentTime.getFullYear();

// }, 1000);



// setInterval(()=>{
//     let currentTime=new Date();

//     hrs.innerHTML=(currentTime.getHours() < 10 ? "0" : "") + currentTime.getHours();
//     min.innerHTML=(currentTime.getMinutes() < 10 ? "0" : "") + currentTime.getMinutes();
//     sec.innerHTML=(currentTime.getSeconds() < 10 ? "0" : "") + currentTime.getSeconds();

//     // hrs.textContent = currentTime.getDate();
//     // min.textContent= currentTime.getMonth() + 1; // Month starts from 0
//     //sec.textContent= currentTime.getFullYear();
// },1000);


