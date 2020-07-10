// $("#button").click(function () {
//   //heading tag를 안보이게 처리
//   $("h2").hide();
// });

// $("#button").mouseover(function () {
//   // heading tag색깔을 빨간색으로
//   $("h2").css("color", "red");
// });

// $("#button").click(function () {
//   $("h2").toggle();
// });

// $("#button").dblclick(function () {
//   $("p").fadeOut();
// });

// $("#button")
//   .mouseover(function () {
//     $("h1").text("아무말대잔치");
//   })
//   .mouseleave(function () {
//     $("h1").text("jquery");
//   });

// $("#button").hover(function () {
//   $("h1").toggle();
// });

// 버튼에 마우스를 올리면 h2태그의
// 텍스트가 빨간색으로 변함
// 글자내용을 한글 -> heading1로 변경
// 마우스가 떠나면(leave)다시 원래대로

// $("#button")
//   .mouseover(function () {
//     $("h2").css("color", "red");
//     $("#heading1").text("아무말대잔치");
//   })
//   .mouseleave(function () {
//     $("#heading1").text("heading1");
//     $("h2").css("color", "black");
//   });

$(document).mousemove(function (event) {
  //   console.log(event);
  //중간으로 바꾸기
  let bg = "red";
  if (event.clientY < 200) {
    bg = "blue";
  } else if (event.clientY < 600) {
    bg = "purple";
  }
  $("#dot").css({
    top: event.clientY - 50,
    left: event.clientX - 50,
    background: bg,
  });
});

// 글자 클릭시 li 색상 변경할때
// $("li").click(function () {
//   $(this).css("color", "purple");
// });

// 글자 클릭한거만 색상 변경하고 싶을때
// $("li").click(function () {
//   $("li").removeClass("active");
//   $(this).addClass("active");
// });

// 버튼2 클릭시 글씨 사라짐
// $("#button2").click(function () {
//   $("li:last").remove();
// });

// 버튼 클릭시 list item 추가
// $("#button").click(function () {
//   const text = $("h1").text();
//   alert(text);
//   const last = $("li:last").index();
//   console.log(last);
//   $("#list").append(`<li>list item${last + 2}</li>`);
// });

// 버튼 클릭시 원 안에 텍스트 집어넣기
// 정답
$("#button").click(function () {
  const text = $("h1").text();
  $("#dot").text(text);
  $("li").text(text);
});
