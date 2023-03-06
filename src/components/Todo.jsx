import React from 'react'



const Todo=({todos , removeTodo, setSelected })=>
{

	const [isChecked,setIsChecked]=React.useState(false)

const checkSelect=()=>
{
	setSelected(todos.filter(obj=>obj.isComplite).length)

}

const isCheck=(todo)=>
{

	setIsChecked(!isChecked);
	todo.isComplite=!todo.isComplite;
}


React.useEffect(()=>{
	if(todos.length<=0) 
		setSelected(0);
checkSelect();
},[todos]);


return(
<div>
	
{
	todos.map((todo)=>{
		return(
			<label className="todo" key={todo.id}  onChange={()=>{isCheck(todo) ; checkSelect(); console.log(isChecked)}} checked={todo.isComplite} >
			<input className="check" type="checkbox"      />
			<div className={"todoName "  +(todo.isComplite && " lineThrough" )}  >{todo.text}</div>
			<button onClick={()=>removeTodo(todo)} className="deleteTodo">x</button>
			</label>
			)
	}).reverse()
}

</div>



)
}

export default Todo