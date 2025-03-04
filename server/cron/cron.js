import cron from "cron";
import https from "https";

const URL="https://imary.onrender.com"
const job = new cron.CronJob("*/14 * * * *",function(){
    https.get(URL,(res)=>{
        if(res.statusCode==200){
            console.log("Get data success")
        }
        else{
            console.log("Get data fail")
        }
    }).on("error",(err)=>{
        console.log("Error: "+err.message)
    })
})

export default job
