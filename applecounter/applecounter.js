const increasebtn = document.querySelector(".btnincrease")
const decreasebtn = document.querySelector(".btndecrease")
const counter = document.querySelector("#number")
const price = document.querySelector("#price")
let count = 0;
let totalprice = 0;
increasebtn.addEventListener("click",  (e) => {
    if (count < 10) {
    count ++;
    totalprice += 10;
    console.log('ddd',e)
    updatecounter();
    updateprice();
    }
});

decreasebtn?.addEventListener("click",  (e) => {
    if (count > 0) {
        console.log('ddd',e)
        count--;
        totalprice -= 10;
        updatecounter();
        updateprice();
    }
});

function updatecounter() {
    counter.innerHTML = count;
}
function updateprice() {
    price.innerHTML = totalprice;
}
