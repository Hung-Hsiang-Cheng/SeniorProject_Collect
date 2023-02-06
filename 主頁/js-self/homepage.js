//Carousel<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
const model = {
  images: [
    "./img/早餐.jpg",
    "./img/午餐_1.png",
    "./img/下午茶.png",
    "./img/晚餐.jpg",
  ],
  timerID: null,
  imgindex: 0,
  get imageAmount() {
    return this.images.length;
  },
  set index(value) {
    if (value < 0) {
      this.imgindex = this.imageAmount - 1;
    } else if (value >= this.imageAmount) {
      this.imgindex = 0;
    } else {
      this.imgindex = value;
    }

    view.render();
  },
  get index() {
    return this.imgindex;
  },
};

function resetWrapper(func) {
  return function (...args) {
    if (model.timerID) {
      clearInterval(model.timerID);
    }
    model.timerID = controller.run();

    return func(...args);
  };
}
const controller = {
  init() {
    model.timerID = this.run();

    document.querySelector(".hCarousel .hleft").onclick = this.leftShift;
    document.querySelector(".hCarousel .hright").onclick = this.rightShift;
  },
  leftShift: resetWrapper(() => {
    model.index--;
  }),
  rightShift: resetWrapper(() => {
    model.index++;
  }),
  setIndex: resetWrapper((idx) => {
    model.index = idx;
  }),
  run() {
    return setInterval(() => {
      model.index++;
    }, 3000);
  },
};

const view = {
  init() {
    // 添加图片
    const container = document.querySelector(".hCarousel .hContainer");
    for (let url of model.images) {
      const image = document.createElement("img");
      image.src = url;

      container.append(image);
    }

    this.render();
  },
  render: function () {
    carousel = document.querySelector(".hCarousel");

    carousel.querySelector(".hContainer").style.left = `${
      model.index * carousel.clientWidth * -1
    }px`;

    const bottom = carousel.querySelector(".hbottom");

    bottom.innerHTML = "";
    for (let i = 0; i < model.imageAmount; i++) {
      const hIndicator = document.createElement("div");
      hIndicator.classList.add("hIndicator");
      if (i === model.index) {
        hIndicator.classList.add("hActivate");
      }

      hIndicator.onclick = () => controller.setIndex(i);

      bottom.append(hIndicator);
    }
  },
};

controller.init();
view.init();
//Carousel<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

//nav

const items = document.querySelectorAll(".items");

function activeLink() {
  items.forEach((item) => item.classList.remove("active"));
  this.classList.add("active");
}

items.forEach((item) => item.addEventListener("click", activeLink));

// function getPosition(element) {
//   var x = 0;
//   var y = 0;
//   // 搭配上面的示意圖可比較輕鬆理解為何要這麼計算
//   while (element) {
//     x += element.offsetLeft - element.scrollLeft + element.clientLeft;
//     y += element.offsetTop - element.scrollLeft + element.clientTop;
//     element = element.offsetParent;
//   }
//   return { x: x, y: y };
// }
// var itemoneElem = document.getElementById("itemone");
// var itemonePosition = getPosition(itemoneElem).x;
// var itemoneCenter = itemonePosition+2;
//$(".navIndicator").css("left", `${itemoneCenter}px`);

$(".items").click(function () {
  $(".navIndicator").css("left", $(this).position().left + 10);
  $(".navIndicator").css("display", "initial");
  $(window).resize(function () {
    $(".navIndicator").css("left", $(".active").position().left + 10);
  });
});

function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

//聊天室
function closeNav() {
  document.getElementById("navchat").style.display = "none";
  $(".items").removeClass("active");
  $(".navIndicator").css("display", "none");
}

function openNav() {
  document.getElementById("navchat").style.display = "block";
}

window.onload = function () {
  var Words = document.getElementById("words");
  var Who = document.getElementById("who");
  var TalkWords = document.getElementById("talkwords");
  var TalkSub = document.getElementById("talksub");
  var TalkFontSize = $("#talkfontsizeNumId").val();
  var d = new Date();
  TalkSub.onclick = function () {
    //定义空字符串
    var str = "";
    if (TalkWords.value == "") {
      return;
    }
    if (Who.value == 0) {
      str = `<div class="atalk">
      <span id="asay">${TalkWords.value}</span>
      </div>`;
    } else {
      str = `<div class="btalk">
      <span id="asay">${TalkWords.value}</span>
      </div>`;
    }
    Words.innerHTML = Words.innerHTML + str;
    $("#asay").css("font-size", `${TalkFontSize}pt`);
    $("#bsay").css("font-size", `${TalkFontSize}pt`);
    TalkWords.value = "";
  };
};

//搜尋
function closeSearch() {
  document.getElementById("divsearch").style.display = "none";
  $(".items").removeClass("active");
  $(".navIndicator").css("display", "none");
}

