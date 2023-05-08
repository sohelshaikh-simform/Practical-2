const data=require('../data/shopSchedule.json')
const shop_data=data['CONST SHOP_SCHEDULE']

const openClose=(Week_Day,Day_Time)=>{
 
    const Find_day=shop_data.find((obj)=>obj.day == Week_Day);

    if(!Find_day){
        return " Day is not Available";
    }

    const check_Time=new Date(`01/01/1999 ${Day_Time}`)
    const open_Time=new Date(`01/01/1999 ${Find_day.open}`)
    const close_Time=new Date(`01/01/1999 ${Find_day.close}`)

    if(check_Time<open_Time||check_Time>close_Time){
        return "Closed"
    }
    return "Open";
}
module.exports=openClose