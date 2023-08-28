const input = document.getElementById("name")
const convert = document.getElementById("convert")
const result = document.getElementById("result")
var user = [];

function updateuser() {
    var updateUser = user.map(function(item) {
        var words = item.split(" ");
        var capitalizedWords = words.map(function(word) {
            return word.charAt(0).toUpperCase() + word.slice(1);
        });
        return capitalizedWords.join(" ");
    });
    result.textContent = updateUser.join(", ");
    console.log(updateUser);
}
convert.addEventListener("click", function(){
    var userValue = input.value;
    if (userValue.trim() !== "") {
        user.push(userValue.trim());
        updateuser();
        input.value = "";
    }
})