<<<<<<< HEAD
let count = 1;
document.getElementById("radio1").checked = true;

setInterval(function () {
  nextImage();
}, 5000)

function nextImage() {
  count++;
  if (count > 4) {
    count = 1;
  }

  document.getElementById("radio" + count).checked = true;
}
=======
const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");
let index = 0;

function showSlide(i) {
    slides.forEach(s => s.classList.remove("active"));
    slides[i].classList.add("active");

    // animação da bolinha deslizando
    const dot = slides[i].querySelector(".dot");
    dot.style.left = "50%";
}

document.querySelector(".next").addEventListener("click", () => {
    index = (index + 1) % slides.length;
    showSlide(index);
});

document.querySelector(".prev").addEventListener("click", () => {
    index = (index - 1 + slides.length) % slides.length;
    showSlide(index);
});

// inicia no slide 0
showSlide(index);

>>>>>>> b230bfa23e3e4415ea68cb5d0485b02f46ace3a2