function openSearch() {
  document.getElementById("divsearch").style.display = "flex";
}

/* 訂單 */
const orderitem = {
  images: ["./img/豪煮藝2.png"],
  url: ["../pageshow1/pageshow1.html"],
  storeName: ["豪煮藝經典麵食館"],
  get imageAmount() {
    return this.images.length;
  },
  set index(imagevalue) {
    if (imagevalue < 0) {
      this.imgindex = this.imageAmount - 1;
    } else if (imagevalue >= this.imageAmount) {
      this.imgindex = 0;
    } else {
      this.imgindex = imagevalue;
    }
  },
  get index() {
    return this.imgindex;
  },
};
function orderhistory() {
  const orderhistoryall = document.querySelector(".orderhistoryall");

  for (let index = 0; index <= orderitem.imageAmount - 1; index++) {
    $(".orderhistoryall")
      .append(`<div clsss="orderhistoryitems" style="background-image:url(${orderitem.images[index]});background-position:center;">
                <a href=${orderitem.url[index]} style="text-decoration: none;">
                <div class="orderitemslist">${orderitem.storeName[index]}</div>
              </a></div>`);
  }
}

orderhistory();

$(".aorder").click(function () {
  $(".orderlist").toggle();
});
$(".aorder").click(function (e) {
  if ($(".items").hasClass("active")) {
    $(".items").removeClass("active");
    $(".navIndicator").css("display", "none");
    e.stopPropagation();
  }
});
console.log($(".orderlist").toggle());
// 登入

function openlogin() {
  document.getElementById("loginsideId").style.width = "400px";
}

/* Set the width of the side navigation to 0 */
function closelogin() {
  document.getElementById("loginsideId").style.width = "0";
  $(".items").removeClass("active");
  $(".navIndicator").css("display", "none");
}

// $("html").on("mousemove", function(e){
//   if (isMouseDown)
//     $(".ulStore").css("transform", "translate3d("+ spanbarX + e.left - mouseAnchorX+", 0px, 0px)");

//     //transition: transform 300ms ease 0s;
//     //transform: translate3d(-2702.22px, 0px, 0px);
// });

// 附近商家
const modelAddStore = {
  images: [
    "./img/豪煮藝2.png",
    "./img/加州火烤2.png",
    "./img/短腿ㄚ鹿餅干2.png",
    "./img/不二糕餅原不二製餅2.png",
    "./img/太初麵食2.png",
    "./img/咚豬咚豬2.png",
    "./img/好好吃肉韓式烤肉吃到飽2.png",
    "./img/不葷主義茶餐廳2.png",
    "./img/鼎王麻辣鍋公益店2.png",
    "./img/六扇門時尚湯鍋台中東興店2.png",
    "./img/宅樂咖啡大墩店2.png",
  ],
  url: [
    "../pageshow1/pageshow1.html",
    "../pageshow2/pageshow2.html",
    "../pageshow3/pageshow3.html",
    "../pageshow4/pageshow4.html",
    "../pageshow5/pageshow5.html",
    "../pageshow6/pageshow6.html",
    "../pageshow7/pageshow7.html",
    "../pageshow8/pageshow8.html",
    "../pageshow9/pageshow9.html",
    "../pageshow10/pageshow10.html",
    "../pageshow11/pageshow11.html",
  ],
  storeName: [
    "豪煮藝經典麵食館",
    "加州火烤",
    "短腿ㄚ鹿餅干",
    "不二糕餅",
    "太初麵食",
    "咚豬咚豬",
    "好好吃肉",
    "不葷主義",
    "鼎王",
    "六扇門",
    "宅樂咖啡",
  ],
  get imageAmount() {
    return this.images.length;
  },
  set index(imagevalue) {
    if (imagevalue < 0) {
      this.imgindex = this.imageAmount - 1;
    } else if (imagevalue >= this.imageAmount) {
      this.imgindex = 0;
    } else {
      this.imgindex = imagevalue;
    }
  },
  get index() {
    return this.imgindex;
  },
};
function storeIn() {
  const liStore1 = document.querySelector(".ulStore .liStore1");
  const liStore2 = document.querySelector(".ulStore .liStore2");
  for (let index = 0; index <= modelAddStore.imageAmount - 1; index++) {
    $(".liStore1")
      .append(`<div clsss="divstore" style="background-image:url(${modelAddStore.images[index]})">
                <a href=${modelAddStore.url[index]} style="text-decoration: none;">
                <div class="listoretxt">${modelAddStore.storeName[index]}</div>
              </a></div>`);
    $(".liStore2")
      .append(`<div clsss="divstore" style="background-image:url(${modelAddStore.images[index]})">
                <a href=${modelAddStore.url[index]} style="text-decoration: none;">
                <div class="listoretxt">${modelAddStore.storeName[index]}</div>
              </a></div>`);
  }
}

