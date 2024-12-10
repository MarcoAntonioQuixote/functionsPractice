

// function randomNum(min, max) {
//     return Math.floor(Math.random() * (max - min + 1) ) + min;
//   }

// let myNum = randomNum(0,100)

// console.log(myNum)

//Think of a good name
//Think of the parameters that it needs to function (write them in)
//call it (with fake parameters!)

//Actually write your function




//1. I want a function that will randomly return 📃✂️🪨

//2. A function that takes the number of days late someone is to study a langauge, and returns a message based on how long it took, 

    // 0 days: Welcome back
    // 1-2 days: We missed you
    // 3-5 days: Did you forget about me? It's getting cold.
    // 6+ days: Is it me? Do you not want this anymore? 💔

//3. Make a todo list - a function that asks folks what 4 items they want to add on their to-do list, and returns an array of those 4 items


//4. Make a function that takes KG or LBS and converts to LBS or KG - and returns that number
function convertWeight(weight,convertToKG) {
    let result;

    if (convertToKG) {
        result = weight / 2.205
    } else {
        result = weight * 2.205
    }

    return result;
}

// console.log(convertWeight(80.2,false)); //45.36


//5. A fucntion that takes a number grade and returns if that student made an A, B, C, D, or F

//6. A function that takes, whether or not someone is beautiful, intelligent, and kind, and depending on 2/3 trues, tells us whether or not we should date them (return t/f)

//7. put in a number and it returns an array of that number times itself, 3 different times 3 => [9,27,81] | 4 => [16,64,256]

//8. a function that takes in 3 foods, and converts that into a sandwhich. and a true/false if they want fries with that (bacon,lettuce,tomato,true) - enjoy your bacon, lettuce, and tomato sandwhich with fries

//9. create a function that plays the rock paper scissors game between two players, and returns who won or if it was a tie

//10. I want a function that makes a student object, pass it a name, pass it a grade, and it should return something that looks like:

/*
    {
        name: 'Any name',
        grade: ACTUAL LETTER GRADE
        passed: boolean
    }

*/