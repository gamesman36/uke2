const files = ["beach.jpeg", "city.jpeg", "mountain.jpeg"];
const folder = "img/"

function chooseImg(image) {
    let num = Math.floor(Math.random() * 3);
    image.src = `${folder}${files[num]}`;
    document.getElementById("text").innerHTML = base(image.src);
}

function base(path) {
    return path.split("/").reverse()[0];
}