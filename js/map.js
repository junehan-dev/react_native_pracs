let fruitList = "A,B,C,A,A,C,D,A";
let cnt = 0;
const TOFIND = "A";

// Using map
fruitList.split(",").map((el) => el === TOFIND ? cnt++ : cnt+=0);
console.log(cnt);

// Using Filter
console.log(fruitList.split(",").filter((el) => el === TOFIND).length);

