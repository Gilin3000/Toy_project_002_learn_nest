// alert("hi");
// console.log(5454);

// const, let, var
// true, false
// null, undefined

const dayOfWeek = ["mon", "tue", "wed", "thu", "fri", "sat"];
console.log(dayOfWeek[5]);

dayOfWeek.push("sun");
console.log(dayOfWeek);

const player = {
  name: "nico",
  points: 10,
  fat: true,
};
console.log(player.name); // console.log(player["name"]);

player.fat = false; // player 요소 변경은 가능 (const)
player.lastName = "potato"; // player에 새로운 속성 추가 가능
console.log(player);


const playerFunction = {
  sayHello: function (nameOfPerson, age) {
    console.log("Hello my name is " + nameOfPerson + " and I'm " + age);
  },
};

playerFunction.sayHello("nico", 15);


function calculateKrAge(ageOfForeigner) {
  return ageOfForeigner + 2;
}

const krAge = calculateKrAge(15);
console.log(krAge);

const age = parseInt("15");
console.log(isNaN(age));  // age가 숫자인지 아닌지 확인

if (isNan(age) || age < 0) {
  console.log("Please write a number");
} else if (age < 18) {
  console.log("You are too young");
} else if (age >= 18 && age <= 50) {
  console.log("You can drink");
} else if (age > 50 && age <= 80) {
  console.log("You should exercise");
} else if (age === 100) {
  console.log("wow you are wise");
}

