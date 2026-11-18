//Exercise #2: At Least Five Function
const studentScoresRoom1 = [90, 40, 67, 80, 100, 15, 86, 12, 99, 67];
const studentScoresRoom2 = [78, 98, 23, 15, 40, 12, 40, 67, 80, 100];
const studentScoresRoom3 = [67, 80, 100, 15, 12, 40, 67, 80, 100, 67];


function checkGradeOver70(score) { //เตรียมฟังชั่น ไว้เช็คคะแนนนักเรียนแต่ละคนว่าเกิน 70
  return score > 70; //ถ้าแทน score ด้วย array โจทย์จะได้ เช่น 90 < 70
} //รอกลับมาเชื่อม score กับ array โจทย์

//ทดลองเรียกใช้ฟังชั่น
// console.log(checkGradeOver70(90)); //true
// console.log(checkGradeOver70(40)); //false

function atLeastFive(array, operation) { //เตรียมฟังชั่น ไว้เช็คจำนวนนัักเรียนที่มีคะแนนเกิน 70
  //array ใช้รับคะแนนนักเรียน
  //operation ใช้รับ callback ที่ใช้ตรวจคะแนนนักเรียนแต่ละคน
  let countQualified = 0; //สร้างตัวแปรใช้นับจำนวนคน
  for (let i = 0; i < array.length; i++){
    if (operation(array[i])){
      countQualified++;
    }
  }
  if (countQualified >= 5){
    return true;
  } else {
    return false;
  }
}

// Using `atLeastFive` function here
let scoreRoom1Result = atLeastFive(studentScoresRoom1,checkGradeOver70);
let scoreRoom2Result = atLeastFive(studentScoresRoom2,checkGradeOver70);
let scoreRoom3Result = atLeastFive(studentScoresRoom3,checkGradeOver70);

console.log(scoreRoom1Result); //true
console.log(scoreRoom2Result); //false
console.log(scoreRoom3Result); //false

/*
====================================

1. ใน Exercise นี้ ฟังก์ชันใดเป็น Callback Function?
-> checkGradeOver70()

2. ใน Exercise นี้ ฟังก์ชันใดเป็น Higher Order Function?
-> atLeastFive()

====================================
*/