storeIn();

//console.log($("div").outerWidth());
// var divstorewidth=*(images.length+1)
// $(.ulStore).css({`width:`})

// Top
const modelAddTop = {
  images: [
    "./img/豪煮藝2.png",
    "./img/加州火烤2.png",
    "./img/短腿ㄚ鹿餅干2.png",
    "./img/不二糕餅原不二製餅2.png",
    "./img/太初麵食2.png",
    "./img/咚豬咚豬2.png",
    "./img/好好吃肉韓式烤肉吃到飽2.png",
    "./img/不葷主義茶餐廳2.png",
    "./img/鼎王麻辣鍋公益店2.png",
    "./img/六扇門時尚湯鍋台中東興店2.png",
    "./img/宅樂咖啡大墩店2.png",
  ],
  url: [
    "../pageshow1/pageshow1.html",
    "../pageshow2/pageshow2.html",
    "../pageshow3/pageshow3.html",
    "../pageshow4/pageshow4.html",
    "../pageshow5/pageshow5.html",
    "../pageshow6/pageshow6.html",
    "../pageshow7/pageshow7.html",
    "../pageshow8/pageshow8.html",
    "../pageshow9/pageshow9.html",
    "../pageshow10/pageshow10.html",
    "../pageshow11/pageshow11.html",
  ],
  storeName: [
    "豪煮藝經典麵食館",
    "加州火烤",
    "短腿ㄚ鹿餅干",
    "不二糕餅",
    "太初麵食",
    "咚豬咚豬",
    "好好吃肉",
    "不葷主義",
    "鼎王",
    "六扇門",
    "宅樂咖啡",
  ],
  get imageAmount() {
    return this.images.length;
  },
  set index(imagevalue) {
    if (imagevalue < 0) {
      this.imgindex = this.imageAmount - 1;
    } else if (imagevalue >= this.imageAmount) {
      this.imgindex = 0;
    } else {
      this.imgindex = imagevalue;
    }
  },
  get index() {
    return this.imgindex;
  },
};
function topIn() {
  const liTop1 = document.querySelector(".ulTop .liTop1");
  const liTop2 = document.querySelector(".ulTop .liTop2");
  for (let index = 0; index <= modelAddTop.imageAmount - 1; index++) {
    $(".liTop1")
      .append(`<div clsss="divTop" style="background-image:url(${modelAddTop.images[index]})">
                <a href=${modelAddTop.url[index]} style="text-decoration: none;">
                <div class="litoptxt">${modelAddTop.storeName[index]}</div></a></div>`);
    $(".liTop2")
      .append(`<div clsss="divTop" style="background-image:url(${modelAddTop.images[index]})">
                <a href=${modelAddTop.url[index]} style="text-decoration: none;">
                <div class="litoptxt">${modelAddTop.storeName[index]}</div></a></div>`);
  }
}

topIn();

// Map
const modelAddMap = {
  images: [
    "./img/豪煮藝2.png",
    "./img/加州火烤2.png",
    "./img/短腿ㄚ鹿餅干2.png",
    "./img/不二糕餅原不二製餅2.png",
    "./img/太初麵食2.png",
    "./img/咚豬咚豬2.png",
    "./img/好好吃肉韓式烤肉吃到飽2.png",
    "./img/不葷主義茶餐廳2.png",
    "./img/鼎王麻辣鍋公益店2.png",
    "./img/六扇門時尚湯鍋台中東興店2.png",
    "./img/宅樂咖啡大墩店2.png",
  ],
  url: [
    "../pageshow1/pageshow1.html",
    "../pageshow2/pageshow2.html",
    "../pageshow3/pageshow3.html",
    "../pageshow4/pageshow4.html",
    "../pageshow5/pageshow5.html",
    "../pageshow6/pageshow6.html",
    "../pageshow7/pageshow7.html",
    "../pageshow8/pageshow8.html",
    "../pageshow9/pageshow9.html",
    "../pageshow10/pageshow10.html",
    "../pageshow11/pageshow11.html",
  ],
  storeName: [
    "豪煮藝經典麵食館",
    "加州火烤",
    "短腿ㄚ鹿餅干",
    "不二糕餅",
    "太初麵食",
    "咚豬咚豬",
    "好好吃肉",
    "不葷主義",
    "鼎王",
    "六扇門",
    "宅樂咖啡",
  ],
  get imageAmount() {
    return this.images.length;
  },
  set index(imagevalue) {
    if (imagevalue < 0) {
      this.imgindex = this.imageAmount - 1;
    } else if (imagevalue >= this.imageAmount) {
      this.imgindex = 0;
    } else {
      this.imgindex = imagevalue;
    }
  },
  get index() {
    return this.imgindex;
  },
};
function MapIn() {
  const liMap1 = document.querySelector(".ulMap .liMap1");
  const liMap2 = document.querySelector(".ulMap .liMap2");
  for (let index = 0; index <= modelAddMap.imageAmount - 1; index++) {
    $(".liMap1")
      .append(`<div clsss="divMap" style="background-image:url(${modelAddMap.images[index]})">
                <a href=${modelAddMap.url[index]} style="text-decoration: none;">
                <div class="liMaptxt">${modelAddMap.storeName[index]}</div></a></div>`);
    $(".liMap2")
      .append(`<div clsss="divMap" style="background-image:url(${modelAddMap.images[index]})">
                <a href=${modelAddMap.url[index]} style="text-decoration: none;">
                <div class="liMaptxt">${modelAddMap.storeName[index]}</div></a></div>`);
  }
}

