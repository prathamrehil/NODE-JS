const connection=require("../db/config");

module.exports={
    getAllUsers:(res,req)=>{
        connection.query("SELECT * FROM users",(err,results)=>{
            if(err){
                res.status(500).send("Error retrieving users")
            }else{
                res.json(results);
            }
        });
    }
}