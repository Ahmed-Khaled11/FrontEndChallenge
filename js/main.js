let textEle = document.querySelector(".text").querySelectorAll("span");
let daily = document.getElementById("daily")
let weekly = document.getElementById("weekly");
let monthly = document.getElementById("monthly");
let stats = document.querySelectorAll(".stats");
let weeklyScroll = document.querySelector(".weekly-scroll");
let container = document.querySelector(".container");
// function to add class remove to the Element
document.body.addEventListener("click", function () {
    
})
let allEle = [...textEle]
allEle.forEach(function (e) {
    e.addEventListener("click", function () {
        allEle.forEach(function (ele) {
            ele.classList.remove("active")
        })
        e.classList.toggle("active");
    })
})
// start scrolling on daily button 
daily.addEventListener("click", function () {
    stats.forEach(function (e) {
        e.scrollTo({
            left: 0,
            top: 0,
            behavior:"smooth"
        });
    })
})
weekly.addEventListener("click", function () {
    stats.forEach(function (e) {
                e.scrollTo({
                left: 0,
                top: weeklyScroll.offsetTop - 40,
                behavior: "smooth",
                });
})
});
