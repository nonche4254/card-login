const fruits = [
  { name: "apple", color: "red" },
  { name: "banana", color: "yellow" },
  { name: "strawberry", color: "red" },
  { name: "blueberry", color: "blue" },
  { name: "pear", color: "brown" },
];

//forEach
// fruits.forEach(function (fruit) {
//   // console.log(fruit.name);
//   //   console.log(fruit.color);
// });

//map
// const names = fruits.map(function (fruit) {
//   return fruit.name;
// });
// console.log(names);

// const colors = fruits.map(function (color) {
//   return color.color;
// });

// console.log(colors);

// const info = fruits.map(function (fruit) {
//   return `${fruit.name}은 ${fruit.color} 색입니다`;
// });

// filter 정수 필터링
const info2 = fruits.filter(function (fruit) {
  return fruit.color === "red";
});
console.log(info2);
