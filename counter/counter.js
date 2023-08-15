const increasebtn = document.querySelector("#btnnn")
const decreasebtn = document.querySelector(".btndecrease")
const counter = document.querySelector("#number")
let count = 0;
increasebtn.addEventListener("click",  (e) => {
    count ++;
    console.log('ddd',e)
    updatecounter();
});

decreasebtn?.addEventListener("click",  (e) => {
    console.log('ddd',e)
    count--;
    updatecounter();
});

function updatecounter() {
    counter.innerHTML = count;
}
