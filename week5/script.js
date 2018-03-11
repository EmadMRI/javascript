let numbers = [1, 2, 3, 4];
let newNumbers = [];

newNumbers.push(numbers.filter(number => number % 2 !== 0).map(number => number * 2));
 
console.log("The doubled numbers are", newNumbers);  


let monday = [
    {
        name     : 'Write a summary HTML/CSS',
        duration : 180
    },
    {
        name     : 'Some web development',
        duration : 120
    },
    {
        name     : 'Fix homework for class10',
        duration : 20
    },
    {
        name     : 'Talk to a lot of people',
        duration : 200
    }
];

let tuesday = [
    {
        name     : 'Keep writing summary',
        duration : 240
    },
    {
        name     : 'Some more web development',
        duration : 180
    },
    {
        name     : 'Staring out the window',
        duration  : 10
    },
    {
        name     : 'Talk to a lot of people',
        duration : 200
    },
    {
        name     : 'Look at application assignments new students',
        duration : 40
    }
];

// Collect two days' worth of tasks.

let tasksForTowDays = [monday, tuesday];

console.log(tasksForTowDays);

let tasks = monday.concat(tuesday);