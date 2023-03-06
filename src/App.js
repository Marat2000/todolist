import Todo from "./components/Todo"
import React from 'react'
import uuid from 'react-uuid';


function App() {
const [newInput,setNewInput]=React.useState("")
const [todos,setTodos]=React.useState([
{id:uuid(), text:"Add new Todo", isComplite:false} ])
const [selected,setSelected]=React.useState(0)



const onAdd=()=>
{
	
	if(newInput.length>0)
	{setTodos([...todos, {id:uuid(), text:newInput, isComplite:false}])
		setNewInput('')}
}


const removeTodo=(todo)=>
{
	setTodos(todos.filter(obj=>obj.id!== todo.id))
}




const deleteDone=()=>
{
	setTodos(todos.filter(obj=>!obj.isComplite));
}

const deleteAll=()=>
{
	setTodos([]);
	
}





return(
<div className="container">
<div className="newTodo">
	<input type='text' placeholder="Add New Todo..." value={newInput} onChange={e=>setNewInput(e.target.value)} />
	<button onClick={onAdd} >Add▼</button>
</div>
<div className="todoList">
<Todo todos={todos} setSelected={setSelected}  removeTodo={removeTodo}/>
</div>

<footer>
<div>{todos.length>0 && <button className="deleteDone" onClick={deleteDone}>Remove Checked</button>}
{` ${todos.length>0?  selected : 0 }/${todos.length}`}</div>
{todos.length>0 &&	<button  className="deleteAll" onClick={deleteAll}>× Delete All</button>}
</footer>
</div>
)}
 




export default App;
