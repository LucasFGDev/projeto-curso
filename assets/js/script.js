let darkToggle = document.querySelector("input")

darkToggle.addEventListener("change", (e) => {
  let body = document.querySelector("body")
  let social = document.querySelector(".social-links")
  let link = document.querySelector(".links")
  let paragrafo = document.querySelector("p")
  let rodapeParagrafo = document.querySelector(".rodapeParagrafo")
  let rodapeLink = document.querySelector(".rodapeLink")
  let slider = document.querySelector(".slider")

  if (e.target.checked) {
    body.classList.add("light")
    $("#avatar").removeAttr("src")
    $("#avatar").attr("src", "assets/img/avatar-light.png")
    link.classList.add("light")
    social.classList.add("light")
    paragrafo.classList.add("light")
    rodapeParagrafo.classList.add("light")
    rodapeLink.classList.add("light")
    slider.classList.add("light")
  } else {
    body.classList.remove("light")
    $("#avatar").removeAttr("src")
    $("#avatar").attr("src", "assets/img/avatar.png")
    link.classList.remove("light")
    social.classList.remove("light")
    paragrafo.classList.remove("light")
    rodapeParagrafo.classList.remove("light")
    rodapeLink.classList.remove("light")
    slider.classList.remove("light")
  }
})
