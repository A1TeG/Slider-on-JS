let photos = [{
  url: "../images/photo1.jpg",
  city: "Rostov-on-Don<br> LCD admiral",
  apartmentArea: "81 m2",
  repairTime: "3.5 months",
  repairCost: "Upon request",
  link: "Rostov-on-Don, Admiral"
}, {
  url: "../images/photo2.jpg",
  city: "Sochi<br> Thieves",
  apartmentArea: "105 m2",
  repairTime: "4 months",
  repairCost: "Upon request",
  link: "Sochi Thieves"
}, {
  url: "../images/photo3.jpg",
  city: "Rostov-on-Don<br> Patriotic",
  apartmentArea: "93 m2",
  repairTime: "3 months",
  repairCost: "Upon request",
  link: "Rostov-on-Don Patriotic"
}];

function initSlider() {
  if (!photos || !photos.length) return;

  let sliderPhotos = document.querySelector(".slider__photo");
  let sliderContent = document.querySelector(".slider__content")
  let sliderArrows = document.querySelector(".slider__arrows");
  let sliderDots = document.querySelector(".slider__dots");
  let sliderLinks = document.querySelector(".slider__links");

  initPhotos();
  initContent();
  initArrows();
  initDots();
  initLinks();

  function initPhotos() {
    photos.forEach((photo, index) => {
      let photoDiv = `<div class="photo n${index} ${index === 0 ? "active" : ""}" style="background-image:url(${photos[index].url});" data-index="${index}"></div>`;
      sliderPhotos.innerHTML += photoDiv;
    });
  }

  function initArrows() {
    sliderArrows.querySelectorAll(".slider__arrow").forEach(arrow => {
      arrow.addEventListener("click", function () {
        let curNumber = +sliderPhotos.querySelector(".active").dataset.index;
        let nextNumber;
        if (arrow.classList.contains("left")) {
          nextNumber = curNumber === 0 ? photos.length - 1 : curNumber - 1;
        } else {
          nextNumber = curNumber === photos.length - 1 ? 0 : curNumber + 1;
        }
        moveSlider(nextNumber);
      });
    });
  }

  function initDots() {
    photos.forEach((photo, index) => {
      let dot = `<div class="slider__dots-item n${index} ${index === 0 ? "active" : ""}" data-index="${index}"></div>`;
      sliderDots.innerHTML += dot;
    });
    sliderDots.querySelectorAll(".slider__dots-item").forEach(dot => {
      dot.addEventListener("click", function () {
        moveSlider(this.dataset.index);
      });
    });
  }

  function initLinks() {
    photos.forEach((photo, index) => {
      let link = `<li class="slider-links__item n${index} ${index === 0 ? "active" : ""}" data-index="${index}">${photos[index].link}</li>`;
      sliderLinks.innerHTML += link;
    });
    sliderLinks.querySelectorAll(".slider-links__item").forEach(link => {
      link.addEventListener("click", function () {
        moveSlider(this.dataset.index);
      });
    });
  }

  function initContent() {
    let contentDiv = `<div class="content__item">
                        <h3 class="title content-title"">city:</h3>
                        <p class="text content-text city">${photos[0].city}</p>
                      </div>
                      <div class="content__item">
                        <h3 class="title content-title"">apartment area:</h3>
                        <p class="text content-text apartment">${photos[0].apartmentArea}</p>
                      </div>
                      <div class="content__item">
                        <h3 class="title content-title"">Repair time:</h3>
                        <p class="text content-text repairTime">${photos[0].repairTime}</p>
                      </div>
                      <div class="content__item">
                        <h3 class="title content-title"">Repair Cost:</h3>
                        <p class="text content-text repairCost">${photos[0].repairCost}</p>
                      </div>`;
    sliderContent.innerHTML = contentDiv;
  }

  function changeContent(num) {
    let contentCity = sliderContent.querySelector(".city");
    contentCity.innerHTML = photos[num].city;
    let contentApartment = sliderContent.querySelector(".apartment");
    contentApartment.innerHTML = photos[num].apartmentArea;
    let contentTime = sliderContent.querySelector(".repairTime");
    contentTime.innerHTML = photos[num].repairTime;
    let contentCost = sliderContent.querySelector(".repairCost");
    contentCost.innerHTML = photos[num].repairCost;
  }

  function moveSlider(num) {
    sliderPhotos.querySelector(".active").classList.remove("active");
    sliderPhotos.querySelector(".n" + num).classList.add("active");

    sliderDots.querySelector(".active").classList.remove("active");
    sliderDots.querySelector(".n" + num).classList.add("active");

    sliderLinks.querySelector(".active").classList.remove("active");
    sliderLinks.querySelector(".n" + num).classList.add("active");

    changeContent(num);
  }
}

document.addEventListener("DOMContentLoaded", initSlider);