// const person = {
//   name: "nonche",
//   age: 20,
//   isCool: false,
// };

// console.log(person);

const school = {
  name: "IT school",
  age: 40,
  classes: ["frontend", "java", "ai"],
  address: {
    city: "대구",
    nation: "한국",
    area: "동구",
  },
};

//이 학교의 수업들 중에 1번 인덱스를 console.log에 나타나게
// console.log(school.classes[1]);
// 이 학교가 위치해 있는 동네 출력
// console.log(school.address.area);

const info = `이학교의 이름은 ${school.name}이고,
  ${school.address.area}에 있는 ${school.age}년된 학교 입니다. 그리고 저는 ${school.classes[1]}수업을 듣고 있습니다.`;

contst;
console.log(info);
