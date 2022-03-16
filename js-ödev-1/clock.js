const userName = prompt("Lütfen Adınızı Girin.")

const myName = document.querySelector("#myName");

myName.innerHTML = `${userName}`;

const months = ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe","Cuma","Cumartesi"];


function showTime(){
    let timeDay = document.querySelector("#myClock");
    let d = new Date();

    timeDay.innerHTML = `${d.toLocaleTimeString('it-IT')} ${months[d.getDay()]}`
}

setInterval(showTime,1000);
