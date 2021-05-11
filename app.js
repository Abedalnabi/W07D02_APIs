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
})
res.json("Not Found")

})

//6

app.delete("/delete/todo/:name",(req,res)=>{

const newToDoObj = req.params.name
todos.forEach((ele,i)=>{
    if(newToDoObj===ele.todo){

        // let a= ele
        // todos.splice(i,1)
        // res.json(a)
        res.json(todos.splice(i,1))
    }
})
    res.json("Not Found")

})

//7

app.put("/complete/todo/:name",(req,res)=>{
const newToDoObj = req.params.name
    todos.forEach((ele,i)=>{
        if(newToDoObj===ele.todo){
            ele.isCompleted= true
            res.json(todos)
        }
    })
    res.json(todos)
})

//8

app.get("/completed/todos",(req,res)=>{
    arr =[]
    todos.forEach((ele,i)=>{
        if(ele.isCompleted ===true){
            arr.push(ele)
        }
    })
    if(arr.length!=0){
        res.json(arr)
    }else{
        res.json("not found")
    }
})
 ///////////////OR filter 
 /*
app.get("/completed/todos",(req,res)=>{
    let find = todos.filter((ele,i)=>{
        return ele.isCompleted ===true
    })
    if(find.length!=0){
        res.json(find)
    }else{
        res.json("not found")
    }

})
*/

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
