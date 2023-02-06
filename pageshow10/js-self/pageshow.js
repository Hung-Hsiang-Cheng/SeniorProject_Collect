












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

// function myFunction() {
//   document.getElementById("myDropdown").classList.toggle("show");
// }

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








//內容



//bar
// window.onscroll = function () {
//   myFunction();
// };


function itemstoggle(x, y) {
  $(x).click(function (e) {
    $(y).toggle(400);
    e.stopPropagation();
  });
}


function itemstogglebtn(x) {
  $(x).click(function () {
    $(this).toggleClass("activeone");
  });
}






itemstoggle("#limap", ".storemap");
itemstoggle("#orderone", "#storeform1");
itemstoggle("#ordertwo", "#storeform2");
itemstoggle("#orderthree", "#storeform3");
itemstoggle("#orderfour", "#storeform4");
itemstoggle("#orderfive", "#storeform5");
itemstoggle("#ordersix", "#storeform6");
itemstoggle("#orderseven", "#storeform7");
itemstogglebtn("#limap", ".storemap");
itemstogglebtn("#orderone");
itemstogglebtn("#ordertwo");
itemstogglebtn("#orderthree");
itemstogglebtn("#orderfour");
itemstogglebtn("#orderfive");
itemstogglebtn("#ordersix");
itemstogglebtn("#orderseven");
//selset


  // console.log( $("#limap").click(function (e) {
  //   $(".storemap").toggle(400);
  //   e.stopPropagation();
  // }))




// const btn = document.querySelector('input');        
// const radioButtons = document.querySelectorAll('input[type="raidio"]');
//         btn.addEventListener("click", (e) => {
//             let selectedSize;
//             for (const radioButton of radioButtons) {
//                 if (radioButton.checked==true) {
//                    radioButton.checked = false;
//                     break;
//                 }
//             }e.stopPropagation();
//           })


itemstoggle("#storeitems1", "#storeselect1");
itemstoggle("#storeitems2", "#storeselect2");
itemstoggle("#storeitems3", "#storeselect3");
itemstoggle("#storeitems4", "#storeselect4");
itemstoggle("#storeitems5", "#storeselect5");
itemstoggle("#storeitems6", "#storeselect6");
itemstoggle("#storeitems7", "#storeselect7");
itemstoggle("#storeitems8", "#storeselect8");
itemstoggle("#storeitems9", "#storeselect9");
itemstoggle("#storeitems10", "#storeselect10");
itemstoggle("#storeitems11", "#storeselect11");
itemstoggle("#storeitems12", "#storeselect12");
itemstoggle("#storeitems13", "#storeselect13");
itemstoggle("#storeitems14", "#storeselect14");
itemstoggle("#storeitems15", "#storeselect15");
itemstoggle("#storeitems16", "#storeselect16");
itemstoggle("#storeitems17", "#storeselect17");
itemstoggle("#storeitems18", "#storeselect18");
itemstoggle("#storeitems19", "#storeselect19");
itemstoggle("#storeitems20", "#storeselect20");
itemstoggle("#storeitems21", "#storeselect21");
itemstoggle("#storeitems22", "#storeselect22");
itemstoggle("#storeitems23", "#storeselect23");
itemstoggle("#storeitems24", "#storeselect24");
itemstoggle("#storeitems25", "#storeselect25");
itemstoggle("#storeitems26", "#storeselect26");
itemstoggle("#storeitems27", "#storeselect27");
itemstoggle("#storeitems28", "#storeselect28");
itemstoggle("#storeitems29", "#storeselect29");
itemstoggle("#storeitems30", "#storeselect30");
itemstoggle("#storeitems31", "#storeselect31");
itemstoggle("#storeitems32", "#storeselect32");
itemstoggle("#storeitems33", "#storeselect33");
itemstoggle("#storeitems34", "#storeselect34");
itemstoggle("#storeitems35", "#storeselect35");
itemstoggle("#storeitems36", "#storeselect36");
itemstoggle("#storeitems37", "#storeselect37");







//number

function numbercounts (x,y,z){
  $(document).ready(function () {
    $(x).on("click", function (e) {
      var prev = parseInt($(y).val());
      if (prev == 0) {
        $(y).val("0");
      } else {
        var pervVal = prev - 1;
        $(y).val(pervVal);
      }
      e.stopPropagation();
    });

    $(z).on("click", function (e) {
      var next = parseInt($(y).val());

      var nextVal = next + 1;
      $(y).val(nextVal);
      e.stopPropagation();
    });
  });
}


numbercounts("#numprev1", "#num1", "#numnext1");
numbercounts("#numprev2", "#num2", "#numnext2");
numbercounts("#numprev3", "#num3", "#numnext3");
numbercounts("#numprev4", "#num4","#numnext4");
numbercounts("#numprev5", "#num5", "#numnext5");
numbercounts("#numprev6", "#num6", "#numnext6");
numbercounts("#numprev7", "#num7", "#numnext7");
numbercounts("#numprev8", "#num8", "#numnext8");
numbercounts("#numprev9", "#num9", "#numnext9");
numbercounts("#numprev10", "#num10", "#numnext10");
numbercounts("#numprev11", "#num11", "#numnext11");
numbercounts("#numprev12", "#num12", "#numnext12");
numbercounts("#numprev13", "#num13", "#numnext13");
numbercounts("#numprev14", "#num14", "#numnext14");
numbercounts("#numprev15", "#num15", "#numnext15");
numbercounts("#numprev16", "#num16", "#numnext16");
numbercounts("#numprev17", "#num17", "#numnext17");
numbercounts("#numprev18", "#num18", "#numnext18");
numbercounts("#numprev19", "#num19", "#numnext19");
numbercounts("#numprev20", "#num20", "#numnext20");
numbercounts("#numprev21", "#num21", "#numnext21");
numbercounts("#numprev22", "#num22", "#numnext22");
numbercounts("#numprev23", "#num23", "#numnext23");
numbercounts("#numprev24", "#num24", "#numnext24");
numbercounts("#numprev25", "#num25", "#numnext25");
numbercounts("#numprev26", "#num26", "#numnext26");
numbercounts("#numprev27", "#num27", "#numnext27");
numbercounts("#numprev28", "#num28", "#numnext28");
numbercounts("#numprev29", "#num29", "#numnext29");
numbercounts("#numprev30", "#num30", "#numnext30");
numbercounts("#numprev31", "#num31", "#numnext31");
numbercounts("#numprev32", "#num32", "#numnext32");
numbercounts("#numprev33", "#num33", "#numnext33");
numbercounts("#numprev34", "#num34", "#numnext34");
numbercounts("#numprev35", "#num35", "#numnext35");
numbercounts("#numprev36", "#num36", "#numnext36");
numbercounts("#numprev37", "#num37", "#numnext37");
























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
