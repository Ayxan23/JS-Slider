let arrImg = [
  {
    name: "JOHN",
    info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis neque reprehenderit laborum, corporis explicabo assumenda. Porro impedit consectetur animi, reprehenderit recusandae sapiente at aliquam reiciendis modi ipsam rerum suscipit distinctio?",
    photo: "aykhan.jpg",
  },
  {
    name: "SANDY",
    info: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock",
    photo: "sandy.jpg",
  },
  {
    name: "AMY",
    info: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
    photo: "amy.jpg",
  },
  {
    name: "TYRELL",
    info: "If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.",
    photo: "tyrell.jpg",
  },
  {
    name: "WANDA",
    info: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    photo: "wanda.jpg",
  },
];

let left_btn = document.querySelector(".left_btn");
let right_btn = document.querySelector(".right_btn");
let box = document.querySelector(".box");
let index = 0;

right_btn.addEventListener("click", () => {
  if (index == arrImg.length - 1) {
    index = 0;
  } else {
    index++;
  }
  let resName = arrImg[index].name;
  let resImg = arrImg[index].photo;
  let resInfo = arrImg[index].info;

  box.innerHTML = ` <div class="img_div"><img src="/image/${resImg}" alt="pp" /></div>
    <h4 class="name">${resName}</h4>
    <div class="icon_stars">
      <i class="fa-solid fa-star"></i>
      <i class="fa-solid fa-star"></i>
      <i class="fa-solid fa-star"></i>
      <i class="fa-solid fa-star"></i>
      <i class="fa-solid fa-star"></i>
    </div>
    <p class="info">${resInfo}</p>
    <div class="icon_quote"><i class="fa-solid fa-quote-left"></i></div>`;
});

left_btn.addEventListener("click", () => {
  if (index == 0) {
    index = arrImg.length - 1;
  } else {
    index--;
  }
  let resName = arrImg[index].name;
  let resImg = arrImg[index].photo;
  let resInfo = arrImg[index].info;

  box.innerHTML = ` <div class="img_div"><img src="/image/${resImg}" alt="pp" /></div>
    <h4 class="name">${resName}</h4>
    <div class="icon_stars">
      <i class="fa-solid fa-star"></i>
      <i class="fa-solid fa-star"></i>
      <i class="fa-solid fa-star"></i>
      <i class="fa-solid fa-star"></i>
      <i class="fa-solid fa-star"></i>
    </div>
    <p class="info">${resInfo}</p>
    <div class="icon_quote"><i class="fa-solid fa-quote-left"></i></div>`;
});

// index == arrImg.length - 1 ? arrImg[0].name : arrImg[index++].name
