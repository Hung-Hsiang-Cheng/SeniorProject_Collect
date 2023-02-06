

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
  images: [
    "https://3yya.com/examples/assets/进击.jpg",
    "https://3yya.com/examples/assets/进击-大.jpg",
    "https://3yya.com/examples/assets/进击.jpg",
    "https://3yya.com/examples/assets/进击-大.jpg",
  ],
  url: [
    "http://chicago.cubs.mlb.com/",
    "http://chicago.cubs.mlb.com/",
    "http://chicago.cubs.mlb.com/",
    "http://chicago.cubs.mlb.com/",
  ],
  storeName: ["aa", "aa", "aa", "aa"],
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
      .append(`<div clsss="orderhistoryitems" style="background-image:url(${orderitem.images[index]})">
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
