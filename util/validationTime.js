const validation=(time)=>{
    let regex=/^(0?[1-9]|1[0-9]):[0-5][0-9]\s([AP][M])$/
    if(regex.test(time)){
        return true;
    }
}
module.exports=validation