MapIn();

$(".clickMap").click(function () {
  $(this).attr("id", "map");
});

// Initialize and add the map
function initMap() {
  // The location of Uluru
  const uluru = { lat: -25.344, lng: 131.031 };
  // The map, centered at Uluru
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 4,
    center: uluru,
  });
  // The marker, positioned at Uluru
  const marker = new google.maps.Marker({
    position: uluru,
    map: map,
  });
}

window.initMap = initMap;

//最新消息
const newsItem = {
  descriptionShow: ["歡迎使用此系統", "時間過得好快?來加餐吧?"],
  timeclock: [
    "2022/05/03 12:00",
    "2022/11/02 14:20",
    "2022/11/03 10:50",
    "2022/11/07 23:00",
    "2022/05/03 12:00",
    "2022/11/02 14:20",
    "2022/11/03 10:50",
    "2022/11/07 23:00",
  ],
  link: [
    "./主頁.html",
    "./主頁.html",
    "./主頁.html",
    "./主頁.html",
    "./主頁.html",
    "./主頁.html",
    "./主頁.html",
    "./主頁.html",
  ],
  get newsAmount() {
    return this.descriptionShow.length;
  },
  set newsindex(newsvalue) {
    if (newsvalue < 0) {
      this.index = this.newsAmount - 1;
    } else if (newsvalue >= this.newsAmount) {
      this.newsindex = 0;
    } else {
      this.newsindex = newsvalue;
    }
  },
  get newsindex() {
    return this.newsindex;
  },
};

for (let index = 0; index <= newsItem.newsAmount - 1; index++) {
  $(".divNEWSitem")
    .append(`<div class="divnews"><a href="${newsItem.link[index]}" style="text-decoration: none;">
  <div class="divnewstxt">${newsItem.descriptionShow[index]}<div class="clocktime">${newsItem.timeclock[index]}</div></div></a></div>`);
}

//留言

const input = document.querySelector("#massagetxt");
const speed = document.querySelector("#speedselect");
const btn = document.querySelector("#btnsubmitId");
const color = document.querySelector("#colorselect");
const canvas = document.querySelector("#massageCanvas");
const ctx = canvas.getContext("2d");

canvaswidth = parseInt($("#massageCanvas").css("width"));
canvasheight = parseInt($("#massageCanvas").css("height"));

var nowColor = $("#colorselect").val();
var time = $("#speedselect").val();
var texts = [];

color.addEventListener("change", () => {
  nowColor = $("#colorselect").val();
});
speed.addEventListener("change", () => {
  nowSpeed = $("#speedselect").val();
});
btn.addEventListener("click", () => {
  let nowTxt = input.value;
  if (nowTxt != "") {
    input.value = "";

    texts.push({
      txt: nowTxt,
      x: canvaswidth,
      y: (Math.random() * 100000) % canvasheight,
      color: nowColor,
    });
  }
});

input.addEventListener("keydown", (e) => {
  if (e.keyCode == 13) {
    btn.click();
  }
});

function update() {
  ctx.clearRect(0, 0, canvaswidth, canvasheight);

  for (let i = 0; i < texts.length; i++) {
    texts[i].x -= 5;
    // if (texts[i].x < 0){texts.splice(i, 1);}
  }

  texts.forEach((item) => {
    ctx.font = `${$("#lblfontsizeNumId").text()} Arial`;
    ctx.fillStyle = item.color;
    ctx.fillText(item.txt, item.x, item.y);
  });
  window.requestAnimationFrame(update);
}
update();

//footer

setInterval(function () {
  var today = new Date();
  yy = today.getFullYear();
  mm = today.getMonth() + 1;
  dd = today.getDate();
  fHour = today.getHours();
  fMin = today.getMinutes();
  fSec = today.getSeconds();
  dateId.innerText = `${yy}/${mm}/${dd}`;
  if (fHour > 12) {
    apmId.innerText = "PM";
  } else {
    apmId.innerText = "AM";
  }
  hourId.innerText = `${fHour}`;
  minId.innerText = `${fMin}`;
  secId.innerText = `${fSec}`;
}, 1000);
