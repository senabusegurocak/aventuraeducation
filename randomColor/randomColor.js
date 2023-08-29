const random = document.querySelector(".randombtn")
const box = document.querySelector(".box")
const colorName = document.querySelector("#colorName")
const input = document.querySelector(".input")
const inbox = document.querySelector(".inbox")
/*function produce() {
    var color1 = Math.floor(Math.random()*256);
    var color2 = Math.floor(Math.random()*256);
    var color3 = Math.floor(Math.random()*256);
    const color = 'rgb(' + color1 + "," + color2 + "," + color3 + ')';
    console.log(color);
    box.style.backgroundColor = color;
    colorName.textContent = "Ekrandaki renk: " + color;
}
}*/
let userValue = input.value;
let newDiv = document.createElement('div');
function getRandomNumber() {
    return Math.floor(Math.random() * 256)
}

function produce() {
    let userValue = input.value;
    console.log(userValue);
    for (var i = 1; i <= userValue; i++) {
        let r = getRandomNumber();
        let g = getRandomNumber();
        let b = getRandomNumber();
        let color = 'rgb(' + r + "," + g + "," + b + ')';
        console.log(color);
        let newDiv = document.createElement('div');
        let p = document.createElement("p");
        inbox.appendChild(newDiv);
        newDiv.appendChild(p);
        p.innerHTML = "buradaki renk: " + color;
        newDiv.style.backgroundColor = color;
        console.log(newDiv);
    }
}

random.addEventListener("click", () => {
    inbox.innerHTML = ""; 
    produce();
    input.value = "";
})
