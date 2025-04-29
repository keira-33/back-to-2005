//Get Current Year for .header-bar and footer
window.onload = function () {
    var d = new Date();
    document.getElementById("copyright").innerHTML = d.getFullYear();
    document.getElementById("currentyear").innerHTML = d.getFullYear();
}

