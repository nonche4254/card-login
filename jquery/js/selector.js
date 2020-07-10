// $("#heading2").hide(); // h1 없애기
// $("#heading1").hide();

// $("h2").hide(); // h2 둘다 없애기

// $("p").css("border", "1px solid red"); //css 하드코딩 방법

// 2가지 속성 추가
// $("p").css({
//   color: "blue",
//   border: "1px solid red",
//   background: "#333",
//   marginLeft: "200px",
// });

$("#list li:first").css("color", "red");
$("#list li:last").css("color", "blue");
// $("#list li:even").css("background", "gray");
// $("#list li:odd").css("background", "darkgray");
$("#list li:nth-child(2n)").css("background", "red");

$(":button").hide();

// text 보더를 빨간색
$(":text").css("border", "1px", "red");
