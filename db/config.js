const mysql = require("mysql2");
const connection = mysql.createConnection({

    host:"sql.freedb.tech",
    user:"freedb_prathamrehil1",
    password:"dG4!xQ3H2*T$!b9",
    database:"freedb_nodejsdemo1"


});
connection.connect((err)=>{
    if(err){
        console.log(err);
    } else{
        console.log("Connected to Database")
    }
});    

module.exports=connection;