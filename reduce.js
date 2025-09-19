/**
 * To run this file in Gitpod, use the 
 * command node reduce.js in the terminal
 */

// Summing an array of numbers:
const nums = [0, 1, 2, 3, 4];
const sum = nums.reduce((acc, curr) => acc + curr, 0);
console.log(sum); // Sum: 10

const teamMembers = [
    {
      name: 'Andrew',
      profession: 'Developer',
      yrsExperience: 5
    },
    {
      name: 'Ariel',
      profession: 'Developer',
      yrsExperience: 7
    },
    {
      name: 'Michael',
      profession: 'Designer',
      yrsExperience: 1
    },
    {
      name: 'Kelly',
      profession: 'Designer',
      yrsExperience: 3
    }
  ];
  
  // Totaling a specific object property
  let totalExperience = teamMembers.reduce((acc, curr) => acc + curr.yrsExperience, 0);
  console.log(totalExperience); // Total Years Experience: 16
  
  // Grouping by a property, and totaling it too
  // { Developer: 12, Designer: 4 } <-- Desired output!
  let experienceByProfession = teamMembers.reduce((acc, curr) => {
    const key = curr.profession;
    if (!acc[key]) {
      acc[key] = curr.yrsExperience;
    } else {
      acc[key] += curr.yrsExperience;
    }
    return acc;
  }, {});
  console.log(experienceByProfession);
