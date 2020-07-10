$("#fadeOut").click(function () {
  $("#item").fadeOut();
});

$("#fadein").click(function () {
  $("#item").fadeIn();
});

$("#slideUp").click(function () {
  $("#item").slideUp();
});

$("#slideDown").click(function () {
  $("#item").slideDown();
});

$("#moveright").click(function () {
  $("#item").animate(
    {
      left: 350,
    },
    1200
  );
});

$("#moveleft").click(function () {
  $("#item").animate(
    {
      left: 0,
    },
    1300
  );
});

$("#movereturn").click(function () {
  $("#item")
    .animate(
      {
        left: 300,
      },
      1300
    )
    .animate(
      {
        left: 0,
      },
      1300
    );
});

// 움직이면서 박스크기 변경하기

$("#none").click(function () {
  $("#item")
    .animate(
      {
        left: 500,
        top: 300,
      },
      1300
    )
    .animate(
      {
        left: 0,
      },
      1300
    )
    .animate(
      {
        top: -0,
        left: 500,
      },
      1300
    );
});
