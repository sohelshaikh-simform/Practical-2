const data = require("../data/shopSchedule.json");
const shop_data = data["CONST SHOP_SCHEDULE"];

const openCloseTime = (Week_Day, Day_Time) => {
  const Find_day = shop_data.find((obj) => obj.day == Week_Day);

  const check_Time = new Date(`01/01/2001 ${Day_Time}`);

  const calculation=(a,b)=>{
    const totalmilis =  a.getTime()- b.getTime();
    const minute = Math.floor(totalmilis / (60 * 1000)) % 60;
    const hour = Math.floor(totalmilis / (60 * 60 * 1000));
    return [minute, hour]
  }
// If Day is not Available
  if (!Find_day) {
    const next_open=next_day(Week_Day)
    const [minute,hour]=calculation(next_open,check_Time)
    let days = parseInt(hour / 24);
    let remaining_hours = hour - days * 24;
    return (`Shop will open after${ days==0? "":" "+days}${days==1?" day ":""}${remaining_hours} hour and ${minute} minutes 😢`);
  }

  const open_Time = new Date(`01/01/2001 ${Find_day.open}`);
  const close_Time = new Date(`01/01/2001 ${Find_day.close}`);

//  If Check Time is Earliar
  if (check_Time <= open_Time) {
    const [minute,hour]=calculation(open_Time,check_Time)
    return ("Shop will open after " + hour + " hours and " + minute + " minutes 😢");
  } 
//  If Shop is Close on Check Time
  else if (check_Time >= close_Time) {
    const next_open=next_day(Week_Day)
    const [minute,hour]=calculation(next_open,check_Time)
    let days = parseInt(hour / 24);
    let remaining_hours = hour - days * 24;
    return (`Shop will open after${ days==0? "":" "+days}${days==1|days==2?" day ":" "}${remaining_hours} hour and ${minute} minutes 😢`);
  } 

//  If Shop is Open
  else {
    const [minute,hour]=calculation(close_Time,check_Time)
    return ("Shop will close after " + hour + " hours and " + minute + " minutes 😍");
  }
};

let week_days = ["Mon","Tue","Wed","Thu","Fri","Sat","Sun",];
const next_day = (inday) => {
    let index=week_days.findIndex((day)=>day===inday)
    console.log(index);
    let i;
    let status;

    for(i=1;i<8;i++){
        status=shop_data.find((obj)=>{
          console.log(obj.day,week_days[(index+i)%7],index,i);
          return obj.day===(week_days[(index+i)%7])
        })
        console.log("===========");
        if(status){
            break;
        }
    }
    const next_date=new Date(`${"01" +"/"+ (1+i)+"/"+"2001"} ${status.open}`)
    console.log(next_date);
    return next_date
};

module.exports = openCloseTime;
