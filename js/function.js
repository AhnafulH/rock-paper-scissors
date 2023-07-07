function getComputerChoice() {
    let num = Math.floor(Math.random() * 3)
    let item;
    if (num == 0) {
        item = "Rock";
    } else if (num == 1) {
        item = "Paper";
    } else {
        item = "Scissor";
    }
    return item;
}

console.log(getComputerChoice())