let myArray = [2, 3, 4];

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("Cube").addEventListener("click", function() {
        let newArray = myArray.map((num) => Math.pow(num, 3));
        document.getElementById("box1").value = newArray[0];
        document.getElementById("box2").value = newArray[1];
        document.getElementById("box3").value = newArray[2];
    });
    document.getElementById("Fourth").addEventListener("click", fourthIt);
    document.getElementById("box1").value = myArray[0];
    document.getElementById("box2").value = myArray[1];
    document.getElementById("box3").value = myArray[2];
});

function squareButtonClick() {
    let newArray = myArray.map((num) => Math.pow(num, 2));
    document.getElementById("box1").value = newArray[0];
    document.getElementById("box2").value = newArray[1];
    document.getElementById("box3").value = newArray[2];
}

let fourthIt = () => {
    let newArray = myArray.map((num) => Math.pow(num, 4));
    document.getElementById("box1").value = newArray[0];
    document.getElementById("box2").value = newArray[1];
    document.getElementById("box3").value = newArray[2];
};
