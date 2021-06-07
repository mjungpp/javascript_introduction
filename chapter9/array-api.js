// Q1. make a string out of an array
{
  const fruits = ["apple", "banana", "orange"];
  const result = fruits.join(", ");
  console.log(result);
  // apple,banana,orange
}

// Q2. make an array out of a string
{
  const fruits = "🍎, 🥝, 🍌, 🍒";
  const result = fruits.split(",");
  console.log(result);
  // ["🍎", " 🥝", " 🍌", " 🍒"]
}

// Q3. make this array look like this: [5, 4, 3, 2, 1]
{
  const array = [1, 2, 3, 4, 5];
  const result = array.reverse();
  console.log(array);
  // [5, 4, 3, 2, 1]
  console.log(result);
  // [5, 4, 3, 2, 1]
}

// Q4. make new array without the first two elements
{
  const array = [1, 2, 3, 4, 5];
  const result = array.slice(2, 5);
  // 2번째 인덱스부터 5번째 전 인덱스까지 잘라내서 새로운 배열을 만듦
  console.log(array);
  // [1, 2, 3, 4, 5]
  console.log(result);
  // [3, 4, 5]
}

class Student {
  constructor(name, age, enrolled, score) {
    this.name = name;
    this.age = age;
    this.enrolled = enrolled;
    this.score = score;
  }
}
const students = [
  new Student("A", 29, true, 45),
  new Student("B", 28, false, 80),
  new Student("C", 30, true, 90),
  new Student("D", 40, false, 66),
  new Student("E", 18, true, 88),
];

// Q5. find a student with the score 90
{
  const result = students.find((student) => student.score === 90);
  console.log(result);
  // Student {name: "C", age: 30, enrolled: true, score: 90}
}

// Q6. make an array of enrolled students
{
  const result = students.filter((student) => student.enrolled);
  console.log(result);
  // {name: "A", age: 29, enrolled: true, score: 45}
  // {name: "C", age: 30, enrolled: true, score: 90}
  // {name: "E", age: 18, enrolled: true, score: 88}
}

// Q7. make an array containing only the students' scores
// result should be: [45, 80, 90, 66, 88]
{
  const result = students.map((student) => student.score);
  console.log(result);
  // [45, 80, 90, 66, 88]
}

// Q8. check if there is a student with the score lower than 50
{
  // console.clear();
  const result = students.some((student) => student.score < 50);
  console.log(result); // true

  const result2 = !students.every((student) => student.score >= 50);
  console.log(result2); // true
}
console.clear();
// Q9. compute students' average score
{
  const result = students.reduce((prev, curr) => prev + curr.score, 0);
  console.log(result / students.length); // 73.8
}

// Q10. make a string containing all the scores
// result should be: '45, 80, 90, 66, 88'
{
  const result = students
    // map을 이용하면 새로운 배열이 return
    .map((student) => student.score)
    // 만약 점수가 50점 이상인 값만 출력하고 싶다면
    // .filter((score) => score >= 50)
    .join();
  console.log(result);
}

// Bonus! do Q10 sorted in ascending order
// result should be: '45, 66, 80, 88, 90'
{
  const result = students
    .map((student) => student.score)
    .sort((a, b) => a - b)
    // .sort((a, b) => b - a) : 내림차순
    .join();
  console.log(result);
  // 45,66,80,88,90
}