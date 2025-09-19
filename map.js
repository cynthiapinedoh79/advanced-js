/**
 * To run this file in Gitpod, use the 
 * command node map.js in the terminal
 */

// Using a for loop
let nums = [1,2,3,4,5];
let results = [];
for (let num of nums) {
    results.push(num * 2);
}

console.log(results);

// Using map()
const multiplyByTwo = function(num) {
    return num * 2;
}
const mapResults = nums.map(multiplyByTwo);
console.log(mapResults);

// Simplified w/ map()
const simplified = nums.map(function(num) {
    return num * 2;
});
console.log(simplified);

// Simplfied w/ map() + arrow function
const Arrow = nums.map(num => num * 2);
console.log(Arrow);

// With objects:
const students = [
    {
      id: 1,
      name: 'Mark',
      profession: 'Developer',
      skill: 'JavaScript'
    },
    {
      id: 2,
      name: 'Ariel',
      profession: 'Developer',
      skill: 'HTML'
    },
    {
      id: 3,
      name: 'Jason',
      profession: 'Designer',
      skill: 'CSS'
    },
  ];

// Extracting specific properties as objects
const studentsWithIds = students.map(student => [student.name, student.id]);
console.log(studentsWithIds);

// Destructuring in the parameter
const newStudents = students.map(({ profession, skill, ...rest }) => rest);
console.log(newStudents);

// Adding a new property
const ages = [32, 26, 28];
const studentsWithAge = students.map((student, index) => ({
  ...student, // Copies all original properties from the student
  age: ages[index] // Adds the new age property
}));

console.log(studentsWithAge);