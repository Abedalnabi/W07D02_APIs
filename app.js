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

    const newObj = {todo: req.body.todo , isCompleted: req.body.isCompleted}
    todos.push(newObj)

    res.json(newObj)
})

//5
app.put("/update/todo/:name", (req,res)=>{
const newToDoObj = req.params.name
const obj = req.body.todo

todos.forEach((ele,i)=>{
    if(newToDoObj===ele.todo){
        ele.todo = obj
        res.json(ele)
    }
    res.json("Not Found")
})
})



app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});