const random = document.querySelector(".randombtn")
const box = document.querySelector(".box")

function produce() {
    var color1 = Math.floor(Math.random()*256);
    var color2 = Math.floor(Math.random()*256);
    var color3 = Math.floor(Math.random()*256);
    const color = 'rgb(' + color1 + "," + color2 + "," + color3 + ')';
    console.log(color);
    box.style.backgroundColor = color;
}
random.addEventListener ("click", ()=> {
    produce()
})
