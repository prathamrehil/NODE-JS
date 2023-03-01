const connection = require("../db/config");

module.exports={
    getAllUsers:(req,res)=>{
        connection.query("SELECT * FROM users",(err,results)=>{
            if(err){
                console.log(err);
            }else{
                res.json(results);
            }
        });
    }
}