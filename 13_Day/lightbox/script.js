const images = document.querySelectorAll("img");
const content = document.getElementById("content");
const imageBox = document.getElementById("imagebox");
const closeBtn = document.getElementById("close-btn");

closeBtn.addEventListener("click", () => {
  imageBox.style.display = "none";
});

images.forEach((image) => {
  image.addEventListener("click", showImageBox);
});

function showImageBox() {
  imageBox.style.display = "block";
  let image = document.createElement("img");
  // <img/>

  image.src = this.src;
  // <img src="image.asd"/>

  image.style.height = 600;
  image.style.width = 600;
  image.style.objectFit = "cover";

  content.innerHTML = "";
  content.append(image);
}
