const express=require('express')
const app=express();
const inquirer = require("inquirer");
const validation = require("./util/validationTime");
const phase_3=require('./util/phase3')
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
    },
  ])
  .then((answer) => {
    let Week_Day = answer.weekday
    let Day_Time = answer.time;

    if (!validation(Day_Time)) {
      throw new Error("PLease Enter Valid Time");
    }
    const Check_Shop=
    console.log(ConvertedTime);
  })
  .catch((err) => {
    console.log(err);
  });
