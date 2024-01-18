let daysitem = document.querySelector("#days");
let Hoursitem = document.querySelector("#Hours");
let Minitem = document.querySelector("#Min");
let Secitem = document.querySelector("#Sec");

let a = () =>{
    let b = new Date("10 mar 2024");
    let c = new Date();
    let d = b-c;
    // console.log(d);

    let days = Math.floor(d / 1000 / 60 / 60 / 24);
    let Hours = Math.floor(d / 1000 / 60 /60)% 24;
    let Min = Math.floor(d / 1000 / 60 )% 60;
    let Sec = Math.floor(d / 1000 )% 60;
    
    daysitem.innerHTML = days;
    Hoursitem.innerHTML = Hours;
    Minitem.innerHTML = Min;
    Secitem.innerHTML = Sec;
    
}

a ()

setInterval(a, 1000)