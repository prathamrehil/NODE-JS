
/*
async function getResponse(){
    let addr = "https://jsonplaceholder.typicode.com/todos/1";
    const response = await fetch(addr);
    const data = await response.json();
    console.log(data);
}
getResponse();
*/
/*
const displayDelay = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("Met at 6.30");
        },1000);
});
displayDelay.then((v) =>{
    console.log("SUCCESS: ",v);
}).catch((e) => {    console.log("ERROR: ",e);
});
*/
/*
async function getResponse(){
    let addr = "https://jsonplaceholder.typicode.com/todos/1";
    try{
    const response = await fetch(addr);
    const data = await response.json();
    console.log(data);
    }
    catch(e){
        console.log(e);
    }
    
    
    
}
getResponse();
*/
// put patch get post

const express = require("express");
const app = express();
const userRoutes=require("./routes/user.routes");
app.use(express.json());
const port = 3001;




app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
/*app.post('/', (req, res) => {
    let a=parseInt(req.query.a);
    let b=parseInt(req.query.b);
    let name=req.query.name;
    let c=a+b;

    let op=req.body.op;
    switch(op){
        case '+':
            c=a+b;
            break;
        case '-':
            c=a-b;
            break;
        case '*':
            c=a*b;
            break;
        case '/':
            c=a/b;
            break;
    
    res.send({result: c,user:name});
  });
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
}); */