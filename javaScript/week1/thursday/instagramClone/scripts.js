const photoArray = ["images/image1.jpg", "images/image2.jpg", "images/image3.jpg", "images/image4.jpg", "images/image5.jpg", "images/image6.jpg", "images/image7.jpg", "images/image8.jpg"]
var imageThumbnails = document.querySelectorAll("a img");
var meows = [1, 0, 0, 0, 0, 0, 0, 0];

function buildPage() {
    for (var i = 0; i < imageThumbnails.length; i++) {
        imageThumbnails[i].setAttribute("src", photoArray[i]);
        imageThumbnails[i].classList = "img-thumbnail rounded";
        imageThumbnails[i].number = i;
    }
    document.getElementById("numberOfViews").textContent = meows[0];
}

var bigImg = document.getElementById("bigImg");

imageThumbnails.forEach(function (thumbnail) {
    thumbnail.addEventListener("click", function () {
        bigImg.setAttribute("src", this.src);
        bigImg.number = this.number;
        for (var i = 0; i < imageThumbnails.length; i++) {
            imageThumbnails[i].classList = "img-thumbnail rounded";
        }
        meows[bigImg.number] += 1;
        document.getElementById("numberOfViews").textContent = meows[bigImg.number];
        this.setAttribute("class", "clicked");
    }, false)
});

document.getElementById("back").addEventListener("click", function () {
    if (bigImg.number == 0) {
        bigImg.number = 7;
    } else {
        bigImg.number -= 1;
    }
    bigImg.setAttribute("src", photoArray[bigImg.number]);
    for (var i = 0; i < imageThumbnails.length; i++) {
        imageThumbnails[i].classList = "img-thumbnail rounded";
    }
    meows[bigImg.number] += 1;
    document.getElementById("numberOfViews").textContent = meows[bigImg.number];
    imageThumbnails[bigImg.number].setAttribute("class", "clicked");
}, false);

document.getElementById("forward").addEventListener("click", function () {
    if (bigImg.number == 7) {
        bigImg.number = 0;
    } else {
        bigImg.number += 1;
    }
    bigImg.setAttribute("src", photoArray[bigImg.number]);
    for (var i = 0; i < imageThumbnails.length; i++) {
        imageThumbnails[i].classList = "img-thumbnail rounded";
    }
    meows[bigImg.number] += 1;
    document.getElementById("numberOfViews").textContent = meows[bigImg.number];
    imageThumbnails[bigImg.number].setAttribute("class", "clicked");
}, false);