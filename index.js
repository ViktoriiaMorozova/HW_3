document.addEventListener("DOMContentLoaded", function () {


});

let myArray = [2, 3, 4];





function squareButtonClick() {
    let newArray = myArray.map((num) => Math.pow(num, 2));
    document.getElementById("box1").value = newArray[0];
    document.getElementById("box2").value = newArray[1];
    document.getElementById("box3").value = newArray[2];
} 
