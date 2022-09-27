var date= new Date()
var hour = date.getHours()
var day = date.getDay()

const workingHours =(req,res,next)=>{
 if(hour>9 && hour<17 && day>0 && day<6){
    next()
 }else{
    res.send("This is not working Hours")
 }
}

module.exports = workingHours