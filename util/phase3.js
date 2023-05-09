const data=require('../data/shopSchedule.json')
const shop_data=data['CONST SHOP_SCHEDULE']

const openCloseTime=(Week_Day,Day_Time)=>{
 
    const Find_day=shop_data.find((obj)=>obj.day == Week_Day);

    if(!Find_day){
        return " Day is not Available";
    }

    const check_Time=new Date(`01/01/2001 ${Day_Time}`)
    console.log(check_Time);
    const open_Time=new Date(`01/01/2001 ${Find_day.open}`)
    console.log(open_Time);
    const close_Time=new Date(`01/01/2001 ${Find_day.close}`)
    console.log(close_Time);

    if(check_Time<=open_Time){
        const totalmilis=open_Time.getTime()-check_Time.getTime();
        const minute=Math.floor(totalmilis/(60*1000))%60;
        const hour=Math.floor(totalmilis/(60*60*1000))%24;
        return "Shop will open after "+hour+ " hours and "+minute + " minutes 😢";

    }
    else if(check_Time>=close_Time){
        const totalmilis=check_Time.getTime()-open_Time.getTime();
        const minute=Math.floor(totalmilis/(60*1000))%60;
        const hour=Math.floor(totalmilis/(60*60*1000))%24;
        return "Shop will open af"+hour+ " hours and "+minute + " minutes 😢";
    }
    else{
        const totalmilis=close_Time.getTime()-check_Time.getTime();
        const minute=Math.floor(totalmilis/(60*1000))%60;
        const hour=Math.floor(totalmilis/(60*60*1000))%24;
        return "Shop will close after "+hour+ " hours and "+minute + " minutes 😍";
    }
}
module.exports=openCloseTime