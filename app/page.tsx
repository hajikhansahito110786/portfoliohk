"use client"


//import { useContext, useState } from "react";


import { useState } from "react";



//const [count,setCount]=useState(0);
//type abc{count:number,setCount:number}={count:number,setCount:number}
export default function Home() {
//const obj=useContext(CountContext)

const [inputVal,setInputVal]=useState("")
const [id,setId]=useState(0)
//<Ecartbox />
//console.log(obj)


const [todos,setTodos]=useState([
{
  task:"task1",id:1
},
{
  task:"task2",id:2
}


])
console.log("i",inputVal)
console.log("i2",id)


//const addItemold=()=>{

  //setTodos([...todos,{task:inputVal,id:id}])

//}

const addItem=()=>{
  //const obj:{task:string,id:number}| undefined = todos.find(item => item.id == id)
   const obj:any = todos.find(item => item.id == id)
  console.log("obj2here" ,obj)
  //setTodos([...todos,{task:inputVal,id:idVal}])
  //setInputVal("")
  //setIdVal(0)
  if(obj){
const newArray = todos.filter(item => item.id !== obj.id)
console.log("newArray" ,newArray)

setTodos([...newArray,{task:inputVal,id:id}])
setInputVal("")
setId(0)
console.log("newArray2" ,newArray)
return

  }
setTodos([...todos,{task:inputVal,id:id}])
  setInputVal("")
  setId(0)


}

const editItem=(id:number)=>{
//  const obj:{task:string,id:number}|undefined = todos.find(item => item.id ==id)
  const obj:any = todos.find(item => item.id ==id)
console.log("edititem1" ,id)
console.log("obj1 here " ,obj)
console.log("obj1 here " ,obj)
//
//const def_val = {task:'nill',id:0};
//const x = {task:'nill',id:0};

//const myVar: {task:string,id:number} | undefined = obj;

//if (typeof myVar === 'undefined') {
  // Handle the case where myVar is undefined
//} else {
  // myVar is guaranteed to be a string here
 // setInputVal(myVar.task)
//setId(myVar.id)
//}
setInputVal(obj.task)
setId(obj.id)

}
const delItem=(id:number)=>{
  const newArray = todos.filter(item => item.id !== id)
  console.log("newArray" ,newArray)
  
  //setTodos([...newArray,{task:inputVal,id:id}])
  setTodos([...newArray])

}

  return (

    <div>

<h1>
      Sir this is home page
        </h1>
        <br/>
        

<br/>




   
       <div className="bg-blue-500 max-auto p-5 ">
      <h1 className="text-center text-[40px] "> todo tasks  use this project free!  me: haji khan Reg:323706 /03072211611 friday mubark 7-10    </h1>
<br/>

<div className="flex justify-between gap-4 mt-5">


        <input type="text" 
        value={inputVal} onChange={(e) => setInputVal(e.target.value)} className="w-[80%] p-2 ml-3 text-lg border-b bg-red-400  text-white" placeholder="task name please"/>
        
        <input type="number" 
        value={id} onChange={(e1:any) => {setId(e1.target.value)
console.log(typeof(e1),"e1",e1)
        }
        }
        className="w-[80%] bg-blue-200  text-black" placeholder="id please"/>

        <button onClick={addItem} className="bg-green-500 w-[20%] text-white p-2 rounded-sm hover:bg-slate-30 shadow-lg">add new task button      </button>
        <br/>
      

</div>
<h1 className="text-center text-[40px] underline mt-5"> to do tasks details        </h1>  


        <div className="grid grid-cols-2 gap-5 mt-5">

          {
todos.map((item:any,i:any)=>{

  return(

<div className="shadow p-4" key={i}>
    <div className="flex justify-between ">

    
<span className="shadow rounded-full h-5 w-5 bg-blue-300 text-center my-auto  cursor-pointer">
  {i+1}
  </span>
<span onClick={()=>delItem(item.id)} className="shadow rounded-full h-5 w-5 bg-blue-300 text-center my-auto cursor-pointer ">x</span>
</div>
<div className="mt-5 text-[30px]">  {item.task} names</div>

    <div>

      <h2 onClick={()=>editItem(item.id)} className="  bg-green-300 text-center text-right cursor-pointer">id: {item.id}     Edit  </h2>

      <h2 className="text-green-600">id: {item.id}     </h2>

    </div>
    

    </div>
 
    
  )

})


          }
        
  
        </div>
</div>
</div>




   
      
    
    



  );
}
