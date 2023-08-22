var input = document.getElementById("userInput")
var add = document.querySelector(".add")
var ok = document.querySelector(".ok")
var reset = document.querySelector(".reset")
var list = document.getElementById("list")
var number = []

add.addEventListener("click", function() {
    var userValue = input.value;
    if (userValue.trim() !== "") {
        number.push(userValue.trim());
        updatenumber();
        input.value = "";
    }
})
function updatenumber() {
    list.innerHTML = "";
    for (var i = 0; i < number.length; i++) {
        var newElement = document.createElement("li");
        newElement.textContent = number[i];
        list.appendChild(newElement);
    }
}
function total (){
    var totalList = 0;
    for (var i = 0; i < number.length; i++) {
        totalList += Number(number[i]);
    }
    
    console.log(totalList); 
    list.innerHTML = "Sonuç: " + totalList;
}
var ok = document.querySelector(".ok");
ok.addEventListener("click", function() {
    total();
});

reset.addEventListener("click", function() {
    number = [];
    total();
    list.innerHTML = "";
})