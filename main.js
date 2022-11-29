let brand_logo = document.getElementsByClassName("brand");
let skills = document.getElementsByClassName("skills");
// console.log(brand_logo);
// console.log(skills.item(0));
setInterval(() => {
  Array.from(skills).forEach((element) => {
    // console.log(element);
  });
  // console.log(brand_logo);
  if (brand_logo[0].innerHTML == "..." && brand_logo[1].innerHTML == "...") {
    brand_logo[0].innerHTML = "..";
    brand_logo[1].innerHTML = "..";
  } else {
    brand_logo[0].innerHTML = "...";
    brand_logo[1].innerHTML = "...";
  }
}, 2000);
