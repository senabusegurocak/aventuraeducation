const r = document.querySelector(".r")
const p = document.querySelector(".p")
const s = document.querySelector(".s")
const playerC = document.querySelector(".pCount")
const pcC = document.querySelector(".pcCount")
const win = document.querySelector(".win")

let options = [r, p, s]
let userChoice;
let playerCount = 0;
let pcCount = 0;
function pcChoice() {
    return Math.floor(Math.random()*options.length);

}
function winStatus() {
    let pcChosen = pcChoice(); 
    console.log("pc deger",pcChosen)
    console.log("user deger",userChoice)
    if (userChoice === 0 && pcChosen === 2){
        playerCount++;
        updateplayerC();
        win.innerHTML = "Kazanan: " + "Kullanıcı! " + "Taş makası yener.";
        console.log("kullanıcı kazandı");
    }
    else if (userChoice === 2 && pcChosen === 1){
        playerCount++;
        updateplayerC();
        win.innerHTML = "Kazanan: " + "Kullanıcı! " + "Makas kağıdı yener.";
        console.log("kullanıcı kazandı");
    }
    else if (userChoice === 1 && pcChosen === 0){
        playerCount++;
        updateplayerC();
        win.innerHTML = "Kazanan: " + "Kullanıcı! " + "Kağıt taşı yener.";
        console.log("kullanıcı kazandı");
    }
    else if (userChoice === 0 && pcChosen === 1){
        pcCount++;
        updatepcC();
        win.innerHTML = "Kazanan: " + "Bilgisayar! " + "Kağıt taşı yener.";
        console.log("pc kazandı")
    }
    else if (userChoice === 1 && pcChosen === 2){
        pcCount++;
        updatepcC();
        win.innerHTML = "Kazanan: " + "Bilgisayar! " + "Makas Kağıdı yener.";
        console.log("pc kazandı")
    }
    else if (userChoice === 2 && pcChosen === 0){
        pcCount++;
        updatepcC();
        win.innerHTML = "Kazanan: " + "Bilgisayar! " + "Taş makası yener.";
        console.log("pc kazandı")
    }
    else {
        win.innerHTML = "Kazanan: " + "Berabere!";
        console.log("berabere")
    }
    if (playerCount === 3){
        win.innerHTML =  "TEBRİKLER KAZANDIN!" ;        
        r.disabled = true;
        s.disabled = true;
        p.disabled = true;          
    }
    if (pcCount === 3){
        win.innerHTML =  "ÜZGÜNÜM KAYBETTİN :(" ;
        r.disabled = true;
        s.disabled = true;
        p.disabled = true; 
             
    }
}
function updateplayerC() {
    playerC.innerHTML = "Oyuncu: " + playerCount;
}
function updatepcC() {
    pcC.innerHTML = "Bilgisayar: " + pcCount;
}

r.addEventListener ("click", ()=> {
    userChoice = 0;
    console.log(userChoice);
    winStatus();
})
p.addEventListener ("click", ()=> {
    userChoice = 1;
    console.log(userChoice);
    winStatus();
})
s.addEventListener ("click", ()=> {
    userChoice = 2;
    console.log(userChoice);
    winStatus();
})