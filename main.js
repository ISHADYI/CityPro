import '/src/styles/style.scss'

const swiper = new Swiper(".hero__swiper", {
  pagination: {
    el: ".hero__swiper-pagination",
    clickable: true,
    // renderBullet: function (index, className) {
    //   return '<span class="' + className + '">' + (index + 1) + "</span>";
    // },
  },
});
const swiper2 = new Swiper(".portfolio__swiper", {
  pagination: {
    el: ".slider-controls__count",
    type: "fraction",
  },
  navigation: {
    nextEl: "#slider-next",
    prevEl: "#slider-prev",
  },
});
//====================================================

const hamb = document.querySelector("#hamb");
const popup = document.querySelector("#popup");
const body = document.body;

const menu = document.querySelector(".header__list").cloneNode(1);

hamb.addEventListener("click", hambHandler);

function hambHandler(e) {
  e.preventDefault();

  popup.classList.toggle("open");
  hamb.classList.toggle("active");
  body.classList.toggle("noscroll");
  renderPopup();
}

function renderPopup() {
  popup.appendChild(menu);
}

const links = Array.from(menu.children);

links.forEach((link) => {
  link.addEventListener("click", closeOnClick);
});

function closeOnClick() {
  popup.classList.remove("open");
  hamb.classList.remove("active");
  body.classList.remove("noscroll");
}

const headerContainer = document.querySelector(".headaer__container-big")
headerContainer.onclick = () => {
  if(headerContainer.classList.contains("headaer__container-big_show") === false) {
    headerContainer.classList.add("headaer__container-big_show")
  } else {
    headerContainer.classList.remove("headaer__container-big_show")
  }
}

//====================================================

function buttonButtom() {
	const bottom = document.querySelector(".bottom")
	const aboutUsDesc = document.querySelector(".about-us__desc")
	const aboutUsDescMob = document.querySelector(".about-us__desc_mob") 
  const aboutUsContainerBig = document.querySelector(".about-us__container-big")

	bottom.onclick = () => {
		if(bottom.classList.contains("bottom__show") === false) {
			bottom.classList.add("bottom__show")
			aboutUsDesc.classList.add("about-us__desc_full")
      aboutUsContainerBig.classList.add("about-us__container-big_full")
      aboutUsDescMob.classList.remove("about-us__desc_mob")
		} else {
			bottom.classList.remove("bottom__show")
			aboutUsDesc.classList.remove("about-us__desc_full")
      aboutUsContainerBig.classList.remove("about-us__container-big_full")
      aboutUsDescMob.classList.add("about-us__desc_mob")
		}
	}
}
function portfolioBottom() {
  const portfolioBottom = document.querySelector(".bottom__portfolio");

  const portfolioDesc = document.querySelector(".portfolio__desc")
  const portfolioDesc2 = document.querySelector(".portfolio__desc-2")
  const portfolioDesc3 = document.querySelector(".portfolio__desc-3")
  const portfolioContainerBig = document.querySelector(".portfolio__container-big")
  const portfolioDescMob = document.querySelector(".portfolio__desc_mob")
  const portfolioDescMob2 = document.querySelector(".portfolio__desc_mob-2")
  const portfolioDescMob3 = document.querySelector(".portfolio__desc_mob-3")

  portfolioBottom.onclick = () => {
    if(portfolioBottom.classList.contains("bottom__show") === false) {
      portfolioBottom.classList.add("bottom__show")
      portfolioDesc.classList.add("portfolio__desc_full")
      portfolioDesc2.classList.add("portfolio__desc_full-2")
      portfolioDesc3.classList.add("portfolio__desc_full-3")
      portfolioContainerBig.classList.add("portfolio__container-big_full")
      portfolioDescMob.classList.remove("portfolio__desc_mob")
      portfolioDescMob2.classList.remove("portfolio__desc_mob-2")
      portfolioDescMob3.classList.remove("portfolio__desc_mob-3")
    }else {
      portfolioBottom.classList.remove("bottom__show")
      portfolioDesc.classList.remove("portfolio__desc_full")
      portfolioDesc2.classList.remove("portfolio__desc_full-2")
      portfolioDesc3.classList.remove("portfolio__desc_full-3")
      portfolioContainerBig.classList.remove("portfolio__container-big_full")
      portfolioDescMob.classList.add("portfolio__desc_mob")
      portfolioDescMob2.classList.add("portfolio__desc_mob-2")
      portfolioDescMob3.classList.add("portfolio__desc_mob-3")
    }
  }
}
buttonButtom();
portfolioBottom();

function modal() {
  const heroBtn = document.querySelector(".hero__btn")
  // const aplicationBtn = document.querySelector(".")
  const modal = document.querySelector(".modal")
  const closeBtn = document.querySelector(".close-btn")
  const sendBtn = document.querySelector(".modal__btn")

    heroBtn.onclick = () => {
      if(modal.classList.contains(".modal-open") === false) {
        modal.classList.add("modal-open")
      }
    }

    closeBtn.onclick = () => {
      modal.classList.remove("modal-open")
    }

  // let nameInp = document.querySelector("#inpName")
  // let numberInp = document.querySelector("#inpNumber")
  // let messageInp = document.querySelector("#InpMessage")
  // let checkboxInp = document.querySelector("#checkbox")
  //   sendBtn.onclick = () => {
  //     let nameValue = nameInp.value
  //     let numberValue = Number(numberInp.value)
  //     let messageValue = messageInp.value
  //     let checkboxValue = checkboxInp.value
  //     // if(nameValue == "") {
  //     //   alert("Заполните поле")
  //     // } if (numberValue === "") {
  //     //   alert("Заполните поле")
  //     // } if(messageValue === "") {
  //     //   alert("Заполните поле")
  //     // } if(checkboxValue === "") {
  //     //   alert("Заполните поле")
  //     // } else {
  //     //   alert("успешно")
  //     // }
  //   }
}
modal();
function validation(form) {
  let result = true;

  return result
}
document.getElementById("modalForm").addEventListener("submit", function(event){
    event.preventDefault()
    if(validation(this) == true) {
      alert("Заявка успешно отправлена!")
      validation(this) = ""
    }
})