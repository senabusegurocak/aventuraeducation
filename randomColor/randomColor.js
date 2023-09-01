const random = document.querySelector(".randombtn")
const box = document.querySelector(".box")
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
        inbox.appendChild(newDiv);
        let button = document.createElement("button");
        newDiv.appendChild(button);           
        newDiv.style.backgroundColor = color;        
        button.innerHTML =  color;
        console.log(newDiv);

        button.addEventListener("click", () => {
            copy(button);
        })       
    } 
}

function copy(button) {
    let colorValue = button.textContent;
    navigator.clipboard.writeText(colorValue);
    alert("Metin kopyalandı: " + colorValue);
}

random.addEventListener("click", () => {
    inbox.innerHTML = ""; 
    produce();
    input.value = "";
})
