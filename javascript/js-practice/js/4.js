// function addNums(num1, num2) {
//   return num1 + num2;
// }
// const result = addNums();
// console.log(result);

//minusNum(a,b,c) 3개의 값을 서로 뺀값을 리턴 , 호출까지
// function minusNum(a, b, c) {
//   return a - b - c;
// }
// const result = minusNum(5, 2, 1);
// console.log(result);

//return
// a = 이름, b = 나이
//return 이름은 eee 이고 나이는 eee 입니다.

// function hello(name, age) {
//   return `이름은 ${name}이고 나이는 ${age} 입니다.`;
// }
// const info = hello("nonche", 28);
// console.log(info);

//function hobby(a,b)
//return
// 취미는 a 와 b 입니다.

// function hobby(a, b) {
//   return `취미는 ${a}와 ${b}입니다.`;
// }
// const info = hobby("영화보기, 잠자기");
// console.log(info);

const animals = ["강아지", "고양이", "사자", "호랑이"];

function change(index) {
  return animals[index];
}

const animal = change(3);
console.log(animal);
