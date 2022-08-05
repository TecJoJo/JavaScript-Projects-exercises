const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];


const giveaway = document.querySelector(".giveaway")
const dealine = document.querySelector(".deadline")
const items = document.querySelectorAll(".deadline-format h4")

let tempDate = new Date()
let tempYear = tempDate.getFullYear()
let tempMonth = tempDate.getMonth()
let tempDay = tempDate.getDate()




let futureDate = new Date(tempYear,tempMonth,tempDay+10,0,0,0)

const year = futureDate.getFullYear();
const hours = futureDate.getHours();
const minutes = futureDate.getMinutes();

let month = futureDate.getMonth();
month = months[month];

const date = futureDate.getDate();

let weekday = futureDate.getDay();
weekday = weekdays[weekday]

giveaway.textContent = `giveaway ends on 
${weekday}, ${date} ${month} ${year} ${hours}:${minutes}`

//future time in ms
const futureTime = futureDate.getTime();


function getRemainingTime(){
  const today = new Date().getTime()
  const timeLeft = futureTime - today

  const oneDay = 24*60*60*1000
  const oneHour = 60*60*1000
  const oneMinute = 60*1000

  let days = Math.floor(timeLeft/oneDay)
  let hours = Math.floor((timeLeft%oneDay)/oneHour)
  let minutes = Math.floor((timeLeft%oneHour)/oneMinute)
  let seconds = Math.floor((timeLeft%oneMinute)/1000)

  const values = [days,hours,minutes,seconds]

  function format(number){
    if(number < 10){
      return `0${number}`
    }else{
      return number
    }
  }


  items.forEach(function(content,index){
    content.innerHTML = format(values[index])
  })

  if(timeLeft<0){
    clearInterval(countDown)
    dealine.innerHTML = `<h4 class="expired">sorry this giveaway has expired</h4>`
  }

}

countDown = setInterval(getRemainingTime,1000)

getRemainingTime()