const express=require('express')
const app=express();
const inquirer = require("inquirer");
const validation = require("./util/validationTime");
const phase_1 = require("./util/phase1");
inquirer
  .prompt([
    {
      type: "list",
      name: "weekday",
      message: "Choose Day you want to Search :",
      choices:['Mon','Tue','Wed',"Thu","Fri","Sat"]
    },
    {
      type: "input",
      name: "time",
      message: "Enter time (HH:MM AM/PM): ",
    }
  ])
  .then((answer) => {
    let Week_Day = answer.weekday
    let Day_Time = answer.time;
    console.log(Week_Day,Day_Time);
    
    // validate user enter Time.
    if (!validation(Day_Time)) {
      throw new Error("PLease Enter Valid Time");
    }

    // If Time is valid call phase_1 fucntion.
    const Check_Shop=phase_1(Week_Day,Day_Time)
    console.log(Check_Shop);
  })
  .catch((err) => {
    console.log(err);
  });
