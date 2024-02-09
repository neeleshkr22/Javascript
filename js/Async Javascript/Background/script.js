//generate a random colour

const randomColor = function(){
    const hex = "0123456789ABCDEF"
    let color = "#"
    for(let i =0;i<6;i++){
        color += hex[Math.floor(Math.random() * 16)]
    }
    return color;
}
let intervalID;
const startchangingColor = function(){
    intervalID=setInterval(changeBGcolor,1000)
    function changeBGcolor(){
        document.body.style.backgroundColor = randomColor();
    }
}
const stopchangingColor = function(){
    clearInterval(intervalID);
    intervalID = null;
}

document.querySelector('#start').addEventListener('click',startchangingColor)
document.querySelector('#stop').addEventListener('click',stopchangingColor)