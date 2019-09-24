function bodyload() {
    bodyText = "body loaded";
    console.log(bodyText);
    div1 = document.getElementById("div1");
    div1.innerHTML = bodyText;
}