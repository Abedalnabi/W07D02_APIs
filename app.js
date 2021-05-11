///practice
//1

const express = require("express")
const app = express()
const port = 5000

app.use(express.json())


//2
const todos = [{ todo: " wake up", isCompleted: false }, { todo: "Eat Breakfast", isCompleted: false }];

//3

app.get("/todos", (req,res)=>{
    
    res.json(todos)
})
//4

app.post("/create/todo",(req,res)=>{

    
})





app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});