let myButton = document.querySelector("input[name='checkbox']");
const myImg = document.querySelector("img[name='newImg']").style;
// console.log(myImg);
myButton.addEventListener("change", function (el) {
    el.target.checked ? myImg.visibility = "visible" : myImg.visibility = "hidden";
